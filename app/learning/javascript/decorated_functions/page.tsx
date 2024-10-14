"use client";

import CodeBlock from "@/app/components/CodeBlock";
import React from "react";
import DecoratedFunctionDemo from "./Demo";

const HEADING_TEXT = `Decorated functions`;

const CONTENT_TEXT_1 = `The pattern demonstrated below is known as a decorator or decorated function. A decorator wraps an existing function, adding extra functionality while preserving the original logic. It then returns a new, enhanced version of the function. This approach allows you to augment behavior without altering the underlying function directly, making it a flexible and reusable design pattern.`;

const CONTENT_TEXT_2 = `For example, consider a function that doubles the value of each element passed to it as an argument.`;

const CONTENT_TEXT_3 = `Then, you can use it like this:`;

const CONTENT_TEXT_4 = `And that's it, you can wrap any function like this. `;

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
const sum = (...args) =>
 args.reduce((acc, curr) => acc + curr, 0);

const decoratedSum = callWithDouble(sum); // Decorates the function

const result = decoratedSum(1, 2, 3);

console.log(result);
// Output will be 12 (since (1*2) + (2*2) + (3*2) = 12)
`.trim();

const DecoratedFunctionPage = () => {
  return (
    <div className="max-w-screen-xl">
      <section className="pb-6">
        <h2 className="text-[#686868] text-xl font-semibold mb-4">
          {HEADING_TEXT}
        </h2>

        <div className="max-w-2xl">
          <div className="pb-4">
            <p>{CONTENT_TEXT_1}</p>
          </div>
          <div className="pb-4">
            <p>{CONTENT_TEXT_2}</p>
          </div>
        </div>

        <div className="max-w-prose pb-6">
          <CodeBlock language="javascript" code={CALL_WITH_DOUBLE_CODE} />
        </div>

        <div className="max-w-2xl">
          <p>{CONTENT_TEXT_3}</p>
        </div>

        <div className="max-w-prose pb-6">
          <CodeBlock language="javascript" code={USING_CALLWITH_DOUBLE_CODE} />
        </div>

        <div className="max-w-2xl">
          <p>{CONTENT_TEXT_4}</p>
        </div>
      </section>
      <DecoratedFunctionDemo />
    </div>
  );
};

export default DecoratedFunctionPage;
