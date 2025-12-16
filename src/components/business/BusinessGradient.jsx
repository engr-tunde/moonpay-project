import { BizCompliance, BizFinance } from "../../utils/data";

const BusinessGradient = () => {
    return(
        <div className="">
            <div className="w-full -mb-2">
                <img src="/images/stats-gradient.png" alt="" />                
            </div>

            <div className="bg-black text-white px-18 py-36">
                <h1 className="text-6xl font-semibold text-center leading-normal">Committed to compliance</h1>
                <div className="grid grid-cols-3 gap-2">
                    {BizCompliance.map((element,i)=>(
                        <div className="flex flex-col gap-8  pb-6 bg-[#1A1A1A] text-left rounded-[30px]" key={i}>
                            <img src={element.img} alt="" className=""/>
                            <div className="flex flex-col justify-between  pl-6 pr-2">
                                <div className="flex flex-col justify-start gap-2">
                                    <p className="text-2xl font-bold">{element.title}</p>
                                    <p className="text-[16px] text-[#ffffffbf]">{element.content}</p>
                                </div>                                
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="text-6xl font-semibold text-center mt-48 mx-auto leading-20 w-[90%]">Built for the companies shaping the future of finance</h1>
                <div className="flex flex-col gap-2">
                    {BizFinance.map((element,i)=>(
                        <div className="flex flex-col justify-between gap-5 rounded-[20px] bg-[#1a1a1a] h-max p-6" key={i}>
                            <img src={element.icon} alt="" className="w-12 p-3 bg-[#262626] rounded-[20px]" />
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold">{element.title}</h1>
                                <p className="text-[#ffffffbf] text-xl">{element.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-2xl mx-auto text-center w-[90%] mt-20">“Branded stablecoins give builders more control over their product economics and monetization. MoonPay Issuance makes that power accessible with an integrated issuance and distribution platform.”</p>
                <p className="text-[16px] font-semibold text-center my-3">— Ivan Soto-Wright, CEO & Co-founder, MoonPay</p>
            </div>

            <div className="w-full rotate-180 -mt-2">
                <img src="/images/stats-gradient.png" alt="" />                
            </div>
            {/* <div className="flex flex-col items-center gap-7 text-center">
                <h4 className="text-[#11183C] text-4xl font-semibold w-[40%]">Crypto was designed to go beyond borders</h4>
                <p className="text-[#555555] text-[18px] w-[50%]">And our on-ramp is no exception. We can help your wallet operate in more places around the world.</p>
                <div className="flex justify-between gap-10">
                    <div className="flex flex-col items-center rounded-xl hover:bg-white border border-[#d9e2ef] bg-[#EFF3F9] p-10 w-[30%]">
                        <h1 className="text-[65px] text-[#7d00ff] font-semibold">30+</h1>
                        <p className="w-[70%]">Supported Fiat Currencies</p>
                    </div>
                    <div className="flex flex-col items-center rounded-xl hover:bg-white border border-[#d9e2ef] bg-[#EFF3F9] p-10 w-[30%]">
                        <h1 className="text-[65px] text-[#7d00ff] font-semibold">110+</h1>
                        <p className="w-[70%]">Supported Cryptocurrencies</p>
                    </div>
                    <div className="flex flex-col justify-center items-center rounded-xl hover:bg-white border border-[#d9e2ef] bg-[#EFF3F9] p-10 w-[30%]">
                        <h1 className="text-[65px] text-[#7d00ff] font-semibold">160+</h1>
                        <p>Supported Countries</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default BusinessGradient;