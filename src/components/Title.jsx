import { useWeather } from "../contexts/WeatherContext";

function Title() {
  const { weatherData } = useWeather();

  if (weatherData) {
    return (
      <div>
        <h1 className="text-white text-center pt-5 text-3xl">
          🌐&nbsp;{weatherData.location}
        </h1>
      </div>
    );
  }
}

export default Title;
