import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="home-content">
        <h1 className="home-title">Centers of Excellence & Research Centers</h1>
        <p className="home-subtitle">
          Explore innovation, collaboration, and impactful research under our
          Centers of Excellence (CoEs) and Research Centers (RCs).
        </p>

        <div className="home-buttons">
          <Link to="/rcs" className="home-btn rc-btn">
            Explore Research Centers
          </Link>
          <Link to="/coes" className="home-btn coe-btn">
            Explore Centers of Excellence
          </Link>
        </div>
      </div>

      {/* <div className="scroll-indicator">
        <span>↓ Scroll to Discover Projects ↓</span>
      </div> */}
    </div>
  );
};

export default Home;
