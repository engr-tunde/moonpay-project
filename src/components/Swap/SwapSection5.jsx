import { Link } from "react-router-dom"
import { SiTrustpilot } from "react-icons/si";
import { MdVerified } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SwapSection5 =()=>{

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

    return(
        <div className="bg-[#f9f8fb]">
            <div className="bg-[#fff] rounded-4xl mb-1 pb-16">
                  

                <div className="container flex flex-col gap-12 py-14">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[22px] lg:text-[44px] ml-4 lg:ml-0 font-semibold">See what our customers say</h1>
                        <p className="w-[332px] lg:w-[490px] text-[15px] lg:text-[18px] text-[#7c7373] font-semibold ml-4 lg:ml-0">Users worldwide choose MoonPay to exchange cryptocurrencies. With over 93,000 reviews on TrustPilot, our average score is 4.3 out of 5.</p>
                    </div>

                    <div className="flex gap-3 ml-4 lg:ml-0">
                        <SiTrustpilot  className="bg-[#e2e8f0] text-[#10b981] text-5xl py-2 px-2 rounded-xl"/>
                        <div className="flex flex-col justify-center">
                            <h2 className="font-semibold">TrustScore 4.0</h2>
                            <p className="text-[#4e4e4e] text-[12px]">102K Reviews</p>
                        </div>
                    </div>
                </div>

{/*Scrolling Images and Text Cards*/}

                
                <div className="w-[2400px] flex gap-1  py-7 scrol">

                 
                    {/*First  Card*/}
                    <div className="w-[22%] h-[500px]">
                        <img src="/images/1-3.png" alt="" className="h-[100%] w-[100%] rounded-3xl" />
                    </div>

                    {/*2nd Card*/}
                    <div className="bg-[#f9f8f5] w-[22%] h-[500px] flex flex-col gap-6 pt-36 rounded-3xl ">
                        <p className="w-[380px] text-[18px] font-semibold px-7">My four year old could have figured it out folks. It was that easy. Super easy to navigate. Very intuitive. Had my Bitcoin before I even knew what I was gonna do with it.</p>

                        <div className="flex flex-col mx-7">
                            <span>Darryl Nathaniel Robinson</span>
                            <span className="flex gap-1 items-center"><MdVerified /> Veriefed on TrustPilot</span>
                        </div>    
                    </div>

                {/* 3rd Image Card*/}
                    <div className="w-[22%] h-[500px] rounded-3xl">
                        <img src="/images/2-3.png" alt="" className="h-[100%] w-[100%]"  />
                    </div>

                {/*4th Card*/}
                    <div className="bg-[#f9f8f5] w-[22%] h-[500px] flex flex-col gap-6 pt-36 rounded-3xl">
                         <p className="w-[380px] text-[18px] font-semibold px-7">This platform is the best for buying tokens it is so easy and straightforward no confusion and most of all the delivery of your tokens to your wallet is the fastest.</p> 

                        <div className="flex flex-col mx-7">
                            <span>Darryl Nathaniel Robinson</span>
                            <span className="flex gap-1 items-center"><MdVerified /> Veriefed on TrustPilot</span>
                        </div> 
                    </div>

                {/*5th  Card*/}
                    <div className="w-[22%] h-[500px] rounded-3xl">
                        <img src="/images/4-1.png" alt="" className="h-[100%] w-[100%]"  />
                    </div>

                 {/*6th  Card*/}
                    <div className="bg-[#f9f8f5] w-[22%] h-[500px] flex flex-col gap-6 pt-36 rounded-3xl">
                        <p className="w-[380px] text-[18px] font-semibold px-7">The MoonPay app is easy to use and the rate is good,and it's fast I'll recommend MoonPay to anyone who has Bitcoin.</p>
                        <div className="flex flex-col mx-7">
                            <span>Darryl Nathaniel Robinson</span>
                            <span className="flex gap-1 items-center"><MdVerified /> Veriefed on TrustPilot</span>
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SwapSection5