import { useState } from "react";
import { SwapBlockchains } from "../../utils/data";

const SwapSectionThree = () => {
    const [showall, setshowall] = useState(false)

    const handleShowAll = () => {
        setshowall(!showall)
    }

    return(
        <div className="p-28 rounded-[40px] bg-white">
            <h2 className="text-3xl font-semibold">Choose from dozens of swap pairs on multiple major blockchains.</h2>
            <div className=" border-[1px] border-black/10 my-12"></div>
            <div className="flex flex-wrap gap-10">
                {SwapBlockchains.map((element,i)=>(
                    <div key={i} className="flex items-center gap-2 w-[22%]">
                        <img src={element.icon} alt="" className="w-10" />
                        <p className="font-semibold">{element.name}</p>
                        <p className="text-[#737373] font-semibold">{element.acro}</p>
                    </div>
                ))}
            </div>
            <div onClick={handleShowAll}>{showall? "show less assets" : "show more assets"}</div>
        </div>
    )
}
export default SwapSectionThree;