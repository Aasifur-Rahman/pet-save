import { FaDog, FaCat } from "react-icons/fa6";
import { MdPets } from "react-icons/md";

const SearchPet = () => {
  return (
    <div className="bg-base-300 text-primary max-w-screen-sm lg:max-w-screen-lg md:max-w-screen-md  mx-auto p-5 rounded-l-full rounded-r-full relative">
      <div className="flex justify-end  space-x-10">
        <input
          className="lg:w-1/3 w-1/3 absolute right-2/3 top-0 rounded-l-full  px-10 py-5 bg-primary text-secondary outline-none focus:bg-primary"
          type="text"
          name=""
          id=""
          placeholder="Enter your location"
        />

        <div className="flex   md:gap-20 lg:gap-20   w-2/3 mx-auto justify-evenly">
          <div className="flex items-center gap-2">
            <FaDog className="text-xl"></FaDog>
            <h1>Find a Dog</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaCat className="text-xl"></FaCat>
            <h1>Find a Cat</h1>
          </div>
          <div className="flex items-center gap-2">
            <MdPets className="text-xl gap-2"></MdPets>
            <h1>Find other Animals</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPet;
