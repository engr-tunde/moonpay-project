import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SellDropDown =()=>{

    return(
        <div>
            <div className="absolute grid grid-cols-3 gap-1 w-[750px] top-22 left-[300px] h-[250px] ">
                <div className="col-span-1 flex flex-col gap-3 bg-[#F9F8FB] px-3 py-4 rounded-xl">
                    <div className="flex justify-between px-2">
                        <h2 className="text-[15px]">Sell Crypto</h2>
                        <MdOutlineKeyboardArrowRight className="text-[18px]" />
                    </div>
                    <h2 className="w-[180px] font-light px-2 text-[16px]">
                        Turn your crypto into cash. in a flash. Get paid straight into your bank account or Visa card
                    </h2>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-3 bg-[#F9F8FB] rounded-xl py-4 px-5">
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/bitcoin.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Sell Bitcoin</h2><span className="text-[15px]">BTC</span>
                        </div>  
                    </div>
    
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/dogecoin.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Sell Dogecoin</h2><span className="text-[15px]">DOGE</span>
                        </div>
                    </div>
                     <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/ethereum.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Sell Etheruem</h2><span className="text-[15px]">ETH</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/cardano-ada-logo-1.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Sell Cardano</h2><span className="text-[15px]">ADA</span>
                        </div>
                    </div>
                     <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/usdc logo.png" className="h-[30px] rounded-full " alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[15px]">Sell USDC</h2><span className="text-[15px]">POL</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/avax logo.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Sell Avalanche</h2><span className="text-[15px]">AVAX</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/solana-1.svg" className="h-[30px]" alt="" />
                           <div className="flex flex-col items-start">
                            <h2 className="text-[15px]">Sell Solana</h2><span className="text-[15px]">SOL</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SellDropDown