"use client";

import { useState } from "react";
import UseThrottle from "./useThrottle";
import DemoSection from "@/app/components/DemoSection";
import Outcome from "@/app/components/Outcome";

const Demo_2 = () => {
  const [count, setCount] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);

  const processChange = UseThrottle((value: unknown) => {
    setResult(value as string | null);
  }, 1000);

  const handleOnClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((prev) => {
      processChange(prev + 1);
      return prev + 1;
    });
    // setCount((prev) => prev + 1);
    // processChange(count);
  };

  // useEffect(() => {
  //   processChange(count);
  // }, [count]);

  return (
    <DemoSection>
      <h1 className="font-bold text-lg text-gray-600 mb-2">Throttle</h1>
      <p className="pb-4">{`If you continue clicking, the result will be updated every 1 second! Let's try it.`}</p>
      <p className="pb-4">{`This input is throttled, it will store and print the value each second even if you keeps clicking. Try clicking rapidly to see the throttling effect`}</p>
      <form onSubmit={handleOnClick}>
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
      <Outcome
        result={result}
        hint="Click on the submit a couple of times to see the result."
      />
      <p>{`As you can notice, the throttled result, keeps the last call untill you tigger the function again. This means, it will keep the last call for the upcoming call`}</p>
    </DemoSection>
  );
};

export default Demo_2;
