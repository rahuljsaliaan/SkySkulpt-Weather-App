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
      text: "Weather Summary",
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
  const { selectedWeather } = useWeather();

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
      <div className="shadow-xl rounded-lg animate-fade-in">
        <Line options={options} data={data} />
      </div>
    );
  }
}

export default CurrentWeatherChart;
