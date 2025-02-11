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
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "25px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="50px">
        <div
          {...styles}
          key={repo.id}
          onClick={() => setIsModalOpen(true)}
          style={{ backgroundColor: theme.projectCard }}
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
