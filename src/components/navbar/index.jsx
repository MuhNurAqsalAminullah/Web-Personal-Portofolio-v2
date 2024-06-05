import React, { useState } from "react";
import BurgerMenu from "../button/BurgerMenu";

const Navbar = ({ t, i18n, clickLanguage }) => {
  const [burger, setBurger] = useState(false);

  const burgerToggle = () => {
    setBurger(!burger);
  };

  return (
    <div className="sm:bg-primary fixed w-full z-20 md:h-fit md:bg-primary md:duration-300 shadow-custome">
      <div className="sm:flex sm:items-center sm:justify-between sm:px-5 sm:py-5 sm:text-white md:px-[100px] xl:px-[150px]">
        <div>
          <a href="#Home">
            <h3 className="sm:text-2xl sm:font-bold md:text-3xl xl:text-4xl font-[mali]">
              Aqsal
              <span className="sm:font-normal font-[mali] text-secondary">
                dev
              </span>
            </h3>
          </a>
        </div>

        <ul
          className={
            burger
              ? "sm:bg-primary sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-fit sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-0 sm:ease-in sm:duration-300 md:sm:w-[50%] z-20 shadow-md shadow-white/20 rounded-md"
              : "sm:bg-primary sm:absolute sm:right-0 sm:top-0 sm:w-[80%] sm:h-fit sm:flex sm:flex-col sm:justify-evenly sm:items-center sm:translate-x-full sm:ease-in sm:duration-300 ld:translate-x-0 ld:relative ld:flex-row ld:h-fit ld:bg-transparent ld:w-fit ld:gap-10 lg:gap-14 z-20"
          }
        >
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 ld:border-0 md:py-0 sm:text-sm sm:mb-5 sm:mt-20 md:text-base ld:my-0">
            <a
              href="#Home"
              className="hover:text-secondary capitalize font-[K2D]"
            >
              {t("Navbar.1")}
            </a>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 ld:border-0 md:py-0 sm:text-sm sm:my-5 ld:my-0 md:text-base">
            <a
              href="#about"
              className="hover:text-secondary capitalize font-[K2D]"
            >
              {t("Navbar.2")}
            </a>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 ld:border-0 md:py-0 sm:text-sm sm:my-5 ld:my-0 md:text-base">
            <a
              href="#skills"
              className="hover:text-secondary capitalize font-[K2D]"
            >
              {t("Navbar.3")}
            </a>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 ld:border-0 md:py-0 sm:text-sm sm:my-5 ld:my-0 md:text-base">
            <a
              href="#portfolio"
              className="hover:text-secondary capitalize font-[K2D]"
            >
              {t("Navbar.4")}
            </a>
          </li>
          <li className="sm:border-b sm:border-white sm:py-2 sm:flex sm:items-center sm:gap-x-2 ld:border-0 md:py-0 sm:text-sm sm:my-5 ld:my-0 md:text-base">
            <a
              href="#contact"
              className="hover:text-secondary capitalize font-[K2D]"
            >
              {t("Navbar.5")}
            </a>
          </li>
          <li className="sm:py-2 ld:flex ld:items-center sm:hidden sm:gap-x-2 ld:border-0 md:py-0 sm:text-sm md:text-base">
            <button
              onClick={clickLanguage}
              className="border-2 border-secondary  text-secondary rounded-full w-10 h-10 font-[K2D]"
            >
              {i18n.language === "en" ? "EN" : "ID"}
            </button>
          </li>
        </ul>

        <div className="sm:flex sm:items-center gap-x-5 ld:hidden">
          <button
            onClick={clickLanguage}
            className="border-2 border-secondary  text-secondary rounded-full w-10 h-10 font-[K2D]"
          >
            {i18n.language === "en" ? "EN" : "ID"}
          </button>

          <BurgerMenu burgerToggle={burgerToggle} burger={burger} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <div>
//   <div className="sm:fixed sm w-full sm:py-5 sm:px-8 sm:z-50 md:flex md:justify-center md:py-10">
//     <ul
//       className={
//         burger
//           ? "sm:fixed sm:w-[60%] sm:z-50 sm:text-lg sm:rounded-md sm:translate-x-0 sm:ease-in sm:duration-300 sm:bg-primary shadow-opsi-1 "
//           : "sm:fixed sm:w-[60%] sm:z-50 sm:text-lg sm:rounded-md sm:translate-x-[-150%] sm:ease-in sm:duration-300 md:translate-x-0 md:static md:flex md:w-fit md:rounded-xl md:bg-secondry/[.3] md:backdrop-blur-md sm:font-normal lg:text-base shadow-opsi-1 "
//       }
//     >
//       <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
//         <a href="#home">{t("Navbar.1")}</a>
//       </li>
//       <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
//         <a href="#about">{t("Navbar.2")}</a>
//       </li>
//       <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
//         <a href="#skills">{t("Navbar.3")}</a>
//       </li>
//       <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] sm:border-b sm:border-white/[.1] hover:md:bg-transparent md:border-none capitalize cursor-pointer">
//         <a href="#portfolio">{t("Navbar.4")}</a>
//       </li>
//       <li className="sm:py-3 sm:px-5 md:px-6 lg:px-10 hover:sm:bg-white/[.1] hover:md:bg-transparent capitalize cursor-pointer">
//         <a href="#contact">{t("Navbar.5")}</a>
//       </li>
//     </ul>

//     <BurgerMenu burger={burger} burgerToggle={burgerToggle} />
//   </div>
//   <div
//     className={
//       burger
//         ? "h-screen w-screen bg-primary/[.2] backdrop-blur-sm fixed top-0 left-0 z-30 sm:ease-in sm:duration-300"
//         : "hidden"
//     }
//   ></div>
// </div>
