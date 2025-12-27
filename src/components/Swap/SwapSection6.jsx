import { BsPlus } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";
import { useState } from "react";
import Cont from "../Contents/cont";

const SwapSection6 =()=>{

    const [btnclick, setbtnclick] = useState(false)
    const [btnclick2, setbtnclick2] = useState(false)
    const [btnclick3, setbtnclick3] = useState(false)
    const [btnclick4, setbtnclick4] = useState(false)
    const [btnclick5, setbtnclick5] = useState(false)
    const [btnclick6, setbtnclick6] = useState(false)
    const [btnclick7, setbtnclick7] = useState(false)
    const [btnclick8, setbtnclick8] = useState(false)
    const [btnclick9, setbtnclick9] = useState(false)

    const HandleClick =()=>{
        setbtnclick(!btnclick)
    }

     const HandleClick2 =()=>{
        setbtnclick2(!btnclick2)
    }

     const HandleClick3 =()=>{
        setbtnclick3(!btnclick3)
    }

     const HandleClick4 =()=>{
        setbtnclick4(!btnclick4)
    }

     const HandleClick5 =()=>{
        setbtnclick5(!btnclick5)   
    }

     const HandleClick6 =()=>{
        setbtnclick6(!btnclick6)
    }

     const HandleClick7 =()=>{
        setbtnclick7(!btnclick7)
    }

     const HandleClick8 =()=>{
        setbtnclick8(!btnclick8)
    }
     const HandleClick9 =()=>{
        setbtnclick9(!btnclick9)
    }



    const content =[
        "To see all available crypto trading pairs, you’ll need to connect your cryptocurrency wallet first. It’s best to use a MoonPay wallet inside the MoonPay app to unlock all crypto token options, as well as for a smoother swapping experience.",
        "The minimum amount of ETH to swap is $65 USD. The maximum amount allowed for a single crypto exchange transaction is $100,000 USD.",
        "MoonPay handles the entire crypto conversion process for you. With non-custodial Ethereum swaps, users must first send cryptocurrency before receiving the new token. For safety reasons, MoonPay generates a new crypto address for each transaction. You can track the status of your swap order at any time in the MoonPay widget",
        "MoonPay does not charge a processing fee to convert Ethereum to other cryptocurrencies. Users are only responsible for paying network fees.",
        "You can swap Bitcoin for other cryptocurrencies on the MoonPay app, as long as you have BTC stored in your MoonPay Bitcoin wallet to exchange BTC for new tokens. We’re working actively to make Bitcoin swaps available within the MoonPay widget for mobile and desktop users as well.",
        "All users of the MoonPay platform are subject to KYC requirements.",
        "Ethereum exchanges usually take between a few minutes and a few hours, depending on factors including network congestion and token liquidity. If it is your first time using MoonPay, then verification will take additional time to complete.",
        "You can contact our support team 24/7, or visit our Swaps Help Center for more information about crypto exchanges. You can also start a chat with MoonPay customer support. Be sure to select “Transactions” as your issue, if you are looking for assistance with a crypto exchange.",
        "MoonPay is used by more than 15 million users worldwide, since our founding in 2019. We are constantly improving our fiat-to-crypto on-ramp and cryptocurrency exchange features to better serve our global customers. MoonPay’s compliance and security measures aim to protect and safeguard our customers"
    ]

    return (
        <div className="bg-[#f9f8fb]">
           <div className="bg-[#fff] rounded-4xl mb-1 py-12">
                 <div className="container">
                <h1 className="text-[22px] lg:text-[45px] w-[280px] lg:w-[800px] font-semibold leading-[28px] lg:leading-[45px] overflow-hidden mb-10 ml-4 lg:ml-0">Frequently asked questions about swapping Ethereum</h1>

{/*CARDS*/}

            <div className="flex flex-wrap gap-1 mt-7">
            {/*card1*/}
                <div className="bg-[#f9f8f5] flex flex-col order-1 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center my-1">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">Why am I not seeing Ethereum as the cryptocurrency I want to swap?</p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick}><BsPlus /> <HiMinusSm /></button>
                    </div>
                    <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick ? content[0] : ''}</p>
                   
                </div>

                {/*card2*/}
                <div className="bg-[#f9f8f5] flex flex-col order-5 lg:order-3 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center my-1">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">What are the limits for Ethereum exchanges?</p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick2}><BsPlus /> <HiMinusSm /></button>
                    </div>
                     <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick2 ? content[1] : ''}</p> 
                </div>
                   {/*card3*/} 
                <div className="bg-[#f9f8f5] flex flex-col order-1 lg:order-3 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center ">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">Why do I need to send my ETH to an external wallet address?</p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick3}><BsPlus /> <HiMinusSm /></button>
                    </div>
                    <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick3 ? content[2] : ''}</p>
                   
                </div>
                 {/*card4*/} 
                <div className="bg-[#f9f8f5] flex flex-col order-5 lg:order-2 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center ">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">What are the fees for cryptocurrency exchanges?</p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick4}><BsPlus /> <HiMinusSm /></button>
                    </div>
                    <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick4 ? content[3] : ''}</p>
                   
                </div>

                {/*card5*/}
                <div className="bg-[#f9f8f5] flex flex-col order-2 lg:order-5 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">Can I swap Bitcoin on MoonPay?</p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick5}><BsPlus /> <HiMinusSm /></button>
                    </div>
                     <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick5 ? content[4] : ''}</p> 
                </div>
                  {/*card6*/}  
                <div className="bg-[#f9f8f5] flex flex-col order-6 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer  hover:bg-[#f1f2f3]">
                    <div className=" flex  items-center gap-1 ">
                        <p className="w-[280px] lg:w-[410px] text-[13px] lg:text-[15px]">Can I exchange ETH without KYC on MoonPay?
</p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick6}><BsPlus /> <HiMinusSm /></button>
                    </div>
                    <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick6 ? content[5] : ''}</p> 
                </div>
                 {/*card7*/}  
                <div className="bg-[#f9f8f5] flex flex-col order-3 lg:order-7 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center ">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">
                        How long does it take to receive my cryptocurrency after initiating a swap?
                        </p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick7}><BsPlus /> <HiMinusSm /></button>
                    </div>
                    <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick7 ? content[6] : ''}</p> 
                </div>
                 {/*card8*/}  
                <div className="bg-[#f9f8f5] flex flex-col order-9 lg:order-8 gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center ">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">
                       How can I contact MoonPay?
                        </p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick8}><BsPlus /> <HiMinusSm /></button>
                    </div>
                    <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick8 ? content[7] : ''}</p> 
                </div>
                 {/*card9*/}  
                <div className="bg-[#f9f8f5] flex flex-col order-4 lg:gap-4 rounded-[40px] py-3 lg:py-6 px-5 cursor-pointer h-auto hover:bg-[#f1f2f3]">
                    <div className=" flex gap-4 items-center ">
                        <p className="text-[13px] lg:text-[15px] w-[390px]">Is MoonPay a safe platform to exchange Ethereum? </p>
                        <button className="flex gap-1 bg-[#fff] rounded-2xl py-2 px-3 cursor-pointer" onClick={HandleClick9}><BsPlus /> <HiMinusSm /></button>
                    </div>
                    <p className="w-[300px] lg:w-[430px] text-[13px] lg:text-[15px]">{btnclick9 ? content[8] : ''}</p> 
                </div>
             </div>

            </div>
           </div>
            
        </div>
    )
}

export default SwapSection6