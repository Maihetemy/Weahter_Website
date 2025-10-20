import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useMemo } from "react";
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
import LoadingSpinner from "../LoadingSpinner";
import useWeather from "../../Hooks/useWeather";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const rootStyles = getComputedStyle(document.documentElement);
const primaryColor = rootStyles.getPropertyValue("--color-primary").trim();

export default function LineChart() {
  const { CurrentWeather, isLoading, error } = useWeather();

  const hoursWeather = useMemo(() => {
    let hours = [6, 12, 18, 23];
    return hours.map(
      (hour) =>
        CurrentWeather?.forecast?.forecastday[0]?.hour[hour]?.temp_c || 0
    );
  }, [CurrentWeather]);

  const [chartData, setChartData] = useState({
    labels: ["Morning", "Afternoon", "Evening", "Night"],
    datasets: [
      {
        data: [0, 0, 0, 0],
        borderColor: primaryColor,
        borderWidth: 1.5, // 🔹 thinner line
        tension: 0.4, // 🔹 smooth curve

        // Point styling
        pointRadius: 4,
        pointBackgroundColor: "transparent",
        pointBorderColor: "#facc15",
        pointBorderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    console.log("hoursWeather", hoursWeather);
    if (hoursWeather) {
      setChartData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: hoursWeather,
          },
        ],
      }));
    }
  }, [hoursWeather]);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false, // ❌ removes vertical grid lines
          drawBorder: false,
        },
        ticks: {
          color: "#9ca3af", // ✅ change x-axis label color
          font: {
            size: 12,
            family: "Arial",
          },
        },
        callback: function (value, index) {
          // Show label + temperature under it
          const label = this.getLabelForValue(value); // Morning, Afternoon...
          const temp = chartData.datasets[0].data[index]; // temperature for that label
          return `${label}\n${temp}°`; // newline for temp under label
        },
      },
      y: {
        display: false, // ❌ hides Y-axis completely
        grid: {
          display: false, // ❌ removes horizontal grid lines
        },
      },
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: true, // ✅ show on hover
      },
      datalabels: {
        display: false, // ❌ hide always-visible labels
      },
    },
  };

  if (isLoading || !CurrentWeather) return <LoadingSpinner size={25} />;

  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  return (
    <div className="w-full p-4 py-5 card_bg h-full">
      <h1 className="title font-normal text-md mb-5">temperature</h1>
      <Line data={chartData} options={options} />
    </div>
  );
}

LineChart.propTypes = {
  hoursWeather: PropTypes.arrayOf(PropTypes.number).isRequired,
};
