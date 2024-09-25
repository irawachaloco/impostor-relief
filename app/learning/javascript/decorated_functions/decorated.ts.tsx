type FnType = (...args: number[]) => number;
type ArrType = number[];

const callWithDouble = (fn: FnType) => {
  return (...a: ArrType) => {
    const doubles = a.map((n) => {
      return n * 2;
    });
    return fn(...doubles);
  };
};

export { callWithDouble };

// const callWithDouble = (fn: (...args: number[]) => number) => {
//   return (args: number[]) => {
//     const doubles = args.map((n) => {
//       return n * 2;
//     });
//     return fn(...doubles);
//   };
// };

// export { callWithDouble };
