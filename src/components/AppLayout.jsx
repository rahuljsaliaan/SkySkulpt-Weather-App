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
    <div className="w-full min-h-screen backdrop-blur-md  bg-gradient-to-b from-blue-900 to-black">
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
