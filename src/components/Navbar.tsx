import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DiTerminal } from "react-icons/di";
import ListItem from "./ListItem";
const Navbar = () => {
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        console.log(window.scrollY);
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  console.log(isScrolling);

  return (
    <header
      className={`backdrop-blur-lg fixed w-full top-0 transition z-20 ${
        isScrolling ? "shadow-sm bg-[#2b7a78]/40" : "shadow-none"
      }`}
    >
      <nav className=" relative max-w-[1300px] flex md:px-5 px-4 mx-auto items-center justify-between h-[70px] md:h-[100px]">
        <div>
          <Link
            className="text-xl font-bold flex items-center text-white uppercase"
            to="/"
          >
            Seyha
            <DiTerminal size={35} />
          </Link>
        </div>
        <ul className="flex items-center gap-7 ">
          <ListItem />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
