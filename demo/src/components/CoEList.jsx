import React from "react";
import { Link } from "react-router-dom";
import { centersData } from "../data/centersData";
import "./CoEList.css";

const CoEList = () => {
  return (
    <div>
      <h1 className="title">Centers of Excellence</h1>
      <div className="grid">
        {centersData?.coes?.map((coe) => (
          <Link key={coe.id} className="card" to={`/coe/${coe.id}`}>
            <div className="card-image">
              <img src={coe.image} alt={coe.name} />
            </div>
            <div className="card-content">
              <h3>{coe.name}</h3>
              <p><b>Agency:</b> {coe.agency}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoEList;
