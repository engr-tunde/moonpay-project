import { MdOutlineArrowOutward } from "react-icons/md";

const SwapSection7 =()=>{

    return(
        
        <div className="bg-[#f9f8fb]">
            
                <div className="bg-[#000] rounded-tl-3xl rounded-tr-3xl pb-16">
            <div className="container">
                <h1 className="text-[#fff] text-[22px] lg:text-[45px] font-semibold pt-12 lg:pt-20 pb-10 lg:pb-8 ml-4 lg:ml-0">Need some help before swapping ETH?</h1>
                <div className="flex flex-col lg:flex-row gap-1 my-7 w-full ">
                    <div className="bg-[#1a1a1a] py-16 px-10 rounded-4xl w-[90%] lg:w-[100%] h-[380px] overflow-hidden lg:h-auto mx-auto">
                        <img src="/images/learn section asset.png" alt="" className="w-[670px] -mt-10 lg:-mt-5 mb-7 lg:mb-10" />
                        <div className="flex flex-col gap-3">
                             <h2 className="text-[#fff] text-[15px] lg:text-[24px] w-[220px] lg:w-[430px] font-semibold leading-[21px] lg:leading-[30px] lg:ml-2">Starting in Crypto: NFTs and Web3 Trends</h2>
                            <div className="flex justify-evenly ">
                             <p className="text-[#cec8c8] text-[12px] lg:text-[14px] w-[250px] lg:w-[370px]">Learn all about crypto swaps and NFTs, and discover what’s trending in the budding world of Web3.</p><MdOutlineArrowOutward className="bg-[#313131] text-[#fff] text-[40px]" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#1a1a1a] py-16 px-10 rounded-4xl w-[90%] lg:w-[100%] h-[380px] overflow-hidden lg:h-auto mx-auto">
                        <img src="/images/help asset.png" alt="" className="w-[670px] -mt-10 lg:-mt-5 mb-7 lg:mb-10"/>
                        <div className="flex flex-col gap-2 lg:gap-10">
                             <h2 className="text-[#fff] text-[16px] lg:text-[24px] w-[430px] font-semibold leading-[30px] lg:ml-2">Help Center</h2>
                            <div className="flex justify-evenly ">
                             <p className="text-[#cec8c8] text-[12px] lg:text-[14px] w-[370px]">Find all the answers to your MoonPay questions and start swapping cryptocurrency with confidence.</p><MdOutlineArrowOutward className="bg-[#313131] text-[#fff] text-[40px]" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
                </div>
        
        </div>
    )
}

export default SwapSection7