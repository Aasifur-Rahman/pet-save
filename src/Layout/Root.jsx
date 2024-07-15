import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className=" h-screen mx-auto text-primary ">
      {/* className="text-[#5D2E46] myDarkTheme:text-[#E8D6CB]" */}

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
