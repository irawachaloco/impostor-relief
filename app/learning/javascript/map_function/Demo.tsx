// "use client";

// import DemoSection from "@/app/components/DemoSection";
// import React, { useEffect, useState } from "react";

// const NUMBERS = [1, 2, 3, 4, 5];

// type CustomMapCallback = (current: number, index: number, array: []) => [];

// function customMap(array: number[], callback) {
//   const arrayResult = [];

//   for (let i = 0; i < array.length; i++) {
//     arrayResult.push(callback(array[i]));
//   }

//   return arrayResult;
// }

// const Demo = () => {
//   const [result, setResult] = useState("default result");

//   useEffect(() => {
//     const newNums = customMap(NUMBERS, (n) => n * n);
//     setResult(newNums);
//     console.log(newNums);
//   }, []);

//   return (
//     <DemoSection>
//       <h1>Result goes here</h1>
//       <p>{result}</p>
//     </DemoSection>
//   );
// };

// export default Demo;
