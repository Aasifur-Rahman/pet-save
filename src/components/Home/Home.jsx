import NavBar from "../../Shared/NavBar";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import HowItWorks from "./HowItWorks/HowItWorks";
import Footer from "../../Shared/Footer";
import SearchPet from "../../Shared/SearchPet/SearchPet";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="mt-40 ">
        <SearchPet></SearchPet>
      </div>
      <HowItWorks></HowItWorks>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
