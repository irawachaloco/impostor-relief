import React from "react";
import FlipCard from "./FlipCard";

interface FlipCardGridItemProps {
  id: string | number;
  front: React.ReactNode;
  back: React.ReactNode;
}

interface FlipCardGridProps {
  items: FlipCardGridItemProps[];
  visibleDetails: Record<string | number, boolean>;
  toggleVisibleDetails: (id: string | number) => void;
}

const FlipCardGrid: React.FC<FlipCardGridProps> = ({
  items,
  visibleDetails,
  toggleVisibleDetails,
}) => {
  return (
    <section>
      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map(({ id, front, back }) => {
          return (
            <FlipCard
              key={id}
              front={front}
              back={back}
              showDetails={visibleDetails[id]}
              onClick={() => toggleVisibleDetails(id)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FlipCardGrid;
