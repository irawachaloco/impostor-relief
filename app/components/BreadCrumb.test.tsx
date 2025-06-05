import { fireEvent, render, screen } from "@testing-library/react";
import BreadCrumb from "./BreadCrumb";

const setMockPathname = (mockPath: string) => {
  Object.defineProperty(window, "location", {
    configurable: true,
    value: {
      ...window.location,
      pathname: mockPath,
    },
  });
};

describe("BreadCrumb", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should renders breadcrumb segments as links", () => {
    setMockPathname("impostor-relief/learning/javascript/arrays");

    render(<BreadCrumb />);

    // Assert that each segment is rendered
    expect(screen.getByText("Learning")).toBeInTheDocument();
    expect(screen.getByText("Javascript")).toBeInTheDocument();
    expect(screen.getByText("Arrays")).toBeInTheDocument();

    // Assert that each segment is a link with the correct href
    expect(screen.getByRole("link", { name: "Learning" })).toHaveAttribute(
      "href",
      "/impostor-relief/learning"
    );
    expect(screen.getByRole("link", { name: "Javascript" })).toHaveAttribute(
      "href",
      "/impostor-relief/learning/javascript"
    );
  });

  it("highlights the current page with underline", () => {
    setMockPathname("impostor-relief/learning/typescript");
    render(<BreadCrumb />);

    const lastSegment = screen.getByText("Typescript");

    expect(lastSegment).toHaveClass("underline");
  });

  it("responds to click on breadcrumb links", () => {
    setMockPathname("impostor-relief/learning/arrays");
    render(<BreadCrumb />);

    const link = screen.getByRole("link", { name: "Learning" });
    const link2 = screen.getByRole("link", { name: "Arrays" });

    fireEvent.click(link);

    fireEvent.click(link2);

    // We can't assert navigation, but we can confirm it behave as a link
    expect(link).toHaveAttribute("href", "/impostor-relief/learning");
    expect(link2).toHaveAttribute("href", "/impostor-relief/learning/arrays");
  });
});
