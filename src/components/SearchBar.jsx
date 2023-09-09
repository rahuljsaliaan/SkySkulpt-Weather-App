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
      className="flex justify-center items-center gap-3"
    >
      <input
        className="rounded-lg text-lg w-full sm:max-w-[400px] sm:text-xl px-4 py-2 outline-none border-4 border-blue-500 focus:border-blue-400"
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Search by City..."
        value={cityName}
      />
      {!isLoading ? (
        <button className="bg-cyan-100 w-12 aspect-square rounded-full text-2xl shadow-xl hover:bg-cyan-50 hover:scale-105">
          🔍
        </button>
      ) : (
        <Spinner />
      )}
    </form>
  );
}

export default SearchBar;
