import SelectedWeather from "./SelectedWeather";
import Navigation from "./Navigation";
import WeatherForecast from "./WeatherForecast";
import { useWeather } from "../contexts/WeatherContext";
import ToastMessage from "./ToastMessage";
import Loading from "./Loading";

function AppLayout() {
  const { initialLoading, error } = useWeather();

  if (initialLoading) return <Loading />;

  return (
    <div className="pt-20 px-6 min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800">
      {error && <ToastMessage type="error" message={error} />}
      <Navigation />
      <div className="pt-20 flex flex-col gap-20 px-20">
        <SelectedWeather />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default AppLayout;
