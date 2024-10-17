import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const CODE = `
const selectionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // Swaping values
      [arr[i], arr[minIndex]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
};
`.trim();

const SelectionSortChapter = () => {
  return (
    <div>
      <div className="max-w-2xl">
        <section>
          <h1 className="text-[#686868] text-lg font-semibold mb-6">
            Selection Sort
          </h1>
          <p>{`Selection Sort works by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning. It is inefficient for large datasets, but like Insertion Sort, it is easy to implement.`}</p>
          <CodeBlock language="typescript" code={CODE} />
        </section>
      </div>
      <Demo />
    </div>
  );
};

export default SelectionSortChapter;
