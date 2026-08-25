import React, { useState, useRef } from "react";
import "./TiltCard.css";

export default function TiltCard({ children, maxTilt = 12, scale = 1.03, className = "", disabled = false }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (disabled || !cardRef.current) return;

    // If mouse moves directly over an iframe or iframe container, gently reset tilt so iframe clicks operate perfectly
    if (e.target && (e.target.tagName === "IFRAME" || e.target.classList.contains("iframe-container"))) {
      setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
      setGlareStyle({ opacity: 0 });
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate normalized position between -1 and +1
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    const rotateX = -yPct * maxTilt;
    const rotateY = xPct * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    // Glare angle calculation
    const angle = Math.atan2(mouseY - height / 2, mouseX - width / 2) * (180 / Math.PI);
    setGlareStyle({
      opacity: 0.35,
      background: `linear-gradient(${angle}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 80%)`,
    });
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: disabled ? "none" : transformStyle,
        transition: isHovered ? "transform 0.08s ease-out" : "transform 0.5s ease-out",
      }}
    >
      <div className="tilt-card-glare" style={glareStyle} />
      {children}
    </div>
  );
}
