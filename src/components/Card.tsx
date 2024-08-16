// import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import shirt from "../assets/images/tailwindHero.jpg";

const Card = () => {
  return (

    <div className="w-[300px] h-[330px] rounded-md bg-white flex flex-col gap-3  overflow-hidden ml-[5px] mr-[5px]">
        <div className="w-full h-[50%]">
            <img className="w-full h-full" src={shirt} alt="" />
        </div>

        <div className="p-3">
            <h1 className="text-[20px] font-bold">T-Shirt</h1>
            <h2 className="text-[16px]">Fendi</h2>
            <div className="text-[15px]">
                <h3>$50</h3>
                <div className="flex gap-2">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoStarOutline />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card