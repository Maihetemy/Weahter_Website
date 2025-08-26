import React from "react";
import DayWeatherCard from "./../Components/DayWeatherCard";
import CurrentWeather from "./../Components/CurrentWeather";
export default function Home() {
  return (
    <div className="p-4 flex bg-primary-light dark:bg-primary-dark min-h-lvh">
      <div className="w-1/3 p-2">
        <CurrentWeather />
      </div>
      <div className="w-2/3 p-2">
        <DayWeatherCard />
      </div>
    </div>
  );
}

// <div className="horizontal-list-container">
//   {items.map((item) => (
//     <div key={item.id} className="list-item">
//       {/* Your item content */}
//       {item.name}
//     </div>
//   ))}
// </div>
