import { useEffect, useState } from "react";

export const useCountDown = (initialCount: number | null) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    if (count === null || count <= 0) return;

    const countDown = setTimeout(() => {
      setCount((prev) => (prev !== null && prev > 0 ? prev - 1 : null));
    }, 1000);

    return () => clearTimeout(countDown); // Cleanup timeout to prevent memory leaks
  }, [count]);
  const startCountdown = (newCount: number) => {
    setCount(newCount);
  };

  return { count, startCountdown };
};
