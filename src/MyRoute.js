import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Dashboard from './component/navComponent/Dashboard'
import DataTable from './component/dataTable/DataTable'
import FileUploader from './component/fileUpload/FileUploader'


export default function MyRoute() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard/dash' element={<Dashboard/>}/>
        <Route path='/dashboard/datatable' element={<DataTable/>}/>
        <Route path='/dashboard/uploadfile' element={<FileUploader/>}/>
    </Routes>
  )
}
