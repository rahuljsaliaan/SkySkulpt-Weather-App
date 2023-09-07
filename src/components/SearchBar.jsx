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
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setCityName(e.target.value)} value={cityName} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
