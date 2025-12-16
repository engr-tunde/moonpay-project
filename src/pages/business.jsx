import BusinessAboutProduct from "../components/business/BusinessAboutProduct";
import BusinessGradient from "../components/business/BusinessGradient";
import BusinessMain from "../components/business/BusinessMain";
import BusinessSectionFour from "../components/business/BusinessSectionFour";
import BusinessSectionThree from "../components/business/BusinessSectionThree";
import BusinessSectionTwo from "../components/business/BusinessSectionTwo";
import BusinessTestimonial from "../components/business/BusinessTestimonial";

const Business = () => {
    return(
        <div className="">
            <BusinessMain />
            <BusinessSectionTwo />
            <BusinessSectionThree />
            <BusinessSectionFour />
            <BusinessGradient />
            <BusinessAboutProduct />
            <BusinessTestimonial />
        </div>
    )
}
export default Business;