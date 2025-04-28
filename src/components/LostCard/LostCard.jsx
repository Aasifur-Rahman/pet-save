import PropTypes from "prop-types";

const LostCard = ({
  photo,
  category,
  reward,
  petName,
  age,
  typeofPet,
  typeofBreed,
  nature,
  vaccinated,
  resToName,
  parentName,
  address,
  lastSeen,
}) => {
  return (
    <div>
      <div className=" p-4 rounded-lg">
        <div className="flex gap-4">
          <div className="flex-1 p-4 rounded-lg">
            <img src={photo} alt="Lost Dog" className="w-full rounded-lg" />
          </div>
          <div className="flex-1 bg-primary p-4 rounded-lg text-center">
            <h1 className="text-6xl font-bold text-black">{category}</h1>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="bg-red-800 p-10 rounded-lg text-center text-white font-bold">
            <p className="text-2xl">Reward</p>
            <h2 className="text-4xl">${reward}</h2>
          </div>
          <div className="flex-1 bg-gray-900 p-4 rounded-lg">
            <div className="mt-1 ml-2 text-xs font-mono ">
              <p>Name: {petName}</p>
              <p>Age: {age}</p>
              <p>Type: {typeofPet}</p>
              <p>Breed: {typeofBreed}</p>
              <p>Nature: {nature}</p>
              <p>Vaccinated: {vaccinated}</p>
              <p>Response to Name: {resToName}</p>
            </div>
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
            <span className="text-red-800 font-bold underline ">{address}</span>
            . If anyone has seen this dog or knows of its whereabouts, please
            contact the owner immediately. It was last seen at{" "}
            <span className=" text-red-800 font-bold underline">
              {lastSeen}
            </span>{" "}
            .The dog was missed so much by his family and they really wanted to
            bring him back home safe and sound. Your help in{" "}
          </p>
          ```
        </div>
      </div>
    </div>
  );
};

LostCard.propTypes = {
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

export default LostCard;
