import React from "react";
import "./RndCard.css";
import { Fade } from "react-reveal";
import { FaLinkedin, FaExternalLinkAlt, FaFlask, FaPlayCircle } from "react-icons/fa";
import TiltCard from "../TiltCard/TiltCard";

export default function RndCard({ demo, theme }) {
  return (
    <Fade bottom duration={1500} distance="40px">
      <TiltCard maxTilt={10} scale={1.02}>
        <div
          className="rnd-card"
          style={{
            backgroundColor: theme.surfaceElevated || theme.projectCard || "#171c28",
            borderColor: `${theme.border || "#2d3748"}50`,
            boxShadow: `0 8px 30px -5px ${theme.shadow || "rgba(0,0,0,0.3)"}`,
          }}
        >
        <div className="rnd-card-header">
          <div className="rnd-icon-badge">
            <FaFlask size={20} />
          </div>
          <span className="rnd-subtitle-badge">
            {demo.subtitle || "Research & Experiment"}
          </span>
        </div>

        {/* Video / Embed Media Showcase Area */}
        {demo.videoUrl ? (
          <div className="rnd-media-container">
            <video
              src={demo.videoUrl}
              controls
              preload="metadata"
              className="rnd-video-player"
            />
          </div>
        ) : demo.embedUrl ? (
          <div className="rnd-media-container iframe-container">
            <iframe
              src={demo.embedUrl}
              title={demo.title}
              className="rnd-iframe-player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ) : (
          <div
            className="rnd-placeholder-banner"
            style={{
              backgroundColor: `${theme.body || "#0b0f19"}60`,
              borderColor: `${theme.border || "#2d3748"}40`,
            }}
          >
            <FaPlayCircle size={36} style={{ color: theme.accentColor || "#7F52FF", opacity: 0.8 }} />
            <span style={{ color: theme.secondaryText }}>Video Demo & LinkedIn Post</span>
          </div>
        )}

        <div className="rnd-card-body">
          <h3 className="rnd-card-title" style={{ color: theme.text }}>
            {demo.title}
          </h3>
          <p className="rnd-card-desc" style={{ color: theme.secondaryText }}>
            {demo.description}
          </p>

          <div className="rnd-tech-tags">
            {demo.tech &&
              demo.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="rnd-tech-tag"
                  style={{
                    backgroundColor: `${theme.body || "#0f172a"}80`,
                    color: theme.text,
                    borderColor: `${theme.border || "#2d3748"}60`,
                  }}
                >
                  {t}
                </span>
              ))}
          </div>
        </div>

        <div className="rnd-card-footer">
          {demo.linkedInUrl && (
            <a
              href={demo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rnd-linkedin-btn"
              style={{
                backgroundColor: "#0A66C2",
                color: "#ffffff",
              }}
            >
              <FaLinkedin size={16} /> View Post on LinkedIn <FaExternalLinkAlt size={11} style={{ marginLeft: "4px" }} />
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  </Fade>
);
}
