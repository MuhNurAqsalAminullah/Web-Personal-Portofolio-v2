import React from "react";

import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";

const BurgerMenu = ({ burger, burgerToggle }) => {
  return (
    <div
      onClick={burgerToggle}
      className="sm:flex sm:justify-end sm:relative ld:hidden z-40"
    >
      {burger ? (
        <IoIcons.IoCloseOutline
          size={40}
          className="sm:w-fit font-bold sm:py-1"
        />
      ) : (
        <RiIcons.RiMenu3Line size={40} className="sm:w-fit font-bold sm:py-1" />
      )}
    </div>
  );
};

export default BurgerMenu;
