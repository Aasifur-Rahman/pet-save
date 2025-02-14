import { BiAddToQueue, BiHome } from "react-icons/bi";
import { BsPostcard } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import logo from "../assets/Logo/Pet save logo.png";
import lightlogo from "../assets/Logo/Pet save logo light.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import ToggleTheme from "../Features/ToggleTheme/ToggleTheme";
import useTheme from "../hooks/useTheme";

const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <div className="flex">
      <nav className="lg:w-44 md:w-44 w-1/5 min-h-screen bg-secondary shadow-md">
        <div className="flex justify-around items-center mt-5 mb-2 ">
          <Link to="/">
            {theme === "myDarkTheme" ? (
              <img className="w-24" src={lightlogo} alt="" />
            ) : (
              <img className="w-24" src={logo} alt="" />
            )}
          </Link>
          <ToggleTheme></ToggleTheme>
        </div>
        <hr />
        <ul className="menu text-primary lg:menu-vertical rounded-r-lg mt-2 uppercase font-semibold font-mono">
          <li>
            <NavLink className="lg:w-full md:w-full w-2/3s" to="/dashboard">
              <MdDashboard className="text-lg"></MdDashboard>
              <span className="lg:block md:block hidden"> Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lg:w-full md:w-full w-2/3 mt-2"
              to="/dashboard/addAllPets"
            >
              <BiAddToQueue className="text-lg"></BiAddToQueue>
              <span className="lg:block md:block hidden">Add All Pets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lg:w-full md:w-full w-2/3 mt-2"
              to="/dashboard/managePosts"
            >
              <BsPostcard className="text-lg"></BsPostcard>
              <span className="lg:block md:block hidden"> Manage Posts</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="lg:w-full md:w-full w-2/3 mt-2" to="/">
              <BiHome className="text-lg text-center "></BiHome>
              <span className="lg:block md:block hidden">Home</span>
            </NavLink>
          </li>
          <li>
            <a>
              Stats
              <span className="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
