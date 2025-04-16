import { render, screen } from "@testing-library/react";
import SectionsGrid from "./SectionsGrid";

describe("Links Grid", () => {
  const mockSections = [
    {
      chapters: [
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
      ],
      title: "Section 1",
    },
    {
      chapters: [
        {
          id: 3,
          url: "/chapter-3",
          text: "Chapter 3",
        },
      ],
      title: "Section 2",
    },
  ];

  it("renders without crashing", () => {
    render(<SectionsGrid sections={mockSections} />);
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
  });

  it("renders all chapter links", () => {
    render(<SectionsGrid sections={mockSections} />);
    mockSections.forEach((section) => {
      section.chapters.forEach(({ text }) => {
        expect(screen.getByRole("link", { name: text })).toBeInTheDocument();
      });
    });
  });

  it("renders sections without title", () => {
    const sectionsWithoutTitle = [
      {
        chapters: [
          {
            id: 3,
            url: "/no-title-section-chapter",
            text: "No Title Section Chapter",
          },
        ],
      },
    ];
    render(<SectionsGrid sections={sectionsWithoutTitle} />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("renders nothing if given emty sections", () => {
    render(<SectionsGrid sections={[]} />);
    expect(screen.queryAllByRole("link").length).toBe(0);
  });

  it("renders multiple <section> elements for each section", () => {
    render(<SectionsGrid sections={mockSections} />);
    const sectionElements = screen.queryAllByRole("region");
    expect(sectionElements.length).toBe(mockSections.length);
  });
});
