import { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useWeather from "./../../Hooks/useWeather";
import LoadingSpinner from "./../LoadingSpinner";

// Register only what's needed
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function WindStatus() {
  const { CurrentWeather, isLoading, error } = useWeather();
  console.log(CurrentWeather);

  const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  const windSpeeds = useMemo(() => {
    return (
      CurrentWeather?.forecast?.forecastday?.[0]?.hour?.map(
        (hour) => hour.wind_kph
      ) || []
    );
  }, [CurrentWeather]);

  const data = {
    labels,
    datasets: [
      {
        data: windSpeeds,
        backgroundColor: "#FDD73A",
        borderRadius: 8,
        barThickness: 4,
        borderSkipped: false,
        barPercentage: 0.4,
        categoryPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  if (isLoading || !CurrentWeather) return <LoadingSpinner size={25} />;

  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  return (
    <div className="flex flex-col justify-center items-start p-4">
      <h3 className="lightFont">Wind Status</h3>

      <Bar data={data} options={options} />

      <div className="my-1.5 row flex justify-between items-baseline w-full lightFont">
        <p className="text-gray-800 dark:text-gray-300">
          <span className="font-medium text-lg">{windSpeeds[hours]}</span> km/h
        </p>
        <p className="text-gray-800 dark:text-gray-300">
          {hours}:{minutes} {ampm}
        </p>
      </div>
    </div>
  );
}
