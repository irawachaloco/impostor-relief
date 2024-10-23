import React from "react";
import Demo from "./Demo";
import CodeBlock from "@/app/components/CodeBlock";

const CODE = `
export default function heapSort(arr: number[]): number[] {
  const n = arr.length;

  // Build
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  //   Extract elements one by one
  for (let i = n - 1; i > 0; i--) {
    // Swap
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

const heapify = (arr: number[], n: number, i: number): void => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    // Swap
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};
`.trim();

const HeapSortChapter = () => {
  return (
    <div>
      <section className="max-w-2xl">
        <h1 className="text-[#686868] text-lg font-semibold mb-6">Heap Sort</h1>
        <p>{`Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It's not as commonly used as Merge Sort or Quick Sort, but it has good performance characteristics and sorts in place without requiring additional memory.`}</p>
        <CodeBlock language="typescript" code={CODE} />
      </section>
      <Demo />
    </div>
  );
};

export default HeapSortChapter;
