import { SellSteps } from "../../utils/data";

const SellSectionTwo = () => {
    return(
        <div className="py-20 px-28 rounded-[40px] bg-white">
            <h2>How to sell Bitcoin for fiat on MoonPay</h2>
            <p className="text-[#737373] text-xl font-semibold my-10">Sell Bitcoin (BTC) in 80+ countries using the local currency of your bank account. We offer different payment options that cater to your region.</p>
            <div className="flex flex-wrap gap-1 overflow-hidden">
                {SellSteps.map((element,i)=>(
                    <div key={i} className="flex flex-col justify-start gap-7 w-[33%] h-[420px] bg-[#F9F8F5] rounded-2xl px-6 py-7">
                        <img src={`/assets${element.icon}`} alt="" className="w-12" />
                        <h5 className="text-[22px] font-semibold">{element.title}</h5>
                        <p className="text-[#737373] text-[15px] font-semibold">{element.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SellSectionTwo;