import { Link } from "react-router-dom";

const HomeSection3 = ()=>{

    return(
        <div>
            <div className="container py-10 flex flex-col lg:flex-row items-center justify-between">

                {/*Left Hand Side*/}
                <div className="flex flex-col gap-4 lg:gap-8">
                    <h1 className="text-[24px] lg:text-[45px] font-semibold w-[300px] lg:w-[450px] leading-10 lg:leading-12 overflow-hidden">Countless tokens at your fingertips.</h1>
                    <h3 className="w-[350px] lg:w-[482px] text-[15px] text-[#666]"><span className="font-semibold">From the headlines to hidden opportunities. </span>
                     Explore DeFi with MoonPay - simple, direct, decentralized trading that keeps you in control.
                    </h3>
                    <Link to="/" className="pri-btn w-max">Discover</Link>
                </div>

                {/*Right Hand Side*/}
                <div className="flex flex-col gap-3">
                    <img src="/images/eng-100m-main.jpg" alt="" className="w-[500px] rounded-[50px]" />
                    <p className="text-[11.4px] text-center italic text-[#595959]">DeFi trading services are not available in the EEA or New York.</p>
                </div>
                
            </div>

        </div>
    )
}

export default HomeSection3