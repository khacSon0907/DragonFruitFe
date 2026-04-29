import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Register() {
  const [registered, setRegistered] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setRegistered(true);
    console.log("Đăng ký thành công:", values);
  };

  return (
    <section className="auth-page">
      <div className="auth-page__panel">
        <div className="auth-page__brand">
          <img src={logo} alt="Logo Thanh Long" />
          <div>
            <strong>Thanh Long Bình Thuận</strong>
            <span>Hệ thống dự đoán giá</span>
          </div>
        </div>

        <span className="auth-page__eyebrow">Bắt đầu ngay</span>
        <h1>Đăng ký tài khoản</h1>
        <p>
          Tạo tài khoản mới để truy cập bộ công cụ dự đoán giá thanh long, theo
          dõi lịch sử và nhận thông báo riêng.
        </p>
        <div className="auth-page__benefits">
          <div>
            <strong>✓</strong> Tiết kiệm thời gian đăng nhập nếu đăng ký lần sau
          </div>
          <div>
            <strong>✓</strong> Nhận báo cáo và thống kê cá nhân hóa
          </div>
          <div>
            <strong>✓</strong> Bảo mật với mật khẩu mạnh và xác nhận lại
          </div>
        </div>
      </div>

      <div className="auth-page__card">
        <div className="auth-page__card-header">
          <h2>Form đăng ký</h2>
          <p>Vui lòng nhập thông tin chính xác để hoàn tất đăng ký.</p>
        </div>

        {registered ? (
          <div className="auth-page__success">
            <h3>Đăng ký thành công!</h3>
            <p>
              Bạn đã sẵn sàng sử dụng hệ thống. Hãy tiếp tục đăng nhập để bắt
              đầu.
            </p>
            <Link to="/" className="button button--secondary">
              Quay về trang chủ
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label>
              Họ và tên
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                {...register("fullName", {
                  required: "Nhập họ và tên.",
                  minLength: {
                    value: 3,
                    message: "Tên phải ít nhất 3 ký tự.",
                  },
                })}
              />
              {errors.fullName && (
                <span className="auth-page__error">
                  {errors.fullName.message}
                </span>
              )}
            </label>

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
                placeholder="Tối thiểu 8 ký tự"
                {...register("password", {
                  required: "Nhập mật khẩu.",
                  minLength: {
                    value: 8,
                    message: "Mật khẩu phải ít nhất 8 ký tự.",
                  },
                })}
              />
              {errors.password && (
                <span className="auth-page__error">
                  {errors.password.message}
                </span>
              )}
            </label>

            <label>
              Xác nhận mật khẩu
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                {...register("confirmPassword", {
                  required: "Nhập lại mật khẩu.",
                  validate: (value) =>
                    value === password || "Mật khẩu không khớp.",
                })}
              />
              {errors.confirmPassword && (
                <span className="auth-page__error">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>

            <button type="submit" className="button" disabled={isSubmitting}>
              {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
            </button>

            <p className="auth-page__footer-text">
              Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
