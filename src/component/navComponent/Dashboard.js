import React from "react";
import StackBarChart from "./charts/StackBarChart";
import RadarChart from "./charts/RadarChart";
import PieChart from "./charts/PieChart";
import SideBar from "../SideBar";

export default function Dashboard() {
  return (
    <div className="">
      <div className="flex justify-center my-2">
        <SideBar />
      </div>
      <div className="flex justify-between items-center">
        <div className="ml-6 bg-slate-300 rounded-md h-100 border hover:border-gray-500">
          <RadarChart />
        </div>
        <div className=" flex items-center justify-center bg-slate-300 rounded-md  hover:border-gray-500 mx-0 ">
          <StackBarChart />
        </div>
        <div className="bg-slate-300 rounded-md h-100 hover:border-gray-500 mr-6">
          <PieChart />
        </div>
      </div>
    </div>
  );
}
