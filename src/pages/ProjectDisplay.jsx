import React from "react";
import { useParams } from "react-router-dom";
import { personal_data } from "../data";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = personal_data?.projects[id];

  return (
    <div className="project">
      <h1>{project?.title}</h1>
      <a
        className="project_img_wrapper"
        href={project?.deployed_url}
        target="__blank"
      >
        <img href={project?.deployed_url} src={project?.img} alt="" />
      </a>
      <p>
        <strong>Tech Stack : </strong>
        {project?.tech_stack}
      </p>
      <p>
        <strong>Description : </strong>
        {project?.description?.map((desc, index) => (
          <span key={index}>
            {desc}
            {index !== project?.description?.length - 1 ? " - " : ""}
          </span>
        ))}
      </p>
      <div className="links">
        <a href={project?.deployed_url} target="__blank" alt="hello">
          <p style={{ marginBottom: "0" }}>CODE LINK</p>
        </a>
        <a href={project?.github_link} target="__blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
