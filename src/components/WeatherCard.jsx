import { getWeatherIcon } from "../helpers/getWeatherIcon";

// eslint-disable-next-line react/prop-types
function WeatherCard({ date, min, max, code }) {
  return (
    <div className="bg-black/10 text-white rounded-lg shadow-lg py-3 px-6">
      <div className="">{getWeatherIcon(code)}</div>
      <p>{date}</p>
      <p>
        {min}&deg; &mdash; <strong>{max}</strong>
        &deg;
      </p>
    </div>
  );
}

export default WeatherCard;
