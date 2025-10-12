import DayWeatherCard from "./DayWeatherCard";
import useWeather from "./../Hooks/useWeather";
import LoadingSpinner from "./LoadingSpinner";
import { useWeatherAndCity } from "../Context/CityContext";

export default function WeekWeather() {
  const { city } = useWeatherAndCity();
  const { CurrentWeather, isLoading, error } = useWeather(city);
  console.log("week weather ============>", CurrentWeather);

  const getWeekday = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  if (isLoading) return <LoadingSpinner size={35} />;
  if (error) return <p>Error: {error}</p>;
  let week = [];
  let daysNamesNew = [];
  let daysNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (CurrentWeather) {
    let days = CurrentWeather?.forecast?.forecastday;
    while (week.length < 7) {
      week = [...week, ...days];
    }
    week = week.slice(0, 7);
    let start = daysNames.findIndex(
      (element) => element === getWeekday(week[0].date)
    );
    daysNamesNew = daysNames.slice(start);
    for (let i = 0; i < start; i++) {
      daysNamesNew.push(daysNames[i]);
    }
  }

  return (
    <div className=" flex gap-3">
      {week.map((item, index) => (
        <div key={index} className="w-1/7">
          <DayWeatherCard dayWeather={item} dayName={daysNamesNew[index]} />
        </div>
      ))}
    </div>
  );
}
