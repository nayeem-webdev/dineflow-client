import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
  const { loginWithPopUp, loginWithPassword, setUser, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  //  Handle Password Login
  const handlePasswordLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailLogin = form.emailLogin.value;
    const passwordLogin = form.passwordLogin.value;
    loginWithPassword(emailLogin, passwordLogin)
      .then((res) => {
        const usr = res.user;
        setUser(usr);
        toast.success("You are Logged in!");
        navigate("/account");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("User Login Failed!");
      });
  };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    loginWithPopUp(googleProvider)
      .then((res) => {
        const usr = res.user;
        setUser(usr);
        toast.success("You are Logged in!");
        navigate("/account");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("User Login Failed!");
      });
  };

  return (
    <div className="container mx-auto min-h-screen py-[80px] px-6">
      <div className=" rounded-lg p-6 w-full sm:w-96 mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 ">Login</h1>

        {/* Login Form */}
        <form onSubmit={handlePasswordLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 "
            >
              Email Address
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              type="email"
              id="emailLogin"
              name="emailLogin"
              placeholder="Email address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 "
            >
              Password
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              type="password"
              id="passwordLogin"
              name="passwordLogin"
              placeholder="Password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary/70 transition"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        {/* Google Login Button */}
        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-google text-white py-2 rounded-md font-medium flex justify-center items-center gap-2 hover:bg-google/70 transition"
          >
            <FaGoogle />
            Login with Google
          </button>
        </div>

        {/* Link to Sign Up Page */}
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600 ">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-primary font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
