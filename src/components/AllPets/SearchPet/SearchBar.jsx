import { FaDog, FaCat } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import SearchInput from "./SearchInput/SearchInput";

const SearchPet = ({ setSearch }) => {
  return (
    <div className="bg-base-300 text-primary  lg:max-w-screen-lg  mx-auto p-5 rounded-l-full rounded-r-full relative">
      <div className="flex justify-end  space-x-10">
        <SearchInput setSearch={setSearch}></SearchInput>

        <div className="flex   md:gap-10 lg:gap-20   w-2/3 mx-auto justify-evenly ">
          <div className=" ml-2 flex justify-center w-full items-center gap-2">
            <Link to="/dogs" className="flex gap-2 items-center">
              <FaDog className="text-2xl"></FaDog>
              <h1 className="lg:block md:block hidden">Find a Dog</h1>
            </Link>
          </div>

          <div className="flex justify-center w-full items-center gap-2">
            <Link className="flex items-center gap-2 ">
              <FaCat to="/cats" className="text-2xl"></FaCat>
              <h1 className="lg:block md:block hidden ">Find a Cat</h1>
            </Link>
          </div>
          <div className="flex justify-center w-full items-center gap-2">
            <Link to="/others" className="flex items-center gap-2 ">
              <MdPets className="text-2xl"></MdPets>
              <h1 className="lg:block md:block hidden ">Others</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPet;
SearchPet.propTypes = {
  search: PropTypes.object,
  setSearch: PropTypes.func,
};
