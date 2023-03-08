import React, { useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import { personal_data } from '../data';
import "../styles/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState(personal_data?.projects);
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projects?.map((project, index)=>(
          <div className='projectItem_wrapper' key={project?.id}>
            <ProjectItem projectdata={project} />
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects