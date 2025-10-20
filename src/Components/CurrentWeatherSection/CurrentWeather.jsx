import useWeather from "../../Hooks/useWeather";
import LoadingSpinner from "../LoadingSpinner";
import AvatarImage from "../../assets/imgs/WhatsApp Image 2025-05-24 at 17.11.38_d06952d2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun as solidSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersWater } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function CurrentWeather() {
  const { CurrentWeather, isLoading, error } = useWeather();
  useEffect(() => {}, [CurrentWeather]);
  if (isLoading || !CurrentWeather) return <LoadingSpinner size={25} />;

  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  const visibility = CurrentWeather.current.vis_km;

  let message = "";
  if (visibility >= 10) {
    message = "Visibility is clear right now.";
  } else if (visibility >= 7) {
    message = "Visibility is slightly reduced.";
  } else if (visibility >= 4) {
    message = "Visibility is moderate due to haze.";
  } else if (visibility >= 2) {
    message = "Haze is affecting visibility.";
  } else {
    message = "Visibility is very poor due to heavy fog.";
  }

  return (
    <div
      className="relative w-full text-gray-500
    dark:bg- rounded-2xl flex flex-col p-4 space-y-2"
    >
      {/* profile data */}
      <div className="flex flex-nowrap justify-between">
        {/* name and location */}
        <div className="flex flex-col">
          {/* name */}
          <h1 className="text-3xl title">mai hetemy</h1>
          {/* location */}
          <p className="lightFont flex pb-1">
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
        </div>
        {/* image avatar */}
        <img
          className="w-15 h-15 md:h-13 md:w-13 rounded-full"
          src={AvatarImage}
          alt="Rounded avatar"
        />
      </div>
      <div className="flex flex-nowrap md:flex-col">
        {/* weather image */}
        <div
          className="relative -left-3.5 w-40 bg-cover bg-center mb-0 text-center"
          style={{
            backgroundImage: `url(${CurrentWeather?.current?.condition?.icon})`,
            height: "140px",
          }}
        >
          {isLoading ? <LoadingSpinner size={60} /> : null}
        </div>
        {/*  weather condition */}
        <div className="flex flex-col md:flex-row md:flex-wrap  justify-center items-end md:justify-between md:items-center capitalize w-full  text-primary-dark dark:text-primary-light">
          <h1 className="font-bold text-3xl md:w-3/4 ">
            {isLoading ? (
              <LoadingSpinner size={60} />
            ) : (
              CurrentWeather?.current?.temp_c
            )}
            &#8451;
          </h1>

          <p className="text-3xl text-end md:text-lg md:w-1/4">
            {isLoading ? (
              <LoadingSpinner size={32} />
            ) : (
              CurrentWeather?.current?.condition?.text
            )}
          </p>
        </div>
      </div>

      {/* break line /> */}
      <hr className="h-px my-3 bg-primary/10 border-0 " />

      {/* current weather details */}

      <div className="card_bg p-4">
        {/* sunrise and sunset */}
        <div className="w-full h-full flex flex-col">
          <h2 className="title text-md font-normal">Sunrise and Sunset</h2>
          <div className=" h-full flex flex-col justify-around py-1">
            <div className="w-full flex justify-between lightFont items-center">
              <p className="py-0.5 w-3/5">
                {CurrentWeather?.forecast.forecastday[0].astro.sunrise}
              </p>
              <div className="flex items-center w-2/5">
                <FontAwesomeIcon
                  icon={solidSun}
                  className="text-primary pe-1"
                />
                <p className="py-0.5">sunrise</p>
              </div>
            </div>

            <div className="w-full flex justify-between lightFont items-center">
              <p className="py-0.5 w-3/5">
                {CurrentWeather?.forecast.forecastday[0].astro.sunset}
              </p>
              <div className="flex items-center w-2/5">
                <FontAwesomeIcon
                  icon={solidSun}
                  className="text-primary pe-1"
                />
                <p className="py-0.5">sunset</p>
              </div>
            </div>
          </div>
        </div>
        {/* break line */}
        <div className="w-full flex justify-center">
          <hr className="h-px my-1 bg-primary/10 border-0 w-full" />
        </div>
        {/* humidity */}
        <div className="w-full h-full flex flex-col">
          <h2 className="title text-md font-normal py-1">humidity</h2>
          <div className="w-full flex justify-between lightFont items-center">
            <div className="w-1/4">
              <p className="title font-normal">
                {CurrentWeather?.current?.humidity}%
              </p>
            </div>
            <div className="flex items-center w-3/4">
              <FontAwesomeIcon
                icon={faCloudShowersWater}
                className="pe-2 text-lg text-primary"
              />
              <span>
                The dew point is {CurrentWeather?.current?.dewpoint_c}° right
                now
              </span>
            </div>
          </div>
        </div>
        {/* break line */}
        <div className="w-full flex justify-center">
          <hr className="h-px my-1 bg-primary/10 border-0 w-full" />
        </div>
        {/*visibility */}
        <div className="w-full h-full flex flex-col">
          <h2 className="title text-md font-normal py-1">visibility</h2>
          <div className="w-full flex justify-between lightFont items-center">
            <div className="w-1/4">
              <p className="title font-normal">{visibility}KM</p>
            </div>
            <div className="flex items-center w-3/4">
              <FontAwesomeIcon
                className="pe-2 text-lg text-primary"
                icon={faEye}
              />
              <span>{message}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
