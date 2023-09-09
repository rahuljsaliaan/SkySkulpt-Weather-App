import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { formatTimestampToAMPM } from "../utils/Formatters/formatTimestampToAMPM";
import { BASE_URL, DEFAULT_LOCATION, CURRENT_DATE } from "../config/config";
import PropTypes from "prop-types";
import reverseGeoCode from "../utils/Transformers/reverseGeoCode";
import geoCode from "../utils/Transformers/geoCode";

const WeatherContext = createContext();
const initialState = {
  initialLoading: false,
  isLoading: false,
  weatherData: null,
  selectedWeather: null,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "initialLoading":
      return { ...state, initialLoading: true };

    case "loading":
      return { ...state, isLoading: true, error: "" };

    case "weather/loaded":
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
        initialLoading: false,
        error: "",
      };

    case "weather/selected":
      return {
        ...state,
        selectedWeather: action.payload,
        isLoading: false,
        initialLoading: false,
        error: "",
      };

    case "error":
      return { ...state, error: action.payload, isLoading: false };

    default:
      throw new Error("Invalid action type...!");
  }
}

function WeatherProvider({ children }) {
  const [
    { initialLoading, isLoading, weatherData, selectedWeather, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  async function fetchWeatherPosition(lat, lon) {
    try {
      const response = await fetch(
        `${BASE_URL}forecast?latitude=${lat}&longitude=${lon}&timezone=auto&daily=weathercode,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,pressure_msl,weathercode`
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

      if (location.length < 2)
        throw new Error("Please Type at least 2 characters");

      const { city, state, country, lat, lng } = await geoCode(location);

      const weatherData = await fetchWeatherPosition(lat, lng);

      dispatch({
        type: "weather/loaded",
        payload: {
          ...weatherData,
          location: `${(city && city + ",") || ""} ${
            (state && state + ",") || ""
          } ${country || ""}`,
        },
      });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  const fetchWeatherClientLocation = useCallback(async function () {
    try {
      dispatch({ type: "initialLoading" });

      const { lat, lon } = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (pos) =>
            resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
          (error) => reject(error)
        );
      });

      const weatherData = await fetchWeatherPosition(lat, lon);

      const { city, state, country } = await reverseGeoCode(lat, lon);

      dispatch({
        type: "weather/loaded",
        payload: {
          ...weatherData,
          location: `${(city && city + ",") || ""} ${
            (state && state + ",") || ""
          } ${country || ""}`,
        },
      });
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
  }, []);

  useEffect(
    function () {
      fetchWeatherClientLocation();
    },
    [fetchWeatherClientLocation]
  );

  const handleOnSelectWeather = useCallback(
    function (date = CURRENT_DATE) {
      dispatch({ type: "loading" });

      const {
        hourly,
        daily,
        hourly_units: {
          temperature_2m: temperatureUnit,
          relativehumidity_2m: humidityUnit,
          pressure_msl: pressureUnit,
          windspeed_10m: windSpeedUnit,
        },
      } = weatherData;
      const {
        temperature_2m: temperatureData,
        relativehumidity_2m: humidity,
        time,
        weathercode,
        pressure_msl,
        windspeed_10m,
      } = hourly;

      const selectedTHT = time
        .map((timestamp, i) => {
          if (timestamp.startsWith(date)) {
            return {
              time: formatTimestampToAMPM(timestamp),
              temperature: temperatureData[i],
              humidity: humidity[i],
              weathercode: weathercode[i],
              pressure: pressure_msl[i],
              windSpeed: windspeed_10m[i],
            };
          }
          // Return null or undefined for elements that don't match the condition
          return null;
        })
        .filter((item) => item !== null);

      const mapWeatherData = (arr, data) => arr.map((item) => item[data]);

      const avg = (arr) =>
        Math.ceil(arr.reduce((acc, item) => acc + item, 0) / arr.length);

      const selectedWeatherData = {
        date,
        hourlyUnits: {
          temperatureUnit,
          humidityUnit,
          pressureUnit,
          windSpeedUnit,
        },
        time: mapWeatherData(selectedTHT, "time"),
        temperature: mapWeatherData(selectedTHT, "temperature"),
        avgTemperature: avg(mapWeatherData(selectedTHT, "temperature")),
        humidity: mapWeatherData(selectedTHT, "humidity"),
        avgHumidity: avg(mapWeatherData(selectedTHT, "humidity")),
        pressure: mapWeatherData(selectedTHT, "pressure"),
        avgPressure: avg(mapWeatherData(selectedTHT, "pressure")),
        windSpeed: mapWeatherData(selectedTHT, "windSpeed"),
        avgWindSpeed: avg(mapWeatherData(selectedTHT, "windSpeed")),
        weathercode: mapWeatherData(selectedTHT, "weathercode"),
        avgWeathercode: daily.weathercode.at(
          daily.time.findIndex((dateItem) => dateItem === date)
        ),
      };

      dispatch({ type: "weather/selected", payload: selectedWeatherData });
    },
    [weatherData]
  );

  useEffect(
    function () {
      if (!weatherData) return;

      handleOnSelectWeather();
    },
    [weatherData, handleOnSelectWeather]
  );

  return (
    <WeatherContext.Provider
      value={{
        initialLoading,
        isLoading,
        error,
        weatherData,
        selectedWeather,
        handleOnSelectWeather,
        fetchWeatherClientLocation,
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

// eslint-disable-next-line react-refresh/only-export-components
export { WeatherProvider, useWeather };
