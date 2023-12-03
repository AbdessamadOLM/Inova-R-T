import React from "react";
import { Link } from "react-router-dom";

const help = [
  {
    label: "Dashboard",
    to: "/dashboard/dash",
  },
  {
    label: "datatable",
    to: "/dashboard/datatable",
  },
  {
    label: "Upload",
    to: "/dashboard/uploadfile",
  },
];
export default function SideBar() {
  return (
    <div className="mx-auto mt-4 w-72 h-auto p-4 bg-slate-900 rounded-lg">
      <ul className="flex justify-center ">{help.map(({label,to},index)=>(
        <li key={index} className="hover:bg-slate-300 mx-4 text-gray-900 dark:text-gray-400 font-bold">
            <Link to={to}>
                {label}
            </Link>
        </li>
      ))}</ul>
    </div>
  );
}
