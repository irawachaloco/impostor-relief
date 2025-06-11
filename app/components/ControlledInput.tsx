import React from "react";

// Enhanced: Added className, forwarded ref, prop spreading, accessibility, and memoization

type ControlledInputProps = {
  id?: string;
  name?: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef?: React.RefObject<HTMLInputElement>; // Deprecated in favor of forwardRef
  type?: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ControlledInput = React.memo(
  React.forwardRef<HTMLInputElement, ControlledInputProps>(
    (
      {
        id,
        name,
        handleOnChange,
        inputRef, // Deprecated, use ref instead
        type = "text",
        placeholder = "Write something in here",
        value,
        disabled = false,
        className = "",
        "aria-label": ariaLabel,
        ...rest
      },
      ref
    ) => {
      return (
        <input
          id={id}
          name={name}
          className={`border-[1px] border-gray-300 p-2 rounded-md w-full focus:outline-hidden focus:ring-2 focus:ring-blue-500 ${className}`}
          ref={ref || inputRef}
          type={type}
          onChange={handleOnChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          aria-label={ariaLabel}
          {...rest}
        />
      );
    }
  )
);

ControlledInput.displayName = "ControlledInput";

export default ControlledInput;
