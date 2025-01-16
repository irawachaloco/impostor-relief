import { LinksGrid } from "@/app/components/LinksGrid";
import React from "react";

const HEADING_TEXT = `State of Confusion: a React Journey`;

const DESCRIPTION_TEXT = `A concise showcase of common implementation examples featuring the infamous library`;

const ReactSection = () => {
  const exercises = [
    {
      id: 1,
      text: "Counter",
      url: "./react/counter",
    },
    {
      id: 1,
      text: "Timer",
      url: "./react/timer",
    },

    {
      id: 1,
      text: "Modal",
      url: "./react/modal",
    },
    {
      id: 1,
      text: "Fetch an API",
      url: "./react/fetch_random_character",
    },
    {
      id: 1,
      text: "Theme switch",
      url: "./react/theme_context",
    },
  ];
  return (
    <div>
      <h2 className="text-[#686868] text-2xl font-bold mb-4">{HEADING_TEXT}</h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        {DESCRIPTION_TEXT}
      </h2>
      <LinksGrid links={exercises} />
    </div>
  );
};

export default ReactSection;
