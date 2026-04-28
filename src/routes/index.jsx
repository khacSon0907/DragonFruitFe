import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Trang chủ</h2>
            <p>Chào mừng đến với Hệ thống Dự đoán Giá Thanh Long Bình Thuận.</p>
          </div>
        ),
      },
      {
        path: "du-doan",
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Dự đoán giá</h2>
            <p>Nội dung dự đoán giá sẽ được hiển thị tại đây.</p>
          </div>
        ),
      },
      {
        path: "thong-ke",
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Thống kê</h2>
            <p>Nội dung thống kê sẽ được hiển thị tại đây.</p>
          </div>
        ),
      },
      {
        path: "lien-he",
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Liên hệ</h2>
            <p>Thông tin liên hệ sẽ được hiển thị tại đây.</p>
          </div>
        ),
      },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
