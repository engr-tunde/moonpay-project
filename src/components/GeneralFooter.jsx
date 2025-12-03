import { Link } from "react-router-dom";
import { PiGlobeSimpleBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { IoLogoYoutube } from "react-icons/io5";


const GeneralFooter = () => {

    

  return (
    <div className="bg-black p-10">
      <div className="container text-white">
         <img src="/images/logo-full-white.svg" alt="" className="h-5" />

         <div className="grid grid-cols-4 mt-7">
            <div className="col-span-1 flex flex-col gap-6">
              <h2 className="font-semibold text-[15px]">Personal</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Buy Crypto</Link>
              <Link className="hover:text-[#fff]">Sell Crypto</Link>
              <Link className="hover:text-[#fff]">Swap Crypto</Link>
              <Link className="hover:text-[#fff]">Learn about Crypto</Link>
              <Link className="hover:text-[#fff]">Crypto Price</Link>
              </div>
             
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <h2 className="font-semibold text-[15px]">Business</h2>
             <div className="flex flex-col gap-4 text-[#626262] text-[13px] ">
               <Link className="hover:text-[#fff]">On Ramps</Link>
              <Link className="hover:text-[#fff]">Off Ramps</Link>
              <Link className="flex gap-4 items-center hover:text-[#fff]">Virtual Accounts <span className="bg-[#7d00ff] text-[11.5px] font-medium text-white py-1 px-2 rounded-md">New!</span></Link>
              <Link className="hover:text-[#fff]">MoonPay Discover</Link>
              <Link className="hover:text-[#fff]">MoonPay Commerce</Link>
             </div>
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <h2 className="font-semibold text-[15px]">Company</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">About Us</Link>
              <Link className="flex gap-4 items-center hover:text-[#fff]">Careers <span className="bg-[#7d00ff] text-[11.5px] font-medium text-white py-1 px-2 rounded-md">We're hiring</span></Link>
              <Link className="hover:text-[#fff]">Newsroom</Link>
              <Link className="hover:text-[#fff]">Media</Link>
              <Link className="hover:text-[#fff]">Changlog Price</Link>
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              <h2 className="font-semibold text-[15px]">Support</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Buy Crypto</Link>
              <Link className="hover:text-[#fff]">Sell Crypto</Link>
              <Link className="hover:text-[#fff]">Swap Crypto</Link>
              <Link className="hover:text-[#fff]">Learn about Crypto</Link>
              <Link className="hover:text-[#fff]">Crypto Price</Link>
              </div>
            </div>
         </div>


          <div className="grid grid-cols-4 mt-7">
            <div className="col-span-1 flex flex-col gap-6">
              <h2 className="font-semibold text-[15px]">Learn</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Buy Crypto</Link>
              <Link className="hover:text-[#fff]">Sell Crypto</Link>
              <Link className="hover:text-[#fff]">Swap Crypto</Link>
              <Link className="hover:text-[#fff]">Learn about Crypto</Link>
              <Link className="hover:text-[#fff]">Crypto Price</Link>
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <h2 className="font-semibold text-[15px]">Buy</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Buy Bitcoin</Link>
              <Link className="hover:text-[#fff]">Buy Ethereum</Link>
              <Link className="hover:text-[#fff]">Buy Solana</Link>
              <Link className="hover:text-[#fff]">Buy Cardano</Link>
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <h2 className="font-semibold text-[15px]">Sell</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Sell Bitcoin</Link>
              <Link className="hover:text-[#fff]">Sell Ethereum</Link>
              <Link className="hover:text-[#fff]">Sell XRP</Link>
              <Link className="hover:text-[#fff]">Sell Solana</Link>
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <h2 className="font-semibold text-[15px]">Swap</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Swap Ethereum</Link>
              <Link className="hover:text-[#fff]">Swap Solana</Link>
              <Link className="hover:text-[#fff]">Swap Aave</Link>
              <Link className="hover:text-[#fff]">Swap Chainlink</Link>
              </div>
            </div>
         </div>

          <div className="grid grid-cols-4 mt-7">
            <div className="col-span-1 flex flex-col gap-6">
              <h2 className="font-semibold text-[15px]">Crypto Prices</h2>
               <div className=" flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Bitcoin Price</Link>
              <Link className="hover:text-[#fff]">Ethereum Price</Link>
              <Link className="hover:text-[#fff]">Dogecoin Price</Link>
              <Link className="hover:text-[#fff]">XRP Price</Link>
              <Link className="hover:text-[#fff]">Cardano Price</Link>
               </div>
            </div>

            <div className="col-span-1 flex flex-col gap-6">
              <h2>Legal</h2>
              <div className="flex flex-col gap-4 text-[#626262] text-[13px]">
              <Link className="hover:text-[#fff]">Lincense</Link>
              <Link className="hover:text-[#fff]">Privacy Policy</Link>
              <Link className="hover:text-[#fff]">Cookie Policy</Link>
              <Link className="hover:text-[#fff]">Terms of Use</Link>
              </div>
            </div>
            </div>

            <div className="flex justify-between mt-9 ">
              <div className=" flex gap-10 text-[22.5px]">
                 <Link><ImFacebook2 /></Link>
                <Link><BsTwitterX /></Link>
                <Link><FaLinkedin /></Link>
                <Link><PiInstagramLogoBold /></Link>
                <Link><IoLogoYoutube /></Link>
               
              </div>
              <div>
                <Link to="" className="text-[18px] flex items-center gap-2"><PiGlobeSimpleBold />
                   English        
                </Link>
              </div>
              
            </div>

            <div className="flex mt-7 items-center justify-between">
              <form action="" className="flex flex-col gap-10">
              <div className="flex gap-3">
                 <input type="email" placeholder="Email address" className="text-white py-2 px-5  rounded-lg outline-neutral-200 w-[340px] bg-[#2a2a2a]" />
                <input type="submit" value="Subscribe" className="bg-[#2a2a2a] py-1 px-3 rounded-xl "/>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" className="bg-[#2a2a2a] accent-[#2a2a2a] text-[#2a2a2a] w-[16px]"/>
                  <label htmlFor="" className="w-[420px] text-[12px] text-[#434235] leading-5">
                  Check this box to receive communications from MoonPay. You can unsubscribe at any time. We look after your data - see our privacy policy.</label>
                </div>
                
              </form>
              <div className="flex gap-3">
                  <img src="/images/app-store-en.png" alt="" className="cursor-pointer" />
                   <img src="/images/google-play-en.png" alt="" className="cursor-pointer" />
              </div>
            </div>
          
             <div className="flex items-center justify-between gap-4 mt-7">
                <p className="text-[11.5px] text-[#2a2a2a]">All rights reserved. MoonPay USA LLC is a registered money service business (NMLS ID: 2071245). For Law Enforcement requests please direct your official document to our compliance team here.</p>

                <div className="w-[100px] h-[100px] bg-[#1a1a1a] border-[0.7px] border-[#fff] rounded-md flex items-center justify-center cursor-pointer">
                  <img src="../../public/images/app-download-qr-code.svg" alt="" className="w-[80%] h-[80%]" />
                </div>
              </div>


       
      </div>
    </div>
  );
};

export default GeneralFooter;
