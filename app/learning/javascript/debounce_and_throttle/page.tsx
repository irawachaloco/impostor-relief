"use client";

import CodeBlock from "@/app/components/CodeBlock";
import Demo from "./Demo";

const DESCRIPTION_TEXT = `Debounce and Throttle, this lovely couple of algorithms...`;

const CONTENT_TEXT_1 = `Debounce and throttle are techniques used in JavaScript to control how often a function is executed. They are particularly useful when dealing with events that are fired frequently, such as scrolling, resizing, typing, or mouse movements. Both techniques improve performance and reduce the number of times the function is executed, but they work in different ways.`;

const DEBOUNCE_HEADER = `Debounce`;

const CONTENT_TEXT_2 = `A function is executed only after the user has stopped triggering the event for a specified delay. Debouncing ensures that a function is called after a certain amount of time has passed since the last time the function was invoked. If the function keeps getting called repeatedly within that time frame, it resets the timer and delays the execution.`;

const CALL_WITH_DEBOUNCE_CODE = `
const simpleDebounceFunction = (func, time) => {
  let timeout;

  return (...args) => {
    if(timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, time);
  };
};
`.trim();

const CONTENT_TEXT_3 = `Then, you can use it like this:`;

const USING_CALLWITH_DOUBLE_CODE = `
const storeValue = (val) => { ...do something }

const handleChange = (e) => {
  const value = e.target.value;
  simpleDebounceFunction(storeData(value), 1000)
}

`.trim();

const DebouncePage = () => {
  return (
    <div>
      <h1 className="text-[#686868] text-lg font-semibold mb-6">
        {DESCRIPTION_TEXT}
      </h1>
      <section>
        <div className="max-w-2xl">
          <p>{CONTENT_TEXT_1}</p>
          <h1 className="text-[#686868] text-lg font-semibold mt-6 mb-4">
            {DEBOUNCE_HEADER}
          </h1>
          <p>{CONTENT_TEXT_2}</p>
          <CodeBlock language="javascript" code={CALL_WITH_DEBOUNCE_CODE} />
        </div>
        <div className="max-w-2xl">
          <p>{CONTENT_TEXT_3}</p>
          <CodeBlock language="javascript" code={USING_CALLWITH_DOUBLE_CODE} />
          <p>{`So now, we can see it in action:`}</p>
        </div>
      </section>
      <Demo />
    </div>
  );
};

export default DebouncePage;
