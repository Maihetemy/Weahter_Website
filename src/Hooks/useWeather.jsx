/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import React from "react";
import { getCurrentWeather } from "../APIs/WeatherApi";

export default function useWeather(city) {
  const queryKey = ["CurrentWeather"];

  let {
    data: CurrentWeather,
    isLoading,
    error,
  } = useQuery({
    queryKey,
    queryFn: ()=>getCurrentWeather(city || "cairo"),
  });
  
  return { CurrentWeather, isLoading, error };
}
