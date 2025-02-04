import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerimg from "../../../assets/Images/—Pngtree—cute dogs peeking cartoon_15020940.png";
import useAuth from "../../../hooks/useAuth";
const Banner = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="bg-primary w-full h-96 rounded-lg relative flex justify-center items-center">
        <motion.div
          initial={{
            x: -100,
          }}
          animate={{
            x: 2,
          }}
          transition={{
            duration: 1,
          }}
          className="bg-cover bg-center w-full h-full"
        >
          <img
            className="absolute w-1/2  bottom-0  right-1/2 transform translate-y-1/3  "
            src={bannerimg}
            alt="dog banner"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-6 absolute lg:relative md:relative ">
          <h1 className="text-secondary text-2xl md:text-4xl lg:text-5xl text-center w-2/3 md:lg:w-3/4 lg:w-3/4 uppercase font-bold">
            This is Pet Save We save animals that are consider as {"pet's"}
          </h1>
          {!user && (
            <Link to="/signup" className="btn text-primary ">
              Register Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
