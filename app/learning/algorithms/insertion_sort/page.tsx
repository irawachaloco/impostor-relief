import CodeBlock from "@/app/components/CodeBlock";
import React from "react";
import Demo from "./Demo";

const CODE = `
const InsertionSort = (arr) => {
  // Iterate over the array starting from the second
  // element (i = 1) because we consider the first element
  // as sorted
  for (let i = 1; i < arr.length; i++) {
    // where i -> current position
    // and j -> previous position
    let currentValue = arr[i];
    let j = i - 1;

    // Shift elements that are greater than 'current' one position
    // to the right
    // Stop when either 'j' reaches the beginning of the 
    // array (j >= 0)
    // or when an element smaller than or equal to 'current' is
    // found
    while (j >= 0 && arr[j] > currentValue) {
      // Move the element at index 'j' one position to the right
      arr[j + 1] = arr[j];
      // Move the pointer 'j' one position to the left
      j = j - 1;
    }

    // Place the 'current' element at its correct sorted
    // position (j + 1)
    arr[j + 1] = currentValue;
  }

  return arr;
}`.trim();

const InsertionSort = () => {
  return (
    <div>
      <h1 className="text-[#686868] text-lg font-semibold mb-6">
        {`Insertion Sort`}
      </h1>
      <section>
        <div className="max-w-2xl">
          <p>{`Insertion Sort is a simple algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists compared to more advanced algorithms, but it performs well on small datasets and partially sorted arrays.`}</p>
          <CodeBlock code={CODE} language="javascript" />
        </div>
      </section>
      <Demo />
    </div>
  );
};

export default InsertionSort;
