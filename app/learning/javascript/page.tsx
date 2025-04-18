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
    {
      id: 2,
      text: "Debounce and Throttle",
      url: "./javascript/debounce_and_throttle",
    },
    {
      id: 3,
      text: "Promise all",
      url: "./javascript/promise_all",
    },
  ];

  return (
    <div>
      <h2 className="text-[#686868] text-2xl font-bold mb-4">{HEADING_TEXT}</h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        {CONTENT_TEXT_1}
      </h2>
      <LinksGrid chapters={links} />
    </div>
  );
};

export default JavascriptPage;
