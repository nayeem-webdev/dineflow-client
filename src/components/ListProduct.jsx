import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ListProduct = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-6">
        <div className="w-full xl:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
            Empower Your Business with DineFlow
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            DineFlow makes restaurant management more efficient, giving vendors
            easy access to tools that help grow their business and engage
            customers better.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md p-6  hover:bg-accent/30 transition duration-300">
              <div className="text-center flex items-center justify-center flex-col gap-2 ">
                <span className="w-12 h-12 bg-primary/10 text-white rounded-full flex items-center justify-center text-lg">
                  📈
                </span>
                <h3 className="font-semibold text-gray-800">Increase Sales</h3>
                <p className="text-gray-600 ">
                  Reach a broader audience and boost sales with our innovative
                  platform.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6  hover:bg-accent/30 transition duration-300">
              <div className="text-center flex items-center justify-center flex-col gap-2 ">
                <span className="w-12 h-12 bg-primary/10 text-white rounded-full flex items-center justify-center text-lg">
                  📦
                </span>
                <h3 className="font-semibold text-gray-800">
                  Simplify Inventory
                </h3>
                <p className="text-gray-600 ">
                  Keep track of inventory seamlessly with automated features.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6  hover:bg-accent/30 transition duration-300">
              <div className="text-center flex items-center justify-center flex-col gap-2 ">
                <span className="w-12 h-12 bg-primary/10 text-white rounded-full flex items-center justify-center text-lg">
                  📊
                </span>
                <h3 className="font-semibold text-gray-800">Analytics Tools</h3>
                <p className="text-gray-600 ">
                  Access real-time insights and analytics to grow your business
                  smartly.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6  hover:bg-accent/30 transition duration-300">
              <div className="text-center flex items-center justify-center flex-col gap-2 ">
                <span className="w-12 h-12 bg-primary/10 text-white rounded-full flex items-center justify-center text-lg">
                  🛵
                </span>
                <h3 className="font-semibold text-gray-800">
                  Pickup n Delivery
                </h3>
                <p className="text-gray-600 ">
                  We will pick from your doorstep and deliver it to customer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 mb-8 xl:mb-0 flex flex-col">
          <img
            src="/assets/products-image.jpg"
            alt="Vendor's Business"
            className="w-full h-auto object-cover rounded-xl shadow-xl"
          />
          <div className="mt-5">
            <Link to="/add-food">
              <button className="w-full px-6 py-3 text-xl md:text-2xl lg:text-3xl font-bold bg-primary text-white rounded-lg hover:bg-accent transition duration-300 mt-5">
                Add Food
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

ListProduct.propTypes = {
  imagePath: PropTypes.string,
};

export default ListProduct;
