function Blog() {
  return (
    <section className="pt-page" data-id="blog">
      <div className="section-title-block">
        <h2 className="section-title">Blog</h2>
        <h5 className="section-description">My Diary</h5>
      </div>
      <div className="blog-masonry">{/* Blog posts */}</div>
    </section>
  );
}

export default Blog;
