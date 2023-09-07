import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  return <WeatherContext.Provider value="">{children}</WeatherContext.Provider>;
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
