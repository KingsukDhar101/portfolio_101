import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ projectdata }) => {
  const navigate = useNavigate();
  const { id, title, img, deployed_url, github_link, tech_stack, description } =
    projectdata;
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate(`/project/${id}`);
      }}
    >
      <div style={{ backgroundImage: `url(${img})` }} className="bgImage" />
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectItem;
