import { useEffect, useRef } from "react";

function useThrottle<F extends (...args: unknown[]) => void>(
  f: F,
  time: number
) {
  const inThrottle = useRef<NodeJS.Timeout | null>(null);
  const lastRan = useRef<number | null>(null);

  const throttle = (...args: Parameters<F>) => {
    if (!lastRan.current) {
      f(...args);
      lastRan.current = Date.now();
    } else {
      if (inThrottle.current) {
        clearTimeout(inThrottle.current);
      }
      inThrottle.current = setTimeout(() => {
        f(...args);
        lastRan.current = Date.now();
      }, time - (Date.now() - lastRan.current));
    }
  };

  useEffect(() => {
    return () => {
      if (inThrottle.current) {
        clearTimeout(inThrottle.current);
      }
    };
  }, []);

  return throttle;
}

export default useThrottle;
