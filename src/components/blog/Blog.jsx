const posts = [
  {
    title: "5 xu hướng thị trường thanh long năm 2026",
    excerpt:
      "Những yếu tố ảnh hưởng đến giá và cách nông dân Bình Thuận tối ưu thu nhập.",
    date: "28/04/2026",
  },
  {
    title: "Chiến lược thu hoạch dựa trên dữ liệu mây và thời tiết",
    excerpt:
      "Sử dụng dự báo mây để tinh chỉnh lịch thu hoạch và giảm thiệt hại.",
    date: "25/04/2026",
  },
  {
    title: "Tối ưu chi phí vận chuyển với bảng giá động",
    excerpt: "Áp dụng dự đoán giá để lên kế hoạch chuyển hàng hiệu quả hơn.",
    date: "22/04/2026",
  },
];

export default function Blog() {
  return (
    <section className="blog-page">
      <div className="blog-page__hero">
        <span>Blog tin tức</span>
        <h1>Kiến thức và phân tích thị trường</h1>
        <p>
          Đọc các bài viết chuyên sâu về dự đoán giá, nông nghiệp thông minh và
          cảnh báo thời tiết.
        </p>
      </div>

      <div className="blog-page__list">
        {posts.map((post) => (
          <article key={post.title} className="blog-card">
            <div className="blog-card__meta">{post.date}</div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button className="button button--secondary">Xem chi tiết</button>
          </article>
        ))}
      </div>
    </section>
  );
}
