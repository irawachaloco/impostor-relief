import React from "react";
import { render } from "@testing-library/react";
import DemoSection from "./DemoSection";

// Mock Section to isolate DemoSection
jest.mock("./Section", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <section data-testid="mock-section">{children}</section>,
}));

describe("DemoSection", () => {
  it("renders children inside Section and displays 'Demo'", () => {
    const { getByText, getByTestId } = render(
      <DemoSection>
        <span>Test Child</span>
      </DemoSection>
    );
    expect(getByTestId("mock-section")).toBeInTheDocument();
    expect(getByText("Demo")).toBeInTheDocument();
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("renders without children (unhappy path)", () => {
    // @ts-expect-error Testing missing children
    const { getByText } = render(<DemoSection />);
    expect(getByText("Demo")).toBeInTheDocument();
  });

  it("renders with falsy children (unhappy path)", () => {
    const { getByText } = render(
      <DemoSection>{false}</DemoSection>
    );
    expect(getByText("Demo")).toBeInTheDocument();
  });
});
