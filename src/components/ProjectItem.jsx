import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({
  projectdata: {
    id,
    title,
    img,
    deployed_url,
    github_link,
    tech_stack,
    description,
  },
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={()=>{navigate(`/project/${id}`)}}
    >
      <div style={{ backgroundImage: `url(${img})` }} className="bgImage" />
      <h1>
        {title} - {id}
      </h1>
    </div>
  );
};

export default ProjectItem;
