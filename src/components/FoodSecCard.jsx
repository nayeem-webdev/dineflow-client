import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodSecCard = ({ food }) => {
  const { _id, foodName, foodImage, category, origin, price, description } =
    food || {};
  return (
    <div
      key={_id}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl"
    >
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{foodName}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaPizzaSlice className="mr-2" /> {category}
          <FaMapMarkerAlt className="ml-4 mr-2" /> {origin}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">${price}</span>
          <Link to={`/food/${_id}`} className="text-primary text-sm">
            <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-primary transition duration-300">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

FoodSecCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodSecCard;
