import { useWeather } from "../contexts/WeatherContext";
import SelectedWeather from "./SelectedWeather";
import Navigation from "./Navigation";
import WeatherForecast from "./WeatherForecast";
import ToastMessage from "./ToastMessage";
import Loading from "./Loading";
import Title from "./Title";
import { BACKGROUND_URL } from "../config/config";

function AppLayout() {
  const { initialLoading, error } = useWeather();

  if (initialLoading) return <Loading />;

  return (
    <div className={`min-h-screen w-full bg-[url(${BACKGROUND_URL})]`}>
      {error && <ToastMessage type="error" message={error} />}
      <Navigation />
      <div className="flex flex-col items-center justify-center gap-5 px-4 py-4 xl:py-0">
        <Title />
        <SelectedWeather />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default AppLayout;
