import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const PetsCard = ({ pet }) => {
  const { _id, name, type, category, images, image, location } = pet;

  return (
    <div>
      <Link
        to={`/pets/${_id}`}
        className="card  hover:scale-105 transition-all ease-in-out bg-base-200 lg:w-80 md:w-80 w-80  shadow-xl mb-5"
      >
        <figure>
          <img
            className=" h-64 w-full object-cover  object-center"
            src={images?.img1 || image}
            alt="pets"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <div
            style={{ textTransform: "capitalize" }}
            className="flex-col  justify-center items-center"
          >
            <div className="w-full flex justify-between items-center ">
              <p className="w-full">
                <CiLocationOn />
              </p>
              <p className="flex justify-center">{location}</p>
            </div>

            <p>{type}</p>
            <p>{category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PetsCard;

PetsCard.propTypes = {
  pet: PropTypes.object.isRequired,
};
