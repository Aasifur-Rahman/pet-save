import PropTypes from "prop-types";

const LostPetModal = ({
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
}) => {
  return (
    <div className="max-w-screen-lg ">
      <button
        className="btn btn-ghost btn-xs"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Details
      </button>
      <dialog id="my_modal_3" className="modal overflow-hidden">
        <div className="modal-box bg-primary text-secondary  h-5/6">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="mt-5 flex flex-col  w-11/12 mx-auto">
            <img
              className=" w-3/4 mx-auto rounded-t-full mb-2"
              src={photo}
              alt=""
            />
            {/* Basic details */}
            <div className="w-5/6 mt-2 mx-auto  grid grid-cols-3  gap-1 items-center">
              <div>
                <p className="text-gray-500 font-mono">Meet</p>
                <h3 className="font-bold text-md ">{parentName} </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono ">From</p>
                <h3 className="font-bold text-md  capitalize">{address}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2"></p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {typeofBreed}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">
                  {petName}
                  {"'s"} age
                </p>
                <h3 className="font-bold text-md mt-2 capitalize">{age}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2"></p>
                <h3 className="font-bold text-md mt-2 capitalize">{nature}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">Category</p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {category}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">is Friendly</p>
                <h3 className="font-bold text-md mt-2 capitalize">{}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">
                  is Child Friendly
                </p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {lastSeen}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">is Cat Friendly</p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {typeofPet}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">Potty Trained</p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {resToName}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">Potty Trained</p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {vaccinated}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

LostPetModal.propTypes = {
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
};

export default LostPetModal;
