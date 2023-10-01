import logo from "../assets/skyskulpt-logo.png";
import { useWeather } from "../contexts/WeatherContext";

function Logo() {
  const { fetchWeatherClientLocation } = useWeather();

  return (
    <button
      onClick={fetchWeatherClientLocation}
      className="flex items-center justify-center gap-3 rounded-full bg-black/50 p-2 shadow-xl hover:bg-black/30 md:absolute md:left-4 md:px-4"
    >
      <img className="w-10" alt="logo" src={logo} />
      <h1 className="hidden text-2xl font-bold text-white md:block">
        SkySkulpt
      </h1>
    </button>
  );
}

export default Logo;
