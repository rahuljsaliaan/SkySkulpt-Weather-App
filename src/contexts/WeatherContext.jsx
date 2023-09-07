import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "0be9ed45b9adbda14096d32227e62788";
const DEFAULT_LOCATION = { lat: 28.6139, lon: 77.209 };
const WeatherContext = createContext();
const initialState = {
  isLoading: false,
  weatherData: [],
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
  const [{ isLoading, weatherData, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherPosition(lat, lon) {
    try {
      const response = await fetch(
        `${BASE_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("Couldn't fetch weather data...!");

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function fetchWeatherQuery(cityName) {
    try {
      dispatch({ type: "loading" });

      const response = await fetch(
        `${BASE_URL}weather?q=${cityName}&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("City not found...!");

      let data = await response.json();
      const { lat, lon } = data.coord;

      data = await fetchWeatherPosition(lat, lon);

      dispatch({ type: "weather/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  useEffect(function () {
    (async function () {
      try {
        const { lat, lon } = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (pos) =>
              resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
            (error) => reject(error)
          );
        });

        const data = await fetchWeatherPosition(lat, lon);

        dispatch({ type: "weather/loaded", payload: data });
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
      value={{ isLoading, error, weatherData, fetchWeatherQuery }}
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
