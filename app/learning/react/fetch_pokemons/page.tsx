import Demo from "./Demo";

const HEADING_TEXT = `Fetch and Display Pokémon`;
const DESCRIPTION =
  `Dedicated to all the Pokemon lovers. This section demonstrates how to fetch, display, and interact with data from an external API—in this case, the PokeAPI. Users can flip through a paginated grid of Pokémon cards, each revealing key information such as abilities, height, and weight with a 3D card flip animation. It's a hands-on example of using React hooks, asynchronous operations, and UI transitions to build an engaging, data-driven component.`.trim();

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
      </section>
    </div>
  );
};

export default PokemonListApp;
