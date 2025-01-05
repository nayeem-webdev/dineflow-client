import axios from "axios";

export const API = axios.create({
  baseURL: "https://b10-a11-md-nayeem-uddin-server.vercel.app",
});
// baseURL: "http://localhost:5000",

import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://b10-a11-md-nayeem-uddin-server.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure