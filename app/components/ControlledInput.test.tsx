import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ControlledInput from "./ControlledInput";

describe("ControlledInput", () => {
  it("renders with the correct props", () => {
    const handleOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <ControlledInput
        id="test-id"
        name="test-name"
        handleOnChange={handleOnChange}
        type="text"
        value="test value"
        placeholder="Test Placeholder"
      />
    );
    const input = getByPlaceholderText("Test Placeholder") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("test value");
    expect(input.id).toBe("test-id");
    expect(input.name).toBe("test-name");
    expect(input.type).toBe("text");
  });

  it("calls handleOnChange when input changes", () => {
    const handleOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <ControlledInput handleOnChange={handleOnChange} value="" />
    );
    const input = getByPlaceholderText("Write something in here");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });

  it("uses the default placeholder if none is provided", () => {
    const handleOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <ControlledInput handleOnChange={handleOnChange} value="" />
    );
    expect(getByPlaceholderText("Write something in here")).toBeInTheDocument();
  });

  it("renders a disabled input when disabled prop is true", () => {
    const handleOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <ControlledInput handleOnChange={handleOnChange} value="" type="text" disabled />
    );
    const input = getByPlaceholderText("Write something in here");
    expect(input).toBeDisabled();
  });

  it("renders with an empty value and does not crash", () => {
    const handleOnChange = jest.fn();
    expect(() => {
      render(<ControlledInput handleOnChange={handleOnChange} value="" />);
    }).not.toThrow();
  });
});
