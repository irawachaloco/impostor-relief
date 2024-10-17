"use client";

import React, { useState } from "react";
import DemoSection from "@/app/components/DemoSection";
import InputForm from "@/app/components/InputForm";
import stringToNumbersArray from "@/app/utils/stringToNumberArray";
import Outcome from "@/app/components/Outcome";
import selectionSort from "./selectionSort";

const Demo = () => {
  // preferiblemente no usar null para inicializar el estado
  const [result, setResult] = useState<number[] | null>(null);
  const [inputArray, setInputArray] = useState<number[] | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const processData = () => {
    if (inputValue) {
      const { numbers, error } = stringToNumbersArray(inputValue);

      if (error) {
        setError(error);
        setResult([]);
      } else {
        // OJO aquí con la la condicional de arreglo vacío
        const orderedNumbers = selectionSort(numbers || []);
        setInputArray(numbers);
        setResult(orderedNumbers);
        setError(null);
      }
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
    processData();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <DemoSection>
      <InputForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        value={inputValue}
        errorMessage={error || ""}
        placeholder="E.g. 1, 2, 3"
      />
      <Outcome
        inputValue={inputArray}
        result={result}
        hint="Enter some numbers to see the result"
      />
    </DemoSection>
  );
};

export default Demo;
