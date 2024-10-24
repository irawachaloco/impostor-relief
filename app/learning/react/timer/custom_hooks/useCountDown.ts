import { useEffect, useState } from "react";

// Custom hook for implementing a countdown timer
export const useCountDown = (initialCount: number | null) => {
  // State to keep track of the current count
  const [count, setCount] = useState(initialCount);

  // useEffect hook to handle the countdown logic
  useEffect(() => {
    if (count === null || count <= 0) return;

    // Set up a timeout to decrease the count
    // by 1 every second (1000 milliseconds)
    const countDown = setTimeout(() => {
      // Decrement the count by 1, but stop
      // if the count reaches zero or becomes null
      setCount((prev) => (prev !== null && prev > 0 ? prev - 1 : null));
    }, 1000);

    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(countDown);
  }, [count]);

  // Function to start a new countdown
  const startCountdown = (newCount: number) => {
    setCount(newCount);
  };

  // Return the current count value and
  // the function to start the countdown
  return { count, startCountdown };
};
