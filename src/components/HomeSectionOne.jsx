import { IoIosStar } from "react-icons/io";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router-dom";

const HomeSectionOne = () => {
  return (
    <div className="flex justify-between gap-15 py-18 px-28">
      {/* left side */}
      <div className="flex flex-col justify-between w-[50%]">
        <div className="flex flex-col justify-start gap-7">
          <div className="flex justify-start items-center font-bold">
            <div className="flex justify-between items-center gap-1">
              <img
                src="/images/app-store-icon.png"
                alt="app store icon"
                className="w-6 rounded-full mx-2"
              />
              <div>4.4</div>
              <IoIosStar />
              <div>on App Store</div>
            </div>
            <div className="border h-7 mx-4"></div>
            <div className="flex justify-between items-center gap-1">
              <img
                src="/images/play-store-icon.png"
                alt="app store icon"
                className="w-6 mx-2"
              />
              <div>4.5</div>
              <IoIosStar />
              <div>on Google Play</div>
            </div>
          </div>
          <div className="text-[42px] font-bold -mb-4">
            Your passport to crypto
          </div>
          <div className="text-[#000000bf] text-xl font-semibold w-[80%]">
            Your universal account to buy, sell, trade and pay with crypto.
          </div>
          <div className="flex justify-start items-center gap-5">
            <Link
              to=""
              className="py-5 px-14 bg-black text-white rounded-[50px]"
            >
              Buy Crypto
            </Link>
            <SiTrustpilot
              size={55}
              color="#10B981"
              className="rounded-lg bg-[#E2E8F0] p-3"
            />
            <div className="flex flex-col">
              <p className="font-semibold">TrustScore 4.0</p>
              <p className="text-[#64748B] text-xs">102K Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-[#0009]">Trusted By</div>
          <marquee>
            <div className="inline-flex gap-6 overflow-hidden whitespace-nowrap">
              <img src="/assets/PayPal.png" alt="Paypal" className="w-16" />
              <img src="/assets/Venmo.png" alt="venmo" className="w-16" />
              <img src="/assets/Mastercard.png" alt="Mastercard" className="w-16" />
              <img src="/assets/Trust.png" alt="Trust" className="w-16" />
              <img src="/assets/Ledger.png" alt="Ledger" className="w-16" />
              <img src="/assets/MetaMask.png" alt="MetaMask" className="w-16" />
              <img src="/assets/Uniswap.png" alt="Uniswap" className="w-16" />
            </div>
          </marquee>
        </div>
      </div>
      {/* right side */}
      <img
        src="/images/eng-us-hero-main.jpg"
        alt="hero"
        className="w-[50%] rounded-[10%]"
      />
    </div>
  );
};
export default HomeSectionOne;
