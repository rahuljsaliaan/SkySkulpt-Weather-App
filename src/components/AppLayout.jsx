import CurrentWeather from "./CurrentWeather";
import Navigation from "./Navigation";
import WeatherForecast from "./WeatherForecast";

function AppLayout() {
  return (
    <div className="pt-20 px-6 min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800">
      <Navigation />
      <CurrentWeather />
      <WeatherForecast />
    </div>
  );
}

export default AppLayout;
