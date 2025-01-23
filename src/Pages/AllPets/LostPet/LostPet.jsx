import NavBar from "../../../Shared/NavBar";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const LostPet = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFiles = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFiles, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const lostPetDetails = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        category: data.category,
        address: data.address,
        petAge: data.age,
        lastSeen: data.lastSeen,
        typeofPet: data.typeofPet,
        typeofBreed: data.typeofBreed,
        sex: data.sex,
        petName: data.petName,
        petNature: data.petNature,
        microChip: data.microChip,
        respondsToName: data.respondsToName,
        vaccinated: data.vaccinated,
        image: res.data.data.display_url,
        status: "pending",
      };

      const lostPetRes = await axiosPublic.post(
        "/user/lostPost",
        lostPetDetails
      );
      if (lostPetRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Lost Post was successful`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-5 mb-10">
        <h1 className="text-3xl text-center font-semibold">
          Enter Your Information Along With Your Lost Pet Information and
          Details
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-screen-lg mx-auto mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          <input
            type="Email"
            {...register("email")}
            defaultValue={user.email}
            disabled
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="category"
            {...register("category")}
            placeholder="Lost Pet"
            defaultValue="Lost Pet"
            disabled
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            placeholder="Your first name"
            {...register("firstName")}
            className="input input-bordered  w-full max-w-xs"
            required
          />
          <input
            type="text"
            {...register("lastName")}
            placeholder="Your last name"
            className="input input-bordered  w-full max-w-xs"
            required
          />

          <input
            type="text"
            name="address"
            {...register("address")}
            placeholder="Your Home Address "
            className="input input-bordered w-full max-w-xs"
          />

          <input
            type="text"
            name="lastSeen"
            {...register("age")}
            placeholder="Pet's Age"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="lastSeen"
            {...register("lastSeen")}
            placeholder="Last Place you've Seen your pet"
            className="input input-bordered w-full max-w-xs"
          />

          <select
            {...register("typeofPet")}
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Type of Pet
            </option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Others</option>
          </select>

          <input
            type="text"
            name="typeofBreed"
            {...register("typeofBreed")}
            placeholder="Type of Breed"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            {...register("gender")}
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Neutered</option>
          </select>
          <input
            {...register("petName")}
            type="text"
            placeholder="Your Pet's Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            {...register("petNature")}
            type="text"
            placeholder="Your Pet's Nature How he Behaves"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            {...register("microchip")}
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Does your pet have Micro-chip?
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select
            {...register("respondsToName")}
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Does your pet Responds to given the name?
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select
            {...register("vaccinated")}
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Vaccinated?
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div className="mt-12">
          <h4 className="text-3xl text-center ">
            Upload photos you Your lost Pet
          </h4>
          <div className=" mt-10 flex justify-center">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-primary file-input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="mt-10 mb-20 flex justify-center">
          <button
            type="submit"
            className="px-14 py-4 rounded-full text-center bg-primary text-secondary font-semibold text-xl"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default LostPet;
