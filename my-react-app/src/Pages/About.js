import React from "react";
import teamBanner from "../Assets/teamBanner.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-banner-container">
        {/* Left Side: Text Content */}
        <div className="about-banner-text">
          <h2>
            About <span>Wallaby IT Services</span>
          </h2>
          <p>
            We provide Perth businesses with agile, secure, and consistent IT
            infrastructure. Our team is dedicated to bridging the gap between
            complex technology and your business goals.
          </p>
        </div>

        {/* Right Side: Image wrapper */}
        <div className="about-image-wrapper">
          <img
            src={teamBanner}
            alt="Wallaby IT Team"
            className="about-banner-img"
          />
        </div>
      </div>

      <div className="story-container">
        <h2>Our Story</h2>
        <div className="story-grid">
          <div className="story-item">
            <p>
              We started with a vision to provide local businesses with the same
              level of IT expertise usually reserved for large corporations.
            </p>
          </div>
          <div className="story-item">
            <p>
              Our mission is to lead the way in technology trends while keeping
              your data safe and your systems running 24/7.
            </p>
          </div>
          <div className="story-item">
            <p>
              Agile, secure, and consistent. We prioritize integrity and clear
              communication in every technical solution we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
