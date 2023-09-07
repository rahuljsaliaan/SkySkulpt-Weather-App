import { useWeather } from "../contexts/WeatherContext";
import Spinner from "./Spinner";

function CurrentWeather() {
  const { isLoading, weatherData } = useWeather();

  if (isLoading) return <Spinner />;

  if (weatherData) {
    console.log(weatherData);
    return <div className="bg-red-500 h-100 w-100">hello</div>;
  }
}

export default CurrentWeather;
