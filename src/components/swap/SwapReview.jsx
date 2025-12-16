import { SiTrustpilot } from "react-icons/si";

const SwapReview = () => {
    return(
        <div className="p-28 rounded-[40px] bg-white">
            <h2 className="text-[44px] font-semibold mb-3">See what our customers say</h2>
            <p className="w-[50%] text-[#737373] text-xl font-semibold">Users worldwide choose MoonPay to exchange cryptocurrencies. With over 93,000 reviews on TrustPilot, our average score is 4.3 out of 5.</p>
            <div className="flex justify-start items-center gap-5 my-10">
                <SiTrustpilot size={55}color="#10B981"className="rounded-xl bg-[#E2E8F0] p-3"/>
                <div className="flex flex-col">
                    <p className="font-semibold">TrustScore 4.0</p>
                    <p className="text-[#64748B] text-xs">102K Reviews</p>
                </div>
            </div>
            <marquee className="p-0">
                <div className="flex">
                    <div className="rounded-[30px] w-[30%]">
                        <p>This platform is the best for buying tokens it is so easy and straightforward no confusion and most of all the delivery of your tokens to your wallet is the fastest.</p>
                        <p>Lavinia Tanirau</p>
                        <div className="flex"></div>
                    </div>
                    <img src="/images/1-3.png" alt="" className="rounded-[30px] w-[30%]"/>
                    <div className="rounded-[30px] w-[30%]">
                        <p>My four year old could have figured it out folks. It was that easy. Super easy to navigate. Very intuitive. Had my Bitcoin before I even knew what I was gonna do with it.</p>
                        <p>Darryl Nathaniel Robinson</p>
                    </div>
                    <img src="/images/4-1.png" alt="" className="rounded-[30px] w-[30%]"/>
                    <div className="rounded-[30px] w-[30%]">
                        <p>The MoonPay app is easy to use and the rate is good,and it's fast I'll recommend MoonPay to anyone who has Bitcoin.</p>
                        <p>Gregory Pettry</p>
                        <div className="flex"></div>
                    </div>
                    <img src="/public/images/2-3.png" alt="" className="rounded-[30px] w-[30%]"/>
                </div>                
            </marquee>
        </div>
    )
}
export default SwapReview;