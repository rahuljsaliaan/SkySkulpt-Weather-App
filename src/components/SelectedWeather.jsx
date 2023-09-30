import { useWeather } from "../contexts/WeatherContext";
import SelectedWeatherChart from "./SelectedWeatherChart";
import SelectedWeatherCard from "./SelectedWeatherCard";

function SelectedWeather() {
  const { weatherData } = useWeather();

  if (weatherData) {
    return (
      <section className="flex flex-col item-center md:items-stretch lg:flex-row gap-5 sm:px-[6em]">
        <SelectedWeatherCard />
        <SelectedWeatherChart />
      </section>
    );
  }
}

export default SelectedWeather;
