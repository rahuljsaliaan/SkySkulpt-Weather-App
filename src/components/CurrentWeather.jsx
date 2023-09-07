import { useWeather } from "../contexts/WeatherContext";
import CurrentWeatherChart from "./CurrentWeatherChart";
import CurrentWeatherCard from "./CurrentWeatherCard";
import Spinner from "./Spinner";

function CurrentWeather() {
  const { isLoading, weatherData } = useWeather();

  if (isLoading) return <Spinner />;

  if (weatherData) {
    console.log(weatherData);
    return (
      <div className="flex gap-5">
        <CurrentWeatherCard />
        <CurrentWeatherChart />
      </div>
    );
  }
}

export default CurrentWeather;
