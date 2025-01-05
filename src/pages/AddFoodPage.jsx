import { Helmet } from "react-helmet";
import { FaUpload, FaUtensils } from "react-icons/fa";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

const AddFoodPage = () => {
  const { user } = useContext(AuthContext);
  const { email, displayName, uid } = user || {};
  const navigate = useNavigate();

  // !! Auto Update Product Image
  const [imgUrl, setImgUrl] = useState("");

  // %% Add Food Item
  const handleAddFoodItem = (e) => {
    e.preventDefault();
    const foodData = {
      foodName: e.target.foodName.value,
      foodImage: e.target.foodImage.value,
      category: e.target.category.value,
      quantity: parseInt(e.target.quantity.value, 10),
      price: parseFloat(e.target.price.value),
      origin: e.target.origin.value,
      description: e.target.description.value,
      email: email,
      displayName: displayName,
      uid: uid,
      purchaseCount: 0,
    };
    API.post("/all-foods", foodData)
      .then(() => {
        toast.success("Food Item Added!");
        navigate("/account");
      })
      .catch((err) => {
        console.error("Error Creating Item:", err.message);
        toast.error("Failed to Add Item!");
      });
  };

  return (
    <>
      <Helmet>
        <title>DineFlow | Add Food Item</title>
      </Helmet>

      <div className="container mx-auto py-16 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-primary flex items-center gap-2">
            <FaUtensils className="text-accent" /> Add Food Item
          </h1>

          <Tooltip anchorSelect="#food_image" clickable>
            <button>
              Upload your image on{" "}
              <a
                className="underline text-primary"
                href="https://imgbb.com/"
                target="blank"
              >
                imgBB
              </a>{" "}
              and paste the link here.
            </button>
          </Tooltip>

          <form onSubmit={handleAddFoodItem}>
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="hidden lg:flex w-1/2 justify-center items-start">
                <img
                  src={
                    imgUrl ||
                    "https://i.ibb.co.com/C8bBMrm/product-placeholder.png"
                  }
                  alt="Food"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="mb-4">
                  <label
                    htmlFor="foodName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="foodName"
                    id="foodName"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
                    required
                    placeholder="Enter food name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="foodImage"
                    className="text-sm font-medium text-gray-700"
                  >
                    Food Image URL
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="url"
                      name="foodImage"
                      id="foodImage"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
                      onChange={(e) => setImgUrl(e.target.value)}
                      placeholder="Paste image URL here"
                      required
                    />
                    <FaUpload className="text-primary" />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-gray-700"
                  >
                    Food Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Main Course">Main Course</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Beverage">Beverage</option>
                  </select>
                </div>

                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="text-sm font-medium text-gray-700"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      id="quantity"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
                      required
                      placeholder="Enter quantity"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
                      required
                      placeholder="Enter price"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="origin"
                    className="text-sm font-medium text-gray-700"
                  >
                    Food Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    id="origin"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
                    required
                    placeholder="Enter food origin (e.g., Italy)"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary"
                    required
                    placeholder="Write a description of the food item"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
                >
                  Add Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFoodPage;
