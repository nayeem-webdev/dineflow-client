import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const { createUser, updateUser, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Pass verify
  const [passFocus, setPassFocus] = useState(false);
  const [isLong, setIsLong] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const verifyPass = (e) => {
    const passValue = e.target.value;

    // Check Characters
    const hasUppercase = /[A-Z]/.test(passValue);
    const hasLowercase = /[a-z]/.test(passValue);
    const hasSymbol = /[!@#$%*]/.test(passValue);
    const isLong = passValue.length >= 8;

    // Check Delete Character
    setHasUppercase(hasUppercase);
    setHasLowercase(hasLowercase);
    setHasSymbol(hasSymbol);
    setIsLong(isLong);

    // Set Pass Verify
    if (hasUppercase) {
      setHasUppercase(true);
    }
    if (hasLowercase) {
      setHasLowercase(true);
    }
    if (hasSymbol) {
      setHasSymbol(true);
    }
    if (isLong) {
      setIsLong(true);
    }
  };

  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const photoUrl = form.photoUrl.value;
    const emailRegister = form.emailRegister.value;
    const passwordRegister = form.passwordRegister.value;

    if (isLong && hasSymbol && hasLowercase && hasUppercase) {
      createUser(emailRegister, passwordRegister)
        .then(() => {
          updateUser(fullName, photoUrl).then(() => {
            toast.success("User Register Successful!");
            navigate("/account");
          });
        })
        .catch((err) => {
          console.log(err.message);
          toast.error("User Register Failed!");
        });
    }
  };

  return (
    <div className="container mx-auto min-h-screen py-[80px] px-6">
      <div className=" p-6 w-full sm:w-96 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6  ">Sign Up</h1>

        {/* Sign-Up Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700  "
            >
              Name
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700  "
            >
              Photo URL
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              type="url"
              id="photoUrl"
              name="photoUrl"
              placeholder="Photo URL"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700  "
            >
              Email Address
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              type="email"
              id="emailRegister"
              name="emailRegister"
              placeholder="Email address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700  "
            >
              Password
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              type="password"
              id="passwordRegister"
              name="passwordRegister"
              placeholder="Password"
              onFocus={() => setPassFocus(true)}
              onChange={verifyPass}
              required
            />
          </div>

          {passFocus && (
            <ul>
              <li
                className={`text-[12px] ${
                  hasUppercase ? "text-green-600" : "text-red-600"
                } `}
              >
                Must have an uppercase letter.
              </li>
              <li
                className={`text-[12px] ${
                  hasLowercase ? "text-green-600" : "text-red-600"
                } `}
              >
                Must have a lowercase letter.
              </li>
              <li
                className={`text-[12px] ${
                  hasSymbol ? "text-green-600" : "text-red-600"
                } `}
              >
                Must have a symbol ! @ # $ % *.
              </li>
              <li
                className={`text-[12px] ${
                  isLong ? "text-green-600" : "text-red-600"
                } `}
              >
                Must be 8 characters long.
              </li>
            </ul>
          )}
          {/* Sign Up Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/70 transition"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        {/* Link to Login Page */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600  ">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-medium">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
