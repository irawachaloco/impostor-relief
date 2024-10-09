"use client";

import Section from "@/app/components/Section";
import { useState } from "react";
import UseThrottle from "./useThrottle";

const Demo_2 = () => {
  const [count, setCount] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const processChange = UseThrottle((value: unknown) => {
    setResult(value as string | null);
  }, 1000);

  const handleOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
    processChange(count);
  };

  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="font-bold_ text-gray-400 mb-2 italic mr-2">Demo</h1>
        <h1 className="font-bold text-lg text-gray-600 mb-2">Throttle</h1>
        <form onSubmit={handleOnClick}>
          <p className="pb-4">{`If you continue clicking, the result will be updated every 1 second! Let's try it.`}</p>
          <p className="pb-4">{`This input is throttled, it will store and print the value each second even if you keeps clicking. Try clicking rapidly to see the throttling effect`}</p>
          <p className="block mb-2 text-gray-700">Input:</p>
          <button className="rounded bg-blue-500 text-white p-2 mb-4 active:bg-blue-700 active:shadow-lg ">
            Submit
          </button>
        </form>
        <p className="text-gray-600 font-md">
          <span>You have clicked</span>
          <em> {count} </em>
          <span>times</span>
        </p>
        <div className="mt-4 mb-2 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
          <p className="text-gray-600 font-md">Result: </p>
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
        {/* <p>{`The `}</p> */}
        <p>{`As you can notice, the throttled result, keeps the last call untill you tigger the function again. This means, it will keep the last call for the upcoming call`}</p>
      </div>
    </Section>
  );
};

export default Demo_2;
