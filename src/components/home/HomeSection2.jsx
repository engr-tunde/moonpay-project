import { Link } from "react-router-dom";

const HomeSection2 =()=>{

    return(
        <div className="py-10 lg:py-14">
            <div className="container rounded-4xl relative overflow-hidden mx-auto lg:mx-0 w-[90%] lg:w-auto h-[400px] lg:h-[700px]">
                <video src="/videos/Moon_Web_LeadVideo-Overlay-1920x1080-v1-RC.webm" className="vid" controls autoPlay loop></video>
                <h1 className="w-[290px] lg:w-[520px] overflow-hidden text-white text-[30px] lg:text-[52px] leading-[33px] lg:leading-[50px] text-center font-bold absolute left-[10%] lg:left-[30%] top-[125px] lg:top-[220px]"> 
                    <span>Buy. Sell. Go. </span>
                    Instantly. <br /> Only with MoonPay.
                </h1>
                <p className="w-[520px] text-[17.5px] text-center absolute top-[572px] left-[10%] text-white font-bold">MoonPay keeps it simple. You hold the keys - we are <br /> non-custodial, so your crypto always stays in your control.</p>
                <Link to="/" className="text-black bg-white py-3 lg:py-5 px-10 lg:px-20 text-[15px] lg:text-[14px] font-semibold rounded-4xl absolute top-[335px] lg:top-[570px] left-[50%] lg:left-[65%]">
                     Buy Crypto
                </Link>
            </div>
        </div>
    )
}

export default HomeSection2