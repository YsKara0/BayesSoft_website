"use client";

import { useEffect, useRef } from "react";

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  glowColor: string;
  isCore?: boolean;
}

interface Pulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export function HeroGeometricMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Mouse coordinates (normalized -1 to 1) with smooth spring interpolation
    const mouse = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
      canvasX: -9999,
      canvasY: -9999,
      isHovering: false,
    };

    // Responsive Canvas Resizing with Retina Support
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    // Track intersection visibility to pause loop offscreen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Generate 3D Geometric Matrix Nodes (Icosahedral Core + Surrounding Constellation)
    const nodes: Node3D[] = [];
    const nodeCount = 42;
    const radius = Math.min(width, height) * 0.42 || 190;

    // Golden ratio for icosahedral seed vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const icosahedronVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];

    // Core Icosahedral Nodes
    icosahedronVertices.forEach(([vx, vy, vz]) => {
      const len = Math.sqrt(vx * vx + vy * vy + vz * vz);
      const scale = radius * 0.72;
      const x = (vx / len) * scale;
      const y = (vy / len) * scale;
      const z = (vz / len) * scale;

      nodes.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.25,
        size: 5,
        color: "#0066FF",
        glowColor: "rgba(0, 102, 255, 0.9)",
        isCore: true,
      });
    });

    // Secondary Outer Constellation Nodes
    const outerCount = nodeCount - nodes.length;
    for (let i = 0; i < outerCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phiAngle = Math.acos(2.0 * v - 1.0);
      const r = radius * (0.85 + Math.random() * 0.45);

      const x = r * Math.sin(phiAngle) * Math.cos(theta);
      const y = r * Math.sin(phiAngle) * Math.sin(theta);
      const z = r * Math.cos(phiAngle);

      nodes.push({
        x, y, z,
        baseX: x, baseY: y, baseZ: z,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.35,
        size: Math.random() > 0.6 ? 4 : 3,
        color: Math.random() > 0.4 ? "#38BDF8" : "#0066FF",
        glowColor: "rgba(56, 189, 248, 0.7)",
      });
    }

    // Dynamic Pulses travelling along edges
    const pulses: Pulse[] = [];
    const maxPulses = 5;

    // Mouse Tracking Listeners
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      mouse.canvasX = x;
      mouse.canvasY = y;
      mouse.targetX = (x / width) * 2 - 1;
      mouse.targetY = (y / height) * 2 - 1;
      mouse.isHovering = true;
    };

    const onMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse.isHovering = false;
      mouse.canvasX = -9999;
      mouse.canvasY = -9999;
    };

    container.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // Rotation angles
    let angleX = 0.25;
    let angleY = 0.35;
    let angleZ = 0;

    // Main Render Loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouse.currentX += (mouse.targetX - mouse.currentX) * 0.055;
      mouse.currentY += (mouse.targetY - mouse.currentY) * 0.055;

      // Base auto-drift rotation + mouse tilt
      angleY += 0.0035;
      angleX += 0.0018;

      const rotX = angleX + mouse.currentY * 0.55;
      const rotY = angleY + mouse.currentX * 0.75;
      const rotZ = angleZ + mouse.currentX * 0.15;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      const fov = 480;
      const centerX = width / 2;
      const centerY = height / 2;

      // Projected 2D screen positions
      const projected: Array<{
        x2d: number;
        y2d: number;
        scale: number;
        depth: number;
        node: Node3D;
        origIndex: number;
      }> = [];

      // 1. Calculate 3D rotations & projections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Slight harmonic breathing oscillation
        n.x = n.baseX + Math.sin(angleY * 2 + i) * 6;
        n.y = n.baseY + Math.cos(angleX * 2 + i) * 6;
        n.z = n.baseZ + Math.sin(angleZ * 2 + i) * 6;

        // Rotation around Y
        let x1 = n.x * cosY - n.z * sinY;
        let z1 = n.z * cosY + n.x * sinY;

        // Rotation around X
        let y1 = n.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + n.y * sinX;

        // Rotation around Z
        let x2 = x1 * cosZ - y1 * sinZ;
        let y2 = y1 * cosZ + x1 * sinZ;

        // Perspective projection
        const depth = z2 + 500;
        const scale = fov / Math.max(depth, 100);
        const x2d = centerX + x2 * scale;
        const y2d = centerY + y2 * scale;

        projected.push({
          x2d,
          y2d,
          scale,
          depth: z2,
          node: n,
          origIndex: i,
        });
      }

      // Sort by depth (back to front) for accurate geometric rendering
      projected.sort((a, b) => a.depth - b.depth);

      // 2. Draw Translucent Triangular Facets (Sharp Crystalline Faces)
      const maxTriDist = 135;
      ctx.lineWidth = 1;

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dist12 = Math.hypot(p1.x2d - p2.x2d, p1.y2d - p2.y2d);

          if (dist12 < maxTriDist) {
            for (let k = j + 1; k < projected.length; k++) {
              const p3 = projected[k];
              const dist23 = Math.hypot(p2.x2d - p3.x2d, p2.y2d - p3.y2d);
              const dist31 = Math.hypot(p3.x2d - p1.x2d, p3.y2d - p1.y2d);

              if (dist23 < maxTriDist && dist31 < maxTriDist) {
                const avgDepth = (p1.depth + p2.depth + p3.depth) / 3;
                const alpha = Math.max(0.015, Math.min(0.075, (avgDepth + 200) / 4000));

                ctx.beginPath();
                ctx.moveTo(p1.x2d, p1.y2d);
                ctx.lineTo(p2.x2d, p2.y2d);
                ctx.lineTo(p3.x2d, p3.y2d);
                ctx.closePath();

                ctx.fillStyle = `rgba(0, 102, 255, ${alpha})`;
                ctx.fill();
              }
            }
          }
        }
      }

      // 3. Draw Connecting Geometric Lines & Edges
      const maxConnectDist = 125;
      const activeEdges: Array<{ from: typeof projected[0]; to: typeof projected[0] }> = [];

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x2d - p2.x2d;
          const dy = p1.y2d - p2.y2d;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectDist) {
            activeEdges.push({ from: p1, to: p2 });

            const edgeAlpha = Math.pow(1 - dist / maxConnectDist, 1.35) * 0.38;
            ctx.beginPath();
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);

            ctx.strokeStyle = `rgba(0, 102, 255, ${edgeAlpha})`;
            ctx.lineWidth = p1.node.isCore && p2.node.isCore ? 1.3 : 0.8;
            ctx.stroke();
          }
        }
      }

      // 4. Update and Draw Laser Signal Pulses along Edges
      if (activeEdges.length > 0) {
        if (pulses.length < maxPulses && Math.random() < 0.08) {
          const edge = activeEdges[Math.floor(Math.random() * activeEdges.length)];
          pulses.push({
            fromIndex: edge.from.origIndex,
            toIndex: edge.to.origIndex,
            progress: 0,
            speed: 0.02 + Math.random() * 0.03,
          });
        }

        for (let p = pulses.length - 1; p >= 0; p--) {
          const pulse = pulses[p];
          pulse.progress += pulse.speed;

          if (pulse.progress >= 1) {
            pulses.splice(p, 1);
            continue;
          }

          const fromP = projected.find((item) => item.origIndex === pulse.fromIndex);
          const toP = projected.find((item) => item.origIndex === pulse.toIndex);

          if (fromP && toP) {
            const px = fromP.x2d + (toP.x2d - fromP.x2d) * pulse.progress;
            const py = fromP.y2d + (toP.y2d - fromP.y2d) * pulse.progress;

            // Draw crisp diamond signal pulse
            ctx.save();
            ctx.translate(px, py);
            ctx.rotate(Math.PI / 4);
            ctx.fillStyle = "#38BDF8";
            ctx.shadowColor = "#0066FF";
            ctx.shadowBlur = 10;
            ctx.fillRect(-2.5, -2.5, 5, 5);
            ctx.restore();
          }
        }
      }

      // 5. Interactive Mouse Connection Beams
      if (mouse.isHovering && mouse.canvasX > 0 && mouse.canvasY > 0) {
        const mouseRadius = 140;

        for (let i = 0; i < projected.length; i++) {
          const p = projected[i];
          const mDist = Math.hypot(p.x2d - mouse.canvasX, p.y2d - mouse.canvasY);

          if (mDist < mouseRadius) {
            const beamAlpha = (1 - mDist / mouseRadius) * 0.65;

            ctx.beginPath();
            ctx.moveTo(mouse.canvasX, mouse.canvasY);
            ctx.lineTo(p.x2d, p.y2d);
            ctx.strokeStyle = `rgba(56, 189, 248, ${beamAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Accent halo on connected node
            ctx.save();
            ctx.translate(p.x2d, p.y2d);
            ctx.rotate(Math.PI / 4);
            ctx.strokeStyle = `rgba(56, 189, 248, ${beamAlpha * 0.9})`;
            ctx.strokeRect(-8, -8, 16, 16);
            ctx.restore();
          }
        }
      }

      // 6. Draw Sharp Diamond Vertex Nodes (45-degree rotated squares, 0 curves)
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const s = p.node.size * p.scale * 1.05;

        ctx.save();
        ctx.translate(p.x2d, p.y2d);
        ctx.rotate(Math.PI / 4); // Strict 45-degree diamond

        ctx.shadowColor = p.node.glowColor;
        ctx.shadowBlur = p.node.isCore ? 14 : 7;
        ctx.fillStyle = p.node.color;
        ctx.fillRect(-s / 2, -s / 2, s, s);

        // Core nodes get white diamond center pip
        if (p.node.isCore) {
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(-s / 4, -s / 4, s / 2, s / 2);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex size-full min-h-[380px] items-center justify-center overflow-hidden lg:min-h-[540px]"
      aria-hidden="true"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.14),transparent_65%)]" />

      {/* Main Interactive WebGL/Canvas Matrix */}
      <canvas
        ref={canvasRef}
        className="relative z-10 size-full cursor-crosshair"
      />

      {/* Tech HUD Telemetry Badges (Linear / High-End Engineering Style) */}
      <div className="pointer-events-none absolute left-3 top-3 z-20 flex items-center gap-2 border border-white/10 bg-[#080E17]/85 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
        <span className="size-1.5 bg-bayes-blue shadow-[0_0_8px_#0066FF]" />
        <span>SYS.GRID // 3D MATRIX</span>
      </div>

      <div className="pointer-events-none absolute bottom-3 right-3 z-20 hidden items-center gap-3 border border-white/10 bg-[#080E17]/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60 backdrop-blur-md sm:flex">
        <span>NODES: 42</span>
        <span className="text-white/20">|</span>
        <span className="text-bayes-blue">INTERACTIVE HOVER</span>
      </div>

      {/* Sharp Corner Grid Target Marks */}
      <span className="pointer-events-none absolute left-0 top-0 size-3 border-l-2 border-t-2 border-bayes-blue/40" />
      <span className="pointer-events-none absolute right-0 top-0 size-3 border-r-2 border-t-2 border-bayes-blue/40" />
      <span className="pointer-events-none absolute bottom-0 left-0 size-3 border-b-2 border-l-2 border-bayes-blue/40" />
      <span className="pointer-events-none absolute bottom-0 right-0 size-3 border-b-2 border-r-2 border-bayes-blue/40" />
    </div>
  );
}
