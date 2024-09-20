import React from "react";
import { LinksGrid } from "../components/LinksGrid";

const Learning = () => {
  // Sample array of links
  const links = [
    {
      id: 1,
      text: "React",
      url: "/react/",
    },
    {
      id: 2,
      text: "Algorithms",
      url: "./learning/react",
    },
    {
      id: 3,
      text: "DOM",
      url: "./react",
    },
    {
      id: 4,
      text: "Javascript",
      url: "./learning/react",
    },
    {
      id: 5,
      text: "TypeScript",
      url: "./learning/react",
    },
  ];

  return (
    <div>
      <h2 className="text-[#686868] text-2xl font-bold mb-4">
        Real Dev Stuff 🎉 🪅
      </h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        This is a list of commonly used knowledge in the developer world.
      </h2>
      <LinksGrid links={links} />
    </div>
  );
};

export default Learning;
