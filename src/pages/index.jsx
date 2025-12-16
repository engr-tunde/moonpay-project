import Barcode from "../components/Barcode";
import HomeGradient from "../components/HomeGradient";
import HomeSectionFour from "../components/HomeSectionFour";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionThree from "../components/HomeSectionThree";
import HomeSectionTwo from "../components/HomeSectionTwo";
import Review from "../components/Review";

const HomePage = () => {
  return (
    <div className="container">
      <HomeSectionOne />
      {/* <HomeSectionTwo /> */}
      {/* <HomeSectionThree /> */}
      <HomeSectionFour />
      <HomeGradient />
      <Review />
      <Barcode />
    </div>
  );
};

export default HomePage;
