import { useForm } from "react-hook-form";
import NavBar from "../../Shared/NavBar";
import { useState } from "react";
import useUserDetails from "../../hooks/useUserDetails";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const [isEditable, setIsEditable] = useState(false);
  const [userDetails] = useUserDetails();
  console.log(userDetails);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center  mt-10 ml-5">
            <div className="avatar  items-center  ">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div>
              <h5 className="ml-5">{userDetails?.name}</h5>
              <h5 className="ml-5 mt-4">{userDetails?.email}</h5>
            </div>
          </div>
          <div className="mt-6">
            {isEditable ? (
              <button
                onClick={() => {
                  setIsEditable(false);
                }}
                className="btn btn-circle btn-primary  mr-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="btn btn-primary px-7 mr-5"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {isEditable && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-9 w-11/12 mt-10 mx-auto">
                <input
                  className="rounded-lg h-12 input input-primary"
                  defaultValue={userDetails.name}
                  disabled={!isEditable}
                  {...register("name")}
                />
                <input
                  className="rounded-lg h-12 input input-primary"
                  placeholder="Nick Name"
                  disabled={!isEditable}
                  {...register("nickName")}
                />
                <select
                  disabled={!isEditable}
                  className="rounded-lg  select select-primary"
                  {...register("gender")}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
                <input
                  disabled={!isEditable}
                  className="rounded-lg h-12 input input-primary"
                  placeholder="Country"
                  {...register("country")}
                />
                <input
                  disabled={!isEditable}
                  className="rounded-lg h-12 input input-primary"
                  placeholder="Language"
                  {...register("language")}
                />
              </div>
              <div className="w-11/12 mx-auto mt-10">
                <input
                  disabled={!isEditable}
                  className="input bg-primary text-secondary w-full mx-auto"
                  value="Save"
                  type="submit"
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
