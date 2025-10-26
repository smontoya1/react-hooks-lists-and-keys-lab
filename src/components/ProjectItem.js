import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span className="projectItem">{technologies[0]}</span>
        <span className="projectItem">{technologies[1]}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
