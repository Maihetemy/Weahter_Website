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

  const [isValidCity, setIsValidCity] = useState(true);

  const [isAppBarTouched, setIsAppBarTouched] = useState(false);

  useEffect(() => {
    if (weather) {
      localStorage.setItem("city", city);
      localStorage.setItem("weather", JSON.stringify(weather));
    }
  }, [weather, city]);

  return (
    <WeatherAndCityContext.Provider
      value={{
        weather,
        setWeather,
        city,
        setCity,
        isValidCity,
        setIsValidCity,
        isAppBarTouched,
        setIsAppBarTouched,
      }}
    >
      {children}
    </WeatherAndCityContext.Provider>
  );
}

export const useWeatherAndCity = () => useContext(WeatherAndCityContext);
