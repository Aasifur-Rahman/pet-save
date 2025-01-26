import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import AnimatedGifLoader from "../components/AnimatedGifLoader/AnimatedGifLoader";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <AnimatedGifLoader
        src={"https://i.ibb.co.com/2ZpgvFc/output-onlinegiftools.gif"}
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
