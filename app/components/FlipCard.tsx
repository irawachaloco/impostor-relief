/* eslint-disable @next/next/no-img-element */
import React from "react";

type Pokemon = {
  name: string;
  url: string;
  image: string;
  abilities: string[];
  height: number;
  weight: number;
};

type FlipCardProps = {
  card: Pokemon;
  showDetails: boolean;
  onClick: () => void;
};

// Notes
// Cards allways will have a name. They may have or not an image/canvas
// By now, the details only have some text in it,
// Details should be handled as children, for flexibility

const FlipCard: React.FC<FlipCardProps> = ({ card, showDetails, onClick }) => {
  return (
    <li onClick={onClick} className={`relative [perspective:1000px]`}>
      <div
        className={`relative border border-gray-200 rounded-lg p-4 bg-white  flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow  [transform-style:preserve-3d] transition-transform duration-700 ease-in-out transform  ${
          showDetails ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front side */}
        <div
          className={`absolute_ w-full h-full flex flex-col items-center justify-center [backface-visibility:hidden]`}
        >
          <p className="font-semibold text-gray-700 capitalize pt-2 pb-4">
            {card.name}
          </p>
          <img src={card.image} alt="card image" />
        </div>

        {/* Back side */}
        <div
          className={`absolute p-6 top-0 w-full h-full flex flex-col text-left justify-center  [transform:rotateY(180deg)] [backface-visibility:hidden] bg-[#ff69b4]/30 border rounded-lg shadow-[inset_10px_10px_0_rgba(250,250,250,1),_inset_-10px_-10px_0_rgba(250,250,250,1),_inset_10px_-10px_0_rgba(250,250,250,1),_inset_-10px_10px_0_rgba(250,250,250,1)]`}
        >
          <p className="font-bold pb-2 text-center">Details</p>
          <p>
            <span className="font-semibold">Abilities: </span>
            {`${card.abilities.join(", ")}.`}
          </p>
          <p>
            <span className="font-semibold">Height: </span>
            {card.height}
          </p>
          <p>
            <span className="font-semibold">Weight: : </span>
            {card.weight}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FlipCard;
