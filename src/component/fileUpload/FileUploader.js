import React from 'react'
import SideBar from "../SideBar";
import UploadFile from "./UploadFile"
export default function FileUploader() {
    return (
    <div className="">
      <div className="flex justify-center my-2">
        <SideBar />
      </div>
      <div className="">
          <UploadFile />
        </div>
      </div>
    )
}