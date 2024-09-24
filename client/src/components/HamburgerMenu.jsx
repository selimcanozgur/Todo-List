import { useState } from "react";
import { NavLink } from "react-router-dom";

const HamburgerItem = () => {
  return <div className="w-6 h-[3px] bg-orange-400 rounded-full"></div>;
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        value={isOpen}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="md:hidden flex flex-col gap-1"
      >
        <HamburgerItem />
        <HamburgerItem />
        <HamburgerItem />
      </button>
      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } md:hidden absolute w-56 left-12  h-16 rounded-md bg-orange-100 flex flex-col items-center justify-center`}
      >
        <ul className="font-montserrat font-medium">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
