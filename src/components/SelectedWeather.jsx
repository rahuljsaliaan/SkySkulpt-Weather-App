import { useWeather } from "../contexts/WeatherContext";
import SelectedWeatherChart from "./SelectedWeatherChart";
import SelectedWeatherCard from "./SelectedWeatherCard";

function SelectedWeather() {
  const { weatherData } = useWeather();

  if (weatherData) {
    return (
      <section className="flex flex-col items-center sm:flex-row sm:items-stretch gap-6 sm:px-[6em]">
        <SelectedWeatherCard />
        <SelectedWeatherChart />
      </section>
    );
  }
}

export default SelectedWeather;
