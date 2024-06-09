import axios from "axios";

import { HOST_API } from "@/config-global";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: HOST_API,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const endpoints = {
  users: {
    root: "/users",
    login: "/users/login",
    logout: "/users/logout",
    profile: "/users/profile",
    register: "/users/register",
  },
  transactions: {
    root: "/transactions",
    byId: (id) => `/transactions/${id}`,
  },
  categories: {
    root: "/categories",
    byId: (id) => `/categories/${id}`,
  },
};
