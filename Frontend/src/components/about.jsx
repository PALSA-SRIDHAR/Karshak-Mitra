import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="container about-body">
      <div className="about-header">About Karshak Mitra</div>

      {/* cards */}
      <div className="about-content">
        <div className="about-description">
          <h3 className="about-subheader">Project Developer</h3>
          <p>
            I am a student at Rajiv Gandhi University of knowledge Technologies-Basar,
            Guna, and I have developed and maintained the Karshak Mitra website.
          </p>
          <p>
            Karshak Mitra is an innovative online platform revolutionizing
            agricultural trading. It connects farmers directly with consumers,
            facilitating seamless transactions and eliminating middlemen.
            Through a user-friendly interface, farmers can showcase their
            produce, while consumers gain access to fresh, locally sourced
            goods. Karshak Mitra promotes fair pricing, transparency, and
            sustainability in the agricultural supply chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
