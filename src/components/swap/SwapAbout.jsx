import { FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const SwapAbout = () => {
    return(
        <div className="p-28 rounded-[40px] bg-white w-screen">
            <h2 className="w-[70%]">Frequently asked questions about swapping Ethereum</h2>
            <div className="flex gap-1 font-semibold text-[15px]">
                {/* left side */}
                <div className="flex flex-col gap-1 w-[50%]">
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>Why am I not seeing Ethereum as the cryptocurrency I want to swap?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>Why do I need to send my ETH to an external wallet address?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>Can I swap Bitcoin on MoonPay?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>How long does it take to receive my cryptocurrency after initiating a swap?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>Is MoonPay a safe platform to exchange Ethereum?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                </div>
                {/* right side */}
                <div className="flex flex-col gap-1 w-[50%]">
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>What are the limits for Ethereum exchanges?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>What are the fees for cryptocurrency exchanges?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>Can I exchange ETH without KYC on MoonPay?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-full p-8 rounded-[50px]">
                        <p>How can I contact MoonPay?</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SwapAbout;