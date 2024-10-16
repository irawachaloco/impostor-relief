import React, { useRef } from "react";
import ControlledInput from "./ControlledInput";
import ErrorMessage from "./ErrorMessage";

type InputFormProps = {
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  value: string;
  label: string;
};

const InputForm = ({
  handleOnSubmit,
  handleOnChange,
  errorMessage,
  value,
  label,
}: InputFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={handleOnSubmit}>
      <label className="block mb-2 text-gray-700" htmlFor="input-field">
        {label}
      </label>
      <ControlledInput
        id="input-field"
        name="input-field"
        handleOnChange={handleOnChange}
        inputRef={inputRef}
        type="text"
        placeholder="E.g., 1, 2, 3"
        value={value}
      />

      {/* Display error message */}
      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </form>
  );
};

export default InputForm;
