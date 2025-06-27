import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import imgLoginCover from "../../assets/Images/—Pngtree—a blue and white cat_58039752222.png";
import { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [error, setError] = useState("");

  const { userLogIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogIn(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          Swal.fire({
            position: "center",
            imageUrl:
              "https://i.pinimg.com/originals/95/92/4b/95924b59120f5bd3ac5db9c69cf9c26a.gif",
            imageWidth: "200px",
            background: "#E8D6CB",
            title: "Welcome back, Furry",

            showConfirmButton: false,
            timer: 50000,
          });
          navigate(location?.state ? location?.state : "/");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code == "auth/invalid-credential") {
          setError("Invalid email or password.");
        } else {
          setError("Something went wrong. Please try again");
        }
      });
  };

  return (
    <div>
      <div>
        <div className=" grid w-full  place-items-center bg-cover  bg-base-200 py-10 pb-28  text-primary  mx-auto">
          <div className="hero-content  max-w-screen-lg  ">
            <div className="text-center flex flex-col ">
              <div>
                <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-bold"
                >
                  Login now!
                </motion.h1>
                <motion.p
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ duration: 1.5 }}
                  className="py-6"
                >
                  Log in to continue your journey of compassion—whether{" "}
                  {" you're"}
                  here to adopt, rescue, or simply care. Together, we make a
                  difference for pets in need.
                </motion.p>
              </div>

              <div className="lg:flex md:flex items-center justify-around">
                <div>
                  <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img className="w-5/6" src={imgLoginCover} alt="lazy" />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="card bg-base-100  mx-auto w-full max-w-sm shrink-0 shadow-2xl"
                >
                  <form onSubmit={handleLogin} className="card-body">
                    {/* email */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="form-control"
                    >
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered focus:bg-primary focus:text-secondary "
                        required
                      />
                    </motion.div>
                    {/* password */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="form-control"
                    >
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                      {error && (
                        <p className="text-yellow-400 mt-3 mb-3">
                          ⚠️ Invalid email or password.
                        </p>
                      )}
                      <label className="label">
                        <Link to="/resetPassword">Forgot password?</Link>
                      </label>
                      <SocialLogin></SocialLogin>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="form-control mt-6"
                    >
                      <button className="btn btn-primary">Login</button>
                    </motion.div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
