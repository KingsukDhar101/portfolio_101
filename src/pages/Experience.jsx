import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { exp_data } from "../data";

const Experience = () => {
  // eslint - disable - next - line;
  const [expData, setExpData] = useState(exp_data);

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {expData &&
          expData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`veritical-lineine-element--${item.tag}`}
              date={item.date}
              iconStyle={{
                background: item.tag === "education" ? "#3e497a" : "#e9d35b",
                color: "#fff",
              }}
              icon={item.tag === "education" ? <SchoolIcon /> : <WorkIcon />}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
