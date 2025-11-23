import React from 'react'
import { Link } from 'react-router-dom';

function HomeSectionThree() {
  return (
    <div className='w-full h-full flex justify-between items-center gap-16 my-16 px-28'>
        <div className="w-[70%]  flex flex-col gap-5">
            <p className='font-bold text-5xl overflow-y-hidden'>Countless tokens at your fingertips.</p>
            <p><span className='font-bold'>From the headlines to hidden opportunities.</span> Explore DeFi with MoonPay - simple, direct, decentralized trading that keeps you in control.</p>
            <Link to="" className='py-3 px-5 bg-black rounded-[40px] text-white w-max'>Discover</Link>
        </div>
        <div className="flex flex-col text-center gap-4">
          <img src="/images/eng-100m-main.jpg" alt="eng-us-100m-tablet"  className="rounded-[40px]" />
          <div className="text-xs text-[#595959]">DeFi trading services are not available in the EEA or New York.</div>
        </div>
    </div>
  )
}

export default HomeSectionThree;
