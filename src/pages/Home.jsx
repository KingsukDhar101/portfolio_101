import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { personal_data } from "../data";

const Home = () => {
  const [personalData, setPersonalData] = useState(personal_data);

  return (
    <div className="home">
      <div className="about">
        <div>
          Hi, My name is <h2>{personalData.name}</h2>
        </div>
        <div className="prompt">
          <p style={{ color: "#e4e4e4fc" }}>{personalData.about}</p>
          <EmailIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          {personalData?.skills?.map((skill, index) => (
            <li className="item" key={index}>
              <h2>{skill?.title}</h2>
              <span>{skill?.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Home;
