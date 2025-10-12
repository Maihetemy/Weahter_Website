import useWeather from "./../Hooks/useWeather";
import LineChart from "./LineChart";
import LoadingSpinner from "./LoadingSpinner";
import { useMemo } from "react";

export default function CurrentWeather() {
  const { CurrentWeather, isLoading, error } = useWeather();

  const hoursWeather = useMemo(() => {
    let hours = [6, 12, 18, 23];
    return hours.map(
      (hour) =>
        CurrentWeather?.forecast?.forecastday[0]?.hour[hour]?.temp_c || 0
    );
  }, [CurrentWeather]);

  if (isLoading || !CurrentWeather) return <LoadingSpinner size={25} />;

  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  return (
    <div
      className="relative w-full text-gray-500
    dark:bg- rounded-2xl flex flex-col p-4 space-y-2"
    >
      <h1 className="text-3xl capitalize font-semibold text-primary-dark dark:text-primary-light">
        mai hetemy
      </h1>
      <p className="lightFont flex">
        <span className="pe-1.5">
          {isLoading ? (
            <LoadingSpinner size={16} />
          ) : (
            CurrentWeather?.location?.name
          )}
        </span>
        ,
        {isLoading ? (
          <LoadingSpinner size={16} />
        ) : (
          CurrentWeather?.location?.country
        )}
      </p>

      <div
        className="relative -left-3.5 w-40 bg-cover bg-center mb-0 text-center"
        style={{
          backgroundImage: `url(${CurrentWeather?.current?.condition?.icon})`,
          height: "150px",
        }}
      >
        {isLoading ? <LoadingSpinner size={60} /> : null}
      </div>

      <div className="flex flex-wrap justify-between items-center capitalize w-full  text-primary-dark dark:text-primary-light">
        <h1 className="text-4xl font-bold md:w-3/4 ">
          {isLoading ? (
            <LoadingSpinner size={60} />
          ) : (
            CurrentWeather?.current?.temp_c
          )}
          &#8451;
        </h1>

        <p className="text-lg text-end md:w-1/4">
          {isLoading ? (
            <LoadingSpinner size={32} />
          ) : (
            CurrentWeather?.current?.condition?.text
          )}
        </p>
      </div>
      {/* <Chart6 /> */}
      <hr className="h-px my-3 bg-primary/10 border-0 " />
      <LineChart hoursWeather={hoursWeather} />
    </div>
  );
}
