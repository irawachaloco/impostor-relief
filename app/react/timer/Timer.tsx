import { useState } from "react";
import { useCountDown } from "./custom_hooks/useCountDown";

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
      <div className="pb-4">
        <form onSubmit={handleOnSubmit}>
          <input
            className="border-[1px] border-grey-400 rounded p-2 mr-2"
            type="number"
            onChange={handleOnChange}
            value={inputValue}
          />

          <button className="mr-2  rounded border border-1 border-blue-400 bg-blue-200 hover:bg-blue-100 p-2">
            Start
          </button>
        </form>
      </div>
      <div className="flex items-center flex-col bg-gray-100 border rounded py-4">
        <div className="text-xl pb-2">Count:</div>
        <div className="flex justify-center items-center rounded-[50%] border border-2 border-black bg-white h-[10em] w-[10em] ">
          <div className="font-bold text-6xl">{count}</div>
        </div>
      </div>
    </>
  );
};

export default Timer;
