import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";

const navItems = [
  { label: "Trang chủ", href: "#" },
  { label: "Dự đoán giá", href: "#predict" },
  { label: "Thống kê", href: "#stats" },
  { label: "Liên hệ", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__brand">
          <img src={logo} alt="Logo Thanh Long" className="header__logo" />
          <div className="header__title">
            <h1>Thanh Long Bình Thuận</h1>
            <span>Hệ thống dự đoán giá</span>
          </div>
        </a>

        <nav className="header__nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

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
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
