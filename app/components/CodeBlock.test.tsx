import React from "react";
import { render, screen } from "@testing-library/react";
import CodeBlock from "./CodeBlock";

const sampleCode = `function helloWorld() {\n  console.log('Hello, world!');\n}`;

describe("CodeBlock", () => {
  it("renders code with correct language and style", () => {
    render(<CodeBlock language="javascript" code={sampleCode} />);
    // Get the code block by its aria-label
    const codeBlock = screen.getByLabelText(/code snippet in javascript/i);
    expect(codeBlock).toBeInTheDocument();
    expect(codeBlock.textContent).toContain("function helloWorld() {");
  });

  it("wraps code in the correct container classes", () => {
    render(<CodeBlock language="javascript" code={sampleCode} />);
    // Check for container class
    expect(document.querySelector(".shadow-md.rounded-lg.my-4.overflow-hidden")).toBeInTheDocument();
  });

  it("renders multiline code correctly", () => {
    const multiLineCode = `const a = 1;\nconst b = 2;\nconsole.log(a + b);`;
    render(<CodeBlock language="javascript" code={multiLineCode} />);
    const codeBlock = screen.getByLabelText(/code snippet in javascript/i);
    expect(codeBlock.textContent).toContain("const a = 1;");
    expect(codeBlock.textContent).toContain("const b = 2;");
    expect(codeBlock.textContent).toContain("console.log(a + b);");
  });
});
