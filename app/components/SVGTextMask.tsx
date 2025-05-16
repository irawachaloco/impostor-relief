import React from "react";

type SVGTextMaskProps = {
  text1?: string;
  text2?: string;
  description?: string;
  fontSize?: number;
};

const SVGTextMask: React.FC<SVGTextMaskProps> = ({
  text1,
  text2,
  description,
  fontSize = 12,
}) => (
  <svg
    viewBox="0 0 600 400"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>SVG Text Mask</title>
    <desc>{description}</desc>
    <defs>
      <mask id="textMask">
        <rect width="100%" height="100%" fill="white" />
        <text
          x="50%"
          y="40%"
          fontSize={fontSize}
          fill="black"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {text1}
        </text>
        <text
          x="50%"
          y="60%"
          fontSize={fontSize}
          fill="black"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {text2}
        </text>
      </mask>
    </defs>
    <rect
      className="masked"
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="rgba(255, 255, 255, 0.9)"
      mask="url(#textMask)"
    />
  </svg>
);

export default SVGTextMask;
