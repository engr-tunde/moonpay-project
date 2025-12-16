import { RxCopy } from "react-icons/rx";
import { BizPayment, BizScale } from "../../utils/data";

const BusinessSectionTwo = () => {
    return(
        <div className="py-14">
            <div className="">
                <div className="flex gap-7 border-y border-black/10 py-7">
                    {BizPayment.map((element,i)=>(
                        <div className="flex" key={i}>
                            <img src={element} alt="" />
                        </div>
                    ))}
                </div>
                <h1 className=" px-16">Proven at scale. Billions in volume.</h1>
                <div className="flex justify-between px-16">
                    {BizScale.map((element,i)=>(
                        <div className="flex flex-col justify-between gap-5 rounded-[10%] bg-[#F9F8FB] w-[19%] h-max p-4" key={i}>
                            <img src={element.icon} alt="" className="w-14 p-3 bg-white rounded-[20px]" />
                            <div className="flex flex-col">
                                <h1 className="text-[50px] font-bold">{element.title}</h1>
                                <p className="text-[#111111bf] font-semibold text-xl w-[90%]">{element.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="flex flex-col items-center text-center gap-10">
                <div>
                    <h4 className="text-[#11183C] text-4xl font-semibold">One small snippet of code to help you</h4>
                    <h4 className="text-[#7D00FF] text-4xl font-semibold">scale your business quickly.</h4>
                </div>
                <p className="text-[#5D6674] text-xl w-[600px]">Our on-ramp can be integrated into your app or website in 10 minutes — see for yourself.</p>
                <div className="flex items-center gap-5 rounded-[50px] bg-[#F0F0F0] pl-8 py-2 w-[670px] text-lg font-semibold">
                    <p className="text-[#7D00FF]">npm install --save @moonpay/react-native-moonpay-sdk</p>
                    <button className="flex items-center gap-2 rounded-[50px] bg-white px-7 py-3">
                        <p className="">Copy</p>
                        <RxCopy />
                    </button>
                </div>
            </div> */}
        </div>
    )
}
export default BusinessSectionTwo;