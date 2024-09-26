"use client";

import Timer from "./Timer";
import CodeBlock from "@/app/components/CodeBlock";
import Section from "@/app/components/Section";

const COUNTDOWN_CODE = `
export const useCountDown = (initialCount: number | null) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count === null || count <= 0) return;

    const countDown = setTimeout(() => {
      setCount((prev) =>
        (prev !== null && prev > 0 ? prev - 1 : null));
    }, 1000);

    // Cleanup timeout to prevent memory leaks
    return () => clearTimeout(countDown);
  }, [count]);

  const startCountdown = (newCount: number) => {
    setCount(newCount);
  };

  return { count, startCountdown };
};
`.trim();

const TIMER_CODE = `
const Timer = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { count, startCountdown } = useCountDown(null);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== "" && !isNaN(Number(inputValue))) {
      startCountdown(Number(inputValue));
    }
    setInputValue("");
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
          <input
          type="number"
          onChange={handleOnChange}
          autoFocus
          value={inputValue}
          />
          <button>Start</button>
      </form>
      <div>Count: {count}</div>
    </>
  );
};

export default Timer;
`.trim();

const TEXT_1 = `
This is a very simple countdown timer function as a React custom hook. It is implemented with a setTimeout global function`;
const TEXT_2 = `You can use it like this:`;

const TimerPage = () => {
  return (
    <>
      <div className="max-w-2xl pb-6">
        <h2 className="text-2xl font-bold">Countdown timer</h2>
        <p>{TEXT_1}</p>
        <CodeBlock language="tsx" code={COUNTDOWN_CODE} />
        <p>{TEXT_2}</p>
        <CodeBlock language="tsx" code={TIMER_CODE} />
        <p>And it will produce something as following:</p>
      </div>
      <p>Demo:</p>
      <Section>
        <p>Enter som number and hit start to start the countdown timer</p>
        <Timer />
      </Section>
    </>
  );
};

export default TimerPage;
