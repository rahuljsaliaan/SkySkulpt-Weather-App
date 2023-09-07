import AppLayout from "./components/AppLayout";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <AppLayout />
    </WeatherProvider>
  );
}

export default App;
