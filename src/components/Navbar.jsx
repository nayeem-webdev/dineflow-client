import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes, FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logoutUser, setUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logout User
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setUser(null);
        toast.success("Logout Successful!");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <nav className="shadow-md">
      <Tooltip
        anchorSelect="#navUser"
        clickable
        className="z-50 !p-0 !bg-transparent !bg-opacity-100 !shadow-none !outline-none	"
      >
        <div className="flex flex-col bg-black text-white rounded-md p-4 ">
          {user && (
            <>
              <Link to={"/account"} className="flex items-center gap-3 mb-4">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/nRm6fz9/Png-Item-5067022.png"
                  }
                  alt="Profile"
                  className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
                <div>
                  <h4 className="text-sm font-medium">
                    {user?.displayName || "User Name"}
                  </h4>
                </div>
              </Link>
              <Link
                to={"/account/my-orders"}
                className="mt-2 px-4 py-2 w-full text-sm font-medium text-center rounded-md bg-primary text-white hover:bg-accent transition"
              >
                My Orders
              </Link>
              <Link
                to={"/account/my-foods"}
                className="mt-2 px-4 py-2 w-full text-sm font-medium text-center rounded-md bg-primary text-white hover:bg-accent transition"
              >
                My Foods
              </Link>
              <Link
                to={"/add-food"}
                className="mt-2 px-4 py-2 w-full text-sm font-medium text-center rounded-md bg-primary text-white hover:bg-accent transition"
              >
                Add Food
              </Link>
            </>
          )}
        </div>
      </Tooltip>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-primary text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Logo */}
        <Link to={"/"} className="text-xl font-bold">
          <span className="text-primary">Dine</span>
          Flow
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : " hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-foods"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : " hover:text-primary"
            }
          >
            All Foods
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-primary font-semibold" : " hover:text-primary"
            }
          >
            Gallery
          </NavLink>
          {user && (
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : " hover:text-primary"
              }
            >
              Account
            </NavLink>
          )}
        </div>

        {/* Profile and Login/Logout */}
        <div className="flex items-center space-x-4">
          {user && (
            <button>
              <FaUser
                id="navUser"
                className="text-accent 0text-white hover:text-primary"
              />
            </button>
          )}

          {/* <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? (
              <FaSun className="text-black 0text-white hover:text-primary" />
            ) : (
              <FaMoon className="text-black 0text-white hover:text-primary" />
            )}
          </button> */}

          {/* Login/Logout Button */}
          {!user ? (
            <Link
              to={"/login"}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={handleLogout}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
            >
              Logout
            </Link>
          )}
        </div>
      </div>
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="z-50 absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold hover:text-primary ${
                  isActive ? "text-primary" : "text-black"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/all-foods"
              className={({ isActive }) =>
                `font-semibold hover:text-primary ${
                  isActive ? "text-primary" : "text-black"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              ALL FOODS
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `font-semibold hover:text-primary ${
                  isActive ? "text-primary" : "text-black"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              GALLERY
            </NavLink>
            {user && (
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `font-semibold hover:text-primary ${
                    isActive ? "text-primary" : "text-black"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                ACCOUNT
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
