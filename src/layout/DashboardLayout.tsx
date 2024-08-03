// import React from 'react'

import { Outlet } from "react-router-dom"
import { DashHeader, DashSidebar } from "../components"

const DashboardLayout = () => {
  return (
    <div>
        <div>
            <DashHeader />
        </div>

        <div className="w-full flex justify-between gap-5 ">
            <div>
                <DashSidebar />
            </div>

            <div className="w-[calc(100%-250px)] pt-[70px] bg-gray-200 flex justify-center">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout