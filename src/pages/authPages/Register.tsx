// import React from 'react'

import { NavLink } from "react-router-dom"

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] min-h-[300px] border-[1px] rounded-md border-gray-300 p-6">
            <h1 className="text-[20px] font-bold text-center mb-[25px]">Register</h1>

            <form className="w-full flex flex-col gap-4" action="">
                <input className="w-full border-[1px] border-gray-200 rounded-md p-3 h-[40px]" type="email" placeholder="Email" />
                <input className="w-full border-[1px] border-gray-200 rounded-md p-3 h-[40px]" type="password" placeholder="Password" />
                <input className="w-full border-[1px] border-gray-200 rounded-md p-3 h-[40px]" type="password" placeholder="Confirm Password" />

                <button type="submit" className="w-full bg-orange-400 rounded-md text-white font-bold h-[40px]">Submit</button>
            </form>

            <h2 className="text-[14px] mt-[20px] text-center">Already have an Account? <NavLink to="/signin"><span className="cursor-pointer text-orange-400">Sign in</span></NavLink></h2>
        </div>
    </div>
  )
}

export default Register