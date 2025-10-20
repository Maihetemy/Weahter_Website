import { useEffect } from "react";

import LoadingSpinner from "./LoadingSpinner";
import useWeather from "../Hooks/useWeather";

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
    
  );
}
