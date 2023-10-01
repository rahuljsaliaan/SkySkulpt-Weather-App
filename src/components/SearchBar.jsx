import { useState } from "react";
import { useWeather } from "../contexts/WeatherContext";
import Spinner from "./Spinner";

function SearchBar() {
  const { fetchWeatherQuery, isLoading } = useWeather();
  const [cityName, setCityName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    fetchWeatherQuery(cityName);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3"
    >
      <input
        className="w-full rounded-lg border-4 border-blue-500 px-4 py-2 text-lg outline-none focus:border-blue-400 sm:max-w-[400px] sm:text-xl"
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Search by City..."
        value={cityName}
      />
      {!isLoading ? (
        <button className="aspect-square w-12 rounded-full bg-cyan-100 text-2xl shadow-xl hover:scale-105 hover:bg-cyan-50">
          🔍
        </button>
      ) : (
        <Spinner />
      )}
    </form>
  );
}

export default SearchBar;
