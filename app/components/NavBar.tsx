"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import BurgerButton from "./BurgerButton";

type NavItemProps = {
  link: string;
  text: string;
};

const NavItem = ({ link, text }: NavItemProps) => {
  const [color, setColor] = useState("white");
  //#ff2d00, #ffd700, #007fff, #ff69b4, #9932cc
  const colors = ["#ff2d00", "#ffd700", "#007fff", "#ff69b4", "#9932cc"];

  const handleMouseEnter = () => {
    const newIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[newIndex]);
  };

  const handleMouseLeave = () => {
    setColor("white");
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <Link
      href={link}
      className={`flex justify-center w-full md:w-auto border-b md:border-b-0 border-[#f2f2f2] py-2 md:py-0`}
    >
      <button
        className={`font-bold text-lg hover:opacity-50`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: color }}
      >
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
    <nav className="px-8 sm:px-20  flex items-end min-h-[4em] min-w-full relative">
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
          <NavItem link="/learning" text="Learning" />
          {/* <NavItem link="/just_css" text="CSS Gallery" /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
