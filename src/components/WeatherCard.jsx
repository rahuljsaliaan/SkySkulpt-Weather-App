import { getWeatherIcon } from "../helpers/getWeatherIcon";

// eslint-disable-next-line react/prop-types
function WeatherCard({ date, min, max, code, onSelectWeather, isSelected }) {
  return (
    <button
      onClick={onSelectWeather}
      className={`bg-black/10 text-white rounded-lg shadow-lg py-3 px-6 hover:scale-105 hover:shadow-2xl transition-all
      ${isSelected && "scale-105 shadow-2xl bg-cyan-500"}
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
