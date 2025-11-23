import { Link } from "react-router-dom";
import { AboutCrypto, PaymentOption } from "../utils/data";

const HomeSectionFour = () => {
    return(
        <div className="text-center px-28">
            <div className="text-5xl font-bold my-10">Experience crypto, effortlessly.</div>
            <div className="flex justify-between items-center gap-5">
                {
                    PaymentOption.map((element,i)=> (
                        <img src={`/assets/${element}`} alt="" key={i} />
                    ))
                }
            </div>
            <div className="text-xs text-[#0009]">+ 9 more payment options</div>
            <div className="grid grid-cols-3">
                {AboutCrypto.map((element,i)=>(
                    <div className="h-[500px] flex flex-col gap-8 bg-[#F9F8FB] pb-8 text-left" key={i}>
                        <img src={`/images/${element.img}`} alt="" className=""/>
                        <div className="flex flex-col justify-between h-60 pl-6 pr-2">
                            <div className="flex flex-col justify-start gap-2">
                                <p className="text-3xl font-bold">{element.heading}</p>
                                <p>{element.content}</p>
                            </div>
                            <div className="flex items-center">
                                <Link to="" className="bg-black text-white font-bold w-max px-7 py-3 *:my-16 rounded-[30px]">{element.button}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default HomeSectionFour;