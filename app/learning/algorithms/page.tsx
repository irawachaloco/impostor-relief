import { LinksGrid } from "@/app/components/LinksGrid";
import React from "react";

const HEADING_TEXT = `Let's dig into the world of algoritms`;
const DESCRIPTION_TEXT = `So, here is a list of some of the most commonly used or at least notorious algorithms.
        In there, you will find some code examples and sort of explanation of them.`;

const AlgorithmsSection = () => {
  const links = [
    {
      id: 1,
      text: "Debounce and Throttle",
      url: "/learning/algorithms/debounce",
    },
    {
      id: 2,
      text: "Some",
      url: "./",
    },
    {
      id: 3,
      text: "Some",
      url: "./",
    },
    {
      id: 4,
      text: "Some",
      url: "./",
    },
    {
      id: 5,
      text: "Some",
      url: "./",
    },
  ];

  return (
    <div>
      <h2 className="text-[#686868] text-2xl font-bold mb-4">{HEADING_TEXT}</h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        {DESCRIPTION_TEXT}
      </h2>
      <LinksGrid links={links} />
    </div>
  );
};

export default AlgorithmsSection;
