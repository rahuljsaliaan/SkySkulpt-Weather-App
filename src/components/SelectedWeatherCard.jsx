import { useWeather } from "../contexts/WeatherContext";
import { getWeatherIcon } from "../helpers/getWeatherIcon";
import { formatDate } from "../utils/Formatters/formatDate";
import { formatDay } from "../utils/Formatters/formatDay";

function SelectedWeatherCard() {
  const { selectedWeather } = useWeather();

  if (selectedWeather) {
    return (
      <div className="flex max-w-full flex-col justify-evenly rounded-lg bg-gradient-to-br from-cyan-400/40 to-blue-500/40 px-6 py-4 shadow-xl backdrop-blur-sm">
        <h3 className="text-center text-xl text-white lg:text-2xl">
          Weather as of
          <div className="text-cyan-300">
            <strong>{formatDay(selectedWeather.date)}</strong>&nbsp;
            <em>{formatDate(selectedWeather.date)}</em>
          </div>
        </h3>

        <div className="flex items-center justify-center gap-5 text-white ">
          <span className="">
            {getWeatherIcon(selectedWeather.avgWeathercode, 100)}
          </span>
          <span className="text-6xl lg:text-8xl">
            {selectedWeather.avgTemperature}
            {selectedWeather.hourlyUnits.temperatureUnit}
          </span>
        </div>

        <div className="flex justify-evenly gap-5 text-white">
          <span className="flex flex-col text-center">
            <h4 className="text-center text-lg text-white lg:text-xl">
              💧Humidity
            </h4>
            <p>
              {selectedWeather.avgHumidity}&nbsp;
              {selectedWeather.hourlyUnits.humidityUnit}
            </p>
          </span>
          <span className="flex flex-col text-center">
            <h4 className="text-center text-lg text-white lg:text-xl">
              ⬆ Pressure
            </h4>
            <p>
              {selectedWeather.avgPressure}&nbsp;
              {selectedWeather.hourlyUnits.pressureUnit}
            </p>
          </span>
          <span className="flex flex-col text-center">
            <h4 className="text-center text-lg text-white lg:text-xl">
              💨 Wind
            </h4>
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
