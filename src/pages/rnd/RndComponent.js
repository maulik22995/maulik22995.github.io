import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RndCard from "../../components/RndCard/RndCard";
import { Fade } from "react-reveal";
import { rndHeader, rndDemos } from "../../portfolio.js";
import "./RndComponent.css";
import ProjectsImg from "../projects/ProjectsImg";
import { style } from "glamor";
import { FaFlask, FaLinkedin } from "react-icons/fa";

export default function RndComponent(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="rnd-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-rnd">
        <Fade bottom duration={2000} distance="40px">
          <div className="rnd-heading-div">
            <div className="rnd-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="rnd-heading-text-div">
              <h1 className="rnd-heading-text" style={{ color: theme.text }}>
                {rndHeader.title}
              </h1>
              <p
                className="rnd-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {rndHeader.description}
              </p>
            </div>
          </div>
        </Fade>

        <Fade bottom duration={1200} distance="30px">
          <div
            className="rnd-intro-banner"
            style={{
              backgroundColor: theme.surfaceElevated || theme.projectCard || "#171c28",
              borderColor: `${theme.border || "#2d3748"}50`,
            }}
          >
            <div className="rnd-intro-content">
              <h3 style={{ color: theme.text }}>
                <FaFlask style={{ marginRight: "8px", color: theme.accentColor }} /> Mobile R&D & Video Experiments
              </h3>
              <p style={{ color: theme.secondaryText }}>
                I actively research new mobile frameworks, performance optimizations, custom Jetpack Compose UI/UX, and native bridges. Follow my LinkedIn for video demos and engineering discussions!
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/maulik-togadiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="rnd-follow-linkedin-btn"
              style={{
                backgroundColor: "#0A66C2",
                color: "#ffffff",
              }}
            >
              <FaLinkedin size={18} /> Connect on LinkedIn
            </a>
          </div>
        </Fade>
      </div>

      {/* R&D Cards Grid */}
      <div className="rnd-cards-grid">
        {rndDemos.data.map((demo) => (
          <RndCard key={demo.id} demo={demo} theme={theme} />
        ))}
      </div>

      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://www.linkedin.com/in/maulik-togadiya/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore All Posts on LinkedIn
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}
