import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Footer from "../Shared/Footer";

const Root = () => {
  const location = useLocation();

  const noFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname.includes;

  return (
    <div className=" h-screen mx-auto text-primary ">
      {/* className="text-[#5D2E46] myDarkTheme:text-[#E8D6CB]" */}
      <NavBar></NavBar>
      <Outlet></Outlet>
      {noFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
