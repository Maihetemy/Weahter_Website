import CurrentWeather from "./../Components/CurrentWeatherSection/CurrentWeather";
import AppBar from "./../Components/AppBar/AppBar";
import WeekWeather from "./../Components/WeekWeather/WeekWeather";
import ToDaysOverviewUI from "./../Components/ToDaysOverview/ToDaysOverviewUI";
export default function Home() {
  return (
    <div className="tracking-wide h-full flex flex-col px-5 md:flex-row bg-primary-light  dark:bg-primary-dark">
      <div className="w-full lg:w-1/4 h-max py-3">
        <CurrentWeather />
      </div>
      <div className="hidden md:inline-block  top-0 bottom-0 w-[1px] self-stretch bg-primary/10" />

      <div className="w-full lg:w-3/4 p-5">
        <AppBar />
        <WeekWeather />
        <ToDaysOverviewUI />
      </div>
    </div>
  );
}
