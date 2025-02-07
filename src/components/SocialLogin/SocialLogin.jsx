import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        if (result.user) {
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
            image: result.user?.photoURL,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            Swal.fire({
              position: "center",
              imageUrl: res.insertedId
                ? "https://i.ibb.co.com/XYWZ6bf/db0fc5b567a3600e43a4b8650df7986f.gif"
                : "https://i.pinimg.com/originals/95/92/4b/95924b59120f5bd3ac5db9c69cf9c26a.gif",
              imageWidth: "200px",
              background: "#E8D6CB",
              title: res.insertedId
                ? "Account created successfully"
                : "Welcome back furry",

              showConfirmButton: false,
              timer: 50000,
            });
            navigate(location?.state ? location?.state : "/");
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-3">
        <FcGoogle
          onClick={handleGoogleSignIn}
          className="text-3xl lg:text-4xl "
        />
      </div>
    </div>
  );
};

export default SocialLogin;
