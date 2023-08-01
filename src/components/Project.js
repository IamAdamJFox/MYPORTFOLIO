//imports
import React from "react";
import "../Style/Project.css";

// individual project cars on the portfolio page
const Project = ({ title, description, imgSrc, imgAlt, deployedLink, githubLink }) => {
  return (
    <div className="card">
      <h5 className="card-title">{title}</h5>
      <a href={deployedLink} target="_blank" rel="noreferrer">
        <img src={imgSrc} className="card-img-top" alt={imgAlt} />
      </a>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <a href={deployedLink} target="_blank" rel="noreferrer" className="btn btn-deployed">
          Deployed App
        </a>
        <a href={githubLink} target="_blank" rel="noreferrer" className="btn btn-repo">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Project;