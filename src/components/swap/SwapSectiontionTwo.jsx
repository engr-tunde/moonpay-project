import { SwapSteps } from "../../utils/data";

const SwapSectiontionTwo =() => {
    return(
        <div className="py-20 px-28 rounded-[40px] bg-white">
            <h1 className="text-5xl font-semibold overflow-hidden">How to swap ETH on MoonPay.</h1>
            <p className="text-[#737373] text-xl font-semibold">Here's how to swap Ethereum cross-chain with low fees.</p>
            <div className="flex flex-wrap gap-1">
                {SwapSteps.map((element,i)=>(
                    <div key={i} className="flex flex-col justify-start gap-7 w-[33%] h-[320px] bg-[#F9F8F5] rounded-2xl px-6 py-7">
                        <img src={element.icon} alt="" className="w-12" />
                        <h5 className="text-2xl font-semibold">{element.title}</h5>
                        <p className="text-[#737373] text-[15px] font-semibold">{element.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SwapSectiontionTwo;