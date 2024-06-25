import './blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: { day: 6, month: 'Dec' },
      category: 'Travel',
      title: 'Bootstrap is the Most Popular Framework',
      image: 'images/blog/blog_post_1.jpg',
      link: 'blog-post-1.html',
    },
    {
      id: 2,
      date: { day: 3, month: 'Nov' },
      category: 'jQuery',
      title: 'One Framework, Every Device',
      image: 'images/blog/blog_post_2.jpg',
      link: 'blog-post-1.html',
    },
    {
      id: 3,
      date: { day: 12, month: 'Oct' },
      category: 'Sport',
      title: 'Designed for Everyone, Everywhere',
      image: 'images/blog/blog_post_3.jpg',
      link: 'blog-post-1.html',
    },
    {
      id: 4,
      date: { day: 18, month: 'Aug' },
      category: 'CSS',
      title: 'An Introduction To PostCSS',
      image: 'images/blog/blog_post_4.jpg',
      link: 'blog-post-1.html',
    },
    {
      id: 5,
      date: { day: 2, month: 'Jul' },
      category: 'CSS3',
      title: 'Original and Innovative Web Layouts',
      image: 'images/blog/blog_post_5.jpg',
      link: 'blog-post-1.html',
    },
    {
      id: 6,
      date: { day: 8, month: 'May' },
      category: 'HTML5',
      title: 'Creative and Innovative Navigation Designs',
      image: 'images/blog/blog_post_6.jpg',
      link: 'blog-post-1.html',
    },
    {
      id: 7,
      date: { day: 7, month: 'Apr' },
      category: 'Design',
      title: 'Navigation for Mega-Sites',
      image: 'images/blog/blog_post_7.jpg',
      link: 'blog-post-1.html',
    },
    {
      id: 8,
      date: { day: 21, month: 'Mar' },
      category: 'CSS3',
      title: 'Front-End Challenge Accepted: CSS 3D Cube',
      image: 'images/blog/blog_post_8.jpg',
      link: 'blog-post-1.html',
    },
  ];

  return (
    <section className="pt-page pt-page-4" data-id="blog">
      <div className="section-title-block">
        <h2 className="section-title">Blog</h2>
        <h5 className="section-description">My Diary</h5>
      </div>
      <div className="blog-masonry">
        {blogPosts.map((post) => (
          <div className="item" key={post.id}>
            <div className="blog-card">
              <div className="media-block">
                <a href={post.link}>
                  <img
                    className="post-image img-responsive"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="mask"></div>
                  <div className="post-date">
                    <span className="day">{post.date.day}</span>
                    <span className="month">{post.date.month}</span>
                  </div>
                </a>
              </div>
              <div className="post-info">
                <ul className="category">
                  <li>
                    <a href="#">{post.category}</a>
                  </li>
                </ul>
                <a href={post.link}>
                  <h4 className="blog-item-title">{post.title}</h4>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
