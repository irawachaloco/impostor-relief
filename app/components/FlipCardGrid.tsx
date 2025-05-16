import React from "react";
import FlipCard from "./FlipCard";

type Pokemon = {
  name: string;
  url: string;
  image: string;
  abilities: string[];
  height: number;
  weight: number;
};

interface FlipCardGridProps {
  list: Pokemon[];
  visibleDetails: Record<string, boolean>;
  toggleVisibleDetails: (name: string) => void;
}

const FlipCardGrid: React.FC<FlipCardGridProps> = ({
  list,
  visibleDetails,
  toggleVisibleDetails,
}) => {
  return (
    <section>
      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((pokemon, index) => {
          return (
            <FlipCard
              card={pokemon}
              key={index}
              showDetails={visibleDetails[pokemon.name]}
              onClick={() => toggleVisibleDetails(pokemon.name)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default FlipCardGrid;
