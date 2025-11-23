import HomeGradient from "../components/HomeGradient";
import HomeSectionFour from "../components/HomeSectionFour";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionThree from "../components/HomeSectionThree";
import HomeSectionTwo from "../components/HomeSectionTwo";

const HomePage = () => {
  return (
    <div className="container">
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeGradient />
    </div>
  );
};

export default HomePage;
