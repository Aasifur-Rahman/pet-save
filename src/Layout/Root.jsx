import Home from "../components/Home/Home";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Root = () => {
  return (
    <div className="max-w-screen-lg h-screen mx-auto text-primary ">
      {/* className="text-[#5D2E46] myDarkTheme:text-[#E8D6CB]" */}
      <NavBar></NavBar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default Root;
