import { useRef } from "react";

export default function useThrottleWithLast<T>(
  fn: (args: T) => void,
  time: number
) {
  const inThrottle = useRef<NodeJS.Timeout | null>(null);
  const lastRan = useRef<number | null>(null);

  const throttle = (args: T) => {
    if (!lastRan.current) {
      fn(args);
      lastRan.current = Date.now();
    } else {
      if (inThrottle.current) {
        clearTimeout(inThrottle.current);
      }
      inThrottle.current = setTimeout(() => {
        fn(args);
        lastRan.current = Date.now();
      }, time - (Date.now() - lastRan.current));
    }
  };

  return throttle;
}
