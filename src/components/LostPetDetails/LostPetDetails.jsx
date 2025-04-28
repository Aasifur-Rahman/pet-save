import PropTypes from "prop-types";
import LostCard from "../LostCard/LostCard";

const LostPetDetails = ({
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
          <LostCard
            photo={photo}
            parentName={parentName}
            category={category}
            address={address}
            age={age}
            lastSeen={lastSeen}
            typeofPet={typeofPet}
            typeofBreed={typeofBreed}
            petName={petName}
            nature={nature}
            resToName={resToName}
            vaccinated={vaccinated}
            reward={reward}
          ></LostCard>
        </div>
      </dialog>
    </div>
  );
};

LostPetDetails.propTypes = {
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

export default LostPetDetails;
