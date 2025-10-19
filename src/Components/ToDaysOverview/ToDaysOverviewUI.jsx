import React from "react";
import WindStatus from "./WindStatus";
import UVIndex from "./UVIndex";
import SunriseAndSunset from "./sunrise_sunset";

export default function ToDaysOverviewUI() {
  return (
    <div className="w-full py-7">
      <h1 className="title text-xl mb-5">Today's Overview</h1>
      <div className="flex no-wrap gap-5 items-stretch">
        <div className="w-1/3 card_bg">
          <WindStatus />
        </div>
        <div className="w-1/3 card_bg">
          <UVIndex />
        </div>
        <div className="w-1/3 card_bg">
          <SunriseAndSunset />
        </div>
      </div>
    </div>
  );
}
