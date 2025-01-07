import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const ProfileMenu = ({ userName, userPhoto }) => {
  const { logOut } = useAuth();
  const handleSignOut = () => {
    logOut();
  };
  return (
    <div>
      <div className="drawer z-50 drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button hover:underline btn-secondary "
          >
            {userName}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="avatar justify-center ">
              <div className="w-24  rounded-full">
                <img src={userPhoto} />
              </div>
            </div>
            <li className="mt-4 mr-1">
              <Link className="uppercase border border-primary" to="/profile">
                Profile
              </Link>
            </li>
            <li className="mt-4 mr-1">
              <Link
                className="uppercase border border-primary"
                to="/user/fosterPost"
              >
                Foster Posts
              </Link>
            </li>
            <li className="mt-4 mr-1">
              <Link
                className="uppercase border border-primary"
                to="/user/lostPost"
              >
                Lost Pet Posts
              </Link>
            </li>
            <li className="mt-4 mr-1">
              <Link className="uppercase border border-primary" to="/user">
                Adoptions
              </Link>
            </li>
            <li className="mt-4 mr-1">
              <button
                onClick={handleSignOut}
                className="uppercase border border-primary"
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;

ProfileMenu.propTypes = {
  userName: PropTypes.string,
  userPhoto: PropTypes.string,
};
