"use client";

import React from "react";

type AnimatedBackgroundProps = {
  fill_color?: string | null;
};

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  fill_color,
}) => {
  return (
    <div className="wrapper">
      <div className={`background ${fill_color ? fill_color : ""}`}>
        {Array.from({ length: 40 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
