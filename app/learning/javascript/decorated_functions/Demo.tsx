import stringToNumbersArray from "@/app/utils/stringToNumberArray";
import React, { useEffect, useState } from "react";
import { callWithDouble } from "./decorated";
import Outcome from "@/app/components/Outcome";
import InputForm from "@/app/components/InputForm";
import DemoSection from "@/app/components/DemoSection";

const SECTION_CONTENT_1 = `Try it yourself:`;
const INPUT_LABEL_TEXT = `Enter some number or comma-separated numbers list and hit enter to see the result of our decorated sum function:`;

const DecoratedFunctionDemo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [numbers, setNumbers] = useState<number[] | null>(null);

  // Handle form submission
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Transpile a valid string to numbers array
    const { numbers, error } = stringToNumbersArray(inputValue);

    if (error) {
      setError(error);
      setNumbers([]);
    } else {
      setError(null);
      setNumbers(numbers);
    }
  };

  // Handle input change
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      setInputValue(e.target.value);
    }
  };

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
    <DemoSection>
      <div className="max-w-2xl">
        <p className="text-lg text-gray-600 font-bold pb-2">
          {SECTION_CONTENT_1}
        </p>
        <InputForm
          handleOnSubmit={handleOnSubmit}
          handleOnChange={handleOnChange}
          errorMessage={error || ""}
          value={inputValue}
          label={INPUT_LABEL_TEXT}
          placeholder="E.g., 1, 2, 3"
        />
        <Outcome result={result} inputValue={inputValue} />
      </div>
    </DemoSection>
  );
};

export default DecoratedFunctionDemo;
