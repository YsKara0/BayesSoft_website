"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  tone: number;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let points: Point[] = [];
    const reducedMotion = prefersReducedMotion();

    const buildPoints = () => {
      const density = Math.min(72, Math.max(34, Math.floor((width * height) / 23000)));
      points = Array.from({ length: density }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        size: 0.85 + Math.random() * 1.65,
        tone: index % 5
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      buildPoints();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(30, 62, 98, 0.30)");
      gradient.addColorStop(0.5, "rgba(81, 214, 202, 0.09)");
      gradient.addColorStop(1, "rgba(199, 163, 90, 0.11)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      for (let index = 0; index < points.length; index += 1) {
        const point = points[index];

        if (!reducedMotion) {
          point.x += point.vx;
          point.y += point.vy;
        }

        if (point.x < 0 || point.x > width) {
          point.vx *= -1;
        }
        if (point.y < 0 || point.y > height) {
          point.vy *= -1;
        }

        for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
          const nextPoint = points[nextIndex];
          const distance = Math.hypot(point.x - nextPoint.x, point.y - nextPoint.y);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2;
            context.strokeStyle = `rgba(221, 231, 240, ${opacity})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(nextPoint.x, nextPoint.y);
            context.stroke();
          }
        }

        const colors = [
          "rgba(245, 248, 251, 0.82)",
          "rgba(81, 214, 202, 0.72)",
          "rgba(30, 62, 98, 0.88)",
          "rgba(199, 163, 90, 0.62)",
          "rgba(221, 231, 240, 0.58)"
        ];
        context.fillStyle = colors[point.tone];
        context.beginPath();
        context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        context.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-70 mix-blend-screen"
    />
  );
}
