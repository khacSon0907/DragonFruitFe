const stats = [
  { label: "Độ che phủ mây", value: "72%" },
  { label: "Nhiệt độ trung bình", value: "28°C" },
  { label: "Độ ẩm", value: "81%" },
  { label: "Khả năng mưa", value: "56%" },
];

export default function CloudPage() {
  return (
    <section className="cloud-page">
      <div className="cloud-page__hero">
        <div className="cloud-page__content">
          <span>Giao diện mây</span>
          <h1>Thời tiết và mây động</h1>
          <p>
            Hiển thị trực quan các chỉ số mây và thời tiết để hỗ trợ dự đoán
            nông nghiệp.
          </p>
        </div>
      </div>

      <div className="cloud-page__cards">
        {stats.map((item) => (
          <div key={item.label} className="cloud-card">
            <div className="cloud-card__icon" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="cloud-page__forecast">
        <div className="cloud-page__forecast-header">
          <span>Dự báo thời tiết</span>
          <h2>Dự báo trong 5 ngày tới</h2>
        </div>

        <div className="cloud-page__forecast-list">
          {[
            {
              day: "Thứ 3",
              icon: "⛅",
              desc: "Mây thay đổi",
              high: "30°C",
              low: "25°C",
              rain: "20%",
            },
            {
              day: "Thứ 4",
              icon: "🌦️",
              desc: "Mưa rào nhẹ",
              high: "29°C",
              low: "24°C",
              rain: "45%",
            },
            {
              day: "Thứ 5",
              icon: "☁️",
              desc: "Nhiều mây",
              high: "28°C",
              low: "24°C",
              rain: "15%",
            },
            {
              day: "Thứ 6",
              icon: "🌧️",
              desc: "Mưa vừa",
              high: "27°C",
              low: "23°C",
              rain: "65%",
            },
            {
              day: "Thứ 7",
              icon: "🌤️",
              desc: "Trời nắng nhẹ",
              high: "31°C",
              low: "25°C",
              rain: "10%",
            },
          ].map((forecast) => (
            <article key={forecast.day} className="cloud-forecast-card">
              <div className="cloud-forecast-card__top">
                <div className="cloud-forecast-card__icon">{forecast.icon}</div>
                <div>
                  <strong>{forecast.day}</strong>
                  <span>{forecast.desc}</span>
                </div>
              </div>
              <div className="cloud-forecast-card__details">
                <span>{forecast.high}</span>
                <span>{forecast.low}</span>
                <span>{forecast.rain}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
