import PropTypes from "prop-types";
import ReadMore from "../../Features/ReadMore/ReadMore";
const Modal = ({
  photo,
  name,
  location,
  category,
  breed,
  age,
  nature,
  friendly,
  childFriendly,
  catFriendly,
  pottyTrained,
  medicalNotes,
  description,
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
              className=" w-2/3 mx-auto rounded-full mb-2"
              src={photo}
              alt=""
            />
            {/* Basic details */}
            <div className="w-5/6 mt-2 mx-auto  grid grid-cols-3  gap-2 items-center">
              <div>
                <p className="text-gray-500 font-mono">Meet</p>
                <h3 className="font-bold text-md ">{name} </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono ">From</p>
                <h3 className="font-bold text-md  capitalize">{location}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">
                  {name}
                  {"'s"} Type
                </p>
                <h3 className="font-bold text-md mt-2 capitalize">{breed}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">
                  {name}
                  {"'s"} age
                </p>
                <h3 className="font-bold text-md mt-2 capitalize">{age}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">
                  {name}
                  {"'s"} Nature
                </p>
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
                <h3 className="font-bold text-md mt-2 capitalize">
                  {friendly}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">
                  is Child Friendly
                </p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {childFriendly}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">is Cat Friendly</p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {catFriendly}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono mt-2">Potty Trained</p>
                <h3 className="font-bold text-md mt-2 capitalize">
                  {pottyTrained}
                </h3>
              </div>
            </div>
            {/* description and medical notes */}
            <p className="text-gray-500 font-mono text-center mt-2">
              Medical Notes
            </p>
            <div className="w-5/6 mx-auto mt-2 mr-4">
              <div className="grid grid-cols-2">
                {Object.entries(medicalNotes).map(
                  ([key, medicalNote], index) => (
                    <li className="capitalize" key={index}>
                      {" "}
                      {key}: {medicalNote ? "Yes" : "No"}
                    </li>
                  )
                )}
              </div>
              <div className="mr-8 mt-2">
                <p className="text-gray-500 font-mono text-center mt-2">
                  Description
                </p>
                <ReadMore text={description} maxLength={132}></ReadMore>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

Modal.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  nature: PropTypes.string.isRequired,
  friendly: PropTypes.string.isRequired,
  childFriendly: PropTypes.string.isRequired,
  catFriendly: PropTypes.string.isRequired,
  pottyTrained: PropTypes.string.isRequired,
  medicalNotes: PropTypes.object,
  description: PropTypes.string,
};

export default Modal;
