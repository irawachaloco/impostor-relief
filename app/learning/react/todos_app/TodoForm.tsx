import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TodoProps } from "./types";

interface TodoFormProps {
  onSubmit: (todo: TodoProps) => void;
  todoToEdit?: TodoProps | null;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, todoToEdit }) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (todoToEdit) {
      setInputValue(todoToEdit?.content);
    }
  }, [todoToEdit]);

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      alert("You must type something");
      return;
    }
    onSubmit({
      id: todoToEdit?.id ?? Date.now(),
      content: trimmedValue,
    });
    setInputValue("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input_value" className="sr-only">
          Todo
        </label>
        <input
          id="input_value"
          type="text"
          className="border border-grey-300 rounded-md px-3 py-2 mb-4 mr-2"
          placeholder="Type a new todo"
          value={inputValue}
          onChange={handleOnChange}
        />
        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
