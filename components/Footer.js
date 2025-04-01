import { Link } from "react-router";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Welcome to . We create innovative products that enhance everyday
            life. Founded in , we prioritize quality, customer satisfaction, and
            sustainability. Our mission is to make life simpler and more
            enjoyable. Join us on this journey!
          </p>
          <ul className="social-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>
            Address: Dharamshala himachal pradesh
            <br />
            Phone: +1 123 456 7890
            <br />
            Email: <a>info@example.com</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Food Ordering App. All rights reserved.</p>
      </div>
    </div>
  );
};
