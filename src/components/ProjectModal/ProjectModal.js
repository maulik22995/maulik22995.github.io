import React, { useState } from "react";
import "./ProjectModal.css";
import { Fade } from "react-reveal";

export default function ProjectModal({ project, isOpen, onClose, theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? project.screenshots.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === project.screenshots.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <Fade bottom duration={500}>
        <div 
          className="modal-content" 
          onClick={e => e.stopPropagation()}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="modal-header">
            <h2 style={{ color: theme.text }}>{project.name}</h2>
            <button className="close-button" style={{ color: theme.text }} onClick={onClose}>&times;</button>
          </div>
          
          <div className="carousel-container">
            <button className="carousel-button prev" onClick={handlePrev}>‹</button>
            
            <div className="carousel-content">
              <div className="image-stack">
                <img 
                  src={require(`../../assests/images/work${project.screenshots[getPrevIndex()]}`)}
                  alt="Previous"
                  className="stack-image prev-image"
                />
                <img 
                  src={require(`../../assests/images/work${project.screenshots[currentIndex]}`)}
                  alt={`${project.name} screenshot ${currentIndex + 1}`}
                  className="stack-image current-image"
                />
                <img 
                  src={require(`../../assests/images/work${project.screenshots[getNextIndex()]}`)}
                  alt="Next"
                  className="stack-image next-image"
                />
              </div>
            </div>
            
            <button className="carousel-button next" onClick={handleNext}>›</button>
          </div>
          
          <div className="carousel-indicators">
            {project.screenshots.map((_, index) => (
              <span 
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                style={{ 
                  backgroundColor: index === currentIndex ? theme.accentColor : theme.secondaryText 
                }}
              />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
} 