import bannerimg from "../../../assets/Images/ai-generated-bengal-cat-peeking-out-from-behind-a-white-banner-free-photo-removebg-preview.png";
const Banner = () => {
  return (
    <div>
      <div className="bg-primary w-full h-96 rounded-lg relative flex justify-center items-center">
        <div className="bg-cover bg-center w-full h-full">
          <img
            className="absolute w-1/2 bottom-1 md:bottom-2 lg:bottom-3 right-1/2 transform translate-y-1/4  "
            src={bannerimg}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-10 absolute lg:relative md:relative ">
          <h1 className="text-[#5D2E46] text-2xl md:text-4xl lg:text-5xl text-center  lg:w-3/4">
            This is Pet's Save We save animals that are consider as pet's
          </h1>
          <button className="btn  ">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
