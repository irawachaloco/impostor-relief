import { LinksGrid } from "@/app/components/LinksGrid";
import React from "react";

const HEADING_TEXT = `Javascript`;

const CONTENT_TEXT_1 = `This sections will contain Javacsript common patterns and related stuff`;

const JavascriptPage = () => {
  const links = [
    {
      text: "Decorated functions",
      url: "./javascript/decorated_functions",
    },
    {
      text: "Debounce and Throttle",
      url: "./javascript/debounce_and_throttle",
    },
    {
      text: "Cadavre Exquis - Promise all",
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
