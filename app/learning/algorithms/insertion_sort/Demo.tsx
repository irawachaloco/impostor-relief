"use client";

import Section from "@/app/components/Section";
import React, { useEffect, useState } from "react";
import insertionSort from "./insertionSort";

const Demo = () => {
  // preferiblemente no usar null para inicializar el estado
  const [result, setResult] = useState<number[] | null>(null);
  const [inputArray, setInputArray] = useState<number[] | null>(null);

  const resultArray = insertionSort([3, 2, 1, 7, 26, 0, 33, 10, 9, 6, 4]);

  //   setInputArray([3, 2, 1, 7, 26, 0, 33, 10, 9, 6, 4]);

  useEffect(() => {
    if (result !== null) {
      setInputArray([3, 2, 1, 7, 26, 0, 33, 10, 9, 6, 4]);
    }
  }, [result]);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(resultArray);
  };

  return (
    <Section>
      <div>Demo</div>
      <form onSubmit={handleOnSubmit}>
        <input className="border rounded" type="text" />
      </form>
      <div className="mt-4 mb-2 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
        <p className="text-gray-600 font-md">Output: </p>
        <p>{inputArray !== null ? inputArray : null}</p>
        <p
          className={`text-xl ${
            result !== null ? "text-green-600" : "text-gray-400"
          }`}
        >
          {result !== null
            ? result
            : "Click on the submit a couple of times to see the result."}
        </p>
      </div>
    </Section>
  );
};

export default Demo;
