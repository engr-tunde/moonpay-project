import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { CiGlobe } from "react-icons/ci";

const GeneralHeader = () => {
  return (
    <div className="w-screen py-5 px-28 bg-[#F9F8FB] shadow-sm ">
      {/* Desktop navbar */}
      <div className="container flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src="/images/logo-coloured.png" alt="" className="h-7" />

          <div className="flex gap-4 items-center">
            <Link to="/" className="text-black font-semibold">
              Individuals
            </Link>
            <Link to="/" className="text-black/90">
              Business
            </Link>
          </div>

          <div className="ml-5 flex gap-4 items-center font-semibold">
            <Link to="">Buy</Link>
            <Link to="">Sell</Link>
            <Link to="">Swap</Link>
            <div className="flex items-center relative w-8 h-9 ">
              <CgMenuGridO size={25}/>
              <div className="bg-[#9A38FF] rounded-full w-2.5 h-2.5 absolute top-0 right-0"></div>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="flex justify-between items-center font-bold gap-7">
          <CiGlobe size={20} strokeWidth={1} />
          <button className="bg-black rounded-lg px-5 py-2 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;
