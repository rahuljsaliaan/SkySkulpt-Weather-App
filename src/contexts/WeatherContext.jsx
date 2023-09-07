import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const BASE_URL = "https://api.open-meteo.com/v1/";
const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/";
const DEFAULT_LOCATION = { lat: 28.6139, lon: 77.209 };
const WeatherContext = createContext();
const initialState = {
  isLoading: false,
  weatherData: null,
  currentWeather: null,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "weather/loaded":
      return { ...state, weatherData: action.payload, isLoading: false };

    case "error":
      return { ...state, error: action.payload };

    default:
      throw new Error("Invalid action type...!");
  }
}

function WeatherProvider({ children }) {
  const [{ isLoading, weatherData, currentWeather, error }, dispatch] =
    useReducer(reducer, initialState);

  async function fetchWeatherPosition(lat, lon) {
    try {
      const response = await fetch(
        `${BASE_URL}forecast?latitude=${lat}&longitude=${lon}&timezone=auto&daily=weathercode,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relativehumidity_2m,weathercode`
      );

      if (!response.ok) throw new Error("Couldn't fetch weather data...!");

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function fetchWeatherQuery(location) {
    try {
      dispatch({ type: "loading" });

      const geoRes = await fetch(`${GEOCODING_URL}search?name=${location}`);

      const geoData = await geoRes.json();

      if (!geoData.results) throw new Error("Location not found");

      const {
        latitude: lat,
        longitude: lon,
        // timezone,
        // name,
        // country_code,
      } = geoData.results.at(0);
      // setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

      const weatherData = await fetchWeatherPosition(lat, lon);

      dispatch({ type: "weather/loaded", payload: weatherData });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  useEffect(function () {
    (async function () {
      try {
        dispatch({ type: "loading" });

        const { lat, lon } = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (pos) =>
              resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
            (error) => reject(error)
          );
        });

        const weatherData = await fetchWeatherPosition(lat, lon);

        dispatch({ type: "weather/loaded", payload: weatherData });
      } catch (error) {
        dispatch({ type: "error", payload: error.message });

        try {
          const data = await fetchWeatherPosition(
            DEFAULT_LOCATION.lat,
            DEFAULT_LOCATION.lon
          );

          dispatch({ type: "weather/loaded", payload: data });
        } catch (error) {
          dispatch({ type: "error", payload: error.message });
        }
      }
    })();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        error,
        weatherData,
        currentWeather,
        fetchWeatherQuery,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

WeatherProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useWeather() {
  const context = useContext(WeatherContext);
  if (context === "undefined")
    throw new Error("Weather context was used outside the Weather Provider");

  return context;
}

export { WeatherProvider, useWeather };
