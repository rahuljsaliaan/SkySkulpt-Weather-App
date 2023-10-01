import { getWeatherIcon } from "../helpers/getWeatherIcon";

// eslint-disable-next-line react/prop-types
function WeatherCard({ date, min, max, code, onSelectWeather, isSelected }) {
  return (
    <button
      onClick={onSelectWeather}
      className={`rounded-lg bg-gradient-to-br from-cyan-400/40 to-blue-500/40 px-6 py-3 text-lg text-white shadow-xl backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl
      ${isSelected && "scale-105 bg-cyan-400 shadow-2xl"}

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
