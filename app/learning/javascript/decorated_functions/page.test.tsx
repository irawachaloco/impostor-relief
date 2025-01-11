import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Page from "./page";

describe("Decorated functions", () => {
  it("should render", () => {
    render(<Page />);
    const header = screen.getByText("Decorated functions");

    expect(header).toBeInTheDocument();
  });
});
