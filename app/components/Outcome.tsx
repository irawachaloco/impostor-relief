import React from "react";

type OutcomeProps<T, U> = {
  result: T | null;
  inputValue?: U | null;
  hint?: string | null;
};

export default function Outcome<T, U>({
  hint = "Take some action to see the result",
  result,
  inputValue,
}: OutcomeProps<T, U>) {
  return (
    <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-xs">
      {/* Notice that for the inputValue we are using a loose comparison, because it is initialized with undefined in here: inputValue?: U | null; */}
      {result !== null && inputValue != null && (
        <p className="text-gray-400">Input: {String(inputValue)}</p>
      )}

      <p className="text-gray-600 font-md">Result: </p>
      <p
        className={`text-xl ${
          result !== null ? "text-green-600" : "text-gray-400"
        }`}
      >
        {result !== null ? String(result) : hint}
      </p>
    </div>
  );
}
