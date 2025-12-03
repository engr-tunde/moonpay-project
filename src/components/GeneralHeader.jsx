import { Link } from "react-router-dom";
import { LuSquareMenu } from "react-icons/lu";
import { PiGlobeSimpleBold } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import GlobeDropDown from "./Dropdowns/GlobeDropDown";
import BuyDropDown from "./Dropdowns/BuyDropDown";
import SellDropDown from "./Dropdowns/SellDropDown";
import SwapDropDown from "./Dropdowns/SwapDropDown";

const GeneralHeader = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [globeMouse, setGlobeMouse] = useState(false)
  const [DropDownbuy, setDropDownBuyBuy] = useState(false)
  const [DropDownSell, setDropDownSell]  = useState(false)
  const [DropDownSwap, setDropDownSwap]  = useState(false)

  const DisplayMobileMenu = ()=>{
      setShowMobileMenu(!showMobileMenu)
  }

  {/*On mouseOver Globe Icon*/}
  const HandleGlobeMouse =()=>{
    setGlobeMouse(!globeMouse)
  }

    {/*On mouseLeave on Globe Icon*/}
  const HandleGlobeMouseLeave =()=>{
      setGlobeMouse(!globeMouse)
  }

  {/*Handle buy MouseEnter*/}
const HandleDropDownBuy =()=>{
 setDropDownBuyBuy(true)
}

const ExitDropDownBuy =()=>{
  setDropDownBuyBuy(false)
}

const HandleSellDropDown =()=>{
  setDropDownSell(true)
}
 
const ExitSellDropDown =()=>{
  setDropDownSell(false)
}

const HandleSwapDropDown =()=>{
  setDropDownSwap(true)
}
 
const ExitSwapDropDown =()=>{
  setDropDownSwap(false)
}


  return (
    <div>

      <div className="w-screen py-5 bg-[#F9F8FB] shadow-sm ">
          {/* Desktop navbar */}
      <div className="container hidden lg:flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src="/images/logo-coloured.png" alt="" className="h-7" />
          <div className="flex gap-4 items-center">
            <Link to="/" className="text-black font-semibold">
              Individuals
            </Link>
            <Link to="/" className="text-black/90">
              Business
            </Link>
          </div>

          <div className="ml-5 flex gap-4 items-center font-semibold">
            <Link to=""><span onMouseEnter={HandleDropDownBuy} onMouseLeave={ExitDropDownBuy}>Buy</span>
            {DropDownbuy === true ? <BuyDropDown/> :''} 
            </Link>

            <Link to=""><span onMouseEnter={HandleSellDropDown} onMouseLeave={ExitSellDropDown}>Sell</span>
              {DropDownSell === true ? <SellDropDown/>: ''}
            </Link>

            <Link to=""><span onMouseEnter={HandleSwapDropDown} onMouseLeave={ExitSwapDropDown}>Swap</span>
            {DropDownSwap ? <SwapDropDown/> : ''}
            </Link>
            <LuSquareMenu />
          </div>
        </div>

        {/*Right side */}
        <div className="flex gap-5 items-center mr-5 font-semibold">
          <Link to="" className="text-xl"><PiGlobeSimpleBold  onMouseEnter={HandleGlobeMouse}  />
           {globeMouse === true ? <GlobeDropDown/> : ''}
          </Link>
          
          <Link to="" className="bg-black text-white px-5 py-2 text-[15px] rounded-xl">Get started</Link>
        </div>
      </div>

      {/*Mobile Navbar*/}
      <div className="flex lg:hidden items-center justify-between px-6">
        <img src="/images/logo-coloured.png" alt="" className="h-7" />
        <button onClick={DisplayMobileMenu}>
          {showMobileMenu ? <RiCloseFill className="text-xl"/> : <CgMenuGridO className="text-xl"/>}
        </button>
       
        
      </div>

      </div>
      
      
      {/*Menu Container*/}
        <div className={showMobileMenu === true ? "flex flex-col gap-5 w-screen py-3 " :'hidden'}>
          <div className="flex gap-3 py-3 px-3 shadow-md">
              <Link to="/" className="text-[13px] font-semibold bg-[#eee] rounded-xl px-4 py-1">Individuals</Link>
              <Link to="/" className="text-[13px] font-semibold bg-[#eee] rounded-xl px-4 py-1">Business</Link>
          </div>
          <div className="flex flex-col gap-5">
              <div className="MenuContainerSection2"><Link to="/">Buy</Link><Link><MdOutlineKeyboardArrowRight className="text-[18px]" /></Link></div>
              <div className="MenuContainerSection2"><Link to="/">Sell</Link><Link><MdOutlineKeyboardArrowRight className="text-[18px]"/></Link></div>
              <div className="MenuContainerSection2"><Link to="/">Swap</Link><Link><MdOutlineKeyboardArrowRight className="text-[18px]" /></Link></div>
              <div className="MenuContainerSection2"><Link to="/">Company</Link><Link><MdOutlineKeyboardArrowRight className="text-[18px]" /></Link></div>
              <div className="MenuContainerSection2"><Link to="/">Crypto Prices</Link><Link><MdOutlineKeyboardArrowRight className="text-[18px]"/></Link></div>
              <div className="MenuContainerSection2"><Link to="/">Learn</Link><Link><MdOutlineKeyboardArrowRight className="text-[18px]"/></Link></div>
              <div className="MenuContainerSection2"><Link to="/">Support</Link><Link><MdOutlineKeyboardArrowRight className="text-[18px]"/></Link></div>
          </div>
          <div className="flex px-5">
                 <PiGlobeSimpleBold />
          </div>

        </div>
    </div>
  );
};

export default GeneralHeader;
