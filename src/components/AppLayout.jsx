import CurrentWeather from "./CurrentWeather";
import Navigation from "./Navigation";
import WeatherForecast from "./WeatherForecast";

function AppLayout() {
  return (
    <div className="pt-20 px-6 min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 ">
      <Navigation />
      <div className="flex flex-col gap-20 px-20">
        <CurrentWeather />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default AppLayout;
