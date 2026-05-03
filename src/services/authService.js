import axiosClient from "../shared/api/axiosClient";

const authService = {
  // 👉 Register user
  register: async (data) => {
    return await axiosClient.post("/api/auth/register", data);
  },

  // 👉 Login - refreshToken tự động lưu vào cookie bởi BE
  login: async (data) => {
    return await axiosClient.post("/api/auth/login", data);
  },

  // 👉 Refresh token - BE đọc cookie refreshToken tự động, trả accessToken mới
  refreshToken: async () => {
    return await axiosClient.post("/api/auth/refresh");
  },

  // 👉 Logout - cần truyền accessToken trong header Authorization
  logout: async () => {
    return await axiosClient.post("/api/auth/logout");
  },
};

export default authService;