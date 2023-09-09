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
        color: "white",
      },
      onClick: () => {},
    },
    title: {
      display: true,
      text: "Weather Summary",
      color: "white",
      font: {
        size: 22,
        weight: 500,
      },
    },
  },
  aspectRatio: 16 / 9,
  scales: {
    x: {
      ticks: {
        maxTicksLimit: 10,
        color: "white",
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        maxTicksLimit: 10,
        color: "white",
      },
      grid: {
        display: false,
      },
    },
  },
};

function SelectedWeatherChart() {
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
          pointRadius: 2,
          cubicInterpolationMode: "monotone",
        },
      ],
    };

    return (
      <div className="bg-black/10 shadow-xl rounded-lg animate-fade-in w-full h-96 px-6 py-4">
        <Line options={options} data={data} />
      </div>
    );
  }
}

export default SelectedWeatherChart;
