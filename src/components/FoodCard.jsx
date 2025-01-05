import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { _id, foodName, foodImage, category, origin, price, description } =
    food || {};
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={foodImage}
        alt={foodName}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{foodName}</h2>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-bold">Category: </span>
          {category}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-bold">Origin: </span>
          {origin}
        </p>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">${price}</span>
          <div className="flex space-x-2">
            <Link
              to={`/food-purchase/${_id}`}
              className="bg-primary text-white p-2 rounded-md hover:bg-primary/70"
              title="Add to Cart"
            >
              <FaShoppingCart size={20} />
            </Link>
            <Link
              to={`/food/${_id}`}
              className="bg-accent text-white p-2 rounded-md hover:bg-accent/70"
              title="View Details"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodCard;