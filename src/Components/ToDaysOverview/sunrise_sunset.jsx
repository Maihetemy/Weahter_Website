import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun as solidSun } from "@fortawesome/free-solid-svg-icons";
import { faSun as regularSun } from "@fortawesome/free-regular-svg-icons";
import LoadingSpinner from "./../LoadingSpinner";
import useWeather from "./../../Hooks/useWeather";

export default function SunriseAndSunset() {
  const { CurrentWeather, isLoading, error } = useWeather();
  console.log(
    "Sunrise:",
    CurrentWeather?.forecast.forecastday[0].astro.sunrise
  );

  useEffect(() => {
    console.log(
      "Sunrise:",
      CurrentWeather?.forecast.forecastday[0].astro.sunrise
    );
  }, [CurrentWeather]);

  if (isLoading || !CurrentWeather) return <LoadingSpinner size={25} />;

  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;
  return (
    <div className="w-full p-4 px-6 h-full flex flex-col justify-around">
      <h2 className="lightFont text-lg">Sunrise and Sunset</h2>

      <div className=" h-full flex flex-col justify-around py-5">
        <div className="w-full flex justify-between lightFont items-center">
          <FontAwesomeIcon icon={solidSun} className="text-primary" />
          <p>sunrise</p>
          <p>{CurrentWeather?.forecast.forecastday[0].astro.sunrise}</p>
        </div>

        <div className="w-full flex justify-between lightFont items-center">
          <FontAwesomeIcon icon={regularSun} className="text-primary" />
          <p>sunrise</p>
          <p>{CurrentWeather?.forecast.forecastday[0].astro.sunrise}</p>
        </div>
      </div>
    </div>
  );
}
