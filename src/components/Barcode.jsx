import { IoIosStar } from "react-icons/io";

const Barcode = () => {
    return(
        <div className="flex justify-center items-center relative font-semibold text-center">
            <video src="/public/videos/looping-gradient.mp4"></video>
            <div className="flex flex-col justify-center items-center gap-7 bg-white rounded-[40px] py-7 w-[85%] h-[80%] absolute">
                <div className="flex text-xs">
                    <div className="flex justify-between items-center gap-1">
                        <img
                            src="/images/app-store-icon.png"
                            alt="app store icon"
                            className="w-6 rounded-full mx-2"
                        />
                        <div>4.4</div>
                        <IoIosStar />
                        <div>on App Store</div>
                    </div>
                    <div className="border border-black/25 h-7 mx-4"></div>
                    <div className="flex justify-between items-center gap-1">
                        <img
                            src="/images/play-store-icon.png"
                            alt="app store icon"
                            className="w-6 mx-2"
                        />
                        <div>4.5</div>
                        <IoIosStar />
                        <div>on Google Play</div>
                    </div>
                </div>
                <h1 className="text-6xl w-[60%] overflow-hidden">The future of money starts with you</h1>
                <div className="border-8 rounded-2xl">
                    <img src="/images/app-download-qr-code.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Barcode;