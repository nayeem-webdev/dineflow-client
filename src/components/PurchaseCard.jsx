import PropTypes from "prop-types";

const PurchaseCard = ({ food }) => {
  const {
    foodName,
    foodImage,
    totalPrice,
    sellerName,
    orderStatus,
    buyingDate,
  } = food || {};
// Time Converter
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
      {/* Food Image */}
      <div className="w-24 h-24 mx-auto md:w-16 md:h-16">
        <img
          src={foodImage || "https://via.placeholder.com/100"}
          alt={foodName || "Food Image"}
          className="w-full h-full object-cover rounded-md border"
        />
      </div>

      {/* Title and Date */}
      <div className="col-span-2 text-center sm:text-left">
        <h3 className="text-lg font-semibold">{foodName || "Food Item"}</h3>
        <p className="text-sm text-gray-500 mt-1">
          Ordered on: {formattedDate}
        </p>
      </div>

      {/* Price */}
      <div className="text-center text-blue-600 font-bold text-lg">
        ${totalPrice}
      </div>

      {/* Seller Name */}
      <div className="text-center sm:text-left">
        <p className="text-sm text-gray-600">Seller:</p>
        <p className="font-medium">{sellerName || "Unknown Seller"}</p>
      </div>

      {/* Order Status */}
      <div className="text-center sm:text-left">
        <p className="text-sm text-gray-600">Status:</p>
        <p
          className={`font-medium ${
            orderStatus === "pending"
              ? "text-yellow-600"
              : orderStatus === "completed"
              ? "text-green-600"
              : "text-gray-600"
          }`}
        >
          {orderStatus || "Unknown Status"}
        </p>
      </div>
    </div>
  );
};

PurchaseCard.propTypes = {
  food: PropTypes.object.isRequired,
};

export default PurchaseCard;
