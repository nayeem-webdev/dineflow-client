import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { API } from "../api";
import PurchaseCard from "./PurchaseCard";
import NothingToShow from "./NothingToShow";

const MyPurchase = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    API.get(`food/purchase/${user?.uid}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => console.error("Error Fetching Items:", err.message));
  }, [user?.uid]);

  return (
    <>
      {foods.length === 0 ? (
        <NothingToShow />
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {foods.map((food) => (
            <PurchaseCard food={food} key={food._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default MyPurchase;
