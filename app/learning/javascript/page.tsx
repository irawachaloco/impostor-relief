import CodeBlock from "@/app/components/CodeBlock";
import { LinksGrid } from "@/app/components/LinksGrid";
import React from "react";

const HEADING_TEXT = `Decorated functions`;

const CONTENT_TEXT_1 = `Ok, this is what is called a decorated function. It is a function that receives a function and add some functionallity to it and return a new function.`;

const CONTENT_TEXT_2 = `Supose you have the following function, which dooubles the value of each element in the arguments.`;

const CONTENT_TEXT_3 = `Then, you can use it like this:`;

const CONTENT_TEXT_4 = `Then, you can use it like this:`;

const CALL_WITH_DOUBLE_CODE = `
const callWithDouble = (f) => {
  return (...a) => {
    const doubles = a.map((n) => {
      return n * 2;
    });
    return f(...doubles);
  };
};
`.trim();

const USING_CALLWITH_DOUBLE_CODE = `
const sum = (x, y, z) => x + y + z;
const callWithDoubledSum = callWithDouble(sum);
const result = callWithDoubledSum(1, 2, 3);
console.log(result); // Output will be 12 (since (1*2) + (2*2) + (3*2) = 12)

`.trim();

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
      <h2 className="text-[#686868] text-2xl font-bold mb-4">Javascript</h2>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        This sections will contain Javacsript common patterns and related stuff
      </h2>
      <LinksGrid links={links} />
    </div>
  );
};

export default JavascriptPage;
