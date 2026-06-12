"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  twinkle: number;
  phase: number;
  accent: boolean;
};

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;
    let accentColor = "41, 151, 255";
    let baseColor = "120, 120, 130";

    const hexToRgb = (hex: string) => {
      const h = hex.replace("#", "").trim();
      if (h.length !== 6) return null;
      const n = parseInt(h, 16);
      return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
    };

    const readTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      accentColor = hexToRgb(styles.getPropertyValue("--accent")) ?? accentColor;
      baseColor = hexToRgb(styles.getPropertyValue("--foreground")) ?? baseColor;
    };

    const build = () => {
      const count = Math.min(90, Math.round((width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14 - 0.04,
        radius: 0.6 + Math.random() * 1.4,
        alpha: 0.08 + Math.random() * 0.22,
        twinkle: 0.4 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        accent: Math.random() < 0.3,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;

        const shimmer = 0.65 + 0.35 * Math.sin(time * 0.001 * p.twinkle + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.accent ? accentColor : baseColor}, ${p.alpha * shimmer})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(draw);
    };

    readTheme();
    resize();
    raf = requestAnimationFrame(draw);

    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme"] });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
    />
  );
}
