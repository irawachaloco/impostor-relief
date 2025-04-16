// import React from "react";

type BurgerButtonProps = {
  handleMenuToggle: () => void;
  isOpen: boolean;
};

const BurgerButton = ({ handleMenuToggle, isOpen }: BurgerButtonProps) => {
  return (
    <button
      onClick={handleMenuToggle}
      className="text-white hover:text-gray-300 focus:outline-none"
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 6L6 18M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
          />
        </svg>
      )}
    </button>
  );
};

// const BurgerButton = () => {
//   return (
//     <div>BurgerButton</div>
//   )
// }

export default BurgerButton;
