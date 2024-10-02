type callWithDoubleFnType = (...args: number[]) => number;
type callWithDoubleArrType = number[];

const callWithDouble = (fn: callWithDoubleFnType) => {
  return (...a: callWithDoubleArrType) => {
    const doubles = a.map((n) => {
      return n * 2;
    });
    return fn(...doubles);
  };
};

export { callWithDouble };
