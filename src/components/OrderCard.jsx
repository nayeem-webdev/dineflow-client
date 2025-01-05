import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

const OrderCard = ({ food, handleDelete }) => {
  const {
    foodName,
    foodImage,
    totalPrice,
    buyingDate,
    buyerName,
    buyerEmail,
    address,
    mobileNo,
    _id,
  } = food || {};

  const formattedDate = buyingDate
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(buyingDate))
    : "Unknown Date";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 items-center gap-4 bg-white shadow-sm rounded-md p-4 mb-4">
      <div className="w-24 h-24 mx-auto md:w-16 md:h-16">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-full object-cover rounded-md border"
        />
      </div>

      <div className="col-span-2 text-center sm:text-left">
        <h3 className="text-lg font-semibold">{foodName}</h3>
        <div className=" text-accent font-bold text-lg">${totalPrice}</div>
        <p className="text-sm text-gray-500 mt-1">
          Ordered on: {formattedDate}
        </p>
      </div>

      <div className="col-span-2 text-center sm:text-left text-sm">
        <p className="text-gray-600">Shipping Details:</p>
        <p className="font-medium">{buyerName}</p>
        <p>{buyerEmail}</p>
        <p>{address}</p>
        <p>{mobileNo}</p>
      </div>

      <button
        className="flex justify-center "
        onClick={() => handleDelete(_id)}
      >
        <FaTrash className="text-xl text-primary hover:text-2xl hover-text-primary/70 transition-all" />
      </button>
    </div>
  );
};

OrderCard.propTypes = {
  food: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default OrderCard;
