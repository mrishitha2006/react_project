import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">GNITS Projects Portal</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/coes">Centers of Excellence</Link>
        <Link to="/rcs">Research Centers</Link>
      </div>
    </nav>
  );
};

export default Navbar;
