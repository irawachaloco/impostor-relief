"use client";

import CodeBlock from "@/app/components/CodeBlock";
import Section from "@/app/components/Section";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const codeCounterApp = `
// Very simple counter app
function CounterApp () {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
`.trim();

  return (
    <div>
      <h1 className="font-bold text-2xl">Counter</h1>
      <Section>
        <p>Count: {count}</p>
        <button
          className="mr-2 rounded-sm border border-1 border-blue-400 bg-blue-200 hover:bg-blue-100 p-2"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="mr-2  rounded-sm border border-1 border-blue-400 bg-blue-200 hover:bg-blue-100 p-2"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </Section>

      <div className="max-w-2xl">
        <p>A classic React example:</p>
        <CodeBlock language="javascript" code={codeCounterApp} />
      </div>
    </div>
  );
};

export default Counter;
