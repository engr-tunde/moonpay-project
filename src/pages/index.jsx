import HomeSection1 from "../components/home/HomeSection1";
import HomeSection2 from "../components/home/HomeSection2";
import HomeSection3 from "../components/home/HomeSection3";
import HomeSection4 from "../components/home/HomeSection4";
import HomeSection5 from "../components/home/HomeSection5";

const HomePage = () => {
  return (
    <div className="w-screen min-h-screen bg-white">
      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3 />
      <HomeSection4/>
      <HomeSection5/>
    </div>
  );
};

export default HomePage;
