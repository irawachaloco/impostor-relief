"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import BurgerButton from "./BurgerButton";
import useActivePath from "../hooks/useActivePath";

const NavItem = ({ link, text }: { link: string; text: string }) => {
  // const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState("white");

  const isActive = useActivePath(link);

  const colors = React.useMemo(
    () => ["#ff2d00", "#ffd700", "#007fff", "#ff69b4", "#9932cc"],
    []
  );

  const getRandomColor = React.useCallback(
    () => colors[Math.floor(Math.random() * colors.length)],
    [colors]
  );

  useEffect(() => {
    if (isActive) {
      setColor(getRandomColor());
    } else {
      setColor("white");
    }
  }, [isActive, getRandomColor]);

  const handleMouseEnter = () => {
    setColor(getRandomColor());
  };

  const handleMouseLeave = () => {
    if (!isActive) {
      setColor("white");
    }
  };

  return (
    <Link
      href={link}
      prefetch={false}
      className={`flex justify-center w-full md:w-auto border-b md:border-b-0 border-[#f2f2f2] py-2 md:py-0 md:text-shadow-[0_4px_28px_#7d7d7d]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color,
        opacity: isActive ? 0.75 : 1,
      }}
    >
      <span className={`font-bold text-lg hover:opacity-50`}>{text}</span>
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="px-8 sm:px-20 flex items-end h-[4em] min-w-full relative overflow-hidden"
      role="navigation"
      aria-label="Main navigation"
    >
      <AnimatedBackground />
      {/* <AnimatedBackground fill_color={"bg-[#e8e8e8]/90"} /> */}
      <div className="flex items-end justify-between w-full">
        <div className="flex h-[1.75em] md:h-[2.25em] flex-auto">
          <Link
            href="/"
            prefetch={false}
            aria-label="Home"
            className="hover:scale-[101%]"
          >
            <span className="sr-only">Impostor Relief Home</span>
            <span className="text-gray-500/50 animated-text font-bold text-[2em] md:text-[2.5em] max-width">
              Impostor Relief
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          {/* Burger button */}
          <BurgerButton handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
        </div>
        <div
          id="main-menu"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-[100%] md:top-auto md:relative md:flex flex-col md:flex-row right-0 items-center md:items-auto w-full md:w-auto bg-[#e8e8e8] md:bg-[#e8e8e8]/0 md:gap-4`}
        >
          <NavItem link="/learning" text="Learning" />
          <NavItem link="/gallery" text="Gallery" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
