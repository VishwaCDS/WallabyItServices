import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceCardsContainer = () => {
  return (
    <div className="services-container">
      <section className="services-section">
        <div className="services-container">
          <ServiceCard
            icon="☁️"
            title="Cloud Services"
            description="Scalable cloud infrastructure and data migration solutions."
          />
          <ServiceCard
            icon="🛡️"
            title="Cybersecurity"
            description="Advanced threat protection and secure data management."
          />
          <ServiceCard
            icon="🖥️"
            title="Managed IT Support"
            description="24/7 technical assistance and systems monitoring."
          />
        </div>
      </section>
    </div>
  );
};
export default ServiceCardsContainer;
