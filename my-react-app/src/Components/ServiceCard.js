import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="service-btn">Learn More</button>
    </div>
  );
};

export default ServiceCard;
