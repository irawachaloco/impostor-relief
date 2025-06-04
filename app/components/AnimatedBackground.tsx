"use client";

import { useLayoutEffect, useRef } from "react";

const PARTICLE_COUNT = 40;
const COLORS = ["#ff2d00", "#ffd700", "#007fff", "#ff69b4", "#9932cc"];

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fragment = document.createDocumentFragment();
    const colorCount = COLORS.length;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const span = document.createElement("span");

      const size = "3vmin";
      const duration = getRandom(20, 120);
      const delay = getRandom(0, duration);
      const originX = getRandom(-25, 25);
      const originY = getRandom(-25, 25);
      const blurRadius = getRandom(6, 30);
      const direction = Math.random() > 0.5 ? -1 : 1;

      Object.assign(span.style, {
        width: size,
        height: size,
        borderRadius: "50%",
        position: "absolute",
        opacity: "0.35",
        backfaceVisibility: "hidden",
        color: COLORS[Math.floor(Math.random() * colorCount)],
        top: `${getRandom(-20, 120)}%`,
        left: `${getRandom(-20, 120)}%`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        animationName: "move",
        transformOrigin: `${originX}vw ${originY}vh`,
        boxShadow: `${12 * direction}vmin 0 ${blurRadius}px ${
          blurRadius / 2
        }px currentColor`,
      });

      fragment.appendChild(span);
    }

    container.appendChild(fragment);
  }, []);

  return (
    <div className="background" ref={containerRef} aria-hidden="true"></div>
  );
};

export default AnimatedBackground;
