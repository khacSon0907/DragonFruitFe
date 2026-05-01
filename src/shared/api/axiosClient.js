import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

// 👉 Gắn token (nếu có)
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 👉 Handle response
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        // token hết hạn / chưa login
        console.log("Unauthorized → chuyển login");
      }

      if (status === 500) {
        console.log("Server error");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;