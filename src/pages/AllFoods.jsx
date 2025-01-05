import { useEffect, useState } from "react";
import Title from "../components/Title";
import { API } from "../api";
import FoodCard from "../components/FoodCard";
import Loading from "../components/Loading";
import SearchFilter from "../components/SearchFilter";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilteredFoods(foods);
  }, [foods]);

  useEffect(() => {
    API.get("/all-foods")
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Fetching Items:", err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Title
        backgroundImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
        pageName="All Foods"
        subHeading="Hungry? Order from our wide collection of foods."
      />

      <SearchFilter foods={foods} setFilteredFoods={setFilteredFoods} />

      {loading ? (
        <div className="container mx-auto py-16 px-6 min-h-screen flex justify-center items-center">
          <Loading />
        </div>
      ) : filteredFoods.length > 0 ? (
        <div className="container mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredFoods.map((food) => (
            <FoodCard food={food} key={food._id} />
          ))}
        </div>
      ) : (
        <div className="container mx-auto py-16 px-6 min-h-screen flex justify-center items-center">
          Nothing to show
        </div>
      )}
    </>
  );
};

export default AllFoods;
