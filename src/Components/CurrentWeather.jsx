/* eslint-disable no-unused-vars */
import React from "react";
import useWeather from "./../Hooks/useWeather";

export default function CurrentWeather() {
//   const { CurrentWeather, isLoading, error } = useWeather("port said");
  console.log(CurrentWeather);

  return <div className="w-full shadow-lg text-gray-500 bg-secondary-light dark:bg-secondary-dark dark:text-gray-100 h-48
    dark:bg- rounded-2xl flex flex-col items-start justify-center p-4 space-y-2">
    <p className="title">mai hetemy</p>
  </div>;
}
