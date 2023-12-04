import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://unifood-server.vercel.app",
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();

  // Request
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // Response
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        logoutUser()
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
