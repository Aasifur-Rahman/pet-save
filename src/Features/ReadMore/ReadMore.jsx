import { useState } from "react";
import PropTypes from "prop-types";

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{isExpanded ? text : `${text.slice(0, maxLength)}`}</p>

      <p>
        <button className="text-gray-600 underline" onClick={handleReadMore}>
          Read More
        </button>
      </p>
    </div>
  );
};

ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default ReadMore;
