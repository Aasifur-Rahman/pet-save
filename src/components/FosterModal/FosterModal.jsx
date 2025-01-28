import PropTypes from "prop-types";
import ReadMore from "../../Features/ReadMore/ReadMore";
const FosterModal = ({
  id,
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
        onClick={() => document.getElementById(`my_modal_${id}`).showModal()}
      >
        Details
      </button>
      <dialog id={`my_modal_${id}`} className="modal overflow-hidden">
        <div className="modal-box   h-5/6">
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
                <h3 className="font-bold text-md ">{name} </h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono ">From</p>
                <h3 className="font-bold text-md  capitalize">{location}</h3>
              </div>
              <div>
                <p className="text-gray-500 font-mono ">
                  {name}
                  {"'s"} Type
                </p>
                <h3 className="font-bold text-md  capitalize">{breed}</h3>
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
                {description.length < 121 ? (
                  description
                ) : (
                  <p>
                    <ReadMore text={description} maxLength={121}></ReadMore>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

FosterModal.propTypes = {
  id: PropTypes.string,
  photo: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  category: PropTypes.string,
  breed: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  nature: PropTypes.string,
  friendly: PropTypes.string,
  childFriendly: PropTypes.string,
  catFriendly: PropTypes.string,
  pottyTrained: PropTypes.string,
  medicalNotes: PropTypes.object,
  description: PropTypes.string,
};

export default FosterModal;
