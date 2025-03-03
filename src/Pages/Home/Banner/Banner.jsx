import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerimg from "../../../assets/Images/—Pngtree—cute dogs peeking cartoon_15020940.png";
import useAuth from "../../../hooks/useAuth";
const Banner = () => {
  const texts = "Give Every Pet a Second Chance – Adopt, Rescue, Love!";

  const { user } = useAuth();
  return (
    <div>
      <div className="bg-primary w-full h-96  rounded-lg relative flex justify-center items-center">
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
            className="absolute w-1/2 md:w-full  bottom-0  right-1/2 transform translate-y-1/3 md:right-[7%] lg:w-[80%] lg:right-[20%] "
            src={bannerimg}
            alt="dog banner"
          />
        </motion.div>
        <div className="flex flex-col justify-center items-center gap-6 absolute lg:relative md:relative ">
          <h1 className="text-secondary text-2xl md:text-4xl lg:text-5xl text-start w-2/3 md:lg:w-3/4 lg:w-3/4  font-bold">
            {texts.split("").map((text, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,

                  delay: index * 0.1,
                }}
              >
                {text}
              </motion.span>
            ))}
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
