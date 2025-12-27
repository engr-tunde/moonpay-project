import Slider from "react-slick";


const SwapSection4 =()=>{

      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


    return(<
        div className="bg-[#f9f8fb]">
        <div className="bg-[#fff] rounded-4xl mb-1">
            <div className="container py-7">

            <div className="flex flex-col gap-3">
                <h1 className="text-[22px] lg:text-[43px] font-semibold ml-4 lg:ml-0">Fast, low-cost crypto exchange at your fingertips</h1>
                <p className="w-[300px] lg:w-[460px] text-[#7c7373] font-semibold text-[14px] lg:text-[18px] ml-4 lg:ml-0">We’re here to help 24 hours a day, 7 days a week. We also have a vast library of educational articles that demystify crypto exchanges, Bitcoin, blockchain, and more.</p>
            </div>

         
            
            <div className="hidden lg:grid  grid-cols-4 gap-1 py-12 ">
                <div className="col-span-4 bg-[#f9f8f5] rounded-xl  justify-around flex py-8">
                    <img src="../../../public/images/help 24-7.png" alt="" className="h-[350px]" />
                    <div className="flex flex-col justify-center gap-3">
                        <h1 className="text-[23px] font-semibold">Help that’s there when you need it</h1>
                        <p className="w-[450px] text-[14px] text-[#7c7373] font-semibold">We’re here to help 24 hours a day, 7 days a week. We also have a vast library of educational articles that demystify crypto exchanges, Bitcoin, blockchain, and more.</p>
                    </div>
                </div>
                 <div className="col-span-2 bg-[#f9f8f5] rounded-xl py-5">
                    <img src="../../../public/images/dec1755587f1f9b87b826a99d51908d0.png" alt="" className="h-[321px] mx-auto my-8" />
                        <div className="flex flex-col gap-4">
                            <h1 className="ml-12 text-[24px]">Multi-wallet support</h1>
                            <p className="w-[430px] font-semibold text-[14px] text-[#7c7373] ml-12 pb-7">Exchange Ethereum cross-chain and across different wallets. It’s all there, in one platform.</p>
                        </div>
                 </div>
                  <div className="col-span-2 bg-[#f9f8f5] rounded-xl py-5">
                    
                        <img src="../../../public/images/3. Config.png" alt="" className="h-[321px] mx-auto my-8" />
                        <div className="flex flex-col gap-4">
                            <h1 className="ml-12 text-[24px]">No processing fees</h1>
                            <p className="w-[420px] font-semibold text-[14px] text-[#7c7373] ml-12 pb-7">We work closely with liquidity partners and trading platforms to swap crypto like ETH at competitive market rates with no processing fees (network fees apply).</p>
                        </div>
                  </div>
            </div>

            {/*MOBILE */}
             <div className="grid lg:hidden  py-8">
                <Slider {...settings} className="overflow-hidden mx-[10px]">
                <div className=" bg-[#f9f8f5] h-[460px] rounded-xl mx-[10px] py-8">
                    <img src="/images/help 24-7.png" alt="" className="h-[200px] mx-auto" />
                    <div className="flex flex-col justify-center gap-4 mt-10">
                        <h1 className="text-[15px] ml-4  font-semibold">Help that’s there when you need it</h1>
                        <p className="w-[282px] text-[12px] ml-4 text-[#7c7373] font-semibold">We’re here to help 24 hours a day, 7 days a week. We also have a vast library of educational articles that demystify crypto exchanges, Bitcoin, blockchain, and more.</p>
                    </div>
                </div>
                 <div className=" bg-[#f9f8f5] h-[460px] rounded-xl py-8 mx-[10px]">
                    <img src="/images/dec1755587f1f9b87b826a99d51908d0.png" alt="" className="h-[200px] mx-auto my-8" />
                        <div className="flex flex-col gap-4 mt-10">
                            <h1 className="ml-5 text-[15px]">Multi-wallet support</h1>
                            <p className="w-[282px] font-semibold text-[12px] text-[#7c7373] ml-5 ">Exchange Ethereum cross-chain and across different wallets. It’s all there, in one platform.</p>
                        </div>
                 </div>
                  <div className=" bg-[#f9f8f5] h-[460px] rounded-xl py-8 mx-[10px]">
                    
                        <img src="/images/3. Config.png" alt="" className="h-[200px] mx-auto my-8" />
                        <div className="flex flex-col gap-4">
                            <h1 className="ml-5 text-[18px]">No processing fees</h1>
                            <p className="w-[275px] font-semibold text-[12px] text-[#7c7373] ml-5 ">We work closely with liquidity partners and trading platforms to swap crypto like ETH at competitive market rates with no processing fees (network fees apply).</p>
                        </div>
                  </div>
                  </Slider>
                </div>
            


            </div>
        </div>
             
     </div>
)
}

export default SwapSection4