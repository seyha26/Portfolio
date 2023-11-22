interface ListItemPros {
  isMobileScreen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListItem = ({ isMobileScreen, setIsOpen }: ListItemPros) => {
  console.log(isMobileScreen);
  return (
    <>
      <li className="flex items-center" onClick={() => setIsOpen(false)}>
        <a
          className={`text-[1rem] lg:text-lg p-4 w-full text-center ${
            isMobileScreen ? "hover:bg-[#3e9f99]" : ""
          }  block`}
          href="#home"
        >
          Home
        </a>
      </li>
      <li className="flex items-center h-auto" onClick={() => setIsOpen(false)}>
        <a
          className={`text-[1rem] lg:text-lg p-4 w-full text-center ${
            isMobileScreen ? "hover:bg-[#3e9f99]" : ""
          }  block`}
          href="#about"
        >
          About
        </a>
      </li>
      <li className="flex items-center h-auto" onClick={() => setIsOpen(false)}>
        <a
          className={`text-[1rem] lg:text-lg p-4 w-full text-center ${
            isMobileScreen ? "hover:bg-[#3e9f99]" : ""
          }  block`}
          href="#projects"
        >
          Porjects
        </a>
      </li>
      <li className="flex items-center h-auto" onClick={() => setIsOpen(false)}>
        <a
          className={`text-[1rem] lg:text-lg p-4 w-full text-center ${
            isMobileScreen ? "hover:bg-[#3e9f99]" : ""
          }  block`}
          href="#contact"
        >
          Contact
        </a>
      </li>
    </>
  );
};

export default ListItem;
