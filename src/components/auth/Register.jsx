import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
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

  // 👉 CALL API REGISTER
  const onSubmit = async (values) => {
    try {
      const res = await authService.register({
        email: values.email,
        password: values.password,
        fullName: values.fullName,
        phoneNumber: values.phoneNumber || null,
      });


      console.log("Register success:", res);

      setRegistered(true);
    } catch (err) {
      console.error("Register error:", err);

      alert(
        err?.response?.data?.message ||
          "Đăng ký thất bại, vui lòng thử lại!"
      );
    }
  };

  return (
    <section className="auth-page">
      {/* LEFT PANEL */}
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
          Tạo tài khoản để sử dụng hệ thống dự đoán giá thanh long.
        </p>

        <div className="auth-page__benefits">
          <div>✓ Lưu lịch sử dự đoán</div>
          <div>✓ Cá nhân hóa dữ liệu</div>
          <div>✓ Bảo mật tài khoản</div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="auth-page__card">
        <h2>Đăng ký</h2>

        {registered ? (
          <div className="auth-page__success">
            <h3>Đăng ký thành công 🎉</h3>
            <p>Chuyển hướng đến đăng nhập...</p>

            <Link to="/login" className="button">
              Đi đến đăng nhập
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* FULL NAME */}
            <label>
              Họ và tên
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                {...register("fullName", {
                  required: "Vui lòng nhập họ tên",
                  minLength: {
                    value: 3,
                    message: "Ít nhất 3 ký tự",
                  },
                })}
              />
              {errors.fullName && (
                <p className="error">{errors.fullName.message}</p>
              )}
            </label>

            {/* EMAIL */}
            <label>
              Email
              <input
                type="email"
                placeholder="email@gmail.com"
                {...register("email", {
                  required: "Vui lòng nhập email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email không hợp lệ",
                  },
                })}
              />
              {errors.email && (
                <p className="error">{errors.email.message}</p>
              )}
            </label>

            {/* PHONE */}
            <label>
              Số điện thoại
              <input
                type="text"
                placeholder="0123456789"
                {...register("phoneNumber")}
              />
            </label>

            {/* PASSWORD */}
            <label>
              Mật khẩu
              <input
                type="password"
                placeholder="********"
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu",
                  minLength: {
                    value: 6,
                    message: "Ít nhất 6 ký tự",
                  },
                })}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </label>

            {/* CONFIRM PASSWORD */}
            <label>
              Xác nhận mật khẩu
              <input
                type="password"
                placeholder="********"
                {...register("confirmPassword", {
                  required: "Vui lòng xác nhận mật khẩu",
                  validate: (value) =>
                    value === password || "Mật khẩu không khớp",
                })}
              />
              {errors.confirmPassword && (
                <p className="error">
                  {errors.confirmPassword.message}
                </p>
              )}
            </label>

            {/* BUTTON */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
            </button>

            <p>
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}