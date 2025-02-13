/* eslint-disable @next/next/no-img-element */
"use client";

import DemoSection from "@/app/components/DemoSection";
import { useEffect, useState } from "react";
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

type PokemonType = {
  name: string;
  url: string;
  image: string;
  abilities: string[];
  height: number;
  weight: number;
};

const Demo = () => {
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pokemonCount, setPokemonCount] = useState(0);

  /** Controls which Pokémon detail cards are flipped (visible) */
  const [visibleDetails, setVisibleDetails] = useState<{
    [key: number]: boolean;
  }>({});

  /**
   * Toggles the detail card (flip) for a given index
   */
  const toggleVisibleDetails = (index: number) => {
    setVisibleDetails((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  /**
   * Fetches a batch of Pokémon and their details.
   * Uses async/await for clarity.
   */
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
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemonList.map((pokemon, index) => {
            const showDetails = visibleDetails[index];
            return (
              <li
                key={index}
                onClick={() => toggleVisibleDetails(index)}
                className={`relative [perspective:1000px]`}
              >
                <div
                  className={`relative border border-gray-200 rounded-lg p-4 bg-white  flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow  [transform-style:preserve-3d] transition-transform duration-700 ease-in-out transform  ${
                    showDetails ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* Front side */}
                  <div
                    className={`absolute_ w-full h-full flex flex-col items-center justify-center [backface-visibility:hidden]`}
                  >
                    <p className="font-semibold text-gray-700 capitalize pt-2 pb-4">
                      {pokemon.name}
                    </p>
                    <img src={pokemon.image} alt="pokemon image" />
                  </div>

                  {/* Back side */}
                  <div
                    className={`absolute p-6 top-0 w-full h-full flex flex-col text-left justify-center  [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#ff69b4]/30 border rounded-lg shadow-[inset_10px_10px_0_rgba(250,250,250,1),_inset_-10px_-10px_0_rgba(250,250,250,1),_inset_10px_-10px_0_rgba(250,250,250,1),_inset_-10px_10px_0_rgba(250,250,250,1)]`}
                  >
                    <p className="font-bold pb-2 text-center">Details</p>
                    <p>
                      <span className="font-semibold">Abilities: </span>
                      {`${pokemon.abilities.join(", ")}.`}
                    </p>
                    <p>
                      <span className="font-semibold">Height: </span>
                      {pokemon.height}
                    </p>
                    <p>
                      <span className="font-semibold">Weight: : </span>
                      {pokemon.weight}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="flex justify-between mt-4 items-center">
        <div>
          Page: {currentPage} of {totalPages}
        </div>
        <div>
          <button
            className="bg-[#ff69b4] text-white px-4 py-2 rounded"
            onClick={handlePrevious}
            disabled={offset === 0}
          >
            Previous
          </button>
          <button
            className="bg-[#ff69b4] text-white px-4 py-2 rounded ml-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </DemoSection>
  );
};

export default Demo;
