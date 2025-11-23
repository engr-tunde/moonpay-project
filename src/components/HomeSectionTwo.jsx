import { Link } from "react-router-dom";

const HomeSectionTwo = () => {
  return (
    <div className="relative h-screen w-full text-center px-28">
        <video src="/images/Moon_Web_LeadVideo-Overlay-1920x1080-v1-RC.webm" alt="leadvideo" controls autoPlay muted loop playsInline className="rounded-[50px] " />
        <div className="flex flex-col justify-center text-white font-bold absolute inset-0">
            <div className="flex flex-col justify-between items-center text-6xl mb-40 mt-32">
                <p className="overflow-y-hidden">Buy. Sell. Go.</p>
                <p className="overflow-y-hidden">Instantly.</p>
                <p className="overflow-y-hidden">Only with MoonPay.</p>
            </div>
            <div className="flex justify-center items-center gap-3 -mr-8">
                <p className="w-[55%] text-[19px]">MoonPay keeps it simple. You hold the keys - we are non-custodial, so your crypto always stays in your control.</p>
                <Link className="bg-white rounded-[50px] py-5 px-22 text-black">Buy Crypto</Link> 
            </div>
        </div>
    </div>
  )
}

export default HomeSectionTwo;
