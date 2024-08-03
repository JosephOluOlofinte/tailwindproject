// import React from 'react';
import { NavLink } from "react-router-dom";
import tailwindLogo from "../../assets/images/tailwindcsslogo-removebg-preview.png";

const Header = () => {
    return (
        <div>
            <header className="
            {/* HEADER */}
            h-[70px] w-full
            bg-blend-multiply
            flex justify-center items-center
            ">
                <div className="
                {/*HEADER CONTAINER*/}
                w-11/12 h-full
                flex items-center justify-between
                ">
                    <div className="
                    {/* LOGO CONTAINER */}
                    w-[155px]
                    ">
                        <img src={tailwindLogo}/>
                    </div>
                    {/* <div className=""></div> */}
                    
                    <div className="flex justify-between gap-7">
                    <NavLink to="/"><ol className="cursor-pointer hover:text-orange-400">Home</ol></NavLink>
                        <ol className="cursor-pointer hover:text-orange-400">Contact</ol>
                        <ol className="cursor-pointer hover:text-orange-400">About</ol>
                    </div>

                    <div className="flex gap-7">
                        <NavLink to="/signin">
                            <button className="w-[100px] rounded bg-orange-400 border-none h-[40px] text-white font-bold">Sign in</button>
                        </NavLink>

                        <NavLink to="/register">
                            <button className="w-[100px] rounded border-orange-400 border-[1px] h-[40px] text-orange-400 font-bold">Register</button>
                        </NavLink>
                    </div>
                </div>

            </header>
        </div>
    );
};

export default Header;