import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-white.png";

const Nav = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="fixed top-0 z-10 h-16 w-full bg-zinc-900  ">
      <div className="md:container flex items-center justify-between h-full md:px-4 mx-auto">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width="100"
            height="50"
            className="h-12 w-28 object-scale-down"
          />
        </Link>
        <ul
          className={`${clicked ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"} 
          absolute md:relative top-16 md:top-0 w-full md:h-full py-12 md:py-0 lg:pr-28 flex flex-col md:flex-row items-center justify-end lg:justify-center space-y-6 md:space-y-0 md:space-x-2 text-2xl md:text-lg text-white font-sans font-medium bg-zinc-800 md:bg-inherit transition-all origin-top md:scale-y-100 md:opacity-100`}
        >
          <li
            onClick={() => setClicked(false)}
            className="hover:text-yellow-400 transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/things-to-do">Things To Do</Link>
          </li>
          <li
            onClick={() => setClicked(false)}
            className="hover:text-yellow-400 transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/food-and-drink">Food & Drink</Link>
          </li>
          <li
            onClick={() => setClicked(false)}
            className="hover:text-yellow-400 transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/attractions">Attractions</Link>
          </li>
          <li
            onClick={() => setClicked(false)}
            className="hover:text-yellow-400 transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/art-and-culture">Art & Culture</Link>
          </li>
          <li
            onClick={() => setClicked(false)}
            className="hover:text-yellow-400 transition-colors h-full flex items-center border-b-4 px-4 border-transparent hover:border-yellow-400"
          >
            <Link href="/">All</Link>
          </li>
        </ul>
        <button
          className="absolute right-3 md:hidden z-10 h-6 w-6"
          aria-label="menu"
          onClick={() => setClicked(!clicked)}
        >
          <span className="bg-white absolute top-0 left-0 w-6 h-[3px]"></span>
          <span className="bg-white absolute top-[9px] left-0 w-6 h-[3px]"></span>
          <span className="bg-white absolute top-[18px] left-0 w-6 h-[3px]"></span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
