import React, { useRef } from "react";
import ControlledInput from "./ControlledInput";
import ErrorMessage from "./ErrorMessage";

type InputFormProps = {
  handleOnSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  value: string;
  placeholder?: string;
  label?: string;
};

const InputForm = ({
  handleOnSubmit,
  handleOnChange,
  errorMessage,
  value,
  placeholder,
  label,
}: InputFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (handleOnSubmit) {
      handleOnSubmit(e);
    } else {
      e.preventDefault();
      console.log("No handleOnSubmit provided, default prevented.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="block mb-2 text-gray-700" htmlFor="input-field">
        {label}
      </label>
      <ControlledInput
        id="input-field"
        name="input-field"
        handleOnChange={handleOnChange}
        inputRef={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
      />

      {/* Display error message */}
      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </form>
  );
};

export default InputForm;
