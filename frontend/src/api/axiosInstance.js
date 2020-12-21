/* eslint-disable no-unused-vars */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const id = localStorage.getItem('id');
    if (id) {
      config.headers['token'] = id;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

