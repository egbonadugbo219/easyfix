import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const date = new Date().getFullYear();

  return (
    <div className='w-[100%] bg-gradient-to-r from-black to-purple-900 '>
        <div className='flex gap-[50px] lg:gap-0 flex-col lg:flex-row px-[20px] w-[90%] lg:w-[100%] lg:justify-between lg:items-center py-[90px] lg:px-[40px]'>
            <div className='lg:w-[30%] w-[100%] flex flex-col gap-4'>
                <h1 className='text-white text-[30px] font-bold '>EASY FIX WALLET</h1>
                <p className='text-gray-300 font-semibold'>Empowering Innovation, Resolving Challenges – Your Blockchain and Cryptocurrency Experts</p>
            </div>
            <div className='lg:w-[30%] w-[100%] flex flex-col gap-4 justify-start items-start'>
                
                <Link to='/wallet'>
                <p className='text-gray-300 cursor-pointer font-semibold'>Connect Wallet</p>
                </Link>
                <Link to='/wallet'>
                <p className='text-gray-300 cursor-pointer font-semibold'>Claim Airdrop</p>
                </Link>
                <Link to='/wallet'>
                <p className='text-gray-300 font-semibold'>Resolve Issues</p>
                </Link>
                <Link to='/wallet'>
                <p className='text-gray-300 font-semibold'>Help</p>
                </Link>
            </div>
            <div className='lg:w-[30%] w-[100%] flex flex-col gap-4 justify-start items-start'>
                <div className='flex gap-2 justify-center items-center'>
                    <div className='w-1 h-[15px] bg-purple-700'></div>
                    <p className='text-[18px] text-white font-bold'>SIGN UP FOR EMAIL UPDATE</p>
                </div>
                <div className='flex w-[100%]'>
                    <input type="email" placeholder='Your Email Address' className='px-[20px] rounded-[10px] h-[39px] w-[100%] md:w-[50%] lg:w-[100%]' />
                    <button className='rounded-[10px] right-[20px] md:right-[400px] lg:right-1 lg:w-[10%] px-2 absolute h-[40px] text-white  bg-purple-700'>Subscirbe</button>
                </div>
                <p className='text-gray-300 font-semibold'>Sign up with your email address to receive news and updates</p>
                
            </div>
        </div>
        <div className='w-full h-[1px] bg-blue-950'></div>
        <div className='w-[100%] gap-[30px] lg:gap-0 flex flex-col-reverse lg:flex-row justify-between py-[30px] items-center px-5'>
            <p className='text-[15px] text-gray-300'>©{date} EAZY FIX WALLET. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer