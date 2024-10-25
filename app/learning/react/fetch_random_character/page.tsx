"use client";

import CodeBlock from "@/app/components/CodeBlock";
import Demo from "./Demo";

const FETCH_CODE = `
 const fetchCharachter = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/" + id
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
`.trim();

const CharacterRandomFetch = () => {
  return (
    <div>
      <section className="pb-6">
        <h2 className="text-[#686868] text-xl font-semibold mb-4">{`Building a Debounced Character Fetcher`}</h2>

        <div className="max-w-2xl">
          <div className="pb-4">
            <p>{`Dynamic character fetcher using the Rick and Morty API`}</p>
          </div>
          {/* <div className="pb-4">
            <p>{`ble`}</p>
          </div> */}
        </div>
      </section>

      <Demo />

      <div className="max-w-prose pb-6">
        <p>{`The code:`}</p>
        <CodeBlock language="javascript" code={FETCH_CODE} />
      </div>
    </div>
  );
};

export default CharacterRandomFetch;
