const SwapSectionFour = () => {
    return(
        <div className="p-28 rounded-[40px] bg-white">
            <h2 className="text-[44px] font-semibold">Fast, low-cost crypto exchange at your fingertips</h2>
            <p className="w-[50%] text-[#737373] text-xl font-semibold mb-10">We’re here to help 24 hours a day, 7 days a week. We also have a vast library of educational articles that demystify crypto exchanges, Bitcoin, blockchain, and more.</p>
            <div className="flex justify-between items-center gap-4 p-11 bg-[#F9F8F5] rounded-xl">
                <img src="/images/help 24-7.png" alt="help" />
                <div className="flex flex-col gap-5">
                    <p className="text-2xl text-black font-semibold">Help that’s there when you need it</p>
                    <p className="text-[#737373] font-semibold">We’re here to help 24 hours a day, 7 days a week. We also have a vast library of educational articles that demystify crypto exchanges, Bitcoin, blockchain, and more.</p>
                </div>
            </div>
            <div className="flex gap-1 mt-1 h-[600px]">
                <div className="flex flex-col justify-center gap-14 p-11 rounded-xl bg-[#F9F8F5] w-[50%]">
                    <img src="/images/dec1755587f1f9b87b826a99d51908d0.png" alt="" />
                    <div className="flex flex-col gap-4">
                        <h2>Multi-wallet support</h2>
                        <p className="text-[#737373] font-semibold">Exchange Ethereum cross-chain and across different wallets. It’s all there, in one platform.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-14 p-11 rounded-xl bg-[#F9F8F5] w-[50%]">
                    <img src="/images/3. Config.png" alt="" />
                    <div className="flex flex-col gap-4">
                        <h2>No processing fees</h2>
                        <p className="text-[#737373] font-semibold overflow-hidden">We work closely with liquidity partners and trading platforms to swap crypto like ETH at competitive market rates with no processing fees (network fees apply).</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SwapSectionFour;