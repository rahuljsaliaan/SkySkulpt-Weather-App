import { useWeather } from "../contexts/WeatherContext";
import { getWeatherIcon } from "../helpers/getWeatherIcon";
import { formatDate } from "../utils/formatters/formatDate";
import { formatDay } from "../utils/formatters/formatDay";
import Spinner from "./Spinner";

function CurrentWeatherCard() {
  const { isLoading, selectedWeather } = useWeather();

  if (isLoading) return <Spinner />;

  if (selectedWeather) {
    return (
      <div className="bg-black/10 shadow-xl px-6 py-4 flex flex-col gap-5">
        <h3 className="text-white text-2xl text-center">
          Weather as of
          <div className="text-cyan-300">
            <strong>{formatDay(selectedWeather.date)}</strong>&nbsp;
            <em>{formatDate(selectedWeather.date)}</em>
          </div>
        </h3>
        <div className="text-white flex gap-5">
          <span className="">
            {getWeatherIcon(selectedWeather.avgWeathercode, 100)}
          </span>
          <span className="text-8xl">
            {selectedWeather.avgTemperature}
            {selectedWeather.hourlyUnits.temperatureUnit}
          </span>
        </div>
        <div className="flex gap-5 justify-evenly text-white">
          <span className="flex flex-col text-center">
            <h4 className="text-xl">💧Humidity</h4>
            <p>
              {selectedWeather.avgHumidity}&nbsp;
              {selectedWeather.hourlyUnits.humidityUnit}
            </p>
          </span>
          <span className="flex flex-col text-center">
            <h4 className="text-xl">⬆ Pressure</h4>
            <p>
              {selectedWeather.avgPressure}&nbsp;
              {selectedWeather.hourlyUnits.pressureUnit}
            </p>
          </span>
          <span className="flex flex-col text-center">
            <h4 className="text-xl">💨 Wind</h4>
            <p>
              {selectedWeather.avgWindSpeed}&nbsp;
              {selectedWeather.hourlyUnits.windSpeedUnit}
            </p>
          </span>
        </div>
      </div>
    );
  }
}

export default CurrentWeatherCard;
