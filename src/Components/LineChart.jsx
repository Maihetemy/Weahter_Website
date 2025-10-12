import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
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


export default function LineChart({hoursWeather}) {
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

  return (
    <div className="w-full py-5 bg-secondary-light dark:bg-secondary-dark p-4 rounded-2xl shadow">
      <h1 className="capitalize text-xl mb-5 text-primary-dark dark:text-primary-light">
        temperature
      </h1>
      <Line data={chartData} options={options} />
    </div>
  );
}

LineChart.propTypes = {
  hoursWeather: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// const createGradient = (ctx) => {
//   const chart = ctx.chart;
//   const { ctx: canvasCtx, chartArea } = chart;
//   if (!chartArea) return "#facc15"; // fallback before render

//   // Create gradient that fades at start & end
//   const gradient = canvasCtx.createLinearGradient(0, 0, chartArea.width, 0);
//   gradient.addColorStop(0, "rgba(250, 204, 21, 0)"); // transparent start
//   gradient.addColorStop(0.5, "rgba(250, 204, 21, 1)"); // solid middle
//   gradient.addColorStop(1, "rgba(250, 204, 21, 0)"); // transparent end
//   return gradient;
// };
