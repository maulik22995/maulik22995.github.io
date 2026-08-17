import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";
import { FaSearch, FaFilter } from "react-icons/fa";

function Projects(props) {
  const theme = props.theme;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("All");

  const techOptions = [
    "All",
    "Kotlin",
    "React Native",
    "Jetpack Compose",
    "Android Java",
    "Next.js",
    "Redux"
  ];

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const filteredProjects = projects.data.filter((repo) => {
    const matchesSearch =
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      repo.languages.some((lang) =>
        lang.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesTech =
      selectedTech === "All" ||
      repo.languages.some((lang) => {
        const langName = lang.name.toLowerCase();
        const targetTech = selectedTech.toLowerCase();
        return langName.includes(targetTech) || (targetTech === "next.js" && langName.includes("next"));
      });

    return matchesSearch && matchesTech;
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>

        {/* Filter and Search Section */}
        <Fade bottom duration={1200} distance="30px">
          <div className="projects-controls-container">
            <div
              className="projects-search-box"
              style={{
                backgroundColor: theme.surfaceElevated || theme.projectCard || "#171c28",
                borderColor: `${theme.border || "#2d3748"}60`,
              }}
            >
              <FaSearch className="search-icon" style={{ color: theme.secondaryText }} />
              <input
                type="text"
                placeholder="Search projects by name, technology, or feature..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ color: theme.text }}
              />
              {searchTerm && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchTerm("")}
                  style={{ color: theme.secondaryText }}
                >
                  ✕
                </button>
              )}
            </div>

            <div className="projects-filter-pills">
              <span className="filter-label" style={{ color: theme.secondaryText }}>
                <FaFilter size={12} style={{ marginRight: '6px' }} /> Filter:
              </span>
              {techOptions.map((tech) => {
                const isActive = selectedTech === tech;
                return (
                  <button
                    key={tech}
                    className={`filter-pill ${isActive ? "active" : ""}`}
                    onClick={() => setSelectedTech(tech)}
                    style={{
                      backgroundColor: isActive
                        ? theme.accentColor
                        : theme.surfaceElevated || theme.projectCard,
                      color: isActive ? "#ffffff" : theme.text,
                      borderColor: isActive
                        ? theme.accentColor
                        : `${theme.border || "#2d3748"}50`,
                    }}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>

            <div className="projects-count-bar" style={{ color: theme.secondaryText }}>
              Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.data.length}</strong> showcase projects
            </div>
          </div>
        </Fade>
      </div>

      <div className="repo-cards-div-main">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((repo) => {
            return <ProjectCard key={repo.id + repo.name} repo={repo} theme={theme} />;
          })
        ) : (
          <div
            className="no-projects-found"
            style={{
              color: theme.secondaryText,
              backgroundColor: theme.surfaceElevated || theme.projectCard,
              borderColor: `${theme.border || "#2d3748"}50`,
            }}
          >
            <h3>No projects found</h3>
            <p>Try adjusting your search query or technology filter.</p>
            <button
              className="reset-filter-btn"
              onClick={() => {
                setSearchTerm("");
                setSelectedTech("All");
              }}
              style={{
                backgroundColor: theme.accentColor,
                color: "#ffffff",
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/maulik22995"
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects (Github)
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
