import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io";
import { RiArrowRightWideLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const GeneralFooter = () => {
  const[showLang, setshowLang]= useState(false)

  const handleShow = () => {
    setshowLang(!showLang)
  }
  const handleclose = () => {
    setshowLang(false)
  }


  return (
    <div className="flex flex-col bg-black text-[#626262] text-[14px] font-semibold px-32 foot">
      <img
        src="/images/logo-full-white.svg"
        alt="logo-full-white"
        className="w-32  py-[50px]"
      />
      <div className="flex flex-wrap">
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Personal</h1>
          <Link className="hover:text-white w-max" >Buy Crypto</Link>
          <Link className="hover:text-white w-max" >Sell Crypto</Link>
          <Link className="hover:text-white w-max" >Swap Crypto</Link>
          <Link className="hover:text-white w-max" >Learn about Crypto</Link>
          <Link className="hover:text-white w-max" >Crypto Price</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Business</h1>
          <Link className="hover:text-white w-max" >On Ramps</Link>
          <Link className="hover:text-white w-max" >Off Ramps</Link>
          <div className="flex justify-between items-center gap-4 text-xs hover:text-white w-max">
            <Link>Virtual Accounts </Link>
            <span className="text-white bg-[#7D00FF] p-2 rounded-lg">New!</span>
          </div>
          <Link className="hover:text-white w-max" >MoonPay Discover</Link>
          <Link className="hover:text-white w-max" >MoonPay Commerce</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Company</h1>
          <Link className="hover:text-white w-max" >About Us</Link>
          <div className="flex justify-between items-center gap-4 text-xs hover:text-white w-max" >
            <Link>Careers </Link>
            <span className="text-white bg-[#7D00FF] p-2 rounded-lg">We're hiring</span>
          </div>
          <Link className="hover:text-white w-max" >Newsroom</Link>
          <Link className="hover:text-white w-max" >Media</Link>
          <Link className="hover:text-white w-max" >Changelog</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Support</h1>
          <Link className="hover:text-white w-max" >API Docs</Link>
          <Link className="hover:text-white w-max" >Help Center</Link>
          <Link className="hover:text-white w-max" >Contact Us</Link>
          <Link className="hover:text-white w-max" >Status</Link>
          <Link className="hover:text-white w-max" >Security</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Learn</h1>
          <Link className="hover:text-white w-max">What is Blockchain?</Link>
          <Link className="hover:text-white w-max">What are NFTs?</Link>
          <Link className="hover:text-white w-max">What is Bitcoin mining?</Link>
          <Link className="hover:text-white w-max">What is DeFi?</Link>
          <Link className="hover:text-white w-max">What is crypto staking?</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Buy</h1>
          <Link className="hover:text-white w-max">Buy Bitcoin</Link>
          <Link className="hover:text-white w-max">Buy Ethereum</Link>
          <Link className="hover:text-white w-max">Buy Solana</Link>
          <Link className="hover:text-white w-max">Buy Cardano</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Sell</h1>
          <Link className="hover:text-white w-max">Sell Bitcoin</Link>
          <Link className="hover:text-white w-max">Sell Ethereum</Link>
          <Link className="hover:text-white w-max">Sell XRP</Link>
          <Link className="hover:text-white w-max">Sell Solana</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Swap</h1>
          <Link className="hover:text-white w-max">Swap Ethereum</Link>
          <Link className="hover:text-white w-max">Swap SOL</Link>
          <Link className="hover:text-white w-max">Swap Aave</Link>
          <Link className="hover:text-white w-max">Swap Chainlink</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Crypto Prices</h1>
          <Link className="hover:text-white w-max">Bitcoin Price</Link>
          <Link className="hover:text-white w-max">Ethereum Price</Link>
          <Link className="hover:text-white w-max">Dogecoin Price</Link>
          <Link className="hover:text-white w-max">XRP Price</Link>
          <Link className="hover:text-white w-max">Cardano Price</Link>
        </div>
        <div className="flex flex-col gap-3 w-[20%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Legal</h1>
          <Link className="hover:text-white w-max">Licenses</Link>
          <Link className="hover:text-white w-max">Privacy Policy</Link>
          <Link className="hover:text-white w-max">Cookie Policy</Link>
          <Link className="hover:text-white w-max">Terms of Use</Link>
        </div>
      </div>
      <div className="flex justify-between items-center my-2.5">
        <div className="flex justify-between gap-16">
          <IoLogoFacebook size={25} color="white" />
          <FaXTwitter size={25} color="white" />
          <FaLinkedin size={25} color="white" />
          <FiInstagram size={25} color="white" />
          <FaYoutube size={25} color="white" />
        </div>
        <div className="relative flex justify-between items-center my-2.5">
          <div className="relative group flex items-center gap-2 cursor-pointer">
            <CiGlobe size={20} strokeWidth={1} color="white" />
            <span>English</span>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-[#2A2A2A] shadow-lg rounded-lg z-50">
              <div className="flex flex-col px-2 py-5 rounded-lg overflow-visible">
                <p>Language</p>
                <div className="flex items-center gap-1">
                  <p>English</p>
                  <RiArrowRightWideLine />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-10">
        <div className="flex flex-col gap-10 w-[42%] ">
          <div className="flex justify-between gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="bg-[#2A2A2A] font-normal rounded-lg w-[300px] py-2 px-5"
            />
            <Link className="bg-[#2A2A2A] rounded-lg text-white px-5 py-2">
              Subscribe
            </Link>
          </div>
          <div className="flex items-center gap-3 font-normal">
            <input type="checkbox" className="w-12 bg-transparent" />
            <p className="text-xs">Check this box to receive communications from MoonPay. You can unsubscribe at any time. We look after your data - see our <span className="underline">privacy policy.</span></p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-5">
          <img src="/images/app-store-en.png" alt="app store" />
          <img src="/images/google-play-en.png" alt="google play" />
        </div>
      </div>
      <div className="text-xs font-normal mb-[70px]">All rights reserved. MoonPay USA LLC is a registered money service business (NMLS ID: 2071245). For Law Enforcement requests please direct your official document to our compliance team here.</div>
    </div>
  );
};

export default GeneralFooter;
