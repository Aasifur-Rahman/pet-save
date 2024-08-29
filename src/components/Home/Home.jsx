import NavBar from "../../Shared/NavBar";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import HowItWorks from "./HowItWorks/HowItWorks";
import Footer from "../../Shared/Footer";
import PetListMenu from "./PetListMenu/PetListMenu";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <div>
        <PetListMenu></PetListMenu>
      </div>
      <HowItWorks></HowItWorks>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
