type FnType<T extends any[] = any[]> = (...args: T) => any;

const callWithDouble = <T extends any[]>(fn: FnType<T>) => {
  return (...a: T) => {
    const doubles = a.map((n) => {
      return n * 2;
    });
    return fn(...(doubles as T));
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
