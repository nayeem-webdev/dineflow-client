import { useContext, useEffect, useState } from "react";
import { API } from "../api";
import AuthContext from "../context/AuthContext";
import FoodProfileCard from "./FoodsProfileCard";
import { toast } from "react-toastify";
import NothingToShow from "../components/NothingToShow";

const MyFoods = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    API.get(`/foods/${user?.uid}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error("Error Fetching Items:", err.message));
  }, [user?.uid]);

  const handleDelete = (id) => {
    API.delete(`/all-foods/del/${id}`)
      .then(() => {
        toast.success("Item Deleted Successfully");
        const newFoods = foods.filter((f) => f._id !== id);
        setFoods(newFoods);
      })
      .catch((err) => {
        toast.error("Failed To Delete");
        console.log(err);
      });
  };

  return (
    <>
      {foods.length === 0 ? (
        <NothingToShow />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <FoodProfileCard
              handleDelete={handleDelete}
              food={food}
              key={food._id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyFoods;
