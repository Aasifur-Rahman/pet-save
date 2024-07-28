import { FaDog, FaCat } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <div className="drawer z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-100 w-full  ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="hidden flex-none lg:block w-full ">
              <ul className="menu menu-horizontal w-full gap-10 justify-center">
                {/* Navbar menu content here */}
                <li className="w-1/5">
                  <details>
                    <summary>
                      <FaDog className="text-xl"></FaDog> Dogs
                    </summary>
                    <ul>
                      <li>
                        <Link>For Adoption</Link>
                      </li>
                      <li>
                        <Link>Rescued Dogs</Link>
                      </li>
                      <li>
                        <Link>Lost Dogs</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="w-1/5">
                  <details>
                    <summary>
                      <FaCat className="text-xl"></FaCat> {"Cat's"}
                    </summary>
                    <ul>
                      <li>
                        <Link>For Adoption</Link>
                      </li>
                      <li>
                        <Link>Rescued {"Cat's"}</Link>
                      </li>
                      <li>
                        <Link>Lost {"Cat's"}</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="w-1/5">
                  <details>
                    <summary>
                      <MdPets className="text-xl"></MdPets> Other {"Pet's"}
                    </summary>
                    <ul>
                      <li>
                        <Link>Birds</Link>
                      </li>
                      <li>
                        <Link>Horse</Link>
                      </li>
                      <li>
                        <Link>Goat</Link>
                      </li>
                      <li>
                        <Link>Lamb</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="w-1/5">
                  <Link to="/allpets">{"All Pet's"}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <details>
                <summary>
                  <FaDog className="text-xl"></FaDog> Dogs
                </summary>
                <ul>
                  <li>
                    <Link>For Adoption</Link>
                  </li>
                  <li>
                    <Link>Rescued Dogs</Link>
                  </li>
                  <li>
                    <Link>Lost Dogs</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  <FaCat className="text-xl"></FaCat> {"Cat's"}
                </summary>
                <ul>
                  <li>
                    <Link>For Adoption</Link>
                  </li>
                  <li>
                    <Link>Rescued {"Cat's"}</Link>
                  </li>
                  <li>
                    <Link>Lost {"Cat's"}</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>
                  {" "}
                  <MdPets className="text-xl"></MdPets>Other {"Pet's"}
                </summary>
                <ul>
                  <li>
                    <Link>Birds</Link>
                  </li>
                  <li>
                    <Link>Horse</Link>
                  </li>
                  <li>
                    <Link>Goat</Link>
                  </li>
                  <li>
                    <Link>Lamb</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/allpets">{"All Pet's"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
