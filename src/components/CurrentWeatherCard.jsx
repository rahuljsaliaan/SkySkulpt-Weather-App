import { useWeather } from "../contexts/WeatherContext";
import { getWeatherIcon } from "../helpers/getWeatherIcon";
import Spinner from "./Spinner";

function CurrentWeatherCard() {
  const { isLoading, weatherData } = useWeather();

  if (isLoading) return <Spinner />;

  if (weatherData) {
    return (
      <div>
        <h3>Current Weather</h3>
        <span>{getWeatherIcon()} </span>
        <div className="flex gap-2"></div>
      </div>
    );
  }
}

export default CurrentWeatherCard;
