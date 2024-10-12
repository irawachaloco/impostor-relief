import CodeBlock from "@/app/components/CodeBlock";
import React from "react";
import useQuickSort from "./useQuickSort";

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
  const sorted = useQuickSort([1, 5, 3, 89, 2, 0, 4, 10]);
  return (
    <div>
      <h1 className="text-[#686868] text-lg font-semibold mb-6">
        Quick Sort Chapter
        <p>{sorted}</p>
      </h1>
      <CodeBlock language="javascript" code={QUICK_SORT_CODE} />
    </div>
  );
};

export default QuickSortChapter;
