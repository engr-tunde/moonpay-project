import { Link } from "react-router-dom"
import { SiTrustpilot } from "react-icons/si";

const SwapSection1 =()=>{

    return(
        <div className="bg-[#f9f8fb] ">
            <div className="bg-[#fff] rounded-4xl mb-1">
                <div className="container  pt-16 lg:pt-36 pb-16">
                <div className="flex flex-col gap-14">
                    <div className="flex flex-col gap-2">
                        <div><img src="./images/ethereum.svg" className="h-10 ml-4 lg:ml-0" alt="" /></div>
                        <h1 className="text-[29px] lg:text-[52px] font-semibold ml-4 lg:ml-0 leading-[35px] lg:leading-[80px]">Swap Ethereum seamlessly.</h1>
                        <p className="text-[#7c7373] text-[13.2px] lg:text-[15px] font-semibold ml-3 lg:ml-0">Swap Ethereum quickly and securely, across multiple chains and wallets. It’s all there in your MoonPay account.</p>
                    </div>

                    <div className="flex gap-4 lg:gap-5 items-center ml-4 lg:ml-0 ">
                        <div className="flex gap-2 items-center">
                            <img src="/images/appstore.png" alt="" className="w-6 h-6 rounded-full" />
                            <h2 className="font-semibold text-[15px] lg:text-[16px]">4.4 ★ on App Store</h2>
                        </div>
                        <div className="h-6 border-l-2 border-[#ccc]"></div>
                        <div className="flex gap-2">
                            <img src="/images/playstore.png" alt="" className="w-6 h-6 rounded-full" />
                            <h2 className="font-semibold text-[15px] lg:text-[16px]">4.4 ★ on Google Play</h2>
                        </div> 
                   </div>


                    <div className="flex flex-col md:flex-row gap-4 items-center">
                
                    <Link to="/" className="hidden lg:block bg-black text-white text-[14px] lg:text-[14px] py-3 lg:py-4 px-6 lg:px-6 font-semibold rounded-xl">Get started</Link>
                    <div className="flex justify-center  gap-3">
                    <SiTrustpilot  className="bg-[#e2e8f0] text-[#10b981] text-5xl py-2 px-2 rounded-xl"/>
                    <div className="flex flex-col justify-center">
                        <h2 className="font-semibold">TrustScore 4.0</h2>
                        <p className="text-[#4e4e4e] text-[12px]">102K Reviews</p>
                     </div>
                    </div>
                     <Link to="/" className="lg:hidden bg-black text-white text-[14px] lg:text-[14px] py-3 lg:py-4 px-6 lg:px-6 font-semibold rounded-xl">Get started</Link>
                
                    </div>
                </div>
                </div>
            </div>
             
        </div>
    )
}

export default SwapSection1