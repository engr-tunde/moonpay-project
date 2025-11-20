import { CiGlobe } from "react-icons/ci";
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

const GeneralFooter = () => {
  return (
    <div className="flex flex-col bg-black text-[#626262] text-[14px] font-semibold px-32">
      <img src="/public/images/logo-full-white.svg" alt="logo-full-white" className="w-32  py-[50px]"/>
      <div className="flex flex-wrap">
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Personal</h1>
          <Link>Buy Crypto</Link>
          <Link>Sell Crypto</Link>
          <Link>Swap Crypto</Link>
          <Link>Learn about Crypto</Link>
          <Link>Crypto Price</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Business</h1>
          <Link>On Ramps</Link>
          <Link>Off Ramps</Link>
          <div><Link>Virtual Accounts </Link><span>New!</span></div>
          <Link>MoonPay Discover</Link>
          <Link>MoonPay Commerce</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Company</h1>
          <Link>About Us</Link>
          <div><Link>Careers </Link><span>We're hiring</span></div>
          <Link>Newsroom</Link>
          <Link>Media</Link>
          <Link>Changelog</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Support</h1>
          <Link>API Docs</Link>
          <Link>Help Center</Link>
          <Link>Contact Us</Link>
          <Link>Status</Link>
          <Link>Security</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Learn</h1>
          <Link>What is Blockchain?</Link>
          <Link>What are NFTs?</Link>
          <Link>What is Bitcoin mining?</Link>
          <Link>What is DeFi?</Link>
          <Link>What is crypto staking?</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Buy</h1>
          <Link>Buy Bitcoin</Link>
          <Link>Buy Ethereum</Link>
          <Link>Buy Solana</Link>
          <Link>Buy Cardano</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Sell</h1>
          <Link>Sell Bitcoin</Link>
          <Link>Sell Ethereum</Link>
          <Link>Sell XRP</Link>
          <Link>Sell Solana</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Swap</h1>
          <Link>Swap Ethereum</Link>
          <Link>Swap SOL</Link>
          <Link>Swap Aave</Link>
          <Link>Swap Chainlink</Link>
        </div>
        <div className="flex flex-col gap-3 w-[25%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Crypto Prices</h1>
          <Link>Bitcoin Price</Link>
          <Link>Ethereum Price</Link>
          <Link>Dogecoin Price</Link>
          <Link>XRP Price</Link>
          <Link>Cardano Price</Link>
        </div>
        <div className="flex flex-col gap-3 w-[20%] mb-7">
          <h1 className="text-white mb-3 text-[16px]">Legal</h1>
          <Link>Licenses</Link>
          <Link>Privacy Policy</Link>
          <Link>Cookie Policy</Link>
          <Link>Terms of Use</Link>
        </div>        
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between">
          <IoLogoFacebook size={25} className="bg-white" />
          <FaXTwitter size={25} color="white" />
          <FaLinkedin size={25} />
          <FiInstagram size={25} color="white" />
          <FaYoutube size={25} />
        </div>
        <div className="flex justify-between">
          <CiGlobe size={20} strokeWidth={1} />
          <span>English</span>
        </div>
      </div>
    </div>
  );
};

export default GeneralFooter;
