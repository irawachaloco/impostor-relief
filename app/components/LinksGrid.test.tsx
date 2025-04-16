import { fireEvent, render, screen } from "@testing-library/react";
import { LinksGrid } from "./LinksGrid";

describe("Links Grid", () => {
  const mockChapters = [
    {
      id: 1,
      url: "/chapter-1",
      text: "Chapter 1",
    },
    {
      id: 2,
      url: "/chapter-2",
      text: "Chapter 2",
    },
  ];

  it("Renders without crashing", () => {
    render(<LinksGrid chapters={mockChapters} />);
    expect(screen.getByText("Chapter 1")).toBeInTheDocument();
    expect(screen.getByText("Chapter 2")).toBeInTheDocument();
  });

  it("Renders the correct number of links", () => {
    render(<LinksGrid chapters={mockChapters} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(mockChapters.length);
  });

  it("Should renders links with correct href and text", () => {
    render(<LinksGrid chapters={mockChapters} />);
    mockChapters.forEach(({ text, url }) => {
      const linkElement = screen.getByRole("link", { name: text });
      expect(linkElement).toHaveAttribute("href", url);
      expect(linkElement).toHaveTextContent(text);
    });
  });

  it("Links respond correctly to clicks", async () => {
    render(<LinksGrid chapters={mockChapters} />);
    const link = screen.getByRole("link", { name: "Chapter 1" });
    fireEvent.click(link);
    expect(link).toHaveAttribute("href", "/chapter-1");
  });

  it("skips rendering empty chapter list", () => {
    render(<LinksGrid chapters={[]} />);
    const links = screen.queryAllByRole("link");
    expect(links.length).toBe(0);
  });
});
