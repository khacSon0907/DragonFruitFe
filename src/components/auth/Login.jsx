import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../../assets/logo.png";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await login({
        identifier: values.identifier,
        password: values.password,
      });
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      const message =
        error.response?.data?.message || "Đăng nhập thất bại. Thử lại!";
      toast.error(message);
    }
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
          <p>Nhập email hoặc tên đăng nhập và mật khẩu để tiếp tục.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label>
            Email hoặc tên đăng nhập
            <input
              type="text"
              placeholder="example@email.com hoặc username"
              {...register("identifier", {
                required: "Nhập email hoặc tên đăng nhập.",
              })}
            />
            {errors.identifier && (
              <span className="auth-page__error">
                {errors.identifier.message}
              </span>
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