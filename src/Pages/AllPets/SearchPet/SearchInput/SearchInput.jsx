import PropTypes from "prop-types";

const SearchInput = ({ setSearch }) => {
  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="lg:w-1/3 w-1/3 absolute right-2/3 top-0 rounded-l-full  px-10 py-5 bg-primary text-secondary outline-none focus:bg-primary"
        type="text"
        name=""
        id=""
        placeholder="Enter pet type"
      />
    </div>
  );
};

export default SearchInput;
SearchInput.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
