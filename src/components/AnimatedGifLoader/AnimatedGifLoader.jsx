import PropTypes from "prop-types";

const AnimatedGifLoader = ({ src, alt }) => {
  return (
    <div className="flex justify-center align-middle mt-40 lg:mt-52">
      <img src={src} alt={alt}></img>
    </div>
  );
};

export default AnimatedGifLoader;

AnimatedGifLoader.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
