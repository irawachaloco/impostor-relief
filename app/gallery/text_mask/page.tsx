import AnimatedBackground from "@/app/components/AnimatedBackground";
import CodeBlock from "@/app/components/CodeBlock";
import SVGTextMask from "@/app/components/SVGTextMask";
import React from "react";

const DESCRIPTION_TEXT = `Text masking`;
const CONTENT_TEXT_1 = `Speaking of impostors, if you want your text to wear a proper disguise, SVG is your go-to.`;
const CONTENT_TEXT_2 = `I have found that the most reliable way to mask text is through an SVG file because it is far more powerful and customizable than using the conventional CSS background-clip, which needs to have an embedded background to work. With the SVG approach, you can place your mask on top of any layer and see through it. Also, it requires just a few lines of code, like this:`;

const SVG_TEXT_MASK_CODE = `
<svg
  viewBox="0 0 600 400"
  width="100%"
  height="100%"
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <mask id="myMask">
      <rect width="100%" height="100%" fill="white" />
      <text
        x="50%"
        y="50%"
        font-size="60"
        fill="black"
        font-family="Arial, sans-serif"
        font-weight="700"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        SOME FUNNY TEXT
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
    mask="url(#myMask)"
  />
</svg>

`.trim();

const TextMaskChapter = () => {
  return (
    <div>
      <h1 className="text-[#686868] text-lg font-semibold mb-6">
        {DESCRIPTION_TEXT}
      </h1>
      <section className="rounded-sm border border-gray-200 mb-6 max-w-6xl">
        <div className="relative">
          <SVGTextMask
            text1="TEXT"
            text2="MASKING"
            fontSize={80}
            description="SVG mask displaying an error message"
          />
          <AnimatedBackground />
        </div>
      </section>
      <div className="max-w-2xl">
        <p>{CONTENT_TEXT_1}</p>
        <p>{CONTENT_TEXT_2}</p>
        <CodeBlock language="xml" code={SVG_TEXT_MASK_CODE} />
      </div>
    </div>
  );
};

export default TextMaskChapter;
