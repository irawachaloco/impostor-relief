"use client";

import Section from "@/app/components/Section";
import { useCallback, useState } from "react";
import useDebounce from "./useDebounce";
import InputForm from "@/app/components/InputForm";
import DemoSection from "@/app/components/DemoSection";
import Outcome from "@/app/components/Outcome";

const Demo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const saveInput = useCallback((value: string): void => {
    setResult(value);
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

  return (
    <DemoSection>
      <h1 className="font-bold text-lg text-gray-600 mb-2">Debounce</h1>
      <p className="pb-4">{`If you keep typing, the result will never be updated! Let's try to write something.`}</p>
      <p className="pb-4">{`This input is debounced, it will only store and print the value once you stop typing for more than 1 second.`}</p>
      <InputForm
        handleOnChange={handleOnChange}
        value={inputValue}
        label="Input:"
        placeholder="Start typing some text"
      />
      <Outcome
        result={result}
        hint="The result will appear once you stop typing"
      />
    </DemoSection>
  );
};

export default Demo;
