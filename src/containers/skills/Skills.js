import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import TechSphere3D from "../../components/TechSphere3D/TechSphere3D";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <Fade bottom duration={2000}>
        <TechSphere3D theme={theme} />
      </Fade>
      <SkillSection theme={theme} />
    </div>
  );
}
