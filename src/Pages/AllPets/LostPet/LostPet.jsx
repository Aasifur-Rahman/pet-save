import NavBar from "../../../Shared/NavBar";
import Footer from "../../../Shared/Footer";

const LostPet = () => {
  const handleLostPost = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const address = form.address.value;
    const lastSeen = form.lastSeen.value;
    const typeofPet = form.typeofPet.value;
    const typeofBreed = form.typeofBreed.value;
    const sex = form.sex.value;
    const petName = form.petName.value;
    const petNature = form.petNature.value;
    const MicroChip = form.MicroChip.value;
    const responseofName = form.responseofName.value;
    const imgUpload = form.imgUpload.value;

    console.log(
      firstName,
      lastName,
      email,
      address,
      lastSeen,
      typeofPet,
      typeofBreed,
      sex,
      petName,
      petNature,
      MicroChip,
      responseofName,
      imgUpload
    );
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
      <form onSubmit={handleLostPost} className="max-w-screen-lg mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          <input
            type="text"
            placeholder="Your first name"
            name="firstName"
            className="input input-bordered  w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Your last name"
            className="input input-bordered  w-full max-w-xs"
            required
          />

          <input
            type="Email"
            name="email"
            placeholder="Your Email Address"
            className="input input-bordered w-full max-w-xs"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your Home Address "
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="lastSeen"
            placeholder="Last Place you've Seen your pet"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            name="typeofPet"
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
            placeholder="Type of Breed"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            name="sex"
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Sex
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Neutered</option>
          </select>
          <input
            name="petName"
            type="text"
            placeholder="Your Pet's Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            name="petNature"
            type="text"
            placeholder="Your Pet's Nature How he Behaves"
            className="input input-bordered w-full max-w-xs"
          />
          <select
            name="MicroChip"
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Does your pet have Micro-chip?
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select
            name="responseofName"
            className="select select-bordered  w-full max-w-xs"
          >
            <option disabled selected>
              Does your pet Responds to given the name?
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

      <Footer></Footer>
    </div>
  );
};

export default LostPet;
