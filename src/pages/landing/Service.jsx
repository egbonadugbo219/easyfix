import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { HiReceiptRefund } from "react-icons/hi2";
import { GiAutoRepair } from "react-icons/gi";
import dashboard from '../../image/Dashboard.png'
import { MdToken } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaOpencart } from "react-icons/fa6";
import { RiNftFill } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiToken } from "react-icons/gi";
import { CiBitcoin } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";
import { MdSwapVerticalCircle } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Service() {
    const services = [
        {
            icon: <AiFillSafetyCertificate/>,
            service: "Fix your Wallet Problem",
            detail: "Our platform facilitates fixing Wallet Problem , helping you securely.",
            click: "Explore"

        },
        {
            icon: <HiReceiptRefund/>,
            service: "Refund",
            detail: "Lost access to your cryptocurrency? We specialize in wallet refund, allowing you to regain control of your digital assets.",
            click: "Explore"

        },
        {
            icon: <GiAutoRepair/>,
            service: "Smart Contract Audits and Debugging",
            detail: "Ensure the integrity of your smart contracts. Our experts conduct comprehensive audits and debugging to rectify vulnerabilities and improve security.",
            click: "Explore"

        },
        {
            icon: <MdToken/>,
            service: "Token Deployment and Correction",
            detail: "Launching a token or facing issues with an existing one? We assist with token deployment and rectify any issues to ensure smooth functionality.",
            click: "Explore"

        },
        {
            icon: <GrOptimize/>,
            service: "DeFi Protocol Optimization",
            detail: "Enhance the performance of your DeFi platform. Our experts analyze and optimize your DeFi protocols for efficiency, security, and seamless user experiences",
            click: "Explore"

        },
        {
            icon: <CiBitcoin/>,
            service: "Airdrop Fixes",
            detail: "Resolve issues related to airdrops, ensuring accurate distribution and reception of tokens during airdrop events.",
            click: "Explore"

        },
        {
            icon: <GiToken/>,
            service: "Token Bridge Solutions",
            detail: "Develop and maintain token bridges, enabling seamless transfers and interoperability between different blockchain networks.",
            click: "Explore"

        },
        {
            icon: <RiNftFill/>,
            service: "NFT (Non-Fungible Token) Solutions",
            detail: "Assist in the creation, management, and troubleshooting of NFTs, ensuring a smooth experience in the NFT marketplace.",
            click: "Explore"

        },
        {
            icon: <IoCheckmarkDoneSharp/>,
            service: "APR ACTIVATION",
            detail: "Click here for APR activation.",
            click: "Explore"
        },
        {
            icon: <MdConnectWithoutContact/>,
            service: "CONNECT TO DAPPS",
            detail: "Click here to connect to DAPPS.",
            click: "Explore"
        },
        {
            icon: <BiTransfer/>,
            service: "MIGRATION",
            detail: "Click here for wallet transfer.",
            click: "Explore"
        },
        {
            icon: <MdSwapVerticalCircle/>,
            service: "Swap Functionality Enhancement",
            detail: "Optimize swap functionality within decentralized exchanges (DEXs) for improved speed, accuracy, and user satisfaction.",
            click: "Explore"
        },
        {
            icon: <FaOpencart/>,
            service: "Buy and Sell Liquidity Issues Resolution",
            detail: "Address liquidity challenges affecting buy and sell actions, ensuring a balanced and smooth liquidity provision within trading platforms.",
            click: "Explore"
        },
        {
            icon: <PiHandWithdrawFill/>,
            service: "Deposit and Withdrawal Management",
            detail: "Optimize deposit and withdrawal processes to enhance user experience and streamline fund transfers securely.",
            click: "Explore"
        },
        {
            icon: <FaChartBar/>,
            service: "Slippage Mitigation",
            detail: "Implement strategies to minimize slippage, providing users with more predictable and cost-effective trades.",
            click: "Explore"
        },

    ]
  return (
    <div className='bg-black w-[100%] py-[50px] justify-center items-center flex flex-col '>
        <h1 className='text-white text-[35px] font-bold'>Our Services</h1>
        <p className='text-[#898CA9] w-[90%] text-center text-[20px] mb-[20px]'>Blockchain Rectification Challenges We Can Help You Resolve</p>
        <div className='grid w-[100%] p-[40px] gap-[15px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map((s, index)=>(
                    <div key={index} className='bg-[#1A1B23] px-[20px] gap-[20px] py-[20px] rounded-[20px] flex flex-col justify-center items-center w-[95%]'>
                        <p className='text-purple-600 text-[55px] justify-center items-center flex rounded-full'>{s.icon}</p>
                        <h1 className='text-white font-bold text-[15px]'>{s.service}</h1>
                        <p className='text-[#898CA9]'>{s.detail}</p>
                        <Link to="/wallet"><p className='text-purple-600'>{s.click}</p></Link>
                    </div>
                ))
            }
        </div>
        <div className='w-[90%] md:w-[80%] flex justify-center items-center'>
            <img src={dashboard} alt="" />
        </div>

    </div>
  )
}

export default Service
