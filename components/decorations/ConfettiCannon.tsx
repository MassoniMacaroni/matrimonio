"use client";

import React, { useEffect, useRef, useCallback } from "react";

export type ConfettiParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  shape: "rect" | "circle" | "heart" | "star";
  opacity: number;
  decay: number;
};

const PALETTE = [
  "#b3392d", // signature wedding red
  "#982f25", // deep red
  "#e0a96d", // vintage champagne gold
  "#f2cdc7", // soft blush
  "#ffffff", // ivory white
  "#d48372", // terracotta coral
];

export const useConfetti = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const renderFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.vx *= 0.985; // friction
      p.rotation += p.vRot;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > canvas.height + 20) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === "rect") {
        ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
      } else if (p.shape === "heart") {
        const s = p.size * 0.45;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.6, -s * 1.2, s * 0.3, 0, s * 1.2);
        ctx.bezierCurveTo(s * 1.2, s * 0.3, s, -s * 0.6, 0, s * 0.3);
        ctx.fill();
      } else if (p.shape === "star") {
        const spikes = 5;
        const outerRadius = p.size * 0.6;
        const innerRadius = p.size * 0.3;
        let rot = (Math.PI / 2) * 3;
        const step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(0, -outerRadius);
        for (let j = 0; j < spikes; j++) {
          ctx.lineTo(Math.cos(rot) * outerRadius, Math.sin(rot) * outerRadius);
          rot += step;
          ctx.lineTo(Math.cos(rot) * innerRadius, Math.sin(rot) * innerRadius);
          rot += step;
        }
        ctx.lineTo(0, -outerRadius);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    }

    if (particles.length > 0) {
      animationFrameRef.current = requestAnimationFrame(renderFrame);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }
  }, []);

  const fire = useCallback(
    (originX?: number, originY?: number, particleCount = 75) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const ox = originX !== undefined ? originX : rect.width / 2;
      const oy = originY !== undefined ? originY : rect.height * 0.6;

      const shapes: ConfettiParticle["shape"][] = ["rect", "circle", "heart", "star"];

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.PI + (Math.random() * Math.PI - Math.PI / 2); // burst upwards and outwards
        const speed = 4 + Math.random() * 11;
        particlesRef.current.push({
          x: ox + (Math.random() - 0.5) * 30,
          y: oy + (Math.random() - 0.5) * 20,
          vx: Math.cos(angle) * speed,
          vy: -Math.sin(angle) * speed - (3 + Math.random() * 4),
          size: 6 + Math.random() * 8,
          color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
          rotation: Math.random() * 360,
          vRot: (Math.random() - 0.5) * 14,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          opacity: 1,
          decay: 0.007 + Math.random() * 0.008,
        });
      }

      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(renderFrame);
      }
    },
    [renderFrame]
  );

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return { canvasRef, fire };
};

export const ConfettiCanvas: React.FC<{
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}> = ({ canvasRef }) => {
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
};
