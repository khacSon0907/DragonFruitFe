// src/shared/api/axiosClient.js
import axios from "axios";
import tokenStore from "../store/tokenStore";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token)));
  failedQueue = [];
};

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 30000,
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const token = tokenStore.get();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (res) => res.data, // unwrap 1 lần: axios res → { type, status, data: {...} }

  async (error) => {
    const original = error.config;

    if (error.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) =>
          failedQueue.push({ resolve, reject })
        ).then((token) => {
          original.headers.Authorization = `Bearer ${token}`;
          return axiosClient(original);
        });
      }

      original._retry = true;
      isRefreshing = true;

      try {
        // res = { type, status, data: { accessToken, ... } }
        const res = await axiosClient.post("/api/auth/refresh");
        const newToken = res.data?.accessToken; // ✅ đọc đúng

        if (!newToken) throw new Error("No token");

        tokenStore.set(newToken);
        processQueue(null, newToken);
        original.headers.Authorization = `Bearer ${newToken}`;
        return axiosClient(original);
      } catch (err) {
        processQueue(err, null);
        tokenStore.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;