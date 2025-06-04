import React from "react";

type ControlledInputProps = {
  id?: string;
  name?: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  type?: string;
  placeholder?: string;
  value: string;
};

const ControlledInput: React.FC<ControlledInputProps> = ({
  id,
  name,
  handleOnChange,
  inputRef,
  type,
  placeholder = "Write something in here",
  value,
}) => {
  return (
    <input
      id={id}
      name={name}
      className="border-[1px] border-gray-300 p-2 rounded-md w-full focus:outline-hidden focus:ring-2 focus:ring-blue-500"
      ref={inputRef}
      type={type}
      onChange={handleOnChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default ControlledInput;
