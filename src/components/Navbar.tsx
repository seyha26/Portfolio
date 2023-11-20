import { Link } from "react-router-dom";
import List from "./List";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isScrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isScrolling);

  return (
    <header
      className={`bg-[#B2C8BA]/70 backdrop-blur-lg fixed w-full top-0 transition ${
        isScrolling ? "shadow-sm" : "shadow-none"
      }`}
    >
      <nav className="max-w-[1300px] flex md:px-5 px-4 mx-auto items-center justify-between h-[70px] md:h-[100px]">
        <div>
          <Link className="text-3xl font-bold text-white uppercase" to="/">
            Logo
          </Link>
        </div>
        <ul
          className={`md:flex items-center flex-col  md:flex-row md:static w-full md:w-auto sm:absolute top-24 py-5   right-3 gap-10 rounded-sm ${
            isOpen ? "flex top-0" : "hidden"
          }`}
        >
          <List
            className="text-white text-md md:text-lg"
            link=""
            title="Home"
          />
          <List
            className="text-white text-md md:text-lg"
            link="about"
            title="About"
          />
          <List
            className="text-white text-md md:text-lg"
            link="project"
            title="Projects"
          />
          <List
            className="text-white text-md md:text-lg"
            link="resume"
            title="Resume"
          />
        </ul>{" "}
        <span className="md:hidden" onClick={toggleMenu}>
          Menu
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
