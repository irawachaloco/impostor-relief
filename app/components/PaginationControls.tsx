import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  // offset: number;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  isPreviousDisabled,
  isNextDisabled,
}) => {
  return (
    <div className="flex justify-between mt-4 items-center">
      <div>
        Page: {currentPage} of {totalPages}
      </div>
      <div>
        <button
          className="bg-[#ff69b4] text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={onPrevious}
          disabled={isPreviousDisabled}
        >
          Previous
        </button>
        <button
          className="bg-[#ff69b4] text-white px-4 py-2 rounded disabled:opacity-50 ml-4"
          onClick={onNext}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationControls;
