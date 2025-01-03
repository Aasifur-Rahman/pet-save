import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import AnimatedGifLoader from "../components/AnimatedGifLoader/AnimatedGifLoader";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(user);

  if (loading) {
    return (
      <AnimatedGifLoader
        src={"https://s6.ezgif.com/tmp/ezgif-6-0a58b30949.gif"}
        alt={"cat running"}
      ></AnimatedGifLoader>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
