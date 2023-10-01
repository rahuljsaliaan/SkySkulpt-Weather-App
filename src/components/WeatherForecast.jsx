import { useWeather } from "../contexts/WeatherContext";
import { formatDay } from "../utils/Formatters/formatDay";
import WeatherCard from "./WeatherCard";

function WeatherForecast() {
  const { weatherData, selectedWeather, handleOnSelectWeather } = useWeather();

  if (weatherData && selectedWeather) {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = weatherData.daily;

    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5">
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
