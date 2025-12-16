const SellSectionThree = () => {
    return(
        <div className="flex justify-between gap-10 p-28 rounded-[40px] bg-white">
            {/* left side */}
            <div className="flex flex-col gap-10 w-[35%]">
                <p className="text-3xl font-semibold w-[95%]">Sell Bitcoin with a Card. Now Available for Customers in 80+ Countries!</p>
                <p className="text-[#737373] text-[19px] font-semibold">Introducing our latest feature, Sell-to-Card, which enables users in 80+ countries to effortlessly and instantly trade BTC for your preferred fiat currency and have the funds transferred directly to a card. With this handy addition, selling Bitcoin for fiat currencies and transferring funds to a card has never been easier.</p>
            </div>
            {/* right side */}
            <img src="/public/images/visa-imawe.png" alt="visa-image" className="w-[60%] h-[550px]" />
        </div>
    )
}
export default SellSectionThree;