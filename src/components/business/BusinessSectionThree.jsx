import { RiErrorWarningFill } from "react-icons/ri";
import { RxCopy } from "react-icons/rx";
import { BizExplore } from "../../utils/data";
import { Link } from "react-router-dom";

const BusinessSectionThree = () => {    
    return(
        <div className="py-14 px-16">
            <div className="flex flex-wrap gap-2">
                {BizExplore.map((element,i)=>(
                    <div className="w-[48%] flex flex-col gap-8  pb-6 bg-[#F9F8FB] text-left rounded-[30px]" key={i}>
                        <video src={element.vid} alt="" className=""/>
                        <div className="flex flex-col justify-between h-60 pl-6 pr-2">
                            <div className="flex flex-col justify-start gap-2">
                                <p className="text-2xl font-bold">{element.title}</p>
                                <p className="text-xl text-[#00000080]">{element.content}</p>
                            </div>
                            <p className="flex items-center">
                                <Link to="" className="bg-black text-white text-sm font-bold w-max px-7 py-3 *:my-16 rounded-[30px]">{element.button}</Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="flex">                
                <div className="flex flex-col justify-between bg-black text-white box w-[65%]">
                    <div className="flex justify-between">
                        <p>JavaScript</p>
                        <div className="flex">
                            <p>Test mode</p>
                            <p>Live mode</p>
                        </div>
                    </div>
                    <div className=" bg-[#282C34] text-[#abb2bf] text-sm rounded-lg p-2">
                        <p><span className="text-[#c678dd]">import   </span>{`{View, Button, Text}`}<span className="text-[#c678dd]">   from</span><span className="text-[#98C379]">  'react-native'</span>;</p>
                        <p><span className="text-[#c678dd]">import   </span>{` {useMoonPaySdk}  ;`} <span className="text-[#c678dd]">   from</span><span className="text-[#98C379]">  '@moonpay/react-native-moonpay-sdk'</span>;</p>
                        <p className="mt-4"><span className="text-[#c678dd]">const   </span>{`YourComponent = () => {`}</p>
                        <p className="ml-5"><span className="text-[#c678dd]">const   </span>{`{openWithInAppBrowser, generateUrlForSigning, updateSignature} =`}</p>
                        <p className="ml-9">{` useMoonPaySdk({`}</p>
                        <p className="ml-13"> <span className="text-[#d19a66]">flow</span>   :  <span className="text-[#98c379]">   'buy'</span>,</p>
                        <p className="ml-13"> <span className="text-[#d19a66]">environment</span>: <span className="text-[#98c379]">   'sandbox'</span>,</p>
                        <p className="ml-13"> <span className="text-[#d19a66]">params</span>{`  : {`}</p>
                        <p className="ml-17"> <span className="text-[#d19a66]">apiKey</span> : <span className="text-[#98c379]">   'pk_test_key'</span>,</p>
                        <p className="ml-13">{`   },`}</p>
                        <p className="ml-9">{`  });`}</p>
                        <p>{`};`}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <RiErrorWarningFill />
                            <p>We are using your test API key as you are in sandbox mode.</p>
                        </div>
                        <button className="flex items-center gap-2 rounded-[50px] bg-[#7D00FF] px-4 py-3">
                            <p className="">Copy</p>
                            <RxCopy />
                        </button>
                    </div>
                </div>
                <img src="/images/st8e72d7nvj-5rFBKt3kQYYBlfmSfPSJeJ.svg" alt="" className="box" />
            </div> */}
        </div>
    )
}
export default BusinessSectionThree;