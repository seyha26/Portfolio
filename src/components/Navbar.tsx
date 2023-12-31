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
      className={`backdrop-blur-lg fixed w-full top-0 transition z-50 bg-[#56c4c4] ${
        isScrolling ? "shadow-md " : "shadow-none"
      }`}
    >
      <nav className=" relative max-w-[1300px] flex md:px-5 px-4 mx-auto items-center justify-between h-[70px] md:h-[100px]">
        <div>
          <Link
            className="text-3xl font-bold flex items-center text-white uppercase"
            to="/"
          >
            Seyha
            <DiTerminal size={35} />
          </Link>
        </div>
        <ul
          className={`items-center overflow-hidden md:h-auto h-0 gap-7 md:flex ${
            isOpen
              ? "block absolute top-[70px] h-auto bg-[#419792] duration-[500ms] w-screen left-0"
              : ""
          }`}
        >
          <ListItem isMobileScreen={isMobileScreen} setIsOpen={setIsOpen} />
        </ul>
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Icon icon="pajamas:close" fontSize={28} color="#feffff" />
          ) : (
            <Icon icon="charm:menu-hamburger" fontSize={28} color="#feffff" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
