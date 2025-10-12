import { createContext, useContext, useState, useEffect } from "react";

const WeatherAndCityContext = createContext();

export function WeatherAndCityProvider({ children }) {
  const [weather, setWeather] = useState(() => {
    const savedWeather = localStorage.getItem("weather");
    return savedWeather ? JSON.parse(savedWeather) : null;
  });

  const [city, setCity] = useState(() => {
    return localStorage.getItem("city") || "Port Said";
  });

  useEffect(() => {
    if (weather) {
      localStorage.setItem("weather", JSON.stringify(weather));
    }
    localStorage.setItem("city", city);
  }, [weather, city]);

  return (
    <WeatherAndCityContext.Provider
      value={{ weather, setWeather, city, setCity }}
    >
      {children}
    </WeatherAndCityContext.Provider>
  );
}

export const useWeatherAndCity = () => useContext(WeatherAndCityContext);
