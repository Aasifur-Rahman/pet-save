import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/Logo/Pet save logo.png";
import lightlogo from "../assets/Logo/Pet save logo light.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { ThemeContext } from "../Providers/ThemeProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

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
      <li>
        {user ? (
          <button onClick={handleSignOut}>
            <Link to="/login">Sign out</Link>
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
    </>
  );

  return (
    <div className="max-w-screen-lg mx-auto">
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
        <div className="flex-none">
          <div>
            <input
              checked={theme === "mytheme" ? false : true}
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
          </div>
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>
      <div className=" w-full">
        <Menu className=""></Menu>
      </div>
    </div>
  );
};

export default NavBar;
