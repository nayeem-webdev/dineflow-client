import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductSideCard = ({ food }) => {
  const { _id, foodName, foodImage, category, origin, price, description } =
    food || {};
  return (
    <div className="rounded-lg flex flex-col mb-4 bg-white 0bg-white/10 p-4 shadow-md">
      <div className="flex">
        <div className="flex-shrink-0 w-28 h-28 rounded-md overflow-hidden bg-gray-200">
          <img
            src={foodImage}
            alt={`Image of ${foodName}`}
            className="object-cover w-full h-full p-2 bg-white"
          />
        </div>

        <div className="flex flex-col ml-4">
          <p className="text-sm text-gray-600 0text-gray-300 mb-2">
            {category.toUpperCase().replace("-", " ")}
          </p>
          <h2
            title={foodName}
            className="font-quick text-lg font-semibold 0text-white mb-2 h-10 overflow-hidden"
          >
            {foodName}
          </h2>
          <p className="text-sm text-gray-600 0text-gray-300 mb-2">
            {origin.toUpperCase().replace("-", " ")}
          </p>
        </div>
      </div>
      <div className="flex space-x-3 mt-3 text-center">
        <Link
          to={`/food-purchase/${_id}`}
          className="flex-grow bg-primary 0bg-white text-white 0text-black py-2 rounded-lg hover:bg-primary/70 0hover:bg-white/70 transition font-bold"
        >
          Purchase - ${price}
        </Link>
        <Link
          to={`/food/${_id}`}
          className="flex-grow bg-primary 0bg-white text-white 0text-black py-2 rounded-lg hover:bg-primary/70 0hover:bg-white/70 transition font-bold"
        >
          VIEW
        </Link>
      </div>
    </div>
  );
};

ProductSideCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default ProductSideCard;
