import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/Logo/Pet save logo.png";
import lightlogo from "../assets/Logo/Pet save logo light.png";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "mytheme"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("myDarkTheme");
    } else {
      setTheme("mytheme");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navLinks = (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
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
