import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DiTerminal } from "react-icons/di";
import ListItem from "./ListItem";
import { Icon } from "@iconify/react/dist/iconify.js";
const Navbar = () => {
  const [isScrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

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

  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth > 768) {
        setIsMobileScreen(false);
        setIsOpen(false);
      } else {
        setIsMobileScreen(true);
        console.log(isMobileScreen);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => window.removeEventListener("resize", changeWidth);
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
        <ul
          className={`items-center gap-7 md:flex ${
            isOpen
              ? "block absolute top-[70px] bg-[#419792] right-0 w-screen left-0"
              : "hidden"
          }`}
        >
          <ListItem isMobileScreen={isMobileScreen} />
        </ul>
        <div className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Icon icon="charm:menu-hamburger" fontSize={28} color="#feffff" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
