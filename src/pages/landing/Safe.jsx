import React from 'react'
import bag from '../../image/img.png'
import { Link } from 'react-router-dom'

function Safe() {
  return (
    <div className='bagbg w-[100%] py-[10px] justify-evenly px-[50px]  items-center flex flex-col md:flex-row gap-[20px] md:gap-0 bg-black'>
        <div className=' md:w-[45%] lg:w-[40%] gap-[20px] items-start flex flex-col'>
            <p className='text-white text-[30px] lg:text-[45px] font-bold text-start'>Take your first step into safe, secure crypto investing</p>
            <p className='text-[#898CA9] text-[17px] text-start'>
            Begin your cryptocurrency investment journey with safe practices, secure platforms, and informed decisions to protect your assets effectively.</p>
            <Link to="/wallet">
            <button className='bg-gradient-to-r from-purple-600 from-10% via-purple-400 via-30% to-blue-500 to-90% text-white flex justify-center items-center py-[12px] px-[20px] rounded-[10px] gap-[15px] text-[15px] font-semibold'>Get Started</button>
            
            </Link>

        </div>
        <div className='md:w-[40%] lg:w-[35%]'>
            <img src={bag} alt="" />
        </div>
    </div>
  )
}

export default Safe
