import DemoSection from "@/app/components/DemoSection";
import useThrottle from "@/app/hooks/useThottle";
import React, { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  image: string;
  status: string;
  location: { name: string };
  species: string;
};

const getIdNumber = () => {
  return Math.floor(Math.random() * 826) + 1;
};

const Demo = () => {
  const initialNUmber = getIdNumber();
  const [character, setCharacter] = useState<Character | null>(null);
  const [selectedId, setSelectedId] = useState(initialNUmber);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCharachter = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!response.ok) {
        throw new Error("Failed fetching request");
      }
      const data = await response.json();
      console.log(data);
      setCharacter(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handlePickAnother = useThrottle(() => {
    const id = getIdNumber();
    setSelectedId(id);
  }, 10000);

  useEffect(() => {
    fetchCharachter(selectedId);
  }, [selectedId]);

  return (
    <DemoSection>
      {/* <p>{count}</p>
      <button onClick={handleButton}>Clic</button> */}

      <h2>
        Pick a randmon character from the Rick and Morty API. Note: the button
        call is throttled 10 seconds.
      </h2>
      <button
        aria-label="Pick another random character"
        className="rounded bg-blue-500 text-white p-2 mb-4"
        onClick={handlePickAnother}
      >
        Pick another
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{`Something went wrong. ${error}`}</p>
      ) : (
        character && (
          <>
            <p className="text-xl">{`${character.name}`}</p>
            <p className="">{`Status: ${character.status}`}</p>
            <p className="">{`Species: ${character.species}`}</p>
            <p className="pb-4">{`Location: ${character.location.name}`}</p>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src={character.image} alt={`${character.name} image`} />
            }
          </>
        )
      )}
    </DemoSection>
  );
};

export default Demo;
