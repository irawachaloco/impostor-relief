import CodeBlock from "@/app/components/CodeBlock";
import Demo from "./Demo";

const HEADING_TEXT = `Fetch and Display Pokémon`;
const DESCRIPTION =
  `Dedicated to all the Pokemon lovers. This section demonstrates how to fetch, display, and interact with data from an external API—in this case, the PokeAPI. Users can flip through a paginated grid of Pokémon cards, each revealing key information such as abilities, height, and weight with a 3D card flip animation. It's a hands-on example of using React hooks, asynchronous operations, and UI transitions to build an engaging, data-driven component.`.trim();

const EXPLANATION =
  `To accomplish this, I created a custom hook to handle the data-fetching logic. The PokéAPI is structured in such a way that the initial request returns only a paginated list of Pokémon, each containing just a name and a URL to its detailed data.

The hook first fetches this lightweight list, then uses Promise.all to concurrently request full details for each Pokémon—such as image, abilities, height, and weight. This two-step process ensures efficient parallel loading and keeps the UI responsive.

In addition to enriching each Pokémon entry with detailed data, the hook also manages loading state and tracks the total number of available Pokémon to support seamless pagination.`.trim();

const FETCH_POKEMON_CODE = `
"use client"
import { useEffect, useState } from "react";

const LIMIT = 12;

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

interface listItem {
  name: string;
  url: string;
}
export function usePokemonList(offset: number) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  /** Fetch Pokémon data when offset changes */
  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=" + LIMIT
        );

        if (!response.ok)
          throw new Error("Failed to fetch: ", response.status);

        const data = await response.json();
        setCount(data.count);

        const results: listItem[] = data.results;

        const details = await Promise.all(
          results.map(async ({ name, url }) => {
            const res = await fetch(url);
            if (!res.ok) {
              throw new Error("Failed fetching details");
            }
            const pokemonDetail = await res.json();

            return {
              name,
              url,
              image: pokemonDetail.sprites.front_default,
              abilities: pokemonDetail.abilities.map(
                (abilityItem: PokemonAbility) => abilityItem.ability.name
              ),
              base_experience: pokemonDetail.base_experience,
              height: pokemonDetail.height,
              weight: pokemonDetail.weight,
            };
          })
        );

        setPokemonList(details);
      } catch (error) {
        console.error("Failed to fetch Pokémon data: ", error);
      } finally {
        setLoading(false);
      }
    };

    // Call fetch
    fetchPokemons();
  }, [offset]);

  return {
    pokemonList,
    loading,
    count,
  };
}
`.trim();

const PokemonListApp: React.FC = () => {
  return (
    <div className="max-w-screen-xl">
      <section className="pb-6">
        {/* Header */}
        <h2 className="text-[#686868] text-xl font-semibold mb-4">
          {HEADING_TEXT}
        </h2>
        <div className="max-w-2xl">
          <div className="pb-4">
            <p>{DESCRIPTION}</p>
          </div>
        </div>

        <Demo />

        <div className="max-w-2xl">
          <div className="pb-4">
            <p>{EXPLANATION}</p>

            <CodeBlock language="javascript" code={FETCH_POKEMON_CODE} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PokemonListApp;
