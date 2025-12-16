import { Link } from "react-router-dom";
import { AboutCrypto, PaymentOption } from "../utils/data";

const HomeSectionFour = () => {
    return(
        <div className="text-center px-20">
            <h1 className="text-[60px] font-bold my-10 ">Experience crypto, effortlessly.</h1>
            <div className="flex justify-between items-center gap-5">
                {
                    PaymentOption.map((element,i)=> (
                        <img src={`/assets/${element}`} alt="" key={i} />
                    ))
                }
            </div>
            {/* <div className="text-xs text-[#0009]">+ 9 more payment options</div> */}
            <div className="grid grid-cols-3 gap-2">
                {AboutCrypto.map((element,i)=>(
                    <div className="h-[450px] flex flex-col gap-8 bg-[#F9F8FB] pb-8 text-left rounded-[30px]" key={i}>
                        <video src={`/videos/${element.img}`} alt="" className=""/>
                        <div className="flex flex-col justify-between h-60 pl-6 pr-2">
                            <div className="flex flex-col justify-start gap-2">
                                <p className="text-3xl font-bold">{element.heading}</p>
                                <p className="text-xl text-[#111111bf]">{element.content}</p>
                            </div>
                            <p className="flex items-center">
                                <Link to="" className="bg-black text-white text-sm font-bold w-max px-7 py-3 *:my-16 rounded-[30px]">{element.button}</Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HomeSectionFour;