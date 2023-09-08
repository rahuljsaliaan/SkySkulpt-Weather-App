import { useWeather } from "../contexts/WeatherContext";
import SelectedWeatherChart from "./SelectedWeatherChart";
import SelectedWeatherCard from "./SelectedWeatherCard";

function SelectedWeather() {
  const { weatherData } = useWeather();
  if (weatherData) {
    return (
      <div className="flex gap-5">
        <SelectedWeatherCard />
        <SelectedWeatherChart />
      </div>
    );
  }
}

export default SelectedWeather;
