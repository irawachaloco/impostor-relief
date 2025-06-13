import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the error message when msg is provided (happy path)", () => {
    render(<ErrorMessage msg="Something went wrong" />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent("Error: Something went wrong");
    expect(alert).toHaveClass("bg-red-100");
  });

  it("renders the error message when msg is a React node", () => {
    render(<ErrorMessage msg={<span data-testid="custom-msg">Custom error</span>} />);
    expect(screen.getByTestId("custom-msg")).toHaveTextContent("Custom error");
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("does not render anything when msg is falsy (unhappy path)", () => {
    const { container } = render(<ErrorMessage msg={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("does not render anything when msg is undefined (unhappy path)", () => {
    const { container } = render(<ErrorMessage msg={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });
});
