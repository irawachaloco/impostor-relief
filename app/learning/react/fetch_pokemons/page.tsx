import Demo from "./Demo";

const HEADING_TEXT = `Fetch and Display Pokémon`;

const PokemonListApp: React.FC = () => {
  return (
    <div className="max-w-screen-xl">
      <section className="pb-6">
        {/* Header */}
        <h2 className="text-[#686868] text-xl font-semibold mb-4">
          {HEADING_TEXT}
        </h2>

        <Demo />
      </section>
    </div>
  );
};

export default PokemonListApp;
