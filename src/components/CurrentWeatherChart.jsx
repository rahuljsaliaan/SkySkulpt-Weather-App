import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useWeather } from "../contexts/WeatherContext";
import Spinner from "./Spinner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white", // Change the label text color to white
      },
    },
    title: {
      display: true,
      text: "Current Weather Data",
      color: "white",
    },
  },
  aspectRatio: 5,
  scales: {
    x: {
      ticks: {
        color: "white", // Change the x-axis label text color to blue
      },
    },
    y: {
      ticks: {
        color: "white", // Change the y-axis label text color to blue
      },
    },
  },
};

function CurrentWeatherChart() {
  const { isLoading, selectedWeather } = useWeather();

  if (isLoading) return <Spinner />;

  if (selectedWeather) {
    const { time, temperature } = selectedWeather;

    const labels = time;

    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: "Temperature",
          color: "white",
          data: temperature,
          borderColor: "cyan",
          backgroundColor: "rgba(0, 255, 255, 0.3)",
        },
      ],
    };

    return (
      <div className="shadow-lg rounded-lg ">
        <Line options={options} data={data} />
      </div>
    );
  }
}

export default CurrentWeatherChart;
