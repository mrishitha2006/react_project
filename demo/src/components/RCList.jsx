import React from "react";
import { Link } from "react-router-dom";
import { centersData } from "../data/centersData";
import "./RCList.css"; // create a CSS file similar to CoEList.css

const RCList = () => {
  return (
    <div>
      <h1 className="title">Research Centers</h1>
      <div className="grid">
        {centersData?.rcs?.map((rc) => (
          <Link key={rc.id} className="card" to={`/rc/${rc.id}`}>
            <div className="card-image">
              <img src={rc.image} alt={rc.name} />
            </div>
            <div className="card-content">
              <h3>{rc.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RCList;
