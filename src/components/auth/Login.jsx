import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    console.log("Đăng nhập:", values);
  };

  const handleGoogleLogin = () => {
    console.log("Đăng nhập với Google");
  };

  return (
    <section className="auth-page auth-page--login">
      <div className="auth-page__panel">
        <div className="auth-page__brand">
          <img src={logo} alt="Logo Thanh Long" />
          <div>
            <strong>Thanh Long Bình Thuận</strong>
            <span>Hệ thống dự đoán giá</span>
          </div>
        </div>

        <span className="auth-page__eyebrow">Đăng nhập nhanh</span>
        <h1>Chào mừng trở lại</h1>
        <p>
          Đăng nhập để truy cập thông tin dự đoán giá, blog chuyên sâu và
          dashboard mây.
        </p>
      </div>

      <div className="auth-page__card">
        <div className="auth-page__card-header">
          <h2>Thông tin đăng nhập</h2>
          <p>Nhập email và mật khẩu để tiếp tục.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label>
            Email
            <input
              type="email"
              placeholder="example@email.com"
              {...register("email", {
                required: "Nhập email.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email không hợp lệ.",
                },
              })}
            />
            {errors.email && (
              <span className="auth-page__error">{errors.email.message}</span>
            )}
          </label>

          <label>
            Mật khẩu
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              {...register("password", {
                required: "Nhập mật khẩu.",
              })}
            />
            {errors.password && (
              <span className="auth-page__error">
                {errors.password.message}
              </span>
            )}
          </label>

          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>

          <button
            type="button"
            className="button button--google"
            onClick={handleGoogleLogin}
          >
            <span className="auth-page__google-icon">G</span>
            Đăng nhập với Google
          </button>

          <p className="auth-page__footer-text">
            Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
          </p>
        </form>
      </div>
    </section>
  );
}
