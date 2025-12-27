import { Link } from "react-router-dom"

const AllAssests = ()=>{

    return(
        <div>
             <div className="grid grid-cols-1  lg:grid-cols-4 gap-6 lg:gap-8 ml-4 lg:ml-0">
                    <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/bitcoin.svg" alt="" className="h-11" /> Bitcon <span className="text-[#7c7373] ">BTC</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/ethereum.svg" alt="" className="h-10" /> Ethererum <span className="text-[#7c7373] ">ETH</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/aave.svg" alt="" className="h-10" /> Aave <span className="text-[#7c7373] ">AAVE</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/tether-usdt-logo.png" alt="" className="h-10" /> Tether <span className="text-[#7c7373] ">USDT</span>
                        </Link>
                    </div>


                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/usdc logo.png" alt="" className="h-10"/> USDC <span className="text-[#7c7373] ">USDC</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/wbtc.svg" alt="" className="h-10" /> Wrapped Bitcon <span className="text-[#7c7373] ">WBTC</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/dai logo.png" alt="" className="h-10" /> Dai <span className="text-[#7c7373] ">DAI</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/Chainlink-Symbol-Blue.svg" alt="" className="h-10" /> Chainlink <span className="text-[#7c7373] ">LINK</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/comp.svg" alt="" className="h-10" /> Compound <span className="text-[#7c7373] ">COMP</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/weth.svg" alt="" /> Wrapped Ether <span className="text-[#7c7373] ">WETH</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/maker.svg" alt="" /> Maker <span className="text-[#7c7373] ">MRK</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/synthetix.svg" alt="" /> Synthetix <span className="text-[#7c7373] ">SNX</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/bnb-bnb-logo.png" alt="" className="h-10"/> Binance coin <span className="text-[#7c7373] ">BNB</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/apecoin.svg" alt="" /> Apecoin <span className="text-[#7c7373] ">APE</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/rlusd_logo-1.svg" alt="" className="h-10" /> Ripple USD <span className="text-[#7c7373] ">RLUSD</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/shib logo.png" alt="" className="h-10" /> Shiba INU <span className="text-[#7c7373] ">SHIB</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/stellar lumens.svg" alt="" /> Stellar <span className="text-[#7c7373] ">XLM</span>
                        </Link>
                    </div>

                     <div className="col-span-1">
                        <Link to="/" className="flex gap-3 items-center font-semibold">
                            <img src="../../../public/images/solana-1.svg" alt="" /> Solana <span className="text-[#7c7373] ">SOL</span>
                        </Link>
                    </div>

                </div>
        </div>
    )
}

export default AllAssests