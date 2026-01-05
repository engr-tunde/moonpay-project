import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { CiGlobe } from "react-icons/ci";
import { useState } from "react";
import { BuyHover, SellHover, SwapHover } from "../utils/data";

const GeneralHeader = () => {
  
 
  return (
    <div className="w-full py-5">
      {/* Desktop navbar */}
      <div className="container flex items-center justify-between text-white">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <Link to="/"><img src="/images/logo-full-white.svg" alt="" className="h-7" /></Link>

          <div className="flex gap-4 items-center">
            <Link to="" className="font-semibold">
              Individuals
            </Link>
            <Link to="/business" className="text-[#626262]">
              Business
            </Link>
          </div>

          <div className="ml-5 flex gap-4 items-center font-semibold">
            <div className="relative group">              
              <Link to="">Buy</Link>
              <div className="absolute -right-[395px] top-full mt-7 hidden group-hover:flex group-hover:justify-center gap-3 z-50">
                <div className="flex flex-col bg-[#F9F8FB] p-5 w-[220px] rounded-xl">
                  <p className="text-black font-semibold">Buy Crypto</p>
                  <p className="text-[#737373] w-[90%]">Use a card, Apple Pay or Google Pay to buy crypto fast. We also accept bank transfers and wires.</p>
                </div>
                <div className="flex flex-wrap w-[600px] h-[300px] bg-[#F9F8FB] rounded-xl p-7">
                  {BuyHover.map((element,i)=>(
                    <div className="flex gap-4 w-[45%]" key={i}>
                      <img src={element.icon} alt=""  className="w-10 h-10"/>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold">{element.title}</p>
                        <p className="text-[#737373]">{element.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/sell" className="py-2 block">Sell</Link>
              <div className="absolute -right-[350px] top-full mt-7 hidden group-hover:flex group-hover:justify-center gap-3 z-50">
                <div className="flex flex-col bg-[#F9F8FB] p-5 w-[220px] rounded-xl">
                  <p className="text-black font-semibold">Sell Crypto</p>
                  <p className="text-[#737373] w-[90%]">Turn your crypto into cash. In a flash. Get paid straight to your bank account or Visa card.</p>
                </div>
                <div className="flex flex-wrap w-[600px] h-[300px] bg-[#F9F8FB] rounded-xl p-7">
                  {SellHover.map((element,i)=>(
                    <div className="flex gap-4 w-[45%]" key={i}>
                      <img src={element.icon} alt=""  className="w-10 h-10"/>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold">{element.title}</p>
                        <p className="text-[#737373]">{element.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link to="/swap">Swap</Link>
              <div className="absolute -right-72 top-full mt-7 hidden group-hover:flex group-hover:justify-center gap-3 z-50">
                <div className="flex flex-col bg-[#F9F8FB] p-5 w-[220px] rounded-xl">
                  <p className="text-black font-semibold">Swap Crypto</p>
                  <p className="text-[#737373] w-[90%]">Swap between tokens, even if they’re on different chains (we make bridging seamless too).</p>
                </div>
                <div className="flex flex-wrap w-[600px] h-[300px] bg-[#F9F8FB] rounded-xl p-7">
                  {SwapHover.map((element,i)=>(
                    <div className="flex gap-4 w-[45%]" key={i}>
                      <img src={element.icon} alt=""  className="w-10 h-10"/>
                      <div className="flex flex-col">
                        <p className="text-black font-semibold">{element.title}</p>
                        <p className="text-[#737373]">{element.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>            
            <div className="flex items-center relative w-8 h-9 ">
              <CgMenuGridO size={25}/>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="flex justify-between items-center font-bold gap-7">
          <CiGlobe size={20} strokeWidth={1} />
          <button className="text-black text-sm rounded-[40px] px-5 py-3 bg-white">Get Started</button>
        </div>
      </div>
           
    </div>
  );
};

export default GeneralHeader;
