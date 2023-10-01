import { useWeather } from "../contexts/WeatherContext";
import SelectedWeatherChart from "./SelectedWeatherChart";
import SelectedWeatherCard from "./SelectedWeatherCard";

function SelectedWeather() {
  const { weatherData } = useWeather();

  if (weatherData) {
    return (
      <section className="grid grid-cols-1 gap-5 sm:px-[6em] lg:grid-cols-[1fr,2fr]">
        <SelectedWeatherCard />
        <SelectedWeatherChart />
      </section>
    );
  }
}

export default SelectedWeather;
