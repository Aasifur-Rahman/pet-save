import { Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import catImg from "../../assets/Images/—Pngtree—a blue and white cat_58039752222.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // updateProfile
        updateUser(name);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <div>
          <div className="hero bg-base-300 text-primary  mx-auto">
            <div className="hero-content  max-w-screen-lg  ">
              <div className="text-center flex flex-col ">
                <div>
                  <h1 className="text-5xl font-bold">Sign up here!</h1>
                  <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                </div>

                <div className="lg:flex md:flex items-center justify-around">
                  <div>
                    <div>
                      <img className="w-full" src={catImg} alt="" />
                    </div>
                  </div>
                  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="input input-bordered focus:bg-primary focus:text-secondary "
                        />
                      </div>
                      <div className="form-control">
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
                      </div>
                      <div className="form-control">
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
                        <label className="label">
                          <p>
                            Already Have an Account?{" "}
                            <Link to="/login" className="text-violet-400">
                              Login
                            </Link>
                          </p>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                      </div>
                    </form>
                  </div>
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
