import { useWeather } from "../contexts/WeatherContext";
import SelectedWeather from "./SelectedWeather";
import Navigation from "./Navigation";
import WeatherForecast from "./WeatherForecast";
import ToastMessage from "./ToastMessage";
import Loading from "./Loading";
import Title from "./Title";

function AppLayout() {
  const { initialLoading, error } = useWeather();

  if (initialLoading) return <Loading />;

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800">
      {error && <ToastMessage type="error" message={error} />}
      <Navigation />
      <div className="flex flex-col justify-center items-center gap-5 px-4">
        <Title />
        <SelectedWeather />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default AppLayout;
