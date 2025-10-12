import axios from "axios";
import { useWeatherAndCity } from "../Context/CityContext";

// http://api.weatherapi.com/v1/current.json?key=c9b78bcb02654430b9b180345232311&q=London
// https://api.weatherapi.com/v1/forecast.json?key=c9b78bcb02654430b9b180345232311&q=London&days=3&aqi=no&alerts=no

const API_KEY = "c9b78bcb02654430b9b180345232311";
const API = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
});

export default function useWeatherApi() {
  const { city, setWeather } = useWeatherAndCity();
  const getCurrentWeather = async () => {
    try {
      const { data } = await API.get(
        `/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
      );
      localStorage.setItem("city", city);
      localStorage.setItem("weatherData", JSON.stringify(data));
      setWeather(data);
      console.log(data);

      return data;
    } catch (error) {
      console.log("Error fetching weather:", error);
      const lastCity = localStorage.getItem("city") || "port said";
      const savedData = localStorage.getItem("weatherData");

      // Use cached data if available
      if (savedData) {
        console.warn("Using cached weather data.");
        console.log(JSON.parse(savedData));
        setWeather(data);
        return JSON.parse(savedData);
      }

      // If no cached data, fetch for default city
      const { data } = await API.get(
        `/forecast.json?key=${API_KEY}&q=${lastCity}&days=7&aqi=no&alerts=no`
      );
      setWeather(data);
      console.log(data);
      return data;
    }
  };
  return { getCurrentWeather };
}
