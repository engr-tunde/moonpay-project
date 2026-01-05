import BusinessGradient from "../components/business/BusinessGradient";
import BusinessMain from "../components/business/BusinessMain";
import BusinessSectionFour from "../components/business/BusinessSectionFour";
import BusinessSectionThree from "../components/business/BusinessSectionThree";
import BusinessSectionTwo from "../components/business/BusinessSectionTwo";
import BusinessBarq from "../components/business/BusinessBarq";
import BusinessTeam from "../components/business/BusinessTeam";

const Business = () => {
    return(
        <div className="">
            <BusinessMain />
            <BusinessSectionTwo />
            <BusinessSectionThree />
            <BusinessSectionFour />
            <BusinessGradient />
            <BusinessTeam />
            <BusinessBarq />
        </div>
    )
}
export default Business;