import CodeBlock from "@/app/components/CodeBlock";
import React from "react";
import Demo from "./Demo";

const QUICK_SORT_CODE = `
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}
`.trim();

const QuickSortChapter = () => {
  return (
    <div className="max-w-2xl">
      <section>
        <h1 className="text-[#686868] text-lg font-semibold mb-6">
          Quick Sort Chapter
        </h1>
        <p>{`Quick Sort is a divide-and-conquer algorithm that works by selecting a "pivot" element from the array, partitioning the other elements into two sub-arrays (one with elements smaller than the pivot and one with elements greater than the pivot), and then recursively sorting the sub-arrays.`}</p>
        <p className="font-bold">Steps</p>
        <p>{`1. The array is recursively divided into smaller sub-arrays.`}</p>
        <p>{`2. A pivot element is selected (usually the last element).`}</p>
        <p>{`3. Elements smaller than the pivot go to the left array, and elements greater than the pivot go to the right.`}</p>
        <p>{`4. The process repeats for the sub-arrays, and eventually, they are merged back.`}</p>
        <CodeBlock language="javascript" code={QUICK_SORT_CODE} />
      </section>
      <Demo />
    </div>
  );
};

export default QuickSortChapter;
