// import React from 'react'

import { NavLink } from "react-router-dom"

const DashSidebar = () => {
  return (
    <div className="w-[250px] h-screen flex flex-col justify-between p-10 bg-orange-400 text-white fixed pt-[120px]">
        <div className="text-[20px] flex flex-col gap-8">
            {/* <div className="mb-[25px]">LOGO</div> */}
            
            <div className="text-[17px] font-bold flex flex-col gap-6">
                <NavLink to='/dashboard'><ol className="cursor-pointer">Dashboard</ol></NavLink>
                <NavLink to='/dashboard/transactions'><ol className="cursor-pointer">Transactions</ol></NavLink>
                <NavLink to='/dashboard/fundwallet'><ol className="cursor-pointer">Fund Wallet</ol></NavLink>
                <NavLink to='/dashboard/settings'><ol className="cursor-pointer">Settings</ol></NavLink>
            </div>
        </div>

        <NavLink to="/signin">
            <span className="cursor-pointer">
                Logout
            </span>
        </NavLink>
    </div>
  )
}

export default DashSidebar