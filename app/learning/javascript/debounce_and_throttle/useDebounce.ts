import { useCallback, useRef } from "react";

function useDebounce<F extends (...args: unknown[]) => void>(f: F, t: number) {
  const inDebounce = useRef<NodeJS.Timeout | null>(null);

  const debounce = useCallback(
    function (...args: Parameters<F>): void {
      if (inDebounce.current) {
        clearTimeout(inDebounce.current);
      }
      inDebounce.current = setTimeout(() => {
        f(...args);
      }, t);
    },
    [f, t]
  );
  return debounce;
}

export default useDebounce;
