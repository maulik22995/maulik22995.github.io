import React, { useEffect, useState } from "react";
import "./ScrollScrubber.css";

export default function ScrollScrubber({ theme }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const accentColor = (theme && (theme.accentColor || theme.accentBright)) || "#7F52FF";
  const glowColor = (theme && (theme.accentBright || theme.accentColor)) || "#FC1056";

  return (
    <div className="scroll-scrubber-track">
      <div
        className="scroll-scrubber-bar"
        style={{
          width: `${scrollProgress}%`,
          background: `linear-gradient(90deg, ${accentColor}, ${glowColor})`,
          boxShadow: `0 0 12px ${accentColor}aa`,
        }}
      >
        <div
          className="scroll-scrubber-glow"
          style={{
            backgroundColor: glowColor,
            boxShadow: `0 0 14px 4px ${glowColor}`,
          }}
        />
      </div>
    </div>
  );
}
