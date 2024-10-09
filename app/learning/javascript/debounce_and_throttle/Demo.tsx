"use client";

import Section from "@/app/components/Section";
import { useCallback, useEffect, useState } from "react";
// import debounce from "./debounce_decorator";
import useDebounce from "./useDebounce";

const Demo = () => {
  const [inputValue, setInputValue] = useState<string | undefined>("");
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>(
    undefined
  );
  const [result, setResult] = useState<string | undefined>("");

  const saveInput = useCallback((value: string): void => {
    setDebouncedValue(value);
  }, []);

  const processChange = useDebounce(
    (value: unknown) => saveInput(value as string),
    1000
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    processChange(value);
  };

  useEffect(() => {
    setResult(debouncedValue);
  }, [debouncedValue]);

  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="font-bold_ text-gray-400 mb-2 italic mr-2">Demo</h1>
        <h1 className="font-bold text-lg text-gray-600 mb-2">Debounce</h1>
        <form>
          <p className="pb-4">{`If you keep typing, the result will never be updated! Let's try to write something.`}</p>
          <p className="pb-4">{`This input is debounced, it will only store and print the value once you stop typing for more than 1 second.`}</p>
          <label className="block mb-2 text-gray-700" htmlFor="input-field">
            Input:
          </label>

          <input
            id="input-field"
            name="input-field"
            className="border-[1px] border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={inputValue}
            onChange={handleOnChange}
            placeholder="Enter some text"
          />
        </form>
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
          <p className="text-gray-600 font-md">Output: </p>
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

export default Demo;
