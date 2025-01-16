import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Page from "./page";
import CodeBlock from "@/app/components/CodeBlock";
import Demo from "./Demo";

// app/components/CodeBlock.tsx

jest.mock("@/app/components/CodeBlock", () =>
  jest.fn(() => <div>Mock CodeBlock</div>)
);
jest.mock("./Demo", () => jest.fn(() => <div>Mock Demo</div>));

beforeEach(() => {
  jest.clearAllMocks(); // Clear mock call history
});

describe("Decorated functions", () => {
  it("should render the heading and static content", () => {
    render(<Page />);

    // Check heading
    expect(
      screen.getByRole("heading", { name: /decorated functions/i })
    ).toBeInTheDocument();

    // Check the static text content
    expect(
      screen.getByText(
        /The pattern demonstrated below is known as a decorator or decorated function. A decorator wraps an existing function, adding extra functionality while preserving the original logic. It then returns a new, enhanced version of the function. This approach allows you to augment behavior without altering the underlying function directly, making it a flexible and reusable design pattern./
      )
    ).toBeInTheDocument();
  });

  it("should render CodeBlock components with correct props", () => {
    render(<Page />);

    expect(CodeBlock).toHaveBeenCalledWith(
      expect.objectContaining({
        language: "javascript",
        code: expect.stringContaining(`const callWithDouble = (f) => {`),
      }),
      {}
    );

    expect(CodeBlock).toHaveBeenCalledWith(
      expect.objectContaining({
        language: "javascript",
        code: expect.stringContaining(`const result = decoratedSum(1, 2, 3);`),
      }),
      {}
    );

    expect(CodeBlock).toHaveBeenCalledTimes(2);
  });

  it("should render the Demo component", () => {
    render(<Page />);

    expect(Demo).toHaveBeenCalledTimes(1);
  });
});
