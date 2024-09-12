import { useLoaderData } from "react-router-dom";
import NavBar from "../../../Shared/NavBar";
import { useState } from "react";

const Pets = () => {
  const pet = useLoaderData();
  const { name, type, category, location, images } = pet;
  const [activeImg, setActiveImg] = useState(images.img1);

  return (
    <div>
      <NavBar></NavBar>

      <div className="lg:max-w-screen-xl max-w-screen-lg mx-auto">
        <div className="mt-10  ml-4 ">
          <h1 className="text-6xl  ">{name}</h1>
          <h3 className="mt-2 ml-1 ">{category}</h3>
        </div>
        <div className="lg:flex md:flex flex w-full  justify-around mt-4">
          <div className="w-1/2 relative">
            <img
              className="  rounded-lg h-full w-full  object-cover  aspect-square  "
              src={activeImg}
              alt=""
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 items-center ">
            <img
              id="slide1"
              className="w-36 h-full object-cover  rounded-lg"
              src={images.img1}
              alt="other photos"
              onClick={() => setActiveImg(images.img1)}
            />
            <img
              className="w-36 h-full object-cover  rounded-lg "
              src={images.img2}
              alt="other photos"
              onClick={() => setActiveImg(images.img2)}
            />
            <img
              className="w-36 h-full object-cover  rounded-lg"
              src={images.img3}
              alt="other photos"
              onClick={() => setActiveImg(images.img3)}
            />
            <img
              className="w-36 h-full object-cover  rounded-lg"
              src={images.img4}
              alt="other photos"
              onClick={() => setActiveImg(images.img4)}
            />
          </div>
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
