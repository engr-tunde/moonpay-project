import { Link } from "react-router-dom";
import GeneralHeader from "./GeneralHeader";

const HomeSectionOne = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-between gap-8 text-white relative">
        <video src="/images/MP_WebHeader_IvanEdits-1920x1080-v1-RC.mp4"></video>
        <div className="flex flex-col justify-center gap-10 px-16 absolute w-full h-screen leading-normal">
          <GeneralHeader />
          <div className="flex">
            <p>Trusted by millions of customers</p>
            <p>Since 2019</p>
          </div>
          <p className="text-[70px] font-bold -mb-4 w-[45%] leading-20">
            Your passport to crypto
          </p>
          <p className="text-xl font-semibold w-[40%] ">
            The easiest way to buy, sell and use crypto - everywhere.
          </p>
          <div className="flex justify-start items-center gap-5">
            <Link
              to="/"
              className="py-5 px-14 bg-white text-black rounded-[50px]"
            >
              Buy Crypto
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col justify-between">
          <div className="text-[#0009]">Trusted By</div>
          <marquee>
            <div className="inline-flex gap-6 overflow-hidden whitespace-nowrap">
              <img src="/assets/PayPal.png" alt="Paypal" className="w-16" />
              <img src="/assets/Venmo.png" alt="venmo" className="w-16" />
              <img
                src="/assets/Mastercard.png"
                alt="Mastercard"
                className="w-16"
              />
              <img src="/assets/Trust.png" alt="Trust" className="w-16" />
              <img src="/assets/Ledger.png" alt="Ledger" className="w-16" />
              <img src="/assets/MetaMask.png" alt="MetaMask" className="w-16" />
              <img src="/assets/Uniswap.png" alt="Uniswap" className="w-16" />
            </div>
          </marquee>
        </div> */}
      </div>
    </div>
  );
};
export default HomeSectionOne;
