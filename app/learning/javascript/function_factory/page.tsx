import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const CHAPTER_TITLE = `Function Factory`;

const FUNCTION_FACTORY_DESCRIPTION = `This is a simple implementation of a Function Factory that calculates the Fibonacci number at a given position using a resursive approach. It does so by immediately invoking an inner function that recursively computes the result.`;

const FUNCTION_FACTORY_CODE = `
function fibFactory(num: number) {
  // Return an IIFE
  return (function fib(n): number {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  })(num);
}
`.trim();

const FunctionFactory = () => {
  return (
    <div>
      <h1 className="text-[#686868] text-lg font-semibold mb-6">
        {CHAPTER_TITLE}
      </h1>
      <p>{FUNCTION_FACTORY_DESCRIPTION}</p>
      <CodeBlock language="ts" code={FUNCTION_FACTORY_CODE} />
      <Demo />
    </div>
  );
};

export default FunctionFactory;
