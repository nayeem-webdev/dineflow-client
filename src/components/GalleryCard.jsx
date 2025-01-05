import PropTypes from "prop-types";
import { useState } from "react";
import { FaEye, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const GalleryCard = ({ food }) => {
  const [openImage, setOpenImage] = useState(false);

  const {
    _id,
    foodName,
    foodImage,
    description,
    displayName: postedBy,
  } = food || {};

  return (
    <>
      {openImage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
          <div className="relative rounded-lg shadow-lg max-w-full max-h-full p-4">
            {/* Image */}
            <div className="aspect-square w-full lg:w-1/2 mx-auto bg-white overflow-hidden">
              <img
                src={foodImage}
                alt={`Image of ${foodName}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpenImage(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      <div className="relative overflow-hidden rounded-md group aspect-square w-full self-start bg-white">
        {/* Image */}
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Hover Details */}
        <div className="absolute inset-0 bg-black/75 flex flex-col justify-center items-center text-center text-white px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-semibold">{foodName}</h3>
          <p className="text-sm mt-1">{description}</p>
          <span className="text-xs mt-2 italic">Posted by: {postedBy}</span>

          <div className="flex gap-3 mt-3">
            <button
              onClick={() => setOpenImage(true)}
              className="mt-3 bg-primary text-white py-3 px-5 rounded-md hover:bg-accent transition flex justify-center items-center gap-2 font-bold"
            >
              <FaEye />
            </button>

            <Link
              to={`/food-purchase/${_id}`}
              className="mt-3 bg-primary text-white py-3 px-5 rounded-md hover:bg-accent transition flex justify-center items-center gap-2 font-bold"
            >
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

GalleryCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default GalleryCard;
