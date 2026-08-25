import React, { useEffect, useRef } from "react";
import "./ThreeBackground.css";

export default function ThreeBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || window.innerHeight);

    // Mouse coordinates for 3D camera rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetMouseX = x * 0.001;
      targetMouseY = y * 0.001;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle grid dimensions
    const cols = 28;
    const rows = 20;
    const spacing = 45;
    const particles = [];

    for (let x = 0; x < cols; x++) {
      for (let z = 0; z < rows; z++) {
        particles.push({
          x: (x - cols / 2) * spacing,
          y: 0,
          z: (z - rows / 2) * spacing,
          baseX: (x - cols / 2) * spacing,
          baseZ: (z - rows / 2) * spacing,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    let time = 0;

    // Helper to project 3D point (X, Y, Z) to 2D Screen (px, py)
    const project = (x, y, z, rotX, rotY) => {
      // Rotate Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotate X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Perspective projection
      const fov = 400;
      const distance = 600;
      const scale = fov / (fov + z2 + distance);

      return {
        px: width / 2 + x1 * scale,
        py: height / 2 + y2 * scale,
        scale: scale,
        z: z2,
      };
    };

    const render = () => {
      time += 0.02;

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const rotX = 0.4 + mouseY;
      const rotY = mouseX;

      // Determine colors from theme
      const accent = (theme && (theme.accentColor || theme.accentBright)) || "#7F52FF";

      const projectedPoints = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // 3D Wave animation
        const wave = Math.sin(time + p.baseX * 0.01 + p.baseZ * 0.01) * 22;
        p.y = wave;

        const proj = project(p.x, p.y, p.z, rotX, rotY);
        projectedPoints.push(proj);

        // Draw particle node
        const size = Math.max(1, 2.5 * proj.scale);
        const alpha = Math.min(1, Math.max(0.15, (proj.scale - 0.3) * 1.5));

        ctx.fillStyle = accent;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw subtle 3D connecting lines between neighboring grid nodes
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = accent;

      for (let i = 0; i < particles.length; i++) {
        const p1 = projectedPoints[i];
        // Connect to right neighbor
        if ((i + 1) % rows !== 0 && i + 1 < particles.length) {
          const p2 = projectedPoints[i + 1];
          const alpha = (p1.scale + p2.scale) * 0.15;
          ctx.globalAlpha = Math.min(0.35, alpha);
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }
        // Connect to down neighbor
        if (i + rows < particles.length) {
          const p2 = projectedPoints[i + rows];
          const alpha = (p1.scale + p2.scale) * 0.15;
          ctx.globalAlpha = Math.min(0.35, alpha);
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="three-bg-container">
      <canvas ref={canvasRef} className="three-bg-canvas" />
    </div>
  );
}
