import { useCallback, useRef } from "react";

export default function useDebounce<T>(fn: (args: T) => void, time: number) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debounce = useCallback(
    (args: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        fn(args);
      }, time);
    },
    [fn, time]
  );

  return debounce;
}
