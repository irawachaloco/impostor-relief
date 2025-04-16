import React from "react";

const FunctionFactory = () => {
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

  return (
    <div>
      <h1>Function Factory Chapter</h1>
      <h2>Fibonacci Number Function Factory</h2>
      <p>Fibonacci numbers:</p>
      <p>Second: {secondfib}</p>
      <p>Tenth: {tenthfib}</p>
      <p>Fifteenth: {fifteenhfib}</p>
      <p>Twenth: {twenthfib}</p>
    </div>
  );
};

export default FunctionFactory;
