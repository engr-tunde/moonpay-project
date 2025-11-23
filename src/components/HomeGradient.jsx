const HomeGradient = () => {

    return(
        <div>
            <div className="w-full -mb-2 ">
                <img src="/images/stats-gradient.png" alt="" />
            </div>
            <div className="flex flex-col items-center bg-black py-24">
                <h4 className="text-[#faf9f9bf] text-[16px] font-semibold">Trusted by millions of users across 180 countries.</h4>
                <h1 className="text-[#faf9f9] text-[180px] font-bold">35,000,000+</h1>
                <h3 className="text-[#faf9f9bf] text-lg font-semibold">Verified accounts</h3>
                <video src="/images/Moon_Web_GlobeVideo-14s-1920x1080-v1-vp9-chrome-COMPRESSED.webm" autoPlay loop muted></video>
                <div className="relative px-28 text-white">
                    <video src="/images/Moon_Web_PeopleVid-Overlay-1920x1080-v1-RC.webm" autoPlay loop muted className="rounded-[50px]"></video>
                    <div className="w-full flex flex-col justify-center items-center gap-5 absolute inset-1">
                        <h2 className="text-white text-5xl font-semibold w-[50%] text-center overflow-hidden">The future of money starts with you.</h2>
                        <p className="text-[#fffc] text-lg font-semibold">Always connected. Always in control. MoonPay.</p>
                        <div className="text-black bg-white font-semibold rounded-lg p-4">Download the App</div>
                    </div>
                </div>                
            </div>
            <div className="w-full rotate-180 -mt-2">
                <img src="/images/stats-gradient.png" alt="" />                
            </div>
        </div>
    )
}
export default HomeGradient;