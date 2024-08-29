import findDoggo from "../../../assets/Images/finddoggo.png";
import findCat from "../../../assets/Images/findcat.png";
import findOthers from "../../../assets/Images/findothers.png";
import { Link } from "react-router-dom";
const PetListMenu = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-items-center lg:mt-40 md:mt-28 mt-8 gap-6 ">
        <div className=" w-full flex flex-col justify-center items-center">
          <div className="w-2/3 rounded-xl hover:scale-125 transition-all ease-in-out  ">
            <Link>
              <div>
                <img className="mx-auto" width={180} src={findDoggo} alt="" />
              </div>
            </Link>
          </div>

          <h1 className="mx-auto text-xl font-semibold">Find a Dog</h1>
        </div>

        <div className=" w-full flex flex-col justify-center items-center">
          <div className="w-2/3 rounded-xl hover:scale-125 transition-all ease-in-out  ">
            <Link>
              <img className="mx-auto" width={200} src={findCat} alt="" />
            </Link>
          </div>

          <h1 className="mx-auto text-xl font-semibold">Find a Cat</h1>
        </div>

        <div className=" w-full flex flex-col justify-center items-center">
          <div className="w-2/3 rounded-xl hover:scale-125 transition-all ease-in-out  ">
            <Link>
              <img className="mx-auto" width={200} src={findOthers} alt="" />
            </Link>
          </div>
          <h1 className="mx-auto text-xl font-semibold">Find Other Animals</h1>
        </div>
      </div>
    </div>
  );
};

export default PetListMenu;
