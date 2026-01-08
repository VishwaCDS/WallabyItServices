import React from "react";
// Import the icons from the Font Awesome (fa) library
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Left Side: Contact Info with Envelope Icon */}
        <div className="footer-contact">
          <FaEnvelope className="footer-icon-img" />
          <p>contact@wallabyitservices.com.au</p>
        </div>

        {/* Right Side: Professional Social Icons */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="social-icon-img" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="social-icon-img" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="social-icon-img" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Wallaby IT Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
