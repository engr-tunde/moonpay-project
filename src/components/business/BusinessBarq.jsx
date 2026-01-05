import { IoIosStar } from "react-icons/io";

const BusinessBarq = () => {
    return(
        <div className="flex justify-center items-center relative font-semibold text-center">
            <video src="/public/videos/looping-gradient.mp4"></video>
            <div className="flex flex-col justify-center items-center gap-7 bg-white rounded-[40px] py-10 w-[65%] h-[70%] absolute">
                <h1 className="text-6xl w-[80%] overflow-hidden">Move value anywhere with MoonPay</h1>
                <div className="flex p-2 pl-5 rounded-[50px] bg-[#F9F8FB]">
                    <input type="email" placeholder="what's your work email" />
                    <button className="rounded-[50px] bg-black text-white p-3">Get in touch</button>
                </div>
            </div>
        </div>
    )
}
export default BusinessBarq;