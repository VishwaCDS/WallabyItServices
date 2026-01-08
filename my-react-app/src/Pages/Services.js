import React from "react";
import {
  FaCloud,
  FaShieldAlt,
  FaCog,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaServer,
  FaMobileAlt,
  FaSearch,
  FaMicrochip,
} from "react-icons/fa";

const Services = () => {
  const allServices = [
    {
      title: "Software Engineering",
      icon: <FaCode />,
      desc: ["Custom Web Apps", "API Development", "Legacy Modernization"],
    },
    {
      title: "Data Science",
      icon: <FaDatabase />,
      desc: [
        "Predictive Analytics",
        "Data Visualization",
        "Machine Learning Models",
      ],
    },
    {
      title: "Cybersecurity",
      icon: <FaShieldAlt />,
      desc: ["Threat Detection", "Data Encryption", "Incident Response"],
    },
    {
      title: "Cloud Computing",
      icon: <FaCloud />,
      desc: ["Cloud Readiness", "Hybrid Solutions", "Resource Management"],
    },
    {
      title: "Computer Systems",
      icon: <FaServer />,
      desc: ["System Architecture", "OS Management", "Virtualization"],
    },
    {
      title: "Networking",
      icon: <FaNetworkWired />,
      desc: ["Infrastructure Design", "VPN Setup", "Network Monitoring"],
    },
    {
      title: "Managed IT Support",
      icon: <FaCog />,
      desc: ["24/7 Helpdesk", "Hardware Setup", "System Maintenance"],
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      desc: ["iOS & Android Apps", "Cross-Platform Tools", "UI/UX Design"],
    },
    {
      title: "SEO & Digital",
      icon: <FaSearch />,
      desc: ["Search Optimization", "Content Strategy", "Performance Audit"],
    },
    {
      title: "Embedded Systems",
      icon: <FaMicrochip />,
      desc: ["Firmware Coding", "IoT Integration", "Hardware Testing"],
    },
  ];

  return (
    <div className="services-page">
      <main className="services-section">
        <div className="services-header">
          <h2>Our Expertise</h2>
          <p>Comprehensive IT Solutions for Modern Businesses</p>
        </div>

        <div className="services-container">
          {allServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
