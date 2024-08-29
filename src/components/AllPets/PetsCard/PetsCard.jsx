import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PetsCard = ({ pet }) => {
  const { _id, name, type, category, image } = pet;

  return (
    <div>
      <Link
        to={`/pets/${_id}`}
        className="card  hover:scale-105 transition-all ease-in-out bg-base-200 lg:w-80 md:w-80 w-80  shadow-xl mb-5"
      >
        <figure>
          <img
            className=" h-64 w-full object-cover  object-center"
            src={image}
            alt="pets"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos
            eligendi dolores veritatis ex natus repellat quam quidem incidunt
            magni?
          </p>

          <div className="card-actions justify-end relative mb-4">
            <div className="badge badge-outline">{type}</div>
            <div className="badge badge-outline">{category}</div>
          </div>
          <div className="w-full ">
            <button className="bg-primary text-secondary w-full absolute bottom-0 left-0 rounded-b-xl p-2 font-semibold">
              Adopt Now
            </button>
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
