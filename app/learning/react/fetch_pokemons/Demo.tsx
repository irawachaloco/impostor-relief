"use client";

import DemoSection from "@/app/components/DemoSection";
import FlipCardGrid from "@/app/components/FlipCardGrid";
import FlipCardGridSkeleton from "@/app/components/FlipCardGridSkeleton";
import PaginationControls from "@/app/components/PaginationControls";
import { usePokemonList } from "@/app/hooks/usePokemonList";
import React, { useCallback, useState } from "react";
const LIMIT = 12;

const Demo = () => {
  const [offset, setOffset] = useState(0);
  const { pokemonList, loading, count } = usePokemonList(offset);

  /** Controls which Pokémon detail cards are flipped (visible) */
  const [visibleDetails, setVisibleDetails] = useState<Record<string, boolean>>(
    {}
  );

  /** Toggles the detail card (flip) for a given index */
  const toggleVisibleDetails = useCallback((name: string) => {
    setVisibleDetails((prev) => ({ ...prev, [name]: !prev[name] }));
  }, []);
  /** Pagination controls */
  const handlePrevious = () => {
    if (offset > 0) {
      setVisibleDetails({});
      setOffset((previousOffset) => previousOffset - LIMIT);
    }
  };
  const handleNext = () => {
    if (offset + LIMIT < count) {
      setVisibleDetails({});
      setOffset((previousOffset) => previousOffset + LIMIT);
    }
  };

  // Calculate pagination info
  const currentPage = Math.floor(offset / LIMIT) + 1;
  const totalPages = Math.ceil(count / LIMIT);

  return (
    <DemoSection>
      {/* Loading state */}
      {loading && <FlipCardGridSkeleton limit={LIMIT} />}

      {/* Pokémon List */}
      {!loading && (
        <FlipCardGrid
          list={pokemonList}
          visibleDetails={visibleDetails}
          toggleVisibleDetails={toggleVisibleDetails}
        />
      )}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isPreviousDisabled={offset === 0}
        isNextDisabled={offset + LIMIT >= count}
      />
    </DemoSection>
  );
};

export default Demo;
