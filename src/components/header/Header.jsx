import { Link } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faGooglePlus,
  faYoutube,
  faLastfm,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="site-nav mobile-menu-hide">
        <ul id="nav" className="site-main-menu">
          <li>
            <Link
              to="/about-me"
              className="pt-trigger"
              data-animation="58"
              data-goto="1"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="pt-trigger"
              data-animation="59"
              data-goto="2"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="pt-trigger"
              data-animation="60"
              data-goto="3"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="pt-trigger"
              data-animation="61"
              data-goto="4"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="pt-trigger"
              data-animation="58"
              data-goto="5"
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="social-links">
          <li>
            <a className="tip social-button" href="#" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Google Plus">
              <FontAwesomeIcon icon={faGooglePlus} />
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="last.fm">
              <FontAwesomeIcon icon={faLastfm} />
            </a>
          </li>
          <li>
            <a className="tip social-button" href="#" title="Dribbble">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
