import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router-dom";

const Review =() => {
    return(
        <div className="my-[100px] px-20">
            <div className="W-[30%] flex flex-col gap-4 ">
                <div className="flex items-center gap-2 w-max rounded-lg font-semibold text-xs">
                    <SiTrustpilot  size={25} color="#10B981" className="rounded-full bg-[#E2E8F0] p-1"/>
                    <p>TrustScore 4.0</p>
                    <p>(103K Reviews)</p>
                </div>
                <h1 className="text-black font-semibold text-[42px] overflow-hidden">See what our customers say</h1>
                <p className="text-[#000000bf] text-xl w-[50%] font-semibold">With over 100,000 reviews, MoonPay is one of the most reviewed and highest scoring platforms for crypto.</p>
                <Link to="" className="text-white bg-black rounded-[50px] py-4 px-6 font-semibold w-max" >Reviews</Link>
            </div>
        </div>
    )
}
export default Review;