import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";

const AdoptionPost = () => {
  const handleAdoptionPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const petName = form.petName.value;
    const petType = form.petType.value;
    const petNature = form.petNature.value;

    const breed = form.breed.value;
    const sex = form.sex.value;
    const friendly = form.friendly.value;

    const childFriendly = form.childFriendly.value;
    const catFriendly = form.catFriendly.value;
    const pottyTrained = form.pottyTrained.value;
    const location = form.location.value;

    const description = form.description.value;
    const imgUpload = form.imgUpload.value;

    const desexed = form.desexed.checked;
    const vaccinated = form.vaccinated.checked;
    const microChipped = form.microChipped.checked;
    const allWormed = form.allWormed.checked;
    const fleaTreated = form.fleaTreated.checked;
    const heartWormed = form.heartWormed.checked;

    const medicalNotes = {
      desexed,
      vaccinated,
      microChipped,
      allWormed,
      fleaTreated,
      heartWormed,
    };
    console.log(medicalNotes);

    console.log(
      petName,
      petType,
      location,
      breed,
      friendly,
      sex,
      childFriendly,
      petNature,
      imgUpload,
      pottyTrained,
      description,
      medicalNotes,
      catFriendly
    );
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-10">
        <form
          onSubmit={handleAdoptionPost}
          className="max-w-screen-lg mx-auto mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center">
            <div className="w-3/5 relative">
              <label className="pl-2 ">{"Pet's Name"}</label>
              <input
                type="text"
                name="petName"
                className="  input input-bordered  w-full max-w-xs mt-2"
                required
                placeholder=" "
              />
            </div>

            <div className="w-3/5">
              <label htmlFor="petType" className="pl-2 ">
                Type of pet
              </label>
              <select
                name="petType"
                className="select select-bordered  w-full max-w-xs mt-2"
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
                type="text"
                name="breed"
                className="input input-bordered w-full max-w-xs mt-2"
              />
            </div>

            <div className="w-3/5">
              <label htmlFor="sex" className="pl-2 ">
                Sex
              </label>
              <select
                name="sex"
                className="select select-bordered  w-full max-w-xs mt-2"
              >
                <option disabled defaultValue>
                  Sex
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
                name="friendly"
                className="select select-bordered  w-full max-w-xs mt-2"
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
                name="petNature"
                type="text"
                className="input input-bordered w-full max-w-xs mt-2"
              />
            </div>

            <div className="w-3/5">
              <label htmlFor="childFriendly" className="pl-2 ">
                Is your pet child friendly?
              </label>
              <select
                name="childFriendly"
                className="select select-bordered  w-full max-w-xs mt-2"
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
                name="catFriendly"
                className="select select-bordered  w-full max-w-xs mt-2"
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
                type="text"
                name="location"
                className="input input-bordered w-full max-w-xs mt-2"
                required
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
                  name="desexed"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Vaccinated</span>
                <input
                  type="checkbox"
                  name="vaccinated"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-1">Micro-chipped</span>
                <input
                  type="checkbox"
                  name="microChipped"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">All wormed</span>
                <input
                  type="checkbox"
                  name="allWormed"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Flea treated</span>
                <input
                  type="checkbox"
                  name="fleaTreated"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text mr-2">Heart worm treated</span>
                <input
                  type="checkbox"
                  name="heartWormed"
                  className="checkbox checkbox-primary"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <textarea
              name="description"
              placeholder="Description"
              className=" textarea textarea-bordered rounded-lg w-5/6 h-32"
            ></textarea>
          </div>

          <div className="mt-12">
            <h4 className="text-3xl text-center ">
              Upload photos you Your lost Pet
            </h4>
            <div className=" mt-10 flex justify-center">
              <input
                type="file"
                name="imgUpload"
                className="file-input file-input-bordered w-full max-w-xs"
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

export default AdoptionPost;
