import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import ProductSideBar from "../components/ProductSideBar";

const Account = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mx-auto min-h-screen lg:flex mt-5 gap-6 px-6">
      <div className="lg:w-2/3">
        {/* Account Section */}
        <div className="rounded-lg bg-gray-50 0bg-white/20 p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
              <img
                className="h-32 w-32 md:h-40 md:w-40 rounded-full border border-gray-300"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co.com/nRm6fz9/Png-Item-5067022.png"
                }
                alt="Profile"
              />
            </div>
            <div className="text-center md:text-left flex-grow">
              <p className="text-2xl font-bold 0text-white">
                {user?.displayName}
              </p>
              <p className="text-gray-500 0text-gray-300 mt-1">{user?.email}</p>
              <p className="mt-3 text-gray-700 0text-gray-400">
                I am a HUMAN not AI
              </p>
              <Link
                to="/add-food"
                className="mt-3 w-full max-w-xs  bg-primary 0bg-white text-white 0text-black py-2 rounded-md font-medium hover:bg-primary/70 0hover:bg-white/70 transition flex justify-center items-center gap-2"
              >
                Add A Product
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-6 rounded-lg bg-gray-50 0bg-white/20 p-6">
          <div className="border-b border-gray-200 0border-gray-700">
            <nav className="flex space-x-4" aria-label="Tabs">
              <NavLink
                to="/account/my-foods"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-black 0text-white border-b-2 border-black 0border-white"
                      : "text-gray-500 0text-gray-400 hover:text-black 0hover:text-white"
                  }`
                }
              >
                My Foods
              </NavLink>
              <NavLink
                to="/account/my-orders"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-black 0text-white border-b-2 border-black 0border-white"
                      : "text-gray-500 0text-gray-400 hover:text-black 0hover:text-white"
                  }`
                }
              >
                My Orders
              </NavLink>
              <NavLink
                to="/account/my-purchase"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-black 0text-white border-b-2 border-black 0border-white"
                      : "text-gray-500 0text-gray-400 hover:text-black 0hover:text-white"
                  }`
                }
              >
                My Purchase
              </NavLink>
            </nav>
          </div>
          <div className="mt-6">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 hidden sm:block lg:w-1/3">
        <ProductSideBar />
      </div>
    </div>
  );
};

export default Account;
