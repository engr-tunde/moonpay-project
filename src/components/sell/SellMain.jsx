import { FaBars } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router-dom";

const SellMain = () => {
  return (
    <div className="p-28 rounded-[40px] bg-white">
      <div className="flex justify-between items-center py-6">
        <img src="/public/assets/bitcoin-btc-logo-1.png" alt="BTC" className="w-10" />
        <FaBars size={25} />
      </div>
      <div className="flex justify-between">
        {/* left side       */}
        <div className="flex flex-col justify-center gap-6 w-[53%]">
          <h1 className="text-5xl font-semibold overflow-hidden w-[90%]">Sell Bitcoin for Fiat. Cash Out BTC in a Few Clicks</h1>
          <p className="text-[#737373] font-semibold">MoonPay offers a simple, fast, and safe checkout to turn your BTC into cash. Easily sell Bitcoin for fiat into your bank account or card*. * Sell-to-Card available in over 80 countries. See full list below.</p>
          <div className="flex justify-start py-5 font-semibold">
            <div className="flex justify-between items-center gap-1">
              <img src="/images/app-store-icon.png" alt="app store icon"             className="w-6 rounded-full mx-2" />
              <div>4.4</div>
              <IoIosStar />
              <div>on App Store</div>
            </div>
            <div className="border border-black/10 h-7 mx-4"></div>
            <div className="flex justify-between items-center gap-1">
              <img src="/images/play-store-icon.png" alt="app store icon"            className="w-6 mx-2"/>
              <div>4.5</div>
              <IoIosStar />
              <div>on Google Play</div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <Link to="" className="py-3 px-4 bg-black font-semibold text-white rounded-lg">
            Get Started</Link>
            <SiTrustpilot size={55} color="#10B981" className="rounded-lg bg-[#E2E8F0] p-3"/>
            <div className="flex flex-col">
                <p className="font-semibold">TrustScore 4.0</p>
                <p className="text-[#64748B] text-xs">102K Reviews</p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col gap-5 text-center w-[35%]">
          <h4 className="text-3xl font-bold">Coming soon to your region!</h4>
          <p className="text-[16px]">Our team is working diligently to expand our reach, with the goal of supporting your region in the near future. Once we're ready to roll, we'll make sure to drop you a note.</p>
        </div>
      </div>
    </div>
  );
};
export default SellMain;
