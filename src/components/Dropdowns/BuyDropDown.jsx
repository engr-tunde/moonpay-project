import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BuyDropDown =()=>{

    return(
        <div>
            <div className="absolute grid grid-cols-3 gap-1 w-[750px] top-22 left-[300px] h-[250px] ">
                <div className="col-span-1 flex flex-col gap-3 bg-[#F9F8FB] px-3 py-4 rounded-xl">
                    <div className="flex justify-between px-2">
                        <h2 className="text-[15px]">Buy Crypto</h2>
                        <MdOutlineKeyboardArrowRight className="text-[18px]" />
                    </div>
                    <h2 className="w-[180px] font-light px-2 text-[16px]">
                        Use a card, Apple Pay or Google Pay to buy crypto fast. We also accept bank tranfers and wires
                    </h2>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-3 bg-[#F9F8FB] rounded-xl py-4 px-5">
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/bitcoin.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Buy Bitcoin</h2><span className="text-[15px]">BTC</span>
                        </div>  
                    </div>
    
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/dogecoin.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Buy Dogecoin</h2><span className="text-[15px]">DOGE</span>
                        </div>
                    </div>
                     <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/ethereum.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Buy Etheruem</h2><span className="text-[15px]">ETH</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/cardano-ada-logo-1.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Buy Cardano</h2><span className="text-[15px]">ADA</span>
                        </div>
                    </div>
                     <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/polygon-matic-logo.svg" className="h-[30px] rounded-full " alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[15px]">Buy Polygon</h2><span className="text-[15px]">POL</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/avax logo.svg" className="h-[30px]" alt="" />
                        <div className="flex flex-col items-start">
                            <h2 className="text-[14.5px]">Buy Avalanche</h2><span className="text-[15px]">AVAX</span>
                        </div>
                    </div>
                    <div className="col-span-1 flex gap-2 bg-[#F9F8FB]">
                        <img src="../images/solana-1.svg" className="h-[30px]" alt="" />
                           <div className="flex flex-col items-start">
                            <h2 className="text-[15px]">Buy Solana</h2><span className="text-[15px]">SOL</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BuyDropDown