import GetMoon from "../components/global/GetMoon";
import SellMain from "../components/sell/SellMain";
import SellSectionFour from "../components/sell/SellSectionFour";
import SellSectionThree from "../components/sell/SellSectionThree";
import SellSectionTwo from "../components/sell/SellSectionTwo";
import SellHelp from "../components/sell/SellHelp";
import SellSectionFive from "../components/sell/SellSectionFive";
import SellAbout from "../components/sell/SellAbout";

const Sell = () => {
    return(
        <div className="flex flex-col gap-1 bg-[#F9F8FB]">
            <SellMain />
            <SellSectionTwo />
            <SellSectionThree />
            <SellSectionFour />
            <SellSectionFive />
            <GetMoon />
            <SellAbout />
            <SellHelp />
        </div>
    )
}
export default Sell;