import DemoSection from "@/app/components/DemoSection";
import React from "react";

const Demo = () => {
  function fibFactory(num: number) {
    // Return an IIFE
    return (function fib(n): number {
      if (n < 2) {
        return n;
      }
      return fib(n - 1) + fib(n - 2);
    })(num);
  }

  const secondfib = fibFactory(2);
  const tenthfib = fibFactory(10);
  const fifteenhfib = fibFactory(15);
  const twenthfib = fibFactory(20);

  const Form = () => {
    return (
      <form className="flex flex-row space-x-4">
        <input
          type="number"
          className="border-[1px] border-gray-300 p-2 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="rounded-sm bg-blue-500 text-white p-2 mb-4 active:bg-blue-700 active:shadow-lg"
        >
          Submit
        </button>
      </form>
    );
  };

  return (
    <DemoSection>
      <Form />

      <h2>Fibonacci Number Function Factory</h2>
      <p>Fibonacci numbers:</p>
      <p>Second: {secondfib}</p>
      <p>Tenth: {tenthfib}</p>
      <p>Fifteenth: {fifteenhfib}</p>
      <p>Twenth: {twenthfib}</p>
    </DemoSection>
  );
};

export default Demo;
