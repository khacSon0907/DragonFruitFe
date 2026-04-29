import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Trang chủ", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Mây", to: "/may" },
  { label: "Dự đoán giá", to: "/du-doan" },
  { label: "Thống kê", to: "/thong-ke" },
  { label: "Liên hệ", to: "/lien-he" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__brand">
          <img src={logo} alt="Logo Thanh Long" className="header__logo" />
          <div className="header__title">
            <h1>Thanh Long Bình Thuận</h1>
            <span>Hệ thống dự đoán giá</span>
          </div>
        </NavLink>

        <nav className="header__nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <NavLink to="/login" className="header__login-btn">
            Đăng nhập
          </NavLink>
        </div>

        <button
          className="header__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`header__mobile-nav ${isMenuOpen ? "is-open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsMenuOpen(false)}
            >
              Đăng nhập
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
