/* eslint-disable @next/next/no-img-element */
import FlipCardGrid from "@/app/components/FlipCardGrid";
import React from "react";

type Pokemon = {
  name: string;
  url: string;
  image: string;
  abilities: string[];
  height: number;
  weight: number;
};

const PokemonFrontCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold text-gray-700 capitalize pt-2 pb-4">
        {pokemon.name}
      </p>
      <img
        src={pokemon.image}
        alt={`${pokemon.name} image`}
        className="w-24 h-24 object-cover"
      />
    </div>
  );
};

const PokemonBackCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  return (
    <div className="p-[18px] text-sm">
      <p className="font-semibold text-gray-700 capitalize pt-2 pb-4">
        {pokemon.name}
      </p>
      <p>
        <span className="font-semibold">Abilities: </span>
        {`${pokemon.abilities.join(", ")}.`}
      </p>
      <p>
        <span className="font-semibold">Height: </span>
        {pokemon.height} decimetres
      </p>
      <p>
        <span className="font-semibold">Weight: </span>
        {pokemon.weight} hectograms
      </p>
    </div>
  );
};

type PokemonGridProps = {
  pokemons: Pokemon[];
  visibleDetails: Record<string, boolean>;
  toggleVisibleDetails: (id: string | number) => void;
};

const PokemonGrid: React.FC<PokemonGridProps> = ({
  pokemons,
  visibleDetails,
  toggleVisibleDetails,
}) => {
  const items = pokemons.map((pokemon: Pokemon) => ({
    id: pokemon.name,
    front: <PokemonFrontCard pokemon={pokemon} />,
    back: <PokemonBackCard pokemon={pokemon} />,
  }));

  return (
    <div>
      <FlipCardGrid
        items={items}
        visibleDetails={visibleDetails}
        toggleVisibleDetails={toggleVisibleDetails}
      />
    </div>
  );
};

export default PokemonGrid;
