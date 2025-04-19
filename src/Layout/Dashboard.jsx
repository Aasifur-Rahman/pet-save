import { BiAddToQueue, BiHome } from "react-icons/bi";
import { BsPostcard } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import logo from "../assets/Logo/Pet save logo.png";
import lightlogo from "../assets/Logo/Pet save logo light.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import ToggleTheme from "../Features/ToggleTheme/ToggleTheme";
import useTheme from "../hooks/useTheme";
import { FaUsers } from "react-icons/fa";
import { GiGoat } from "react-icons/gi";
import { motion } from "framer-motion";
import { SiManageiq } from "react-icons/si";

const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="flex"
    >
      <div className="lg:w-44 md:w-44 w-1/5 min-h-screen bg-secondary shadow-md">
        <div className="lg:flex lg:flex-row md:flex md:flex-row flex flex-col gap-4 justify-around items-center mt-5 mb-2 ">
          <Link to="/">
            {theme === "myDarkTheme" ? (
              <img className="w-full lg:w-24 md:w-24" src={lightlogo} alt="" />
            ) : (
              <img className="w-full g:w-24 md:w-24" src={logo} alt="" />
            )}
          </Link>
          <div>
            <ToggleTheme></ToggleTheme>
          </div>
        </div>
        <hr />
        <ul className="menu text-primary lg:menu-vertical rounded-r-lg mt-2 uppercase font-semibold font-mono justify-center lg:items-start md:items-start items-center">
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink
              className="lg:w-full md:w-full  "
              to="/dashboard/AdminHome"
            >
              <MdDashboard className="text-lg"></MdDashboard>
              <span className="lg:block md:block hidden">Dashboard</span>
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink
              className="lg:w-full md:w-full  mt-2"
              to="/dashboard/addAllPets"
            >
              <BiAddToQueue className="text-lg"></BiAddToQueue>
              <span className="lg:block md:block hidden">Add All Pets</span>
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink
              className="lg:w-full md:w-full mt-2"
              to="/dashboard/managePets"
            >
              <SiManageiq></SiManageiq>
              <span className="lg:block md:block hidden">Manage Pets</span>
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink
              className="lg:w-full md:w-full mt-2"
              to="/dashboard/managePosts"
            >
              <BsPostcard className="text-lg"></BsPostcard>
              <span className="lg:block md:block hidden"> Manage Posts</span>
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <NavLink
              className="lg:w-full md:w-full  mt-2 mb-2"
              to="/dashboard/manageUsers"
            >
              <FaUsers className="text-lg"></FaUsers>
              <span className="lg:block md:block hidden"> Manage Users</span>
            </NavLink>
          </motion.li>
          <hr></hr>
          <div className="mt-5s">
            <motion.li whileHover={{ scale: 1.1 }}>
              <NavLink className="lg:w-full md:w-full  mt-2" to="/">
                <BiHome className="text-lg  "></BiHome>
                <span className="lg:block md:block hidden">Home</span>
              </NavLink>
            </motion.li>
            <motion.li className="" whileHover={{ scale: 1.1 }}>
              <Link to={"/allPets"}>
                {" "}
                <GiGoat className="text-lg "></GiGoat>{" "}
                <span className="lg:block md:block hidden">All Pets</span>
              </Link>
            </motion.li>
          </div>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </motion.div>
  );
};

export default Dashboard;
