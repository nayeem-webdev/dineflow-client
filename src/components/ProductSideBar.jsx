import { useEffect, useState } from "react";
import ProductSideCard from "./ProductSideCard";
import { API } from "../api";

const ProductSideBar = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    API.get("/all-foods/most-sell")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error("Error Fetching Items:", err.message));
  }, []);

  return (
    <div>
      <div className="rounded-lg bg-gray-50 dark:bg-white/20 p-6">
        <h3 className="text-lg font-bold mb-4 dark:text-white">
          Products You May Like
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {foods.map((food) => (
            <ProductSideCard key={food._id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSideBar;
