import { useForm } from "react-hook-form";

import { useState } from "react";
import useUserDetails from "../../hooks/useUserDetails";
import { CiEdit } from "react-icons/ci";

import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const [isEditable, setIsEditable] = useState(false);
  const [userDetails, refetch] = useUserDetails();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const handleEdit = () => {
    setIsEditable(true);
  };

  const onSubmit = async (data) => {
    let imageUrl = userDetails.image; // fallback to existing image

    try {
      if (data.image && data.image[0]) {
        const imageFiles = new FormData();
        imageFiles.append("image", data.image[0]);

        const res = await axiosPublic.post(image_hosting_api, imageFiles, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        imageUrl = res.data.data.display_url;
      }

      const userUpdate = {
        name: data.name,
        nickName: data.nickName,
        gender: data.gender,
        country: data.country,
        language: data.language,
        image: imageUrl,
      };

      if (!userDetails?._id) {
        console.error("User ID is not available yet");
        return;
      }

      const updateUser = await axiosSecure.patch(
        `/users/${userDetails._id}`,
        userUpdate
      );

      if (updateUser.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Updated Profile`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center">
            <div className="flex items-center  mt-10 ml-5">
              <div className="relative">
                <div hidden={!isEditable}>
                  <div className="absolute z-10 top-16 right-2">
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_4").showModal()
                      }
                    >
                      <CiEdit className="text-2xl" />
                    </button>
                  </div>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-10/12 h-1/2 max-w-2xl">
                      <div className="flex flex-col items-start justify-start">
                        <input
                          {...register("image")}
                          type="file"
                          className="file-input file-input-bordered file-input-sm  max-w-xs"
                        />
                        {userDetails?.image && (
                          <img
                            src={userDetails.image} // assuming this is a valid image URL
                            alt="Current"
                            className="w-24 h-24 mt-2 object-cover rounded"
                          />
                        )}
                      </div>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button, it will close the modal */}

                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div className="avatar  items-center  ">
                  <div className="w-24 rounded-full">
                    <img
                      src={
                        userDetails?.image
                          ? userDetails?.image
                          : "https://www.shutterstock.com/image-vector/cute-cartoon-cat-profile-avatar-600nw-2432356437.jpg"
                      }
                    />
                  </div>
                </div>
              </div>

              <div>
                <h5 className="ml-5  ">{userDetails?.name} </h5>
                <h5 className="ml-5 mt-4 ">{userDetails?.email} </h5>
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
          {isEditable && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-9 w-11/12 mt-10 mx-auto">
                <div className=" flex flex-col ">
                  <label>Your Name</label>
                  <input
                    className="rounded-lg h-12 input input-primary mt-2"
                    defaultValue={userDetails?.name}
                    disabled={!isEditable}
                    {...register("name")}
                  />
                </div>
                <div className=" flex flex-col ">
                  <label>Your Nickname</label>
                  <input
                    defaultValue={userDetails?.nickName}
                    className="rounded-lg h-12 input input-primary mt-2"
                    placeholder="Nick Name"
                    disabled={!isEditable}
                    {...register("nickName")}
                  />
                </div>
                <div className=" flex flex-col ">
                  <label>Gender</label>
                  <select
                    defaultValue={userDetails?.gender}
                    disabled={!isEditable}
                    className="rounded-lg  select select-primary mt-2"
                    {...register("gender")}
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className=" flex flex-col ">
                  <label>Country</label>
                  <input
                    defaultValue={userDetails?.country}
                    disabled={!isEditable}
                    className="rounded-lg h-12 input input-primary mt-2"
                    placeholder="Country"
                    {...register("country")}
                  />
                </div>

                <div className=" flex flex-col ">
                  <label>Your Language</label>
                  <input
                    defaultValue={userDetails?.language}
                    disabled={!isEditable}
                    className="rounded-lg h-12 input input-primary mt-2"
                    placeholder="Language"
                    {...register("language")}
                  />
                </div>
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
