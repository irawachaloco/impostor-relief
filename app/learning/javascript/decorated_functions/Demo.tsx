import Section from "@/app/components/Section";
import stringToNumbersArray from "@/app/utils/stringToNumberArray";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { callWithDouble } from "./decorated";
import ErrorMessage from "@/app/components/ErrorMessage";

const INPUT_LABEL_TEXT = `Input:`;
const SECTION_CONTENT_1 = `Try it yourself:`;

const SECTION_CONTENT_2 = `Enter some number or comma-separated numbers list to see the result of our decorated sum function`;

const DecoratedFunctionDemo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { numbers, error } = stringToNumbersArray(inputValue);

    if (error) {
      setError(error);
      setNumbers([]);
    } else {
      setError(null);
      setNumbers(numbers);
    }
  };

  const [numbers, setNumbers] = useState<number[] | null>(null);

  const sum = (...args: number[]) => args.reduce((acc, curr) => acc + curr, 0);

  // Using decorator
  useEffect(() => {
    if (numbers && numbers.length > 0) {
      const decorated = callWithDouble(sum);
      setResult(decorated(...numbers));
    }
    return () => {
      setResult(null);
    };
  }, [numbers]);

  return (
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
          {error && <ErrorMessage msg={error} />}
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
  );
};

export default DecoratedFunctionDemo;
