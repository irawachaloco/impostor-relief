const callWithDouble = (fn: (...args: number[]) => number) => {
  return (...a: number[]) => {
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
