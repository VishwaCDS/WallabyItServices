import React from "react";
import banner from "../Assets/banner.jpg";

const HomePageBanner = () => {
  return (
    <section className="home-banner">
      <div className="banner-container">
        <img
          src={banner}
          alt="Wallaby IT Services Banner"
          className="hero-image"
        />
        <div className="banner-overlay"></div>

        {/* New Text Content Section */}
        <div className="banner-text-content">
          <h1>
            IT Solutions that <span>Leap Ahead</span>
          </h1>
          <p>Secure. Agile. Consistent.</p>
        </div>
      </div>
    </section>
  );
};

export default HomePageBanner;
