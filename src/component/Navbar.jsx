"use client";

import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaStrikethrough } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-[100%]">
            <div className="w-[100%] py-4 flex px-4 items-center justify-around bg-[black]">
                
                <Link to="/">
                    <h1 className="text-blue-500 text-center cursor-pointer text-[30px] font-bold mx-auto">
                    <FaStrikethrough />
                    </h1>
                </Link>
                <div className="flex gap-[20px]">
                <Link to="/">
                    <p className="text-white">Home</p>
                </Link>
                <Link to="/wallet">
                    <p className="text-white">Explore</p>
                </Link>
                </div>
                <Link to="/wallet">
                    <button className=" bg-gradient-to-r from-purple-600 from-10% via-purple-400 via-30% to-blue-600 to-90% text-white flex justify-center items-center py-[9px] px-[20px] rounded-[10px] gap-[20px] text-[15px]">Connect</button>
                </Link>

               
            </div>
          
        </nav>
    );
}
