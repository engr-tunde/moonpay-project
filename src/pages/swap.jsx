import GetMoon from "../components/global/GetMoon";
import SwapAbout from "../components/swap/SwapAbout";
import SwapMain from "../components/swap/SwapMain";
import SwapReview from "../components/swap/SwapReview";
import SwapSectionFour from "../components/swap/SwapSectionFour";
import SwapSectionThree from "../components/swap/SwapSectionThree";
import SwapSectiontionTwo from "../components/swap/SwapSectiontionTwo";
import SwapHelp from "../components/swap/SwapHelp";

const Swap =() => {
    return(
        <div className="flex flex-col gap-1 bg-[#F9F8FB]">
            <SwapMain />
            <SwapSectiontionTwo />
            <SwapSectionThree />
            <SwapSectionFour />
            <GetMoon />
            <SwapReview />
            <SwapAbout />
            <SwapHelp />
        </div>
    )
}
export default Swap;