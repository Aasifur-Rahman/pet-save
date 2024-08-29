import { useLoaderData } from "react-router-dom";
import NavBar from "../../../Shared/NavBar";

const Pets = () => {
  const pet = useLoaderData();
  const { name, type, category, location, image } = pet;
  return (
    <div>
      <NavBar></NavBar>
      <div className="lg:max-w-screen-xl max-w-screen-lg mx-auto">
        <div className="mt-10  ml-2 ">
          <h1 className="text-6xl ">{name}</h1>
          <h3 className="mt-2 ">{category}</h3>
        </div>
        <div className="">
          <img
            className=" mt-2 rounded-lg h-80 w-1/3 object-cover  object-top  "
            src={image}
            alt=""
          />
        </div>
        <div>
          <img src="image-2" alt="other photos" />
          <img src="image-3" alt="other photos" />
          <img src="image-4" alt="other photos" />
        </div>
        <div>
          <h1 className="mt-10 text-6xl">About {name}</h1>
          <p>{location}</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default Pets;
