import CodeBlock from "@/app/components/CodeBlock";
import { LinksGrid } from "@/app/components/LinksGrid";
import React from "react";

const HEADING_TEXT = `Javascript`;

const CONTENT_TEXT_1 = `This sections will contain Javacsript common patterns and related stuff`;

const JavascriptPage = () => {
  const links = [
    {
      id: 1,
      text: "Decorated functions",
      url: "./javascript/decorated_functions",
    },
    // {
    //   id: 2,
    //   text: "Algorithms",
    //   url: "./learning/algorithms",
    // },
    // {
    //   id: 3,
    //   text: "Javascript",
    //   url: "./learning/javascript",
    // },
    // {
    //   id: 4,
    //   text: "Javascript",
    //   url: "./learning/react",
    // },
    // {
    //   id: 5,
    //   text: "TypeScript",
    //   url: "./learning/react",
    // },
  ];

  return (
    <div>
      <h2 className="text-[#686868] text-2xl font-bold mb-4">{HEADING_TEXT}</h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        {CONTENT_TEXT_1}
      </h2>
      <LinksGrid links={links} />
    </div>
  );
};

export default JavascriptPage;
