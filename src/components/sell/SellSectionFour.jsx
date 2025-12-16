const SellSectionFour = () => {
    return(
        <div className="p-28 rounded-[40px] bg-white">
            <h2>Why is MoonPay the best way to sell Bitcoin?</h2>
            <div className="flex flex-wrap gap-1 mt-1 overflow-hidden">
                <div className="flex flex-col w-[49%] justify-center gap-3 p-11 rounded-xl bg-[#F9F8F5]">
                    <img src="/images/3. Config.png" alt="" className="mb-8" />
                    <h4 className="text-2xl font-semibold">Low and transparent fees</h4>
                    <p className="text-[#737373] font-semibold">We believe in always giving you a fair deal. Transaction fees are as low as 1% for bank transfers and 4.5% for Visa cards.</p>
                </div>
                <div className="flex flex-col w-[49%] justify-center gap-3 p-11 rounded-xl bg-[#F9F8F5]">
                    <img src="/images/start little (sell)@2x.png" alt="" className="mb-8" />
                    <h4 className="text-2xl font-semibold">Sell only what you need</h4>
                    <p className="text-[#737373] font-semibold">Selling BTC for fiat in small amounts? We've got you covered. You can sell as little as $20 of BTC on MoonPay.</p>
                </div>
                <div className="flex flex-col w-[49%] justify-center gap-3 p-11 rounded-xl bg-[#F9F8F5]">
                    <img src="/images/4. P&L.png" alt="" className="mb-8" />
                    <h4 className="text-2xl font-semibold">Non-custodial</h4>
                    <p className="text-[#737373] font-semibold">Buy Bitcoin and store it in any wallet. Then sell your BTC for fiat, and get paid directly to your bank account, credit card or debit card.</p>
                </div>
                <div className="flex flex-col w-[49%] justify-center gap-3 p-11 rounded-xl bg-[#F9F8F5]">
                    <img src="/images/1. Discovery.png" alt="" className="mb-8" />
                    <h4 className="text-2xl font-semibold">Worldwide coverage</h4>
                    <p className="text-[#737373] font-semibold">Sell Bitcoin in 80+ countries using the local currency of your bank account. We offer different payment options that work great in your region.</p>
                </div>
            </div>
        </div>
    )
}
 export default SellSectionFour;