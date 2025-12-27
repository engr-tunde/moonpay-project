import { Link } from "react-router-dom"
import { SiTrustpilot } from "react-icons/si";
import Marquee from "react-fast-marquee";

const HomeSection1 = () =>{

    return(
    <div className="w-screen">
        <section className="container flex flex-col gap-10 lg:gap-0 lg:flex-row items-center  lg:justify-between pt-8 lg:pt-18">
        {/*Left side*/}
        <div className="lg:w-[55%] flex items-center lg:items-start flex-col gap-24">
            <div className="flex flex-col items-center lg:items-start gap-6 ">
            <div className="flex gap-5 items-center">
                <div className="flex gap-2 items-center">
                    <img src="/images/appstore.png" alt="" className="w-6 h-6 rounded-full" />
                     <h2 className="font-semibold">4.4 ★ on App Store</h2>
                </div>
                <div className="lg:h-6 border-l-\[1px\] border-[#ccc]"></div>
                <div className="hidden lg:flex gap-2">
                    <img src="/images/playstore.png" alt="" className="w-6 h-6 rounded-full" />
                     <h2 className="font-semibold">4.4 ★ on Google Play</h2>
                </div> 
            </div>
            <h1 className="text-[28px] lg:text-[43px] font-semibold">Your passport to crypto</h1>
            <h3 className="w-[60%] lg:w-[58%] text-[16px] lg:text-[18px] lg:font-semibold">Your universal account to buy, sell, trade and pay with crypto.</h3>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                
                <Link to="/" className="bg-black text-white text-[14px] lg:text-[12px] py-3 lg:py-5 px-6 lg:px-16 font-semibold rounded-4xl">Buy Crypto</Link>
                <div className="flex justify-center  gap-3">
                    <SiTrustpilot  className="bg-[#e2e8f0] text-[#10b981] text-5xl py-2 px-2 rounded-xl"/>
                    <div className="flex flex-col justify-center">
                        <h2 className="font-semibold">TrustScore 4.0</h2>
                        <p className="text-[#4e4e4e] text-[12px]">102K Reviews</p>
                     </div>
                </div>
                
            </div>
            </div>

            <h2 className="hidden lg:block text-[#666666] font-semibold">Trusted By</h2>

        </div>
        
        {/*Right side*/}   
        <img src="/images/eng-us-hero-main.jpg" alt=""  className="w-[95%] md:w-[70%] lg:w-[43%] rounded-4xl"/>

         <h2 className="lg:hidden text-[#666666] font-semibold ">Trusted By</h2>
        </section>
    {/*
        <div className="ml-38 w-[50%]">
            <marquee behavior="scroll" scrollamount="2" direction="">
                <div className="flex gap-7">
                    <img src="../../../images/PayPal.png" alt=""className="w-[50px]" />
                    <img src="../../../public/images/Venmo.png" alt="" className="w-[50px]" />
                    <img src="/images/Mastercard.png" alt="" className="w-[50px]" />
                    <img src="../../../images/Trust.png" alt="" className="w-[50px]" />
                    <img src="../../../images/Ledger.png" alt="" className="w-[50px]"/>
                    <img src="../images/MetaMask.png" alt="" className="w-[50px]"/>
                    <img src="../../../images/Uniswap.png" alt=""className="w-[50px]" />
                </div>
            </marquee>

        </div>
    */}
        
        <div className="w-[80%] lg:w-[50%] py-3 mx-auto  lg:ml-38">
            <div className="move flex gap-5 lg:gap-8">
                    <img src="/images/PayPal.png" alt=""className="w-[250px] lg:w-[65px]" />
                    <img src="/images/Venmo.png" alt="" className="w-[250px] lg:w-[65px]" />
                    <img src="/images/Mastercard.png" alt="" className="w-[250px] lg:w-[65px]" />
                    <img src="/images/Trust.png" alt="" className="w-[250px] lg:w-[65px]" />
                    <img src="/images/Ledger.png" alt="" className="w-[250px] lg:w-[65px]"/>
                    <img src="/images/MetaMask.png" alt="" className="w-[250px] lg:w-[60px]"/>
                    <img src="/images/Uniswap.png" alt=""className="w-[250px] lg:w-[65px]" />
                </div>
        </div>
        
        
    </div>
    )
}

export default HomeSection1