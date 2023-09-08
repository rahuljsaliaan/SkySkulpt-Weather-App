import { useState } from "react";
import { useWeather } from "../contexts/WeatherContext";

function SearchBar() {
  const { fetchWeatherQuery } = useWeather();
  const [cityName, setCityName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    fetchWeatherQuery(cityName);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className=" ">
        <div className="flex gap-5 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <input
            className="rounded-lg text-xl px-4 py-2 outline-none border-4 border-blue-500 focus:border-blue-400"
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Search by City..."
            value={cityName}
          />
          <button className="bg-cyan-100 w-10 h-10 rounded-full text-2xl shadow-xl hover:bg-cyan-50 hover:scale-105">
            🔍
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
