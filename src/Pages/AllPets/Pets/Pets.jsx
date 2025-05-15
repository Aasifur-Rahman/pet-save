import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";

const Pets = () => {
  const pet = useLoaderData();
  const { name,petName, type, category, location, address, images, image, description, petAge, LastSeen, typeofPet, typeofBreed, petNature, respondsToName , vaccinated, reward } = pet;

  const [activeImg, setActiveImg] = useState(images?.img1 || image);

  return (
    <div>
      <div className="lg:max-w-screen-xl max-w-screen-lg mx-auto">
        <div className="mt-10  ml-10 ">
          <h1 className="text-6xl  ">{name || petName}</h1>
          <h3 className="mt-2 ml-1 ">{category}</h3>
        </div>
        <div className="lg:flex md:flex flex w-full  justify-around mt-4">
          <div className="w-1/2 relative">
            <img
              className="  rounded-lg h-full w-full lg:w-[90%]  object-cover  aspect-square  "
              src={activeImg}
              alt=""
            />
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 items-center ">
            <img
              id="slide1"
              className="w-36 h-full object-cover  rounded-lg"
              src={images?.img1 || image}
              alt="other photos"
              onClick={() => setActiveImg(images.img1)}
            />
            {
              images?.img2 ?  <img
              className="w-36 h-full object-cover  rounded-lg "
              src={images?.img2}
              alt="other photos"
              onClick={() => setActiveImg(images?.img2)}
            /> : <div></div>
            }
            {images?.img3 ? (
              <img
                className="w-36 h-full object-cover  rounded-lg"
                src={images?.img3}
                alt="other photos"
                onClick={() => setActiveImg(images?.img3)}
              />
            ) : (
              <div></div>
            )}
            {images?.img4 ? (
              <img
                className="w-36 h-full object-cover  rounded-lg"
                src={images?.img4}
                alt="other photos"
                onClick={() => setActiveImg(images?.img4)}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="flex justify-around ml-10">
          <div className="w-3/4 mx-auto">
            {category === "Lost Pet" &&  <h1 className="text-2xl">{reward}</h1>}
            <h1 className="mt-10 text-2xl">About </h1>
            <p>{type}</p>
            <p>{location || address}</p>
            <p>{description}</p>
            {category === "Lost Pet"
             ? 
             <>
            <div className="">
               <p>Pet Age : {petAge}</p>
             <p>Last Seen : {LastSeen}</p>
             <p>Type of Pet : {typeofPet}</p>
             <p>Type of Breed : {typeofBreed}</p>
             <p>{"Pet's"} Behavior : {petNature} </p>
             <p>Responds to Name : {respondsToName === "Yes" ? <IoMdCheckmarkCircle /> : <FaCircleXmark /> }</p>
             <p>Vaccinated : {vaccinated === "Yes" ? <IoMdCheckmarkCircle /> : <FaCircleXmark /> }</p>
            </div>
             </> :
             <div></div>
            }
          </div>

          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Pets;
