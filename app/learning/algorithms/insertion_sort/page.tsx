import CodeBlock from "@/app/components/CodeBlock";
import React from "react";

const CODE = `
const InsertionSort = (arr: Number[]) => {
  for (let i = 1; i < arr.length; i++) {
    // where i -> current position
    // and j -> previous position
    let currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
};`.trim();

const InsertionSort = () => {
  return (
    <div>
      InsertionSort
      <section>
        <CodeBlock code={CODE} language="javascript" />
      </section>
    </div>
  );
};

export default InsertionSort;
