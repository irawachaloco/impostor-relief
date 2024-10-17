import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const CODE = `const bubbleSort = (arr: number[]): number[] => {
  let swapped: boolean;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};`;

const BubbleSortChapter = () => {
  return (
    <div>
      <section>
        <h1 className="text-[#686868] text-lg font-semibold mb-6">
          BubbleSortChapter
        </h1>
        <p>{`Bubble Sort is a comparison-based algorithm where each pair of adjacent elements is compared, and they are swapped if they are in the wrong order. This process repeats until no swaps are required.`}</p>
        <CodeBlock language="typescript" code={CODE} />
      </section>
      <Demo />
    </div>
  );
};

export default BubbleSortChapter;
