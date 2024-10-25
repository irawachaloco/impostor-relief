import { useRef, useState } from "react";

export default function useThrottle<T>(fn: (args: T) => void, time: number) {
  const [shouldWait, setShouldWait] = useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const throttle = (args: T) => {
    if (!shouldWait) {
      fn(args);
      setShouldWait(true);

      timeout.current = setTimeout(() => {
        setShouldWait(false);
      }, time);
    }
  };

  return throttle;
}
