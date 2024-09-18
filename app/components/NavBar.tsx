import Link from "next/link";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";

const NavBar = () => {
  return (
    <nav className="px-4 flex items-end min-h-[4em] min-w-full relative">
      <AnimatedBackground fill_color={"bg-[#e8e8e8]/90"} />
      <div className="flex items-end justify-between w-full">
        <div className="flex">
          <Link href="/" className="">
            <button className="text-gray-500/50 hover:text-zinc-50_ animated-text font-bold text-xl">
              <p className="min-w-[10vw]_">React Learning</p>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
