import React, { useState } from "react";
import "../styles.css";
import logo from "../Assets/logo.png";
import { sendInquiry } from "../api"; // Import the helper we discussed

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- NEW: State for the form fields ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openGetStarted = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  // --- NEW: Handle Input Changes ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- NEW: Handle Form Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await sendInquiry(formData);
      alert("Success! Your inquiry has been sent to Wallaby IT.");
      setIsModalOpen(false); // Close modal on success
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <header className="main-header">
        {/* ... (rest of your logo and nav code remains the same) ... */}
        <div className="logo-container">
          <a href="home">
            <img
              src={logo}
              alt="Wallaby IT Services Logo"
              className="header-logo"
            />
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMobileMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMobileMenuOpen ? "bar open" : "bar"}></div>
          <div className={isMobileMenuOpen ? "bar open" : "bar"}></div>
        </div>

        <nav className={isMobileMenuOpen ? "nav-links active" : "nav-links"}>
          <ul>
            <li>
              <a href="home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <button className="cta-button" onClick={openGetStarted}>
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Get Started Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Get Started</h3>
            <p>Ready to leap ahead? Tell us about your project.</p>

            {/* --- UPDATED FORM --- */}
            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Business Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your IT needs..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Inquiry
              </button>
            </form>

            <button
              className="close-modal-btn"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
