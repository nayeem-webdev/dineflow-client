import { Link, useLoaderData } from "react-router-dom";

const ProductPage = () => {
  const food = useLoaderData().data;
  const {
    _id,
    foodName,
    foodImage,
    quantity,
    purchaseCount,
    category,
    origin,
    price,
    description,
    displayName,
    uid,
  } = food || {};
  return (
    <div className="container mx-auto py-16 p-8 flex flex-col lg:flex-row gap-8">
      <div className="aspect-square w-full lg:w-1/2 self-start bg-white">
        <img
          src={foodImage}
          alt={`Image of ${foodName}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <p className="text-sm mb-5 text-black/80 0text-white/80">
          {category.toUpperCase().replace("-", " ")}
        </p>
        <h2 className="font-quick text-3xl mb-6 0text-white">{foodName}</h2>

        <p className="mb-6 text-black 0text-white text-opacity-80 font-light text-5xl">
          $ {price}
        </p>
        <p
          className={`mb-5 px-2 rounded-full border text-sm ${
            quantity > 0
              ? "bg-green-50 text-green-500 border-green-500 0bg-green-500/50 0text-green-100 0border-green-100"
              : "bg-red-50 text-red-500 border-red-500 0bg-red-900/80 0text-red-100 0border-red-100"
          }`}
        >
          {quantity > 0
            ? `Sold Items ${" "}${
                purchaseCount || 0
              }${" "} Current Stock ${quantity}`
            : "Out of Stock"}
        </p>
        <p className="text-sm mb-2 text-black/80 0text-white/80">
          {origin.toUpperCase().replace("-", " ")}
        </p>
        <p className="py-4">
          Seller:{" "}
          <Link
            className="text-primary hover:underline
          "
            to={`/profile/${uid}`}
          >
            {displayName}
          </Link>
        </p>
        <p className="text-sm text-black/80 0text-white/80 leading-loose mb-5">
          {description}
        </p>

        <Link
          to={`/food-purchase/${_id}`}
          className="mt-3 w-full  bg-primary text-white py-3 rounded-full hover:bg-accent transition flex justify-center items-center gap-2 font-bold"
        >
          PURCHASE FOOD
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;
