
import { useState } from "react";
import AllAssests from "../Assests.jsx/AllAssets";
import LessAssests from "../Assests.jsx/LessAssets";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const SwapSection3 =()=>{

    const[showToken, setShowToken] = useState(false)

    const HandleShowToken =()=>{
        setShowToken(!showToken)
    }

    return(
        <div className="bg-[#f9f8fb]">
            <div className="bg-[#fff] rounded-4xl mb-1">
                <div className="container">
                <h1 className="text-[18px] lg:text-[28px] ml-4 lg:ml-0 font-semibold pt-20 pb-7">Choose from dozens of swap pairs on multiple major blockchains.</h1>

                <hr className="w-[320px] lg:w-full border-[#ecebeb] border-[1px] mx-auto  mt-5 mb-10"></hr>

               

                <div>{ showToken ? <AllAssests/> : <LessAssests/>}</div>

                <button className="py-2 px-3 lg:px-4 my-4 lg:my-8 ml-[20%] lg:ml-[45%]  hover:bg-[#d6d5d6] hover:rounded-xl text-[14px] font-semibold" onClick={HandleShowToken}>{showToken ? <span className="flex items-center gap-2">Show less asset <IoMdArrowDropup /></span> : <span className="flex items-center gap-2">show all assets <IoMdArrowDropdown /></span> }</button>

            </div>
            </div>
        </div>
    )
}

export default SwapSection3