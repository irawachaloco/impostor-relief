import { fireEvent, render, screen } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useSelectedLayoutSegments: jest.fn(),
}));

describe("BreadCrumb", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should renders breadcrumb segments as links", () => {
    // Mock route: /learning/javascript/arrays
    (useSelectedLayoutSegments as jest.Mock).mockReturnValue([
      "learning",
      "javascript",
      "arrays",
    ]);
    (usePathname as jest.Mock).mockReturnValue("/learning/javascript/arrays");

    render(<BreadCrumb />);

    // Assert that each segment is rendered
    expect(screen.getByText("Learning")).toBeInTheDocument();
    expect(screen.getByText("Javascript")).toBeInTheDocument();
    expect(screen.getByText("Arrays")).toBeInTheDocument();

    // Assert that each segment is a link with the correct href
    expect(screen.getByRole("link", { name: "Learning" })).toHaveAttribute(
      "href",
      "/learning"
    );
    expect(screen.getByRole("link", { name: "Javascript" })).toHaveAttribute(
      "href",
      "/learning/javascript"
    );
  });

  it("highlights the current page with underline", () => {
    // Mock route: /learning/javascript/arrays
    (useSelectedLayoutSegments as jest.Mock).mockReturnValue([
      "learning",
      "typescript",
    ]);
    (usePathname as jest.Mock).mockReturnValue("/learning/typescript");

    render(<BreadCrumb />);

    const lastSegment = screen.getByText("Typescript");

    expect(lastSegment).toHaveClass("underline");
  });

  it("responds to click on breadcrumb links", () => {
    // Mock route: /learning/javascript/arrays
    (useSelectedLayoutSegments as jest.Mock).mockReturnValue([
      "learning",
      "javascript",
      "arrays",
    ]);
    (usePathname as jest.Mock).mockReturnValue("/learning/javascript/arrays");

    render(<BreadCrumb />);

    const link = screen.getByRole("link", { name: "Learning" });
    const link2 = screen.getByRole("link", { name: "Arrays" });

    fireEvent.click(link);

    fireEvent.click(link2);

    // We can't assert navigation, but we can confirm it behave as a link
    expect(link).toHaveAttribute("href", "/learning");
    expect(link2).toHaveAttribute("href", "/learning/javascript/arrays");
  });
});
