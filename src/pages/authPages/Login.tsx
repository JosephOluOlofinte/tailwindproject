// import React from 'react';

import { NavLink } from "react-router-dom";

const Login = () => {
    
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[90%] md:w-[60%] lg:w-[40%] min-h-[300px] border-[1px] rounded-md border-gray-300 p-6">
                <h1 className="text-[20px] font-bold text-center mb-[25px]">Sign in</h1>
    
                <form className="w-full flex flex-col gap-4" action="">
                    <input className="w-full border-[1px] border-gray-200 rounded-md p-3 h-[40px]" type="email" placeholder="Email" />
                    <input className="w-full border-[1px] border-gray-200 rounded-md p-3 h-[40px]" type="password" placeholder="Password" />
    
                    <NavLink to="/dashboard2">
                        <button type="submit" className="w-full bg-orange-400 rounded-md text-white font-bold h-[40px]">Sign in</button>
                    </NavLink>
                </form>
    
                <h2 className="text-[14px] mt-[20px] text-center">Don't have an Account? <NavLink to="/register"><span className="cursor-pointer text-orange-400">Register</span></NavLink></h2>
            </div>
        </div>
    );
};

export default Login;