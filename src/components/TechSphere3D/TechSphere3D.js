import React, { useEffect, useRef } from "react";
import "./TechSphere3D.css";

const TECH_ITEMS = [
  { name: "Kotlin", color: "#7F52FF" },
  { name: "Jetpack Compose", color: "#4285F4" },
  { name: "Android", color: "#3DDC84" },
  { name: "Java", color: "#f89820" },
  { name: "React Native", color: "#61DAFB" },
  { name: "React.js", color: "#61DAFB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Python", color: "#3776AB" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "GraphQL", color: "#E535AB" },
  { name: "Node.js", color: "#339933" },
  { name: "MVVM", color: "#EC407A" },
  { name: "Gradle", color: "#02303A" },
  { name: "Git", color: "#F05032" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "REST APIs", color: "#00BCD4" },
  { name: "SQLite / Room", color: "#4479A1" },
  { name: "Jetpack", color: "#1A73E8" },
];

export default function TechSphere3D({ theme }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = containerRef.current.clientWidth || 600);
    let height = (canvas.height = containerRef.current.clientHeight || 400);

    const radius = Math.min(width, height) * 0.38;
    const numItems = TECH_ITEMS.length;

    // Distribute points evenly on sphere using Fibonacci spiral
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numItems; i++) {
      const y = 1 - (i / (numItems - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        name: TECH_ITEMS[i].name,
        color: TECH_ITEMS[i].color,
      });
    }

    // Sphere rotation angles & inertia velocities
    let rotX = 0;
    let rotY = 0;
    let velX = 0.003;
    let velY = 0.005;

    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseDown = (e) => {
      isDragging = true;
      lastMouseX = e.clientX || (e.touches && e.touches[0].clientX);
      lastMouseY = e.clientY || (e.touches && e.touches[0].clientY);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const dx = clientX - lastMouseX;
      const dy = clientY - lastMouseY;

      velY = dx * 0.004;
      velX = -dy * 0.004;

      lastMouseX = clientX;
      lastMouseY = clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const container = containerRef.current;
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    container.addEventListener("touchstart", handleMouseDown);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);

    const handleResize = () => {
      if (!container) return;
      width = canvas.width = container.clientWidth || 600;
      height = canvas.height = container.clientHeight || 400;
    };
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Apply rotation inertia
      rotX += velX;
      rotY += velY;

      // Friction decay
      if (!isDragging) {
        velX *= 0.96;
        velY *= 0.96;
        // Keep minimum slow continuous rotation
        if (Math.abs(velX) < 0.001) velX = 0.0015;
        if (Math.abs(velY) < 0.001) velY = 0.0025;
      }

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projected = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 3D Matrix Rotation (X & Y axes)
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective camera scaling
        const distance = 500;
        const scale = distance / (distance - z2);
        const px = width / 2 + x1 * scale;
        const py = height / 2 + y2 * scale;

        // Depth alpha calculation
        const alpha = Math.min(1, Math.max(0.25, (z2 + radius) / (2 * radius)));

        projected.push({
          px,
          py,
          scale,
          z2,
          alpha,
          name: p.name,
          color: p.color,
        });
      }

      // Sort by Z distance for proper painter's algorithm rendering
      projected.sort((a, b) => a.z2 - b.z2);

      const fontColor = (theme && theme.text) || "#FFFFFF";

      for (let i = 0; i < projected.length; i++) {
        const item = projected[i];

        ctx.globalAlpha = item.alpha;
        const fontSize = Math.max(10, 15 * item.scale);
        ctx.font = `600 ${fontSize}px "Google Sans Medium", sans-serif`;

        // Draw glowing particle dot next to skill text
        const dotSize = Math.max(2.5, 4 * item.scale);
        ctx.fillStyle = item.color;
        ctx.shadowColor = item.color;
        ctx.shadowBlur = item.alpha > 0.6 ? 8 : 0;
        ctx.beginPath();
        ctx.arc(item.px - fontSize * 0.4, item.py - fontSize * 0.3, dotSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw skill title
        ctx.fillStyle = item.alpha > 0.6 ? item.color : fontColor;
        ctx.fillText(item.name, item.px + dotSize, item.py);
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      container.removeEventListener("touchstart", handleMouseDown);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);

      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div ref={containerRef} className="tech-sphere-wrapper">
      <canvas ref={canvasRef} className="tech-sphere-canvas" />
      <span className="tech-sphere-hint" style={{ color: theme && theme.secondaryText }}>
        ✦ Drag or swipe to rotate 3D Tech Sphere ✦
      </span>
    </div>
  );
}
