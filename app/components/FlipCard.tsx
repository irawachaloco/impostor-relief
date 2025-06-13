import React, { ReactNode } from "react";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  showDetails: boolean;
  onClick: () => void;
};

const FlipCard: React.FC<FlipCardProps> = ({
  front,
  back,
  showDetails,
  onClick,
}) => {
  return (
    <li onClick={onClick} className="relative [perspective:1000px]">
      <div
        className={`relative border border-gray-200 rounded-lg p-4 bg-white flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow transition-transform duration-700 ease-in-out transform flipcard-3d ${
          showDetails ? "flipcard-rotate-y-180" : ""
        }`}
      >
        {/* Front side */}
        <div className="w-full h-full flex flex-col items-center justify-center flipcard-backface-hidden">
          {front}
        </div>

        {/* Back side */}
        <div className="absolute top-0 w-full h-full flex flex-col text-left flipcard-backface-hidden flipcard-rotate-y-180 bg-[#ff69b4]/30 border rounded-lg shadow-[inset_10px_10px_0_rgba(250,250,250,1),_inset_-10px_-10px_0_rgba(250,250,250,1),_inset_10px_-10px_0_rgba(250,250,250,1),_inset_-10px_10px_0_rgba(250,250,250,1)]">
          {back}
        </div>
      </div>
    </li>
  );
};

export default FlipCard;
