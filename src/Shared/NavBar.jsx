import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/Logo/Pet save logo.png";
import lightlogo from "../assets/Logo/Pet save logo light.png";

import { FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useTheme from "../hooks/useTheme";
import ProfileMenu from "../components/ProfileMenu/ProfileMenu";
import useUserDetails from "../hooks/useUserDetails";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [userDetails] = useUserDetails();

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
          <div className="flex justify-end gap-2 items-center">
            {userDetails?.image || user?.photoURL ? (
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  {/* <span className="text-xs">UI</span> */}
                  <img
                    className=" w-1/12 rounded-full"
                    src={userDetails?.image || user?.photoURL}
                    alt="user Photo"
                  />
                </div>
              </div>
            ) : (
              <img
                className="w-1/12 rounded-full"
                src={
                  "https://www.shutterstock.com/image-vector/cute-cartoon-cat-profile-avatar-600nw-2432356437.jpg"
                }
                alt="user Photo"
              />
            )}
            <ProfileMenu
              userName={userDetails?.name || user?.displayName}
              userPhoto={userDetails?.image || user?.photoURL}
            ></ProfileMenu>

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
