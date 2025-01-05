import { Helmet } from "react-helmet";
import { FaUpload, FaUtensils } from "react-icons/fa";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
import { useNavigate, useLoaderData } from "react-router-dom";
import { API } from "../api";

const UpdateFoodPage = () => {
  const oldData = useLoaderData().data;
  console.log(oldData);
  const navigate = useNavigate();

  const [imgUrl, setImgUrl] = useState(oldData?.foodImage);

  //$$ UPDATE PRODUCT Using Patch
  const handleUpdateFoodItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = parseFloat(form.price.value);
    const origin = form.origin.value;
    const description = form.description.value;

    const updatedData = {
      foodName,
      foodImage,
      category,
      quantity,
      price,
      origin,
      description,
    };
    API.patch(`/all-foods/patch/${oldData._id}`, updatedData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("Product Updated");
        navigate(`/food/${oldData._id}`);
      })
      .catch((err) => {
        console.error("Error updating product:", err);
        toast.error("Failed to update product");
      });
  };

  return (
    <>
      <Helmet>
        <title>DineFlow | Update Food Item</title>
      </Helmet>

      <div className="container mx-auto py-16 px-6 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-primary flex items-center gap-2">
            <FaUtensils className="text-accent" /> Update Food Item
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

          <form onSubmit={handleUpdateFoodItem}>
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
                    defaultValue={(oldData && oldData.foodName) || ""}
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
                      defaultValue={(oldData && oldData.foodImage) || ""}
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
                    defaultValue={(oldData && oldData.category) || ""}
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
                      defaultValue={(oldData && oldData.quantity) || ""}
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
                      defaultValue={(oldData && oldData.price) || ""}
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
                    defaultValue={(oldData && oldData.origin) || ""}
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
                    defaultValue={(oldData && oldData.description) || ""}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
                >
                  Update Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateFoodPage;
