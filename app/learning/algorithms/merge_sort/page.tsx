import React from "react";
import useMergeSort from "./useMergeSort";
import CodeBlock from "@/app/components/CodeBlock";

const CODE = `function useMergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = useMergeSort(arr.slice(0, mid));
  const right = useMergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}`.trim();

const MergeSortChapter = () => {
  const result = useMergeSort([7, 4, 3, 1, 0, 6, 8, 13]);

  return (
    <div>
      MergeSortChapter
      <p>{result}</p>
      <CodeBlock language="javascript" code={CODE} />
    </div>
  );
};

export default MergeSortChapter;
