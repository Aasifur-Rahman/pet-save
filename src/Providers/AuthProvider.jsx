import { createContext } from "react";
import PropTypes from "prop-types";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const AuthInfo = {
    createUser,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
