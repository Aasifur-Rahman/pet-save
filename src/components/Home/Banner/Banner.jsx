import bannerimg from "../../../assets/Images/dark_cat_banner.png";
const Banner = () => {
  return (
    <div>
      <div className="bg-primary w-full p-40 rounded-lg relative flex justify-center items-center">
        <div>
          <h1 className="text-[#5D2E46] text-3xl">
            This is Pet's Save We save animals that are consider as pet's
          </h1>
        </div>
        <div className="absolute top-1/3 right-1/2">
          <img className="w-full   " src={bannerimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
