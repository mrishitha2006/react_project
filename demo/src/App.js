import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CoEList from "./components/CoEList";
import RCList from "./components/RCList";
import CoEDetails from "./pages/CoEDetails";
import RCDetails from "./pages/RCDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coes" element={<CoEList />} />
          <Route path="/rcs" element={<RCList />} />
          <Route path="/coe/:id" element={<CoEDetails />} />
          <Route path="/rc/:id" element={<RCDetails />} />
        </Routes>
      </div>
      <footer className="footer">© 2025 GNITS CSE Department</footer>
    </Router>
  );
}

export default App;
