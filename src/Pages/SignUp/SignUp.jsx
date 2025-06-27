import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import imgSignCover from "../../assets/Images/—Pngtree—a blue and white cat_58039752222.png";
import { useState } from "react";
import { motion } from "framer-motion";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [error, setError] = useState("");
  const { createUser, updateUser } = useAuth();

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // updateProfile
        updateUser(name).then(() => {
          const userInfo = {
            name: name,
            email: email,
            image: photoURL,
          };
          axiosPublic
            .post("/users", userInfo)
            .then((res) => {
              console.log(res.data.insertedId);
              if (res.data.insertedId) {
                Swal.fire({
                  position: "center",
                  imageUrl:
                    "https://i.ibb.co.com/XYWZ6bf/db0fc5b567a3600e43a4b8650df7986f.gif",
                  imageWidth: "200px",
                  background: "#E8D6CB",
                  title: "Account created successfully",

                  showConfirmButton: false,
                  timer: 5000,
                });
                navigate("/");
              }
            })
            .catch((error) => {
              console.error("Axios error:", error);
              setError("Something went wrong saving user data");
            });
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("Email already in use");
        } else {
          setError("Something went wrong");
        }
      });
  };

  return (
    <div>
      <div>
        <div>
          <div className="grid w-full  place-items-center bg-cover  bg-base-200  pb-6  text-primary  mx-auto">
            <div className="hero-content  max-w-screen-lg  ">
              <div className="text-center flex flex-col ">
                <div>
                  <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold"
                  >
                    Sign up here!
                  </motion.h1>
                  <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ duration: 1.5 }}
                    className="py-6"
                  >
                    Make a paw-sitive impact today! Create an account to start
                    saving lives, connecting with loving animals, and being part
                    of a community that truly cares.
                  </motion.p>
                </div>

                <div className="lg:flex md:flex items-center justify-around">
                  <div>
                    <motion.div
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 100 }}
                      transition={{ duration: 0.8 }}
                    >
                      <img className="w-5/6" src={imgSignCover} alt="" />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl"
                  >
                    <form onSubmit={handleSignUp} className="card-body">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="form-control"
                      >
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="input input-bordered focus:bg-primary focus:text-secondary "
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="form-control"
                      >
                        <label className="label">
                          <span className="label-text">Photo URL</span>
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="Photo URL here"
                          className="input input-bordered focus:bg-primary focus:text-secondary "
                        />
                      </motion.div>
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
                          placeholder="Email"
                          className="input input-bordered focus:bg-primary focus:text-secondary "
                          required
                        />
                      </motion.div>
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
                          placeholder="Password"
                          className="input input-bordered"
                          required
                        />

                        {error && (
                          <p className="text-yellow-400 mt-3 mb-3">{error}</p>
                        )}

                        <label className="label">
                          <p>
                            Already Have an Account?{" "}
                            <Link to="/login" className="text-violet-400">
                              Login
                            </Link>
                          </p>
                        </label>
                        <SocialLogin></SocialLogin>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="form-control mt-3"
                      >
                        <button className="btn btn-primary">Sign Up</button>
                      </motion.div>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
