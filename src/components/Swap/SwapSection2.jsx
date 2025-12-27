import Slider from "react-slick";

const SwapSection2 =()=>{

     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

    return(
        <div className="bg-[#f9f8fb]">
           <div className="bg-[#fff] rounded-4xl mb-1">
              <div className="container flex flex-col gap-12 py-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[22px] lg:text-[44px] font-bold ml-4 lg:ml-0">How to swap ETH on MoonPay</h1>
                    <p className="text-[15px] lg:text-[18px] ml-4 lg:ml-0">Here's how to swap Ethereum cross-chain with low fees.</p>
                </div>

                {/*Desktop*/}
                <div className="hidden lg:grid grid-cols-3 gap-1">
                    <div className="col-span-1 flex flex-col gap-6 items-start bg-[#f9f8f5] py-10 px-4 rounded-xl">
                        <img src="/images/connect-wallet-1.svg" alt="" className="h-10" />
                        <h2 className="text-[23px] font-semibold">1. Connect your wallet</h2>
                        <p className="text-[14px] w-[290px] font-semibold text-[#7c7373] ">Before you swap Ethereum, connect your wallet. MoonPay is compatible with WalletConnect and popular ETH wallets including Ledger, Trust Wallet, Rainbow, and Exodus.</p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-6 items-start bg-[#f9f8f5] py-10 px-4 rounded-xl">
                        <img src="/images/choose-crypto-1.svg" alt="" className="h-10" />
                        <h2 className="text-[23px] font-semibold">2. Choose a currency pair</h2>
                        <p className="text-[14px] w-[290px] font-semibold text-[#7c7373] ">Choose Ethereum as the cryptocurrency you’d like to swap, from a wide variety of combinations. Then, enter the destination wallet address.</p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-6 items-start bg-[#f9f8f5] py-10 px-4 rounded-xl">
                        <img src="/images/review-and-confirm.svg" alt="" className="h-10" />
                        <h2 className="text-[23px font-semibold]">3. Review and confirm</h2>
                        <p className="text-[14px] w-[290px] font-semibold text-[#7c7373] ">Review the amount, destination, exchange rate, and any fees. Then go ahead and press swap.</p>
                    </div>

                    <div className="col-span-1 flex flex-col gap-6 items-start bg-[#f9f8f5] py-10 px-4 rounded-xl">
                        <img src="/images/sign-and-send-2.svg" alt="" className="h-10" />
                        <h2 className="text-[23px] font-semibold">4. Sign and send</h2>
                        <p className="text-[14px] w-[290px] font-semibold text-[#7c7373] ">In your wallet app, sign the transaction to send crypto to the MoonPay wallet address.</p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-6 items-start bg-[#f9f8f5] py-10 px-4 rounded-xl">
                        <img src="/images/wait-for-crypto-swap.svg" alt="" className="h-10" />
                        <h2 className="text-[23px] font-semibold">5. Wait for your Ethereum swap to complete</h2>
                        <p className="text-[14px] w-[290px] font-semibold text-[#7c7373]">Ethereum crypto exchanges usually take between a few minutes and a few hours. We’ll email you as soon as it’s done and the coins are in your wallet.</p>
                    </div>

                </div>

                {/*Mobile*/}
                <div className=" block lg:hidden ">

                    <Slider {...settings} className="overflow-hidden w-[96%] mx-auto  ">
                    <div className=" bg-[#f9f8f5] h-[230px]  py-6 px-3 mx-2 rounded-2xl">
                       <div className="flex gap-2 mb-4">
                        <img src="/images/connect-wallet-1.svg" alt="" className="h-10" />
                        <h2 className="text-[20px] font-semibold">1. Connect your wallet</h2>
                       </div>
                        <p className="text-[13px] w-[240px] font-semibold text-[#7c7373] ">Before you swap Ethereum, connect your wallet. MoonPay is compatible with WalletConnect and popular ETH wallets including Ledger, Trust Wallet, Rainbow, and Exodus.</p>
                    </div>

                    <div className="bg-[#f9f8f5] h-[230px]   py-6 px-3 mx-2  rounded-2xl">
                        <div className="flex gap-2 mb-4">
                            <img src="/images/choose-crypto-1.svg" alt="" className="h-10" />
                        <h2 className="text-[19.5px] font-semibold">2. Choose a currency pair</h2>
                        </div>
                        <p className="text-[13px] w-[250px] font-semibold text-[#7c7373] ">Choose Ethereum as the cryptocurrency you’d like to swap, from a wide variety of combinations. Then, enter the destination wallet address.</p>
                    </div>

                    <div className=" bg-[#f9f8f5] h-[230px]  py-6 px-3 mx-2  rounded-2xl">
                       <div className="flex gap-2 mb-4">
                         <img src="/images/review-and-confirm.svg" alt="" className="h-10" />
                        <h2 className="text-[20px] font-semibold">3. Review and confirm</h2>
                       </div>
                        <p className="text-[13px] w-[250px] font-semibold text-[#7c7373] ">Review the amount, destination, exchange rate, and any fees. Then go ahead and press swap.</p>
                    </div>

                    <div className=" bg-[#f9f8f5] h-[230px]  py-6 px-3 mx-2  rounded-2xl">
                        <div className="flex gap-2 mb-4">
                            <img src="/images/sign-and-send-2.svg" alt="" className="h-10" />
                        <h2 className="text-[20px] font-semibold">4. Sign and send</h2>
                        </div>
                        <p className="text-[13px] w-[246px] font-semibold text-[#7c7373] ">In your wallet app, sign the transaction to send crypto to the MoonPay wallet address.</p>
                    </div>
                    <div className="  bg-[#f9f8f5] h-[230px] py-6 px-3 mx-2  rounded-2xl">
                       <div className="flex gap-2 mb-4">
                         <img src="/images/wait-for-crypto-swap.svg" alt="" className="h-10" />
                        <h2 className="text-[18px] w-[200px] font-semibold">5. Wait for your Ethereum swap to complete</h2>
                       </div>
                        <p className="text-[13px] w-[240px] font-semibold text-[#7c7373]">Ethereum crypto exchanges usually take between a few minutes and a few hours. We’ll email you as soon as it’s done and the coins are in your wallet.</p>
                    </div>
                    </Slider>

                    
                </div>
            </div>
           </div>
        </div>
    )
}

export default SwapSection2