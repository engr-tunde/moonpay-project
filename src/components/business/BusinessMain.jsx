import { Link } from "react-router-dom";
import OthersHeader from "../OthersHeader";

const BusinessMain = () => {
    return(
        <div className="">
            <div className="flex justify-between relative">
                <video src="/videos/MP_BizHero_Abstract-25s-8bpc-v2-RF24-x265 (1).mp4"></video>
                <div className="flex flex-col gap-10 text-white px-14 absolute">
                    <OthersHeader />
                    <h1 className="text-6xl w-[40%] font-bold overflow-hidden">How the world moves value</h1>
                    <p className="text-xl w-[60%] font-semibold">MoonPay is a unified payments platform. We connect traditional money and crypto through a single integration, so customers can buy, sell, send, swap, and pay, without ever leaving your product.</p>
                    <div className="flex items-center gap-5 rounded-[50px] bg-[#1C1C1C] p-2 pl-3 w-max font-semibold text-sm">
                        <input type="email" placeholder="What’s your work email?" className="text-[##111111;]" />
                        <button className="flex items-center gap-2 rounded-[50px] bg-white text-black p-5">Get in touch</button>
                    </div>
                </div>
                {/* left side */}
                {/* <div className="flex flex-col gap-7 text-left">
                    <p className="text-[#7D00FF] text-2xl font-semibold uppercase">Crypto On-Ramp</p>
                    <h2 className="text-[#11183C]">Boost your revenue with the world's #1 crypto on-ramp</h2>
                    <p className="text-[#5D6674] text-xl">Our on-ramp gives you global coverage, seamless revenue sharing, and zero risk of fraud or chargebacks. All in a few lines of code.</p>
                    <div className="flex gap-5">
                        <Link to="" className="bg-[#7D00FF] px-7 py-3 rounded-lg">Build with us</Link>
                        <Link className="flex bg-[#F0F0F0] px-7 py-3 rounded-lg">
                            <div>Read our docs</div>
                        </Link>
                    </div>
                </div> */}
                {/* right side */}
                {/* <img src="/images/7h0b1s84unj-ZWABJmAZQnvWVbpHlc6pJ.png" alt="" /> */}
            </div>
        </div>
    )
}
export default BusinessMain;