import React from 'react'
import vid from '../../image/vid (2).mp4'
import { Link } from 'react-router-dom'

function OurTeam() {
  return (
      <div className="relative w-full py-[250px] bg-black h-[700px] md:h-[450px] flex justify-around items-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w- h-full object-cover transform -translate-x-1/2 rounded-[30px] -translate-y-1/2">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className='absolute w-[100%] gap-[30px] md:gap-0  md:h-[450px] flex flex-col md:flex-row justify-around items-center'>
            <div className='w-[80%] text-center md:text-start md:w-[50%] items-start flex flex-col gap-[20px]'>
                <h1 className='text-white font-bold font-sans text-[40px]'>OUR TEAM</h1>
                <p className='text-white text-center md:text-start'>Our team specializes in delivering trusted solutions for blockchain issues and cryptocurrency rectification, ensuring secure, reliable, and efficient results to meet your needs with expertise and unwavering commitment to excellence.</p>
                  <Link to="/wallet" className='bg-gradient-to-r from-purple-600 from-10% via-purple-400 via-30% to-blue-500 to-90% justify-center items-center flex font-bold text-white w-[100%] py-[10px]'>Connect To Get Started</Link>
            </div>
            
      </div>
      
    </div>
  )
}

export default OurTeam
