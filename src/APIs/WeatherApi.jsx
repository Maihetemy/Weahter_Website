import axios from "axios";

const API_KEY = "c9b78bcb02654430b9b180345232311";
const API = axios.create({
  baseURL: " http://api.weatherapi.com/v1",
});

export const getCurrentWeather = async (city) => {
  const { data } = await API.get(`/current.json?key=${API_KEY}&q=${city}`);
  return data;
};
