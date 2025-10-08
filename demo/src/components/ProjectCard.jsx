import React from "react";

const ProjectCard = ({ project, onContribute, highlight }) => {
  return (
    <div className={`card ${highlight ? "highlight" : ""}`}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.rating && <p><b>Rating:</b> ⭐ {project.rating}/5</p>}
      {onContribute && <button onClick={onContribute}>Contribute</button>}
    </div>
  );
};

export default ProjectCard;
