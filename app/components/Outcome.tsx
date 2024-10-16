import React from "react";

type OutcomeProps<T, U> = {
  result: T | null;
  inputValue?: U | null;
};

export default function Outcome<T, U>({
  result,
  inputValue,
}: OutcomeProps<T, U>) {
  return (
    <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
      {result !== null && inputValue !== null && (
        <p className="text-gray-400">Input: {String(inputValue)}</p>
      )}

      <p className="text-gray-600 font-md">Result: </p>
      <p
        className={`text-xl ${
          result !== null ? "text-green-600" : "text-gray-400"
        }`}
      >
        {result !== null
          ? String(result)
          : "Take some action to see the result"}
      </p>
    </div>
  );
}
