import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const OthersHeader = () => {
    return(
        <div className="py-5">
            {/* Desktop navbar */}
            <div className="container flex items-center justify-between text-white">
                {/* Left side */}
                <div className="flex items-center gap-8">
                    <Link to="/"><img src="/images/logo-full-white.svg" alt="" className="h-7" /></Link>
                    <div className="flex gap-4 items-center">
                        <Link to="/" className="text-[#626262] font-semibold">
                        Individuals
                        </Link>
                        <Link to="/business">
                        Business
                        </Link>
                    </div>                
                </div>                
                {/* rightside */}
                <div className="flex justify-between items-center gap-3 font-semibold">
                <div className="flex items-center">
                    <p>Products</p>
                    <IoIosArrowDown size={20} strokeWidth={0.5} />
                </div>
                <button className="bg-white rounded-[20px] px-5 py-3 text-black text-sm ">Get Started</button>
                </div>
            </div>
        </div>
        
    );
};
export default OthersHeader;