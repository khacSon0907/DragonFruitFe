// src/components/Header/Header.jsx
import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAuthContext } from "../../contexts/AuthContext";

const navItems = [
  { label: "Trang chủ", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Mây", to: "/may" },
  { label: "Dự đoán giá", to: "/du-doan" },
  { label: "Thống kê", to: "/thong-ke" },
  { label: "Liên hệ", to: "/lien-he" },
];

function UserMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = user?.fullName
    ? user.fullName
        .split(" ")
        .slice(-2)
        .map((w) => w[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        className="user-menu__trigger"
        onClick={() => setOpen(!open)}
        aria-label="Tài khoản"
      >
        {user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.fullName}
            className="user-menu__avatar"
          />
        ) : (
          <div className="user-menu__avatar user-menu__avatar--initials">
            {initials}
          </div>
        )}
        <span className="user-menu__name">{user?.fullName}</span>
        <svg
          className={`user-menu__chevron ${open ? "is-open" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="user-menu__dropdown">
          <div className="user-menu__info">
            <span className="user-menu__fullname">{user?.fullName}</span>
            <span className="user-menu__email">{user?.email}</span>
            <span className="user-menu__role">{user?.role}</span>
          </div>

          <div className="user-menu__divider" />

          <button
            className="user-menu__item"
            onClick={() => {
              navigate("/profile");
              setOpen(false);
            }}
          >
            👤 Thông tin cá nhân
          </button>
          <button
            className="user-menu__item"
            onClick={() => {
              navigate("/change-password");
              setOpen(false);
            }}
          >
            🔒 Đổi mật khẩu
          </button>

          <div className="user-menu__divider" />

          <button
            className="user-menu__item user-menu__item--danger"
            onClick={() => {
              onLogout();
              setOpen(false);
            }}
          >
            🚪 Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, loading } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      // dù BE lỗi vẫn redirect
    } finally {
      navigate("/login");
    }
  };

  const renderActions = () => {
    if (loading) {
      return <div className="user-menu__skeleton" />;
    }
    if (user) {
      return <UserMenu user={user} onLogout={handleLogout} />;
    }
    return (
      <NavLink to="/login" className="header__login-btn">
        Đăng nhập
      </NavLink>
    );
  };

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

        <div className="header__actions">{renderActions()}</div>

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
        {!loading && user && (
          <div className="header__mobile-user">
            <div className="header__mobile-user-header">
              {user?.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.fullName}
                  className="header__mobile-user-avatar"
                />
              ) : (
                <div className="header__mobile-user-avatar header__mobile-user-avatar--initials">
                  {user?.fullName
                    ? user.fullName
                        .split(" ")
                        .slice(-2)
                        .map((w) => w[0])
                        .join("")
                        .toUpperCase()
                    : "U"}
                </div>
              )}
              <div className="header__mobile-user-info">
                <p className="header__mobile-user-name">{user?.fullName}</p>
                <p className="header__mobile-user-email">{user?.email}</p>
              </div>
            </div>
            <div className="header__mobile-user-divider" />
            <div className="header__mobile-user-actions">
              <NavLink
                to="/profile"
                className="header__mobile-user-item"
                onClick={() => setIsMenuOpen(false)}
              >
                👤 Thông tin cá nhân
              </NavLink>
              <NavLink
                to="/change-password"
                className="header__mobile-user-item"
                onClick={() => setIsMenuOpen(false)}
              >
                🔒 Đổi mật khẩu
              </NavLink>
            </div>
            <div className="header__mobile-user-divider" />
          </div>
        )}

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
            {!loading &&
              (user ? (
                <button
                  className="header__mobile-logout"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  🚪 Đăng xuất
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="header__login-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Đăng nhập
                </NavLink>
              ))}
          </li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}
