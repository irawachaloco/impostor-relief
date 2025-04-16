import React from "react";
import { LinksGrid } from "./LinksGrid";

type Chapter = {
  id: number;
  url: string;
  text: string;
};

type Section = {
  chapters: Chapter[];
  title?: string;
};

type SectionsProps = {
  sections: Section[];
};

const SectionTitle: React.FC<{ title: string; id?: string }> = ({
  title,
  id,
}) => (
  <h2
    id={id}
    className="text-[1em] md:text-[1.5em] lg:text-[1.75em] text-gray-500/50 py-2"
  >
    {title}
  </h2>
);

const SectionsGrid: React.FC<SectionsProps> = ({ sections }) => {
  return (
    <main>
      {sections.map((section, index) => {
        return (
          <section key={index} aria-labelledby={`section-title-${index}`}>
            {section.title && (
              <SectionTitle
                title={section.title}
                id={`section-title-${index}`}
              />
            )}
            <LinksGrid chapters={section.chapters} />
          </section>
        );
      })}
    </main>
  );
};

export default SectionsGrid;
