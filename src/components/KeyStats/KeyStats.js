import React from "react";
import "./KeyStats.css";
import { Fade } from "react-reveal";
import { FaCode, FaMobileAlt, FaRocket, FaAward } from "react-icons/fa";

export default function KeyStats({ theme }) {
  const stats = [
    {
      id: 1,
      icon: <FaAward size={28} />,
      number: "8+ Years",
      label: "Professional Experience",
      subtext: "Senior Mobile Engineer",
    },
    {
      id: 2,
      icon: <FaMobileAlt size={28} />,
      number: "11+ Apps",
      label: "Featured Projects",
      subtext: "Production Case Studies",
    },
    {
      id: 3,
      icon: <FaCode size={28} />,
      number: "Native & Cross",
      label: "Dual Stack Expertise",
      subtext: "Kotlin Compose & React Native",
    },
    {
      id: 4,
      icon: <FaRocket size={28} />,
      number: "100k+",
      label: "App Downloads",
      subtext: "Play Store & App Store",
    },
  ];

  return (
    <Fade bottom duration={1200} distance="30px">
      <div className="keystats-container">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="keystat-card"
            style={{
              backgroundColor: theme.surfaceElevated || theme.projectCard || "#171c28",
              borderColor: `${theme.border || "#2d3748"}50`,
              boxShadow: `0 8px 24px -6px ${theme.shadow || "rgba(0,0,0,0.3)"}`,
            }}
          >
            <div
              className="keystat-icon-wrapper"
              style={{
                color: theme.accentColor || "#7F52FF",
                backgroundColor: `${theme.accentColor || "#7F52FF"}18`,
              }}
            >
              {stat.icon}
            </div>
            <div className="keystat-content">
              <h3 className="keystat-number" style={{ color: theme.text }}>
                {stat.number}
              </h3>
              <p className="keystat-label" style={{ color: theme.text }}>
                {stat.label}
              </p>
              <span className="keystat-subtext" style={{ color: theme.secondaryText }}>
                {stat.subtext}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Fade>
  );
}
