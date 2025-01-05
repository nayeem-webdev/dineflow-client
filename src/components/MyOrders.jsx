import OrderCard from "./OrderCard";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { API } from "../api";
import NothingToShow from "./NothingToShow";
import { toast } from "react-toastify";

const MyOrders = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    API.get(`food/seller/${user?.uid}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error("Error Fetching Items:", err.message));
  }, [user?.uid]);
  
  const handleDelete = (id) => {
    API.delete(`/orders/del/${id}`)
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
        <div className="grid grid-cols-1 gap-6">
          {foods.map((food) => (
            <OrderCard food={food} key={food._id} handleDelete={handleDelete} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyOrders;
