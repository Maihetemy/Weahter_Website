import CurrentWeather from './../Components/CurrentWeatherSection/CurrentWeather';
import AppBar from './../Components/AppBar/AppBar';
import WeekWeather from './../Components/WeekWeather/WeekWeather';
import ToDaysOverviewUI from './../Components/ToDaysOverview/ToDaysOverviewUI';
export default function Home() {
  return (
    <div className="tracking-wide flex flex-col px-5 md:flex-row bg-primary-light  dark:bg-primary-dark h-screen">
      <div className="w-full lg:w-1/4 h-max py-3">
        <CurrentWeather />
      </div>
      <div className="flex flex-1 h-full px-5">
        <div className="inline-block max-h-dvh min-h-[1em] w-[1px] self-stretch bg-neutral-100 dark:bg-white/10" />
      </div>

      <div className="w-full lg:w-3/4 p-5">
        <AppBar />
        <WeekWeather />
        <ToDaysOverviewUI />
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
