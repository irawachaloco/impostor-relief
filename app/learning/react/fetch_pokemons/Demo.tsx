"use client";

import DemoSection from "@/app/components/DemoSection";
import FlipCardGrid from "@/app/components/FlipCardGrid";
import PaginationControls from "@/app/components/PaginationControls";
import React, { useEffect, useState } from "react";
const LIMIT = 12;

interface PokemonAPIListItem {
  name: string;
  url: string;
}

interface PokemonAbility {
  ability: {
    name: string;
  };
}

type Pokemon = {
  name: string;
  url: string;
  image: string;
  abilities: string[];
  height: number;
  weight: number;
};

const Demo = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pokemonCount, setPokemonCount] = useState(0);

  /** Controls which Pokémon detail cards are flipped (visible) */
  const [visibleDetails, setVisibleDetails] = useState<Record<string, boolean>>(
    {}
  );

  /**
   * Toggles the detail card (flip) for a given index
   */
  const toggleVisibleDetails = (name: string) => {
    setVisibleDetails((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  /**
   * Fetches a batch of Pokémon and their details.
   * Uses async/await for clarity.
   */

  const handlePrevious = () => {
    if (offset === 0) return;
    setVisibleDetails({});
    setOffset((previousOffset) => previousOffset - LIMIT);
  };
  const handleNext = () => {
    if (offset + LIMIT < pokemonCount) {
      setVisibleDetails({});
      setOffset((previousOffset) => previousOffset + LIMIT);
    }
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);

      try {
        // Fetch the batch of Pokémon
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${LIMIT}`
        );

        if (!response.ok) {
          throw new Error(`Fail fetching with status: ${response.status}`);
        }

        // Parse JSON for the list of results
        const data = (await response.json()) as {
          count: number;
          results: PokemonAPIListItem[];
        };

        setPokemonCount(data.count);

        // Fetch  details for each Pokémon
        const promises = data.results.map(async (pokemon) => {
          const pokemonDetailsResponse = await fetch(pokemon.url);
          if (!pokemonDetailsResponse.ok) {
            throw new Error(
              `Failed with status: ${pokemonDetailsResponse.status}`
            );
          }
          const pokemonDetailsData = await pokemonDetailsResponse.json();

          return {
            ...pokemon,
            base_experience: pokemonDetailsData.base_experience,
            abilities: pokemonDetailsData.abilities.map(
              (abilityItem: PokemonAbility) => abilityItem.ability.name
            ),
            height: pokemonDetailsData.height,
            // Use sprites.other["official-artwork"].front_default for high quality,
            image: pokemonDetailsData.sprites.front_default,
            weight: pokemonDetailsData.weight,
          };
        });

        // Wait for all details to load
        const expandedSpeciesList = await Promise.all(promises);

        //Log the raw list
        console.log("expandedSpeciesList -> ", expandedSpeciesList);

        // Update state
        setPokemonList(expandedSpeciesList);
      } catch (error) {
        throw new Error(`Something went wrong with fetching: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    // Call fetch
    fetchPokemons();
  }, [offset]);

  // Calculate pagination info
  const currentPage = Math.floor(offset / LIMIT) + 1;
  const totalPages = Math.ceil(pokemonCount / LIMIT);

  return (
    <DemoSection>
      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Pokémon List */}
      {!loading && (
        <>
          <FlipCardGrid
            list={pokemonList}
            visibleDetails={visibleDetails}
            toggleVisibleDetails={toggleVisibleDetails}
          />
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isPreviousDisabled={offset === 0}
            isNextDisabled={offset + LIMIT >= pokemonCount}
            // offset={offset}
          />
        </>
      )}
    </DemoSection>
  );
};

export default Demo;
