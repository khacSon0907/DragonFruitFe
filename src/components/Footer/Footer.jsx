import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const quickLinks = [
  { label: "Trang chủ", to: "/" },
  { label: "Dự đoán giá", to: "/du-doan" },
  { label: "Thống kê", to: "/thong-ke" },
  { label: "Liên hệ", to: "/lien-he" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img src={logo} alt="Logo Thanh Long" />
          <p>
            Hệ thống dự đoán giá thanh long Bình Thuận giúp nông dân và thương
            lái cập nhật xu hướng thị trường chính xác, kịp thời.
          </p>
        </div>

        <div className="footer__links">
          <h4>Liên kết nhanh</h4>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Liên hệ</h4>
          <p>Email: support@dragonfruit.vn</p>
          <p>Điện thoại: 0909 123 456</p>
          <p>Địa chỉ: Bình Thuận, Việt Nam</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Thanh Long Bình Thuận. All rights reserved.</p>
      </div>
    </footer>
  );
}
