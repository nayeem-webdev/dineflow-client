import { useState } from "react";
import PropTypes from "prop-types";

const SearchFilter = ({ foods, setFilteredFoods }) => {
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = () => {
    let filteredFoods = foods.filter(
      (food) =>
        food.foodName.toLowerCase().includes(searchText.toLowerCase()) &&
        food.price <= priceRange
    );

    // Sorting
    if (sortOrder === "asc") {
      filteredFoods = filteredFoods.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filteredFoods = filteredFoods.sort((a, b) => b.price - a.price);
    }

    setFilteredFoods(filteredFoods);
  };

  return (
    <div className="mt-16 container mx-auto p-4 border-2 border-primary/30 rounded-lg flex flex-wrap gap-4 justify-between items-center">
      {/* Price Range Func */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
        <label
          htmlFor="priceRange"
          className="text-sm text-primary font-bold whitespace-nowrap"
        >
          Max Price: ${priceRange}
        </label>
        <input
          id="priceRange"
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className="w-full md:w-64"
        />
      </div>

      {/* Search Func */}
      <input
        type="text"
        placeholder="Search: Product Name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Filter Button */}
      <button
        onClick={handleSearch}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80 focus:ring-2 focus:ring-primary"
      >
        Apply Filters
      </button>

      {/* Sort Func */}
      <div className="flex gap-4 items-center">
        <label className="text-sm text-primary font-bold">Sort by Price:</label>
        <button
          onClick={() => {
            setSortOrder("asc");
            handleSearch();
          }}
          className={`px-4 py-2 rounded-md ${
            sortOrder === "asc"
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Low to High
        </button>
        <button
          onClick={() => {
            setSortOrder("desc");
            handleSearch();
          }}
          className={`px-4 py-2 rounded-md ${
            sortOrder === "desc"
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          High to Low
        </button>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  foods: PropTypes.array.isRequired,
  setFilteredFoods: PropTypes.func.isRequired,
};

export default SearchFilter;
