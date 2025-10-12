/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useWeatherApi from "./../APIs/WeatherApi";

export default function useWeather() {
  const queryKey = ["CurrentWeather"];
  const { getCurrentWeather } = useWeatherApi();
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
