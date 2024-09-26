import CodeBlock from "@/app/components/CodeBlock";
import React from "react";

const CONTENT_TEXT_1 = `Ok, this is what is called a decorated function. It is a function that receives a function and add some functionallity to it and return a new function.`;

const CONTENT_TEXT_2 = `Supose you have the following function, which dooubles the value of each element in the arguments.`;

const CONTENT_TEXT_3 = `Then, you can use it like this:`;

const CALL_WITH_DEBOUNCE_CODE = `
const simpleDebounceFunction = (func, time) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, time);
  };
};
`.trim();

const USING_CALLWITH_DOUBLE_CODE = `
const sum = (x, y, z) => x + y + z;
const callWithDoubledSum = callWithDouble(sum);
const result = callWithDoubledSum(1, 2, 3);
console.log(result); // Output will be 12 (since (1*2) + (2*2) + (3*2) = 12)

`.trim();

const DESCRIPTION_TEXT = `This lovely copuple of algorithms...`;

const DebouncePage = () => {
  return (
    <div>
      <h2 className="text-[#686868] text-lg font-semibold mb-6">
        {DESCRIPTION_TEXT}
      </h2>
      <section>
        <div className="max-w-2xl">
          <p>{CONTENT_TEXT_1}</p>
          <p>{CONTENT_TEXT_2}</p>
          <CodeBlock language="javascript" code={CALL_WITH_DEBOUNCE_CODE} />
        </div>
        <div className="max-w-2xl">
          <p>{CONTENT_TEXT_3}</p>
          {/* <p>{CONTENT_TEXT_4}</p> */}
          <CodeBlock language="javascript" code={USING_CALLWITH_DOUBLE_CODE} />
        </div>
      </section>
    </div>
  );
};

export default DebouncePage;
