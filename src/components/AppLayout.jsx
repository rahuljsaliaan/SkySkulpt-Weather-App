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
    <div className="pt-20 px-6 min-h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 h-full">
      {error && <ToastMessage type="error" message={error} />}
      <Navigation />
      <div className="pt-5 flex flex-col justify-evenly px-20">
        <Title />
        <SelectedWeather />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default AppLayout;
