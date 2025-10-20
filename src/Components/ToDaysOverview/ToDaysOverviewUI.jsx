import WindStatus from "./WindStatus";
import UVIndex from "./UVIndex";
import LineChart from "./LineChart";

export default function ToDaysOverviewUI() {
  return (
    <div className="w-full pt-5">
      <h1 className="title mb-5 p-2">Today's Overview</h1>
      <div className="flex flex-col md:flex-row no-wrap items-stretch">
        <div className="w-full md:w-1/3 p-2">
          <WindStatus />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <UVIndex />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
