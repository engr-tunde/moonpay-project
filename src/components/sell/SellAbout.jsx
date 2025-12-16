import { GoPlus } from "react-icons/go";
import { AboutSell } from "../../utils/data";

const SellAbout = () => {
    return(
        <div className="p-28 rounded-[40px] bg-white">
            <h2 className="w-[70%]">Frequently asked questions about selling Bitcoin</h2>
            <div className="flex flex-wrap gap-1 mb-1 font-semibold text-[15px]">
                {AboutSell.map((element,i)=>(
                    <div className="flex justify-between items-center bg-[#F9F8F5] w-[49%] p-8 rounded-[50px]" key={i}>
                        <p>{element}</p>
                        <GoPlus size={35} className="bg-white p-1 rounded-full" />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SellAbout;