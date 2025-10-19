import AvatarImage from "../assets/imgs/WhatsApp Image 2025-05-24 at 17.11.38_d06952d2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import LoadingSpinner from "./LoadingSpinner";
import GlassySearchBar from "./SearchBar";
import useWeather from "./../Hooks/useWeather";

export default function AppBar() {
  const { CurrentWeather, isLoading, error } = useWeather();

  // const { isValidCity, setIsValidCity } = useWeather();
  if (isLoading || !CurrentWeather) return <LoadingSpinner size={25} />;

  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  // if (!isValidCity)
  //   return (
  //     <p>
  //       Oops! We couldn’t find that city. Please check the spelling and try
  //       again.
  //     </p>
  //   );
  const date = CurrentWeather?.location?.localtime
    ? new Date(CurrentWeather.location.localtime)
    : null;
  const partsOfDate = date
    ? {
        weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
        year: date.toLocaleDateString("en-US", { year: "numeric" }),
        month: date.toLocaleDateString("en-US", { month: "short" }),
        day: date.toLocaleDateString("en-US", { day: "numeric" }),
      }
    : { weekday: "", year: "", month: "", day: "" };

  return (
    <div className="flex flex-nowrap p-2 mb-5 items-center gap-4 justify-between text-primary-dark dark:text-primary-light">
      {/* date */}
      <div className="w-1/4 flex flex-col ">
        <h1 className="text-2xl font-semibold">
          {partsOfDate.month}, {partsOfDate.year}
        </h1>
        <h1 className="lightFont">
          {partsOfDate.weekday}, {partsOfDate.month} {partsOfDate.day},{" "}
          {partsOfDate.year}
        </h1>
      </div>

      <GlassySearchBar className="w-1/2" />

      {/* image + notifications */}
      <div className="w-1/4 flex items-center justify-end gap-3">
        <FontAwesomeIcon icon={faBell} size="lg" className="pe-5" />
        <img
          className="w-12 h-12 rounded-full"
          src={AvatarImage}
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
}
