import React from "react";
import CodeBlock from "@/app/components/CodeBlock";
import mergeSort from "./mergeSort";
import Demo from "./Demo";

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
  //   const result = mergeSort([7, 4, 3, 1, 0, 6, 8, 13]);

  return (
    <div>
      <h1 className="text-[#686868] text-lg font-semibold mb-6">
        {`Merge Sort`}
      </h1>
      <section className="max-w-2xl">
        <p>{`Merge Sort is also a divide-and-conquer algorithm. It splits the array into halves, recursively sorts each half, and then merges the sorted halves.`}</p>
        <p className="font-bold">Steps:</p>
        <p>{`1. The array is recursively split into two halves until each sub-array has only one element.`}</p>
        <p>{`2. The sorted sub-arrays are merged back together.`}</p>
        <p>{`3. The merge step combines two sorted arrays by comparing the smallest elements and inserting them in order.`}</p>
        <div className="max-w-2xl">
          {/* <p>{result}</p> */}
          <CodeBlock language="javascript" code={CODE} />
        </div>
      </section>
      <Demo />
    </div>
  );
};

export default MergeSortChapter;
