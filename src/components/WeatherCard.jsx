import { getWeatherIcon } from "../helpers/getWeatherIcon";

// eslint-disable-next-line react/prop-types
function WeatherCard({ date, min, max, code, onSelectWeather, isSelected }) {
  return (
    <button
      onClick={onSelectWeather}
      className={`bg-gradient-to-b from-cyan-700 to-blue-800 backdrop-blur-md text-lg text-white rounded-lg shadow-xl py-3 px-6 transition-all hover:scale-105 hover:shadow-2xl animate-fade-in
      ${
        isSelected &&
        "scale-105 shadow-2xl bg-gradient-to-b from-cyan-400 to-blue-500 backdrop-blur-md ring-[3px] ring-cyan-400"
      }

      `}
    >
      <div className="py-2">{getWeatherIcon(code)}</div>
      <p>{date}</p>
      <p>
        {min}&deg; &mdash; <strong>{max}</strong>
        &deg;
      </p>
    </button>
  );
}

export default WeatherCard;
