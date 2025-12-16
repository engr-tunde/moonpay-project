import { IoIosStar } from "react-icons/io";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router-dom";

const SwapMain = () => {
    return(
        <div className="w-full h-screen flex flex-col justify-center gap-6 pb-28 pt-36 px-28 rounded-[40px] bg-white">
            <img src="/assets/ethereum-2.svg" alt="ETH" className="w-10" />
            <h1 className="text-5xl font-semibold overflow-hidden">Swap Ethereum seamlessly.</h1>
            <p className="text-[#737373] font-semibold">Swap Ethereum quickly and securely, across multiple chains and wallets. It’s all there in your MoonPay account.</p>
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
            <div className="flex justify-start items-center gap-5">
                <Link to="" className="py-3 px-4 bg-black font-semibold text-white rounded-lg">
                Get Started</Link>
                <SiTrustpilot size={55} color="#10B981" className="rounded-lg bg-[#E2E8F0] p-3"/>
                <div className="flex flex-col">
                    <p className="font-semibold">TrustScore 4.0</p>
                    <p className="text-[#64748B] text-xs">102K Reviews</p>
                </div>
            </div>
        </div>
    )
}
export default SwapMain;