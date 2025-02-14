import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import AnimatedGifLoader from "../components/AnimatedGifLoader/AnimatedGifLoader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <AnimatedGifLoader></AnimatedGifLoader>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
