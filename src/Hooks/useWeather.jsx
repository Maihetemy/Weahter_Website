/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useWeatherApi from "./../APIs/WeatherApi";
import { useWeatherAndCity } from "../Context/CityContext";

export default function useWeather() {
  const { city } = useWeatherAndCity();
  const { getCurrentWeather } = useWeatherApi();
  const queryKey = ["CurrentWeather", city];

  let {
    data: CurrentWeather,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey,
    queryFn: getCurrentWeather,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    retry: 1,
  });

  return { CurrentWeather, isLoading, error, isFetching };
}
