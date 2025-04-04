import { MdOutlineGppGood, MdOutlineNoiseAware } from "react-icons/md";
import aboutImg from "../../assets/Images/krista-mangulsone-9gz3wfHr65U-unsplash.jpg";
import helping from "../../assets/Images/mira-kireeva-j8riV72oICI-unsplash.jpg";
import useTheme from "../../hooks/useTheme";
import { SiRescuetime } from "react-icons/si";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { FaHandHoldingHeart } from "react-icons/fa";
import Footer from "../../Shared/Footer";

const About = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div className="relative">
        <div
          className="w-full h-96  bg-center bg-cover sticky top-0  hover:filter hover:blur-sm brightness-50"
          style={{
            backgroundImage: `url(${aboutImg})`,
          }}
        ></div>
        <div className="absolute top-1/2   lg:left-[25%] md:left-[15%] left-[5%]">
          <h1
            className={`xl:text-6xl md:text-4xl text-xl font-mono uppercase   ${
              theme == "myDarkTheme" ? "text-primary" : "text-secondary"
            } `}
          >
            Foster. Adopt. rescue. advocate
          </h1>
        </div>
      </div>

      <div>
        <div className="mt-5 p-5 lg:max-w-screen-md mx-auto">
          <h1 className="text-4xl lg:text-center  font-mono ">About Us</h1>
          <p className="font-mono  mt-2 ">
            At Pet Save, we believe every animal deserves a loving home. Our
            mission is to rescue, rehabilitate, and rehome stray, abandoned, and
            neglected pets. We are dedicated to creating a compassionate
            community where animals receive the care, love, and respect they
            deserve.
          </p>
        </div>

        <div>
          <div
            className="-z-10 bg-cover bg-center h-80 flex items-center justify-center "
            style={{ backgroundImage: `url(${helping})` }}
          >
            <div
              className={`mt-5 p-5 lg:max-w-screen-md mx-auto ${
                theme == "myDarkTheme" ? "text-primary" : "text-secondary"
              } `}
            >
              <h1 className="text-4xl lg:text-center  font-mono mt-5 ">
                How We Help
              </h1>
              <p className="font-mono mt-2  ">
                We don’t just list pets for adoption—we ensure they find the
                right homes. Our adoption process includes real-life interaction
                so potential adopters can bond with their future pets before
                making a commitment. Every pet is given proper care,
                vaccinations, and love before joining a new family.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`p-10 lg:max-w-screen-md mx-auto ${
            theme == "myDarkTheme" ? "text-primary" : "text-secondary"
          } `}
        >
          <h1 className="text-4xl   font-mono flex-col  content-center place-items-center   ">
            <MdOutlineGppGood />
            <h1 className="mt-2">Our Mission</h1>
          </h1>
          <ul className="  space-y-5 mt-10  grid lg:grid-cols-4 md:grid-cols-4  content-center justify-center gap-5">
            <li className="flex-col content-center place-items-center">
              <SiRescuetime className="text-2xl " />
              <p className="mt-2 text-center">
                {" "}
                Rescue homeless and endangered pets.
              </p>
            </li>
            <li className="flex-col content-center place-items-center">
              <FaSuitcaseMedical className="text-2xl " />
              <p className="mt-2 text-center">
                {" "}
                Provide medical care, shelter, and nourishment.
              </p>
            </li>
            <li className="flex-col content-center place-items-center">
              <FaHandHoldingHeart className="text-2xl " />
              <p className="mt-2 text-center">
                {" "}
                Connect rescued animals with loving families.
              </p>
            </li>
            <li className="flex-col content-center place-items-center">
              <MdOutlineNoiseAware className="text-2xl " />
              <p className="mt-2 text-center">
                {" "}
                Spread awareness about responsible pet ownership.
              </p>
            </li>
          </ul>
        </div>
        <div className="p-5 lg:max-w-screen-md mx-auto">
          <h1 className="text-4xl lg:text-center  font-mono ">Join Us</h1>
          <p className="font-mono mt-2">
            You can be a hero too! Whether through adoption, fostering,
            volunteering, or donations, every contribution helps save lives.{" "}
            {" Let's"} create a better world for our furry friends, one rescue
            at a time.
          </p>
          <h4 className="text-center text-xl mt-4">
            🐾 Don’t shop! Just Adopt 🐾
          </h4>
        </div>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
