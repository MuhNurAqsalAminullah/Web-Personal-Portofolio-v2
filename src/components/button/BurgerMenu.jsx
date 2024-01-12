import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const BurgerMenu = ({ burger, burgerToggle }) => {
  return (
    <div
      onClick={burgerToggle}
      className="sm:flex sm:justify-end sm:relative md:hidden z-40"
    >
      {burger ? (
        <IoCloseOutline
          size={40}
          className="sm:bg-white/[.3] sm:w-fit sm:px-6 sm:py-2 sm:rounded-md backdrop-blur-md"
        />
      ) : (
        <CiMenuFries
          size={40}
          className="sm:bg-white/[.3] sm:w-fit sm:px-6 sm:py-2 sm:rounded-md backdrop-blur-md"
        />
      )}
    </div>
  );
};

export default BurgerMenu;
