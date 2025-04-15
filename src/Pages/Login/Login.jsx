import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import imgLoginCover from "../../assets/Images/—Pngtree—a blue and white cat_58039752222.png";

const Login = () => {
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
      });
  };

  return (
    <div>
      <div>
        <div className="hero bg-base-300 text-primary  mx-auto">
          <div className="hero-content  max-w-screen-lg  ">
            <div className="text-center flex flex-col ">
              <div>
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>

              <div className="lg:flex md:flex items-center justify-around">
                <div>
                  <div>
                    <img className="w-full" src={imgLoginCover} alt="lazy" />
                  </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
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
                    </div>
                    <div className="form-control">
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
                      <label className="label">
                        <Link to="/resetPassword">Forgot password?</Link>
                      </label>
                      <SocialLogin></SocialLogin>
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
  );
};

export default Login;
