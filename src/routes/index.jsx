import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Blog from "../components/blog/Blog";
import CloudPage from "../components/cloud/CloudPage";

const router = createBrowserRouter([
  // 👉 ROUTE KHÔNG DÙNG LAYOUT
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  // 👉 ROUTE DÙNG MAIN LAYOUT
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Trang chủ</h2>
            <p>Chào mừng đến với hệ thống.</p>
          </div>
        ),
      },
      {
        path: "du-doan",
        element: <div>Dự đoán giá</div>,
      },
      {
        path: "thong-ke",
        element: <div>Thống kê</div>,
      },
      {
        path: "lien-he",
        element: <div>Liên hệ</div>,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "may",
        element: <CloudPage />,
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}