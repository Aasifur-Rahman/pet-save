import Footer from "../../../Shared/Footer";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const FosteringHome = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const imageFiles = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFiles, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const petDetails = {
        email: data.email,
        category: data.category,
        petsName: data.petName,
        petType: data.petType,
        breedType: data.typeofBreed,
        petAge: data.petAge,
        friendly: data.friendly,
        petsNature: data.petsNature,
        childFriendly: data.childFriendly,
        catFriendly: data.catFriendly,
        pottyTrained: data.pottyTrained,
        location: data.location,
        medicalNotes: {
          desexed: data.desexed,
          vaccinated: data.vaccinated,
          microChipped: data.microChipped,
          allWormed: data.allWormed,
          fleaTreated: data.fleaTreated,
          heartWormTreated: data.heartWormTreated,
        },
        description: data.description,
        image: res.data.data.display_url,
        status: "pending",
      };

      const fosterRes = await axiosPublic.post("/user/fosterPost", petDetails);
      if (fosterRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Foster post was successful`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/user/pendingFosterPost");
      }
    }
  };
  return (
    <div>
      <div className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-screen-lg mx-auto mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center">
            <div className="w-3/5 relative">
              <label htmlFor="petType" className="pl-2 ">
                User Email
              </label>
              <input
                defaultValue={user.email}
                disabled
                className="input input-bordered w-full mb-4"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="w-3/5 relative">
              <label className="pl-2 ">{"Category"}</label>
              <input
                type="text"
                disabled
                className="  input input-bordered  w-full max-w-xs mt-2"
                required
                defaultValue="Fostering Home"
                placeholder="Fostering Home"
                {...register("category", { required: true })}
              />
            </div>
            <div className="w-3/5 relative">
              <label htmlFor="petType" className="pl-2 ">
                {"Pet's"} Name
              </label>
              <input
                className="input input-bordered w-full mb-4"
                placeholder="Pet's Name"
                {...register("petName", { required: true })}
              />
            </div>

            <div className="w-3/5">
              <label htmlFor="petType" className="pl-2 ">
                Type of pet
              </label>
              <select
                className="select select-bordered  w-full max-w-xs mt-2"
                {...register("petType", { required: true })}
              >
                <option disabled defaultValue>
                  Type of Pet
                </option>
                <option>Dog</option>
                <option>Cat</option>
                <option>Others</option>
              </select>
            </div>

            <div className="w-3/5">
              <label htmlFor="breed" className="pl-2 ">
                Type of Breed
              </label>
              <input
                className="input input-bordered w-full mb-4"
                placeholder="Breed Type"
                {...register("typeofBreed", { required: true })}
              />
            </div>

            <div className="w-3/5">
              <label htmlFor="petAge" className="pl-2 ">
                Age of your pet
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mt-2"
                {...register("petAge", { required: true })}
              />
            </div>

            <div className="w-3/5">
              <label htmlFor="gender" className="pl-2 ">
                Gender
              </label>
              <select
                className="select select-bordered  w-full max-w-xs mt-2"
                {...register("gender", { required: true })}
              >
                <option disabled defaultValue>
                  Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Neutered</option>
              </select>
            </div>
            <div className="w-3/5">
              <label htmlFor="friendly" className="pl-2 ">
                Is your pet friendly?
              </label>
              <select
                className="select select-bordered  w-full max-w-xs mt-2"
                {...register("friendly", { required: true })}
              >
                <option disabled defaultValue>
                  Is your pet friendly?
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="w-3/5">
              <label htmlFor="petNature" className="pl-2 ">
                Your {"Pet's"} Nature
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs mt-2"
                {...register("petsNature", { required: true })}
              />
            </div>

            <div className="w-3/5">
              <label htmlFor="childFriendly" className="pl-2 ">
                Is your pet child friendly?
              </label>
              <select
                className="select select-bordered  w-full max-w-xs mt-2"
                {...register("childFriendly", { required: true })}
              >
                <option disabled defaultValue>
                  Is your pet child friendly?
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="w-3/5">
              <label htmlFor="catFriendly" className="pl-2 ">
                Is your pet cat friendly
              </label>
              <select
                className="select select-bordered  w-full max-w-xs mt-2"
                {...register("catFriendly", { required: true })}
              >
                <option disabled defaultValue>
                  Is your pet cat friendly?
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="w-3/5">
              <label htmlFor="pottyTrained" className="pl-2 ">
                Is your pet potty trained?
              </label>
              <select
                name="pottyTrained"
                className="select select-bordered  w-full max-w-xs mt-2"
                {...register("pottyTrained", { required: true })}
              >
                <option disabled defaultValue>
                  Is your pet potty trained?
                </option>
                <option>In training</option>
                <option>Trained</option>
                <option>Not yet</option>
              </select>
            </div>

            <div className="w-3/5">
              <label htmlFor="location" className="pl-2 ">
                Location to adopt your pet
              </label>
              <input
                className="input input-bordered w-full max-w-xs mt-2"
                {...register("location", { required: true })}
              />
            </div>
          </div>

          {/* checkbox */}
          <div className=" mt-3 w-4/5 mx-auto">
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Desexed </span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  {...register("desexed")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Vaccinated</span>
                <input
                  type="checkbox"
                  {...register("vaccinated")}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-1">Micro-chipped</span>
                <input
                  type="checkbox"
                  {...register("microChipped")}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">All wormed</span>
                <input
                  type="checkbox"
                  {...register("allWormed")}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Flea treated</span>
                <input
                  type="checkbox"
                  {...register("fleaTreated")}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Heart worm treated</span>
                <input
                  type="checkbox"
                  {...register("heartWormTreated")}
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <textarea
              placeholder="Description"
              className=" textarea textarea-bordered rounded-lg w-5/6 h-32"
              {...register("description", { required: true })}
            ></textarea>
          </div>

          <div className="mt-12">
            <h4 className="text-3xl text-center ">
              Upload photos you Your lost Pet
            </h4>
            <div className=" mt-10 flex justify-center">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-primary w-full max-w-xs"
              />
            </div>
          </div>
          <div className="mt-10 mb-20 flex justify-center">
            <button className="px-14 py-4 rounded-full text-center bg-primary text-secondary font-semibold text-xl">
              Post
            </button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default FosteringHome;
