import logo from '/images/my_photo.jpg'; // Adjust path as necessary

function Header() {
  return (
    <header id="site_header" className="header">
      <div className="my-photo">
        <img src={logo} alt="Profile" />
        <div className="mask"></div>
      </div>
      <div className="site-title-block">
        <a href="https://www.templateshub.net" target="_blank">
          <h1 className="site-title">Templates Hub</h1>
        </a>
        <p className="site-description">Web Designer</p>
      </div>
      <a className="menu-toggle mobile-visible">
        <i className="fa fa-bars"></i>
      </a>
    </header>
  );
}

export default Header;
