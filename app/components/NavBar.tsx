"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import BurgerButton from "./BurgerButton";
import { usePathname } from "next/navigation";

type NavItemProps = {
  link: string;
  text: string;
};

const Menu = ({ isOpen }: { isOpen: boolean }) => (
  <div
    id="main-menu"
    className={`${
      isOpen ? "flex" : "hidden"
    } absolute top-[100%] md:top-auto md:relative md:flex flex-col md:flex-row right-0 items-center md:items-auto w-full md:w-auto bg-[#e8e8e8] md:bg-[#e8e8e8]/0 md:space-x-4`}
  >
    <NavItem link="/learning" text="Learning" />
    <NavItem link="/gallery" text="Gallery" />
  </div>
);

const NavItem = ({ link, text }: NavItemProps) => {
  const path = usePathname();
  const isActive = path.startsWith(link);

  const colors = React.useMemo(
    () => ["#ff2d00", "#ffd700", "#007fff", "#ff69b4", "#9932cc"],
    []
  );

  const getRandomColor = React.useCallback(
    () => colors[Math.floor(Math.random() * colors.length)],
    [colors]
  );

  const [color, setColor] = useState("white");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted && isActive) {
      setColor(getRandomColor());
    }
  }, [getRandomColor, isActive, hasMounted]);

  const handleMouseEnter = () => {
    setColor(getRandomColor());
  };

  const handleMouseLeave = () => {
    setColor("white");
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <Link
      href={link}
      className={`flex justify-center w-full md:w-auto border-b md:border-b-0 border-[#f2f2f2] py-2 md:py-0`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: isActive ? getRandomColor() : color,
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
      className="px-8 sm:px-20  flex items-end min-h-[4em] min-w-full _w-full relative"
      role="navigation"
      aria-label="Main navigation"
    >
      <AnimatedBackground fill_color={"bg-[#e8e8e8]/90"} />
      <div className="flex items-end justify-between w-full">
        <div className="flex h-[1.75em] md:h-[2.25em] flex-auto overflow-hidden">
          <Link href="/" aria-label="Home" className="hover:scale-[101%]">
            <span className="sr-only">Impostor Relief Home</span>
            <span className="text-gray-500/50 animated-text font-bold text-[2em] md:text-[2.5em] max-width">
              Impostor Relief
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          {/* Burger button */}
          <BurgerButton handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
        </div>
        <Menu isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default NavBar;
