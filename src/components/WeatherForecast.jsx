import { useWeather } from "../contexts/WeatherContext";
import { formatDay } from "../utils/formatters/formatDay";
import WeatherCard from "./WeatherCard";
import Spinner from "./Spinner";

function WeatherForecast() {
  const { isLoading, weatherData, selectedWeather, handleOnSelectWeather } =
    useWeather();

  if (isLoading) return <Spinner />;

  if (weatherData && selectedWeather) {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = weatherData.daily;

    return (
      <div className="flex justify-evenly">
        {dates?.map((date, i) => (
          <WeatherCard
            key={date}
            date={formatDay(date)}
            min={Math.floor(min.at(i))}
            max={Math.ceil(max.at(i))}
            code={codes.at(i)}
            onSelectWeather={() => handleOnSelectWeather(date)}
            isSelected={date === selectedWeather.date}
          />
        ))}
      </div>
    );
  }
}

export default WeatherForecast;
