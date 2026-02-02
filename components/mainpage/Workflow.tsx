import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/*
  Cyberpunk / Futuristic Workflow Ring
  - No external animation libraries used (pure requestAnimationFrame + CSS)
  - Neon ring with tracer moving sequentially across 5 nodes
  - Hover/focus mode: pauses loop, shows holographic panel with scan reveal + parallax
  - Micro details: subtle background movement, node pulses, cursor glow, particle orbits
*/

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */

type Step = {
  id: number;
  title: string;
  desc: string;
  image: string;
  color: string; // neon color for node
};

export default function WorkflowRing() {
  // Dimensions
  const SIZE = 700;
  const CENTER = SIZE / 2;
  const RADIUS = 260; // ring radius - nodes placed on circumference

  const steps: Step[] = [
    {
      id: 1,
      title: "Problem Definition",
      desc: "Clarifying objectives & constraints.",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
      color: "#00E6A8",
    },
    {
      id: 2,
      title: "System Design",
      desc: "Architecture & component selection.",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop",
      color: "#6C8BFF",
    },
    {
      id: 3,
      title: "Development & Integration",
      desc: "Building, coding, & integration.",
      image:
        "https://images.unsplash.com/photo-1555664424-778a69022365?q=80&w=1000&auto=format&fit=crop",
      color: "#FF6AD5",
    },
    {
      id: 4,
      title: "Testing & Validation",
      desc: "Rigorous real-world testing.",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
      color: "#FFB86C",
    },
    {
      id: 5,
      title: "Delivery & Documentation",
      desc: "Handover with documentation.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      color: "#49FFD6",
    },
  ];

  // Animation state
  const [progress, setProgress] = useState(0); // 0..1 loop around ring
  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Hover/focus
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [focusPaused, setFocusPaused] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Derived active step index from progress
  const SEGMENTS = steps.length;
  const segmentAngle = 360 / SEGMENTS;

  // For parallax image panel transforms
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Cursor glow DOM ref
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Start the continuous tracer loop
  useEffect(() => {
    const speed = 0.03; // fraction per second for full loop (lower = slower). adjust for desired timing

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!isPaused && !focusPaused) {
        setProgress((prev) => (prev + speed * dt) % 1);
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPaused, focusPaused]);

  // Calculate active step from progress
  const activeIndex = Math.floor(
    ((progress * 360 + segmentAngle / 2) % 360) / segmentAngle,
  );

  // Node positions computed once
  const nodePositions = steps.map((_, i) => {
    const angleDeg = i * segmentAngle - 90;
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      angleDeg,
      x: CENTER + Math.cos(angleRad) * RADIUS,
      y: CENTER + Math.sin(angleRad) * RADIUS,
    };
  });

  // Helpers: when hovering a node - freeze loop and show focus
  const handleNodeEnter = (index: number) => (e: React.MouseEvent) => {
    setHoverIndex(index);
    setFocusPaused(true);
    setIsPaused(true);
    // place panel near node by computing client coords
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setCursorPos({ x: centerX, y: centerY });
  };

  const handleNodeMove = (index: number) => (e: React.MouseEvent) => {
    // update cursor and panel parallax
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (panelRef.current) {
      const panelRect = panelRef.current.getBoundingClientRect();
      const px =
        (e.clientX - (panelRect.left + panelRect.width / 2)) / panelRect.width;
      const py =
        (e.clientY - (panelRect.top + panelRect.height / 2)) / panelRect.height;
      // small tilt
      panelRef.current.style.transform = `translate3d(-50%, -50%, 0) rotateX(${py * -6}deg) rotateY(${px * 6}deg)`;
    }
    // custom cursor follow
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
    }
  };

  const handleNodeLeave = () => {
    setHoverIndex(null);
    setFocusPaused(false);
    setIsPaused(false);
    if (panelRef.current) {
      panelRef.current.style.transform = "";
    }
  };

  // Custom cursor toggles: show small glowing dot near nodes
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // small utility to compute node-specific pulse amplitude
  const nodePulse = (index: number) => {
    // different phases so not uniform
    const now = performance.now() / 1000;
    const phase = (index / steps.length) * Math.PI * 2;
    // base pulse 0.92 .. 1.04
    return 0.98 + 0.06 * Math.sin(now * 1.2 + phase);
  };

  // compute tracer x/y for rendering
  const tracerAngleDeg = progress * 360 - 90;
  const tracerAngleRad = (tracerAngleDeg * Math.PI) / 180;
  const tracerPos = {
    x: CENTER + Math.cos(tracerAngleRad) * RADIUS,
    y: CENTER + Math.sin(tracerAngleRad) * RADIUS,
  };

  // compute ring stroke dash to create local brightening near tracer (approx)
  // We'll draw a thin glowing stroke and use a partially transparent overlay circle for shimmer.

  // Panel reveal classes & keyframes are defined in a style tag below

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden"
      style={{
        // animated layered background: subtle grid + noise via backgroundImage
        background:
          "radial-gradient(ellipse at bottom right, rgba(20,20,24,0.55), rgba(0,0,0,1)), linear-gradient(180deg, rgba(4,6,8,0.3), rgba(0,0,0,0.7))",
      }}
    >
      {/* Background animated layers & particles */}
      <style>
        {`
          @keyframes bg-move {
            0% { background-position: 0% 0%}
            50% { background-position: 10% 10%}
            100% { background-position: 0% 0%}
          }
          @keyframes scanReveal {
            0% { clip-path: inset(0 100% 0 0) }
            60% { clip-path: inset(0 0% 0 0) }
            100% { clip-path: inset(0 0% 0 0) }
          }
          @keyframes panelGlitch {
            0% { transform: translateX(0) }
            20% { transform: translateX(-1px) skewX(-0.2deg) }
            40% { transform: translateX(1px) skewX(0.2deg) }
            60% { transform: translateX(0) skewX(0deg) }
            100% { transform: translateX(0) }
          }
          @keyframes slowSpin {
            from { transform: rotate(0deg) }
            to { transform: rotate(360deg) }
          }
          @keyframes microGlitch {
            0% { stroke-dashoffset: 0 }
            50% { stroke-dashoffset: 1 }
            100% { stroke-dashoffset: 0 }
          }
          /* holo scan reveal for image */
          .holo-scan {
            animation: scanReveal 700ms cubic-bezier(.22,.9,.37,1) both;
            -webkit-mask-image: linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.0) 100%);
          }
        `}
      </style>

      {/* Soft animated grid + noise */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px), radial-gradient(circle at 10% 20%, rgba(255,255,255,0.02), transparent 10%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.01), transparent 10%)",
          backgroundSize: "40px 40px, 40px 40px, 600px 600px, 500px 500px",
          animation: "bg-move 30s linear infinite",
          opacity: 0.6,
          mixBlendMode: "screen",
        }}
      />

      {/* Custom cursor glow */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: 16,
          height: 16,
          borderRadius: 9999,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(0,230,170,0.9) 10%, rgba(0,230,170,0.08) 60%, transparent 100%)",
          boxShadow:
            "0 0 12px 6px rgba(0,230,170,0.08), 0 0 30px rgba(0,230,170,0.04)",
          transform: "translate3d(-9999px,-9999px,0)",
          zIndex: 60,
          transition: "transform 40ms linear",
        }}
      />

      {/* Dim overlay when focus mode is active */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-400"
        style={{
          background: focusPaused
            ? "radial-gradient(circle at var(--cursorX, 50%) var(--cursorY, 50%), rgba(0,0,0,0.15), rgba(0,0,0,0.85) 25%)"
            : "transparent",
          opacity: focusPaused ? 1 : 0,
          zIndex: 30,
        }}
      />

      <div
        className="relative w-[700px] h-[700px] flex items-center justify-center"
        onMouseMove={(e) => {
          document.documentElement.style.setProperty(
            "--cursorX",
            `${(e.clientX / window.innerWidth) * 100}%`,
          );
          document.documentElement.style.setProperty(
            "--cursorY",
            `${(e.clientY / window.innerHeight) * 100}%`,
          );
        }}
      >
        {/* SVG Ring (neon gradient) */}
        <svg
          width={SIZE}
          height={SIZE}
          className="absolute inset-0 z-0"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          aria-hidden
        >
          <defs>
            <linearGradient id="neonRing" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#00E6A8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#49FFD6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#6C8BFF" stopOpacity="0.9" />
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <radialGradient id="tracerGrad">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00E6A8" stopOpacity="0.04" />
            </radialGradient>
          </defs>

          {/* Outer thin neon ring (base) */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="url(#neonRing)"
            strokeWidth={1.8}
            strokeOpacity={0.25}
            style={{
              filter: "url(#glow)",
              transformOrigin: "center",
            }}
            className="animate-[slowSpin_120s_linear_infinite]"
          />

          {/* Subtle micro-glitch overlay (very low frequency) */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.02}
            strokeDasharray="3 1400"
            style={{
              animation: "microGlitch 8s ease-in-out infinite",
            }}
          />

          {/* tracer tail: a short arc drawn by stroke-dashoffset technique */}
          <g style={{ mixBlendMode: "screen" }}>
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke="url(#tracerGrad)"
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeOpacity={0.95}
              strokeDasharray={`${(0.06 * Math.PI * 2 * RADIUS).toFixed(2)} ${(
                Math.PI *
                2 *
                RADIUS
              ).toFixed(2)}`}
              strokeDashoffset={(-progress * Math.PI * 2 * RADIUS).toFixed(2)}
              style={{
                filter: "blur(6px)",
                transition: focusPaused
                  ? "stroke-dashoffset 0s linear"
                  : undefined,
              }}
            />
          </g>

          {/* Tracer orb */}
          <circle
            cx={tracerPos.x}
            cy={tracerPos.y}
            r={6}
            fill="#ffffff"
            style={{
              filter:
                "drop-shadow(0 0 10px rgba(0,230,170,0.8)) drop-shadow(0 0 30px rgba(76,255,200,0.08))",
              transition: "transform 120ms linear, r 120ms linear",
            }}
          />
        </svg>

        {/* Central core */}
        <div
          className="absolute w-[210px] h-[210px] rounded-full z-10 flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.02), rgba(0,0,0,1))",
            border: "1px solid rgba(255,255,255,0.03)",
            boxShadow: "0 0 60px rgba(0,230,170,0.06)",
          }}
        >
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: 9999,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.2))",
              border: "1px solid rgba(255,255,255,0.02)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255,255,255,0.85)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#49FFD6", fontSize: 14, fontWeight: 800 }}>
                {"ePikk's"}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.25)",
                  marginTop: 6,
                }}
              >
                Workflow Engine
              </div>
            </div>
          </div>
        </div>

        {/* Nodes (interactive) */}
        {steps.map((step, index) => {
          const pos = nodePositions[index];
          const isActive = index === activeIndex && !focusPaused;
          const isFocused = index === hoverIndex;

          // small lift above ring
          const translateY = -8 - (isFocused ? 10 : 0);
          const scale = isFocused ? 1.08 : nodePulse(index); // pulses in idle state

          return (
            <div
              key={step.id}
              onMouseEnter={handleNodeEnter(index)}
              onMouseMove={handleNodeMove(index)}
              onMouseLeave={handleNodeLeave}
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
                zIndex: 40,
                transition:
                  "transform 260ms cubic-bezier(.22,.9,.37,1), filter 260ms",
                pointerEvents: "auto",
                width: 80,
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Halo */}
              <div
                style={{
                  position: "absolute",
                  width: isFocused ? 160 : 120,
                  height: isFocused ? 160 : 120,
                  borderRadius: 9999,
                  filter: `blur(${isFocused ? 18 : 12}px)`,
                  background: `radial-gradient(circle, ${step.color}33 0%, transparent 40%)`,
                  transform: "translateZ(0)",
                  transition:
                    "width 300ms, height 300ms, filter 300ms, opacity 220ms",
                  opacity: isFocused || isActive ? 1 : 0.55,
                }}
              />

              {/* Node button */}
              <div
                role="button"
                aria-label={step.title}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 9999,
                  background:
                    "linear-gradient(180deg, rgba(20,20,21,0.9), rgba(6,6,7,0.9))",
                  border: isFocused
                    ? `1px solid ${step.color}`
                    : "1px solid rgba(255,255,255,0.03)",
                  boxShadow: isFocused
                    ? `0 0 28px ${step.color}66, inset 0 0 10px rgba(255,255,255,0.02)`
                    : isActive
                      ? `0 0 18px ${step.color}55`
                      : `0 0 8px rgba(0,0,0,0.5)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: isFocused ? "#000" : step.color,
                  fontWeight: 800,
                  letterSpacing: 0.8,
                  cursor: "pointer",
                  transition: "box-shadow 220ms, transform 220ms, border 220ms",
                }}
              >
                {/* Futuristic numeric label as icon */}
                <div
                  style={{
                    fontFamily:
                      "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue'",
                    fontSize: 14,
                    color: isFocused ? "#000" : step.color,
                    textShadow: isFocused
                      ? "0 0 8px rgba(255,255,255,0.12)"
                      : undefined,
                    transform: "translateY(-1px)",
                  }}
                >
                  {step.id}
                </div>
              </div>

              {/* Tiny orbiting particles while focused */}
              {isFocused && (
                <div
                  style={{
                    position: "absolute",
                    inset: "-8px",
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 80 80"
                    fill="none"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="1.6"
                      fill={step.color}
                      opacity={0.9}
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 40 40"
                        to="360 40 40"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="60"
                      cy="60"
                      r="1.2"
                      fill={step.color}
                      opacity={0.7}
                    >
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 40 40"
                        to="-360 40 40"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
              )}
            </div>
          );
        })}

        {/* Holographic image & text panel (appears near hovered node) */}
        {hoverIndex !== null && (
          <div
            ref={panelRef}
            className="pointer-events-none"
            style={{
              position: "absolute",
              left: nodePositions[hoverIndex].x,
              top: nodePositions[hoverIndex].y - 120, // place above node
              transform: "translate(-50%, -50%)",
              zIndex: 70,
              width: 320,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: 800,
            }}
          >
            <div
              className="holo-scan"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.45))",
                border: `1px solid ${steps[hoverIndex].color}55`,
                boxShadow: `0 6px 40px ${steps[hoverIndex].color}22, inset 0 0 40px rgba(255,255,255,0.02)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: 14,
                backdropFilter: "blur(6px)",
                transformStyle: "preserve-3d",
                animation: "panelGlitch 1.2s ease-in-out",
              }}
            >
              {/* Image with neon outline + chromatic aberration shim */}
              <div
                style={{
                  width: 140,
                  height: "100%",
                  borderRadius: 8,
                  overflow: "hidden",
                  position: "relative",
                  marginRight: 12,
                  flexShrink: 0,
                  boxShadow: `0 0 40px ${steps[hoverIndex].color}30, inset 0 0 20px rgba(0,0,0,0.35)`,
                }}
              >
                <Image
                  src={steps[hoverIndex].image}
                  alt={steps[hoverIndex].title}
                  width={500}
                  height={500}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translateZ(0)",
                    mixBlendMode: "screen",
                    filter: "contrast(1.05) saturate(1.1)",
                  }}
                />
                {/* neon outline */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: `1px solid ${steps[hoverIndex].color}`,
                    boxShadow: `0 0 18px ${steps[hoverIndex].color}`,
                    pointerEvents: "none",
                    mixBlendMode: "screen",
                  }}
                />
                {/* subtle chromatic offset layers */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(90deg, rgba(255,0,120,0.03), rgba(0,255,200,0.02))",
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                    opacity: 0.7,
                  }}
                />
              </div>

              {/* Textual description with line-by-line reveal */}
              <div style={{ color: "rgba(255,255,255,0.86)", flex: 1 }}>
                <div
                  style={{
                    fontSize: 12,
                    color: steps[hoverIndex].color,
                    fontWeight: 800,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    marginBottom: 6,
                    textShadow: "0 0 8px rgba(0,0,0,0.25)",
                  }}
                >
                  0{steps[hoverIndex].id} / {steps[hoverIndex].title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.35,
                    maxHeight: 112,
                    overflow: "hidden",
                  }}
                >
                  {/* line-by-line reveal emulated with small CSS transitions */}
                  <p
                    style={{
                      margin: 0,
                      transform: "translateY(0)",
                      opacity: 1,
                      transition: "opacity 300ms, transform 300ms",
                      fontFamily:
                        "'Inter', ui-sans-serif, system-ui, -apple-system",
                      fontWeight: 400,
                    }}
                  >
                    {steps[hoverIndex].desc}
                  </p>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.48)",
                    }}
                  >
                    Holographic preview. Move cursor to tilt. Release to
                    continue loop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
