import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  elements: {
    line: {
      backgroundColor: "rgba(255, 99, 132, 0.0)", // Set the background color for the line
    },
  },
  aspectRatio: 5,
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
          label: "Temperature",
          data: temperatureData,
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
