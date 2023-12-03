import React from "react";
import SideBar from "../SideBar";
import Table from "./Table";

export default function DataTable() {
  return (
    <div>
      <div className="flex justify-center my-2">
        <SideBar />
      </div>
      <h1 className="font-extrabold text-lg"> Users Information</h1>
        <div className="flex justify-center mt-14">
        <Table/>
        </div>
    </div>
  );
}
