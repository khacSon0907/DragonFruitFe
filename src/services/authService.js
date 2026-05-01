import axiosClient from "../shared/api/axiosClient";

const authService = {
  // 👉 Register user
  register: async (data) => {
    return await axiosClient.post("/api/auth/register", data);
  },
};

export default authService;