"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

type BurgerButtonProps = {
  handleMenuToggle: () => void;
  isOpen: boolean;
};

const BurgerButton = ({ handleMenuToggle, isOpen }: BurgerButtonProps) => {
  return (
    <button
      onClick={handleMenuToggle}
      className="text-white hover:text-gray-300 focus:outline-none"
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

type NavItemProps = {
  link: string;
  text: string;
};

const NavItem = ({ link, text }: NavItemProps) => {
  return (
    <Link
      href={link}
      className="flex justify-center w-full md:w-auto border-b md:border-b-0 border-[#f2f2f2] py-2 md:py-0"
    >
      <button className={`text-white hover:text-gray-300 font-bold`}>
        {text}
      </button>
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("isOpen: ", isOpen);
  }, [isOpen]);

  return (
    <nav className="px-4 flex items-end min-h-[4em] min-w-full relative">
      <AnimatedBackground fill_color={"bg-[#e8e8e8]/90"} />
      <div className="flex items-end justify-between w-full">
        <div className="flex">
          <Link href="/" className="">
            <button className="text-gray-500/50 hover:text-zinc-50_ animated-text font-bold text-xl">
              <p className="min-w-[10vw]_">Impostor Relief</p>
            </button>
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          {/* Burger button */}
          <BurgerButton handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-[100%] md:top-auto md:relative md:flex flex-col md:flex-row right-0 items-center md:items-auto w-full md:w-auto bg-[#e8e8e8] md:bg-[#e8e8e8]/0 md:space-x-4`}
        >
          <NavItem link="../learning" text="Learning" />
          <NavItem link="../just_css" text="CSS Gallery" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
