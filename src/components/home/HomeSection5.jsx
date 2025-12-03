import { Link } from "react-router-dom";
import { SiTrustpilot } from "react-icons/si";

const HomeSection5 =()=>{

    return(
        <div className="py-8">
           
            <div>
                <img src="/images/stats-gradient.png" alt="" />
                <div className="bg-black flex flex-col items-center gap-1 lg:gap-5 ">
                    <p className="text-white mt-20">Trusted by millions of users across 180 countries.</p>
                    <h1 className="text-white text-[60px] lg:text-[180px] font-bold mt-3">35,000,000+</h1>
                    <p className="text-white">Verified accounts</p>
                </div>
                <video src="/videos/Moon_Web_GlobeVideo-14s-1920x1080-v1-vp9-chrome-COMPRESSED.webm" autoPlay loop playsInline muted></video>
                <div className="bg-black">

                    <div className="container mt-12 w-[90%] lg:w-full rounded-3xl">
            
                        <video src="/videos/Moon_Web_PeopleVid-Overlay-1920x1080-v1-RC.mp4" autoPlay loop muted playsInline > </video>

                    </div>
                <img src="/images/stats-gradient.png" alt="" className=" rotate-180" /> 
                </div>

                <div className="container flex flex-col gap-5">
                    <h1 className="text-[25px] lg:text-[50px] mx-5 lg:mx-0">See what our customers say</h1>
                    <Link to="" className="flex items-center gap-1 border-[1px] border-[#ddd] w-max py-1.5 px-5 rounded-lg mx-5 lg:mx-0">
                          <SiTrustpilot  className="bg-[#e2e8f0] text-[#10b981] text-lg rounded-2xl px-1 py-1"/>
                         <h2 className="font-semibold">TrustScore 4.0</h2>
                        <p className="text-[#4e4e4e] text-[12px]">102K Reviews</p>
                    
                    </Link>
                    <p className="text-[14px] lg:text-[18px] w-[310px] lg:w-[480px]  mx-5 lg:mx-0">With over 100,000 reviews, MoonPay is one of the most reviewed and highest scoring platforms for crypto.</p>
                    <Link className="bg-black text-white w-max py-3 px-5 rounded-3xl mx-5 lg:mx-0">Reviews</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSection5