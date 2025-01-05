import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 mb-8 lg:mb-0">
          <img
            src="/assets/about-us-image.jpg"
            alt="Restaurant Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="flex-1 lg:ml-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Welcome to DineFlow
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            DineFlow is a modern restaurant management system designed to
            simplify and enhance every aspect of your restaurant. Whether
            it&apos;s managing reservations, menus, orders, or payments, we
            provide solutions that help you focus on delighting your customers.
          </p>

          <div className="flex flex-col gap-4 mb-8 text-gray-700">
            <div className="flex items-center">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex justify-center items-center mr-3">
                1
              </span>
              <p>Easy Online Ordering</p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex justify-center items-center mr-3">
                2
              </span>
              <p>Real-time Analytics</p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex justify-center items-center mr-3">
                3
              </span>
              <p>Customized Menus</p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex justify-center items-center mr-3">
                4
              </span>
              <p>Efficient Reservation Management</p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex justify-center items-center mr-3">
                5
              </span>
              <p>Fast Delivery</p>
            </div>
            <div className="flex items-center">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex justify-center items-center mr-3">
                6
              </span>
              <p>Catering Service</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/all-foods">
        <button className="w-full px-6 py-3 text-xl md:text-2xl lg:text-3xl font-bold bg-primary text-white rounded-lg hover:bg-accent transition duration-300 mt-5">
          Order Now
        </button>
      </Link>
    </section>
  );
};

export default AboutUs;
