import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/Logo/Pet save logo.png";
import lightlogo from "../assets/Logo/Pet save logo light.png";

import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";

const NavBar = () => {
  const { user, logOut } = useAuth();
  // console.log(user.photoURL);

  const { theme, setTheme } = useTheme();

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("myDarkTheme");
    } else {
      setTheme("mytheme");
    }
  };

  const handleSignOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      {user ? (
        <>
          <div className="flex justify-end gap-2">
            <img className="w-1/4 rounded-full" src={user?.photoURL} alt="" />

            <button className="flex items-center  " onClick={handleSignOut}>
              <FaSignOutAlt className="ml-1 text-2xl" />
            </button>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="mx-auto">
      <div className="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
        <div className="navbar bg-base-100 ">
          <div className="flex-1 ">
            <Link to="/">
              {theme === "myDarkTheme" ? (
                <img className="w-32" src={lightlogo} alt="" />
              ) : (
                <img className="w-32" src={logo} alt="" />
              )}
            </Link>
          </div>
          <div className="flex flex-row-reverse mt-2 ">
            <div>
              <input
                checked={theme === "mytheme" ? false : true}
                onChange={handleToggle}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller mt-1"
              />
            </div>
            <ul className="menu menu-horizontal px-4">{navLinks}</ul>
          </div>
        </div>
      </div>
      <div className=" w-full  ">
        <Menu></Menu>
      </div>
    </div>
  );
};

export default NavBar;
