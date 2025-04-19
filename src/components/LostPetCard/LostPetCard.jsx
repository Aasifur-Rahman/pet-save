import PropTypes from "prop-types";
import { useState } from "react";
import { FaEdit } from "react-icons/fa"; // For edit icon

const LostPetCard = ({
  id,
  photo,
  parentName,
  category,
  address,
  age,
  lastSeen,
  typeofPet,
  typeofBreed,
  petName,
  nature,
  resToName,
  vaccinated,
  reward,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    petName,
    age,
    typeofPet,
    typeofBreed,
    nature,
    resToName,
    vaccinated,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="max-w-screen-lg">
      <button
        className="btn btn-ghost btn-xs"
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        Details
      </button>
      <dialog id={`my_modal_${id}`} className="modal overflow-hidden">
        <div className="modal-box h-5/6 overflow-y-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="p-4 rounded-lg">
            <div className="flex gap-4">
              <div className="flex-1 p-4 rounded-lg">
                <img src={photo} alt="Lost Pet" className="w-full rounded-lg" />
              </div>
              <div className="flex-1 bg-primary p-4 rounded-lg text-center">
                <h1 className="text-6xl font-bold text-black">{category}</h1>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsEditing((prev) => !prev)}
                className="btn btn-outline btn-sm flex items-center gap-1"
              >
                <FaEdit /> {isEditing ? "Cancel Edit" : "Edit"}
              </button>
            </div>

            <div className="flex gap-4 mt-4">
              <div className="bg-red-800 p-10 rounded-lg text-center text-white font-bold">
                <p className="text-2xl">Reward</p>
                <h2 className="text-4xl">${reward}</h2>
              </div>
              <div className="flex-1 bg-gray-900 p-4 rounded-lg text-white">
                {isEditing ? (
                  <div className="space-y-2 text-sm">
                    <input
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Name"
                    />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Age"
                    />
                    <input
                      name="typeofPet"
                      value={formData.typeofPet}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Type"
                    />
                    <input
                      name="typeofBreed"
                      value={formData.typeofBreed}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Breed"
                    />
                    <input
                      name="nature"
                      value={formData.nature}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Nature"
                    />
                    <input
                      name="resToName"
                      value={formData.resToName}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Responds to Name"
                    />
                    <label className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        name="vaccinated"
                        checked={formData.vaccinated}
                        onChange={handleChange}
                        className="checkbox"
                      />
                      Vaccinated
                    </label>
                  </div>
                ) : (
                  <div className="mt-1 ml-2 text-xs font-mono space-y-1">
                    <p>Name: {formData.petName}</p>
                    <p>Age: {formData.age}</p>
                    <p>Type: {formData.typeofPet}</p>
                    <p>Breed: {formData.typeofBreed}</p>
                    <p>Nature: {formData.nature}</p>
                    <p>Vaccinated: {formData.vaccinated ? "Yes" : "No"}</p>
                    <p>Response to Name: {formData.resToName}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-primary p-4 rounded-lg mt-4">
              <h2 className="text-2xl font-bold text-black text-center">
                Have You Seen Him?
              </h2>
              <p className="text-gray-600 text-center mt-2">
                A dog is missing of{" "}
                <span className="text-red-800 font-bold underline">
                  {parentName}
                </span>{" "}
                in the{" "}
                <span className="text-red-800 font-bold underline">
                  {address}
                </span>
                . If anyone has seen this dog or knows of its whereabouts,
                please contact the owner immediately. It was last seen at{" "}
                <span className=" text-red-800 font-bold underline">
                  {lastSeen}
                </span>
                . The dog was missed so much by his family and they really want
                to bring him back home safe and sound.
              </p>
            </div>

            {isEditing && (
              <div className="mt-4 text-center">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    // Here you can add the logic to update the data to backend or local state
                    setIsEditing(false);
                  }}
                >
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

LostPetCard.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  parentName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  lastSeen: PropTypes.string.isRequired,
  typeofPet: PropTypes.string.isRequired,
  typeofBreed: PropTypes.string.isRequired,
  petName: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  resToName: PropTypes.string.isRequired,
  vaccinated: PropTypes.bool.isRequired,
  reward: PropTypes.number,
};

export default LostPetCard;
