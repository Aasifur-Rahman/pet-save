import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { useEffect } from "react";
import useUserDetails from "../../hooks/useUserDetails";
const UserProfileMenu = () => {
  const [userDetails] = useUserDetails();
  const [isAdmin] = useAdmin();
  const { logOut } = useAuth();

  const userPhoto = userDetails?.image;
  const userName = userDetails?.name;

  const handleSignOut = () => {
    logOut();
  };

  useEffect(() => {
    if (userPhoto) {
      const img = new Image();
      img.src = userPhoto;
    }
  }, [userPhoto]);

  return (
    <div className="lg:z-20 md:z-50 sm:z-50">
      {isAdmin ? (
        <div className="drawer  drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button relative inline-block text-primary after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 btn-secondary   "
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
                  {userPhoto ? (
                    <img src={userPhoto} />
                  ) : (
                    <div className="skeleton w-24 h-24 rounded-full" />
                  )}
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
                  to="/dashboard/adminHome"
                >
                  Dashboard
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
      ) : (
        <div className="drawer z-20 drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button  relative inline-block text-primary after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:origin-center hover:after:w-full hover:after:left-0 btn-secondary "
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
                  to="/user/pendingFosterPost"
                >
                  Foster Posts
                </Link>
              </li>
              <li className="mt-4 mr-1">
                <Link
                  className="uppercase border border-primary"
                  to="/user/lostpost"
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
      )}
    </div>
  );
};

export default UserProfileMenu;
