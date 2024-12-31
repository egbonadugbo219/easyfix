import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='w-[100%]'>
        <div className='bg w-[100%] gap-[20px] flex flex-col justify-center items-center py-[80px] bg-black '>
            <p className='text-white w-[90%] md:w-[70%] font-extrabold text-[25px] md:text-[50px]'>Your Reliable Solution For Blockchain And Cryptocurrency Rectification</p>
            <Link to="/wallet">
            <button className='bg-gradient-to-r from-purple-600 from-10% via-purple-400 via-30% to-blue-600 to-90% text-white flex justify-center items-center py-[12px] px-[20px] rounded-[10px] gap-[20px] text-[20px] font-bold'>Connect Wallet <FaLongArrowAltRight /></button>
            </Link>
        </div>
        
    </div>
  )
}

export default Hero
