import { LuArrowUpRight } from "react-icons/lu";


const SwapHelp = () => {
    return(
        <div className="p-28 rounded-tl-[30px] rounded-tr-[30px] bg-black text-white">
            <h2>Need some help before swapping ETH?</h2>
            <div className="flex gap-1 py-20">
                <div className="flex flex-col gap-3 rounded-[40px] bg-[#1A1A1A] p-8">
                    <img src="/public/images/learn section asset.png" alt="" />
                    <div className="flex flex-col justify-between ">
                        <h4 className="text-2xl font-semibold">Starting in Crypto: NFTs and Web3 Trends</h4>
                        <div className="flex items-center">
                            <p className="text-[#737373] font-semibold">Learn all about crypto swaps and NFTs, and discover what’s trending in the budding world of Web3.</p>
                            <LuArrowUpRight size={70} color="white" className="bg-[#313131] p-1 rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 rounded-[40px] bg-[#1A1A1A] p-8">
                    <img src="/images/help asset.png" alt="" />
                    <div className="flex flex-col justify-between gap-7">
                        <h4 className="text-2xl font-semibold">Help Center</h4>
                        <div className="flex items-center">
                            <p className="text-[#737373] font-semibold">Find all the answers to your MoonPay questions and start swapping cryptocurrency with confidence.</p>
                            <LuArrowUpRight size={70} color="white" className="bg-[#313131] p-1 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SwapHelp;