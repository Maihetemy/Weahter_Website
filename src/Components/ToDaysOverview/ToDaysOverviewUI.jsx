import WindStatus from "./WindStatus";
import UVIndex from "./UVIndex";
import LineChart from "./LineChart";

export default function ToDaysOverviewUI() {
  return (
    <div className="w-full pt-5">
      <h1 className="title mb-5">Today's Overview</h1>
      <div className="flex no-wrap items-stretch">
        <div className="w-1/3 pe-2">
          <WindStatus />
        </div>
        <div className="w-1/3 px-2">
          <UVIndex />
        </div>
        <div className="w-1/3 ps-2">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
