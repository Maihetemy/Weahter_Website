import { GaugeComponent } from "react-gauge-component";
import LoadingSpinner from "./../LoadingSpinner";
import useWeather from "./../../Hooks/useWeather";
import { useEffect } from "react";
export default function UVIndex() {
  const { CurrentWeather, isLoading, error } = useWeather();
  console.log(CurrentWeather);
  useEffect(() => {
    console.log("UV Index:", CurrentWeather?.current?.uv);
  }, [CurrentWeather]);

  if (isLoading || !CurrentWeather) return <LoadingSpinner size={25} />;

  if (error) return <p>Error: {error.message || "Something went wrong"}</p>;

  return (
    <div className="p-4 card_bg h-full">
      <h3 className="title font-normal text-md mb-5">UV index</h3>
      <GaugeComponent
        value={CurrentWeather?.current?.uv}
        labels={{
          valueLabel: {
            formatTextValue: (value) => `${value.toFixed(2)} UV`,
            style: { fill: "#ffffff", fontSize: "30px" },
          },
        }}
      />
    </div>
  );
}
