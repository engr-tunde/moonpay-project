import { BizTeam } from "../../utils/data";

const BusinessTeam = () => {
    return(
        <div className="pl-16">
            <h3 className="text-6xl font-semibold text-center my-16 mx-auto overflow-hidden">Hear from our partners</h3>
            <div className="">
                {BizTeam.map((element,i) => (
                    <div className="flex gap-10 p-10 bg-[#F9F8FB] rounded-[40px]" key={i}>
                        <img src={element.img} alt="" className="w-[50%] rounded-[40px]" />
                        <div className="flex flex-col gap-5 w-[40%]">
                            <img src={element.icon} alt="" className="w-28" />
                            <p className="text-xl font-semibold">{element.title}</p>
                            <p className="text-[16px] text-[#111111bf]">{element.content}</p>
                            <div className="flex gap-4">
                                <img src={element.profileimg} alt="" className="w-14 rounded-full" />
                                <div className="flex flex-col justify-center">
                                    <p className="text-xl font-semibold">{element.name}</p>
                                    <p>{element.team}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BusinessTeam;