import React from "react";
import BurgerMenu from "../button/BurgerMenu";

const Navbar = ({ t, burger, burgerToggle }) => {
  return (
    <div>
      <div className="sm:fixed sm w-full sm:py-5 sm:px-8 sm:z-50 md:flex md:justify-center md:py-10">
        <ul
          className={
            burger
              ? "sm:fixed sm:w-[60%] sm:z-50 sm:text-lg sm:rounded-md sm:translate-x-0 sm:ease-in sm:duration-300 sm:bg-primary shadow-opsi-1 "
              : "sm:fixed sm:w-[60%] sm:z-50 sm:text-lg sm:rounded-md sm:translate-x-[-150%] sm:ease-in sm:duration-300 md:translate-x-0 md:static md:flex md:w-fit md:rounded-xl md:bg-secondry/[.3] md:backdrop-blur-md sm:font-normal lg:text-base shadow-opsi-1 "
          }
        >
          <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
            <a href="#home">{t("Navbar.1")}</a>
          </li>
          <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
            <a href="#about">{t("Navbar.2")}</a>
          </li>
          <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
            <a href="#skills">{t("Navbar.3")}</a>
          </li>
          <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
            <a href="#portfolio">{t("Navbar.4")}</a>
          </li>
          <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] hover:md:bg-transparent capitalize cursor-pointer">
            <a href="#contact">{t("Navbar.5")}</a>
          </li>
        </ul>

        <BurgerMenu burger={burger} burgerToggle={burgerToggle} />
      </div>
      <div
        className={
          burger
            ? "h-screen w-screen bg-primary/[.2] backdrop-blur-sm fixed top-0 left-0 z-30 sm:ease-in sm:duration-300"
            : "hidden"
        }
      ></div>
    </div>
  );
};

export default Navbar;
