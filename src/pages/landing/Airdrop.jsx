import React from 'react'
import airdrop from '../../image/airdrop.png'
import { Link } from 'react-router-dom'

function Airdrop() {
  return (
    <div className='w-[100%] flex-col-reverse justify-between pr-[100px] items-center flex bg-black   md:flex-row gap-[20px] md:gap-0'>
        <div className='w-full md:w-[40%] lg:w-[35%]'>
            <img src={airdrop} alt="" />
        </div>
        <div className='w-[90%] pl-[30px] md:w-[50%] gap-[20px] items-start flex flex-col'>
            <p className='text-white text-[30px] lg:text-[45px] font-bold text-start'>Claim free tokens from the latest crypto airdrops </p>
            <p className='text-[#898CA9] text-[17px] text-start'>
            Claim free tokens through the latest crypto airdrops by staying informed, meeting eligibility requirements, and securing your assets.</p>
            <Link to='/wallet'>
            <button className='bg-gradient-to-r from-purple-600 from-10% via-purple-400 via-30% to-blue-500 to-90% text-white flex justify-center items-center py-[12px] px-[20px] rounded-[10px] gap-[15px] text-[15px] font-semibold'>Claim Airdrop</button>
            </Link>

        </div>
        
      
    </div>
  )
}

export default Airdrop
