import React from "react";

interface FlipCardGridSkeletonProps {
  limit: number;
}

const FlipCardGridSkeleton: React.FC<FlipCardGridSkeletonProps> = ({
  limit,
}) => {
  return (
    <section>
      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: limit }).map((_, idx) => (
          <li key={idx}>
            <div className="animate-pulse border border-gray-200 rounded-lg p-4 bg-white shadow-xs h-[250px] flex flex-col justify-center items-center space-y-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full" />
              <div className="w-3/4 h-4 bg-gray-300 rounded-sm" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FlipCardGridSkeleton;
