"use client";

import CodeBlock from "@/app/components/CodeBlock";
import Section from "@/app/components/Section";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { callWithDouble } from "./decorated.ts";

const HEADING_TEXT = `Decorated functions`;

const CONTENT_TEXT_1 = `Ok, the following pattern is known as a decorated function. A decorated function wraps an existing function, adds additional functionality to it, and then returns a new, enhanced function. This allows for the augmentation of behavior without directly modifying the original function.`;

const CONTENT_TEXT_2 = `Supose you have the following function, which dooubles the value of each element in the arguments.`;

const CONTENT_TEXT_3 = `Then, you can use it like this:`;

const CONTENT_TEXT_4 = `And that's a so called decorated function.`;

const SECTION_CONTENT_1 = `Try your self:`;

const SECTION_CONTENT_2 = `Enter some number or comma-separated numbers list to see the result of our decorated sum function`;

const INPUT_LABEL_TEXT = `Input:`;

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
const sum = (...args: number[]) =>
 args.reduce((acc, curr) => acc + curr, 0);

const decoratedSum = callWithDouble(sum);

const result = decoratedSum(1, 2, 3);

console.log(result);
// Output will be 12 (since (1*2) + (2*2) + (3*2) = 12)
`.trim();

const parseNumbers = (input: string): number[] | null => {
  const values = input.split(",").map((value) => value.trim());
  const numbers = values.map((val) => Number(val));

  if (numbers.some(isNaN)) {
    return null;
  }

  return numbers;
};

const DecoratedFunctionPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedNumbers = parseNumbers(inputValue);

    if (!parsedNumbers) {
      alert("THI IS NOT A VALID ARRAY");
    } else {
      setNumbers(parsedNumbers);
    }
  };

  const sum = (...args: number[]) => args.reduce((acc, curr) => acc + curr, 0);

  //  Using decorator
  useEffect(() => {
    if (numbers.length > 0) {
      const decorated = callWithDouble(sum);
      console.log(decorated(...numbers));
      setResult(decorated(...numbers));
    }
  }, [numbers]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
      <Section>
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 font-bold pb-2">
            {SECTION_CONTENT_1}
          </p>

          <form onSubmit={handleOnSubmit}>
            <p className="pb-4">{SECTION_CONTENT_2}</p>
            <label className="block mb-2 text-gray-700" htmlFor="input-field">
              {INPUT_LABEL_TEXT}
            </label>

            <input
              id="input-field"
              name="input-field"
              className="border-[1px] border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={inputRef}
              type="text"
              onChange={handleOnChange}
              value={inputValue}
              placeholder="E.g., 1, 2, 3"
            />
          </form>
          <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
            <p className="text-gray-600 font-md">Result: </p>
            <p
              className={`text-xl ${
                result !== null ? "text-green-600" : "text-gray-400"
              }`}
            >
              {result !== null ? result : "Enter some numbers. Or don’t."}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DecoratedFunctionPage;
