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
import { formatTimestampToAMPM } from "../utils/formatters/formatTimeStampToAMPM";

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
  const { isLoading, weatherData } = useWeather();
  const now = new Date();
  const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  if (isLoading) return <Spinner />;

  if (weatherData) {
    const { temperature_2m: temperatureData, time } = weatherData.hourly;

    const labels = time
      .filter((time) => {
        const timestampDate = time.split("T")[0];
        return timestampDate === today;
      })
      .map((filteredTime) => formatTimestampToAMPM(filteredTime));

    console.log(labels);

    const data = {
      labels,
      datasets: [
        {
          fill: true,
          label: "Temperature",
          color: "white",
          data: temperatureData,
          borderColor: "cyan",
          backgroundColor: "rgba(0, 255, 255, 0.3)",
        },
      ],
    };

    return (
      <div className="h-full w-full shadow-lg rounded-lg ">
        <Line options={options} data={data} />
      </div>
    );
  }
}

export default CurrentWeatherChart;
