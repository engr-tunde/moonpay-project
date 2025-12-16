import { BizLaunch } from "../../utils/data";

const BusinessSectionFour = () => {
    return(
        <div className="">
            <div className="bg-[#F9F8FB]">
                <h2 className="w-[75%] m-auto mt-28 text-center">Launch crypto payments that work everywhere and scale without complexity</h2>
                <p className="w-[65%] m-auto text-xl text-[#000000bf] font-semibold mt-8 text-center">Safe, compliant, and simple. MoonPay powers end-to-end digital currency flow with fewer vendors and lower operational risk, giving your customers the freedom to move value however they choose.</p>
                <div className="flex justify-between px-16 py-16 h-[420px]">
                    {BizLaunch.map((element,i)=>(
                        <div className="flex flex-col  gap-8 rounded-[10%] bg-white w-[33%] p-6" key={i}>
                            <img src={element.icon} alt="" className="w-14 p-3 bg-[#F5F5F5] rounded-[20px]" />
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl font-semibold">{element.title}</h1>
                                <p className="text-[#111111bf] text-xl w-[97%]">{element.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BusinessSectionFour;