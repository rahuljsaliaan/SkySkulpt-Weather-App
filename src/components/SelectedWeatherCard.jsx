import { useWeather } from "../contexts/WeatherContext";
import { getWeatherIcon } from "../helpers/getWeatherIcon";
import { formatDate } from "../utils/Formatters/formatDate";
import { formatDay } from "../utils/Formatters/formatDay";

function SelectedWeatherCard() {
  const { selectedWeather } = useWeather();

  if (selectedWeather) {
    return (
      <div className="bg-gradient-to-b from-teal-700/70 to-blue-800/70 backdrop-blur-sm rounded-lg shadow-xl px-6 py-4 flex flex-col justify-evenly animate-fade-in">
        <h3 className="text-white text-2xl text-center">
          Weather as of
          <div className="text-cyan-300">
            <strong>{formatDay(selectedWeather.date)}</strong>&nbsp;
            <em>{formatDate(selectedWeather.date)}</em>
          </div>
        </h3>

        <div className="flex items-center gap-5 text-white ">
          <span className="">
            {getWeatherIcon(selectedWeather.avgWeathercode, 100)}
          </span>
          <span className="sm:text-8xl text-6xl">
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

export default SelectedWeatherCard;
