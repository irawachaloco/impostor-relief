"use client";
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
          `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${LIMIT}`
        );

        if (!response.ok)
          throw new Error(`Failed to fetch: ${response.status}`);

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

// export default usePokemonList;
