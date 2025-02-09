import axios from "axios";
const axiosInstance = axios.create({
  baseURL:"https://temple-project.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;