import React, { useState } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(repo);
  // function openRepoinNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  const styles = style({
    color: theme.text,
    backgroundColor: theme.surfaceElevated || theme.projectCard,
    boxShadow: `${theme.shadow} 0px 4px 20px -5px`,
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "20px",
    height: "100%",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    border: `1px solid ${theme.border}40`,
    ":hover": {
      boxShadow: `${theme.shadow} 0px 12px 40px -5px`,
      transform: "translateY(-8px)",
      border: `1px solid ${theme.accentColor}40`,
      backgroundColor: theme.hover ? `${theme.hover}10` : theme.surfaceElevated,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="50px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => setIsModalOpen(true)}
          style={{ backgroundColor: theme.surfaceElevated || theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
            <p className="repo-subtitle" style={{ color: theme.secondaryText }}>
              {repo.subtitle}
            </p>
          </div>
          {repo.image && (
            <div className="repo-image-div">
              <img 
                src={require(`../../assests/images/work${repo.image}`)}
                alt={repo.name}
                className="repo-image"
                style={{ 
                  width: '75%', 
                  aspectRatio: '1/.40',
                  borderRadius: '4px',
                  marginBottom: '1rem',
                  objectFit: 'contain',
                }}
              />
            </div>
          )}
          <div className="repo-description" style={{ 
            color: theme.text,
            display: 'flex',
            flexDirection: 'row',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem'
          }}>
            {repo.description.split('\n').map((line, index) => (
              <p key={index} style={{ margin: '0' }}>
                {line}
              </p>
            ))}
          </div>
          <div className="flexDiv">
            <div className="repo-details Leftitem">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div className="repo-details Rightitem">
              <ProjectLinks logos={repo.links} />
            </div>
          </div>
        </div>
      </Fade>

      <ProjectModal 
        project={repo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}
