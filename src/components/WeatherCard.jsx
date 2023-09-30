import { getWeatherIcon } from "../helpers/getWeatherIcon";

// eslint-disable-next-line react/prop-types
function WeatherCard({ date, min, max, code, onSelectWeather, isSelected }) {
  return (
    <button
      onClick={onSelectWeather}
      className={`bg-gradient-to-b from-teal-700/70 to-blue-800/70 backdrop-blur-sm text-lg text-white rounded-lg shadow-xl py-3 px-6 transition-all hover:scale-105 hover:bg-cyan-400 animate-fade-in
      ${isSelected && "scale-105 outline-ring-shadow bg-cyan-400"}
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
