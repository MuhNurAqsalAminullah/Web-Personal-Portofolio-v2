import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

// Import React-icons ---------->
import { IoIosSend } from "react-icons/io";
import * as FaIcons from "react-icons/fa6";

// Import Components ---------->
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CardOne from "../../components/card/CardOne";
import CardTwo from "../../components/card/CardTwo";
import personalPortfolio from "../../data/Portfolio";
import workPortfolio from "../../data/PortfolioMain";

// import images ---------->
import {
  waIcons,
  telegramIcons,
  instagramIcons,
  bgProfile,
  htmlIcons,
  cssIcons,
  jsIcons,
  reactIcons,
  reduxToolkitIcons,
  tailwindIcons,
  bootstrapIcons,
  gitIcons,
  githubIcons,
  postmanIcons,
} from "../../data/images";

const Home = () => {
  // Display data portfolio -------->
  const [datasW, setDataW] = useState(workPortfolio);
  const [datas, setData] = useState(personalPortfolio);
  const [showAll, setShowAll] = useState(false);
  const displayedData = showAll ? datas : datas.slice(0, 3);

  // burger menu ------->
  const [burger, setBurger] = useState(false);
  const burgerToggle = () => {
    setBurger(!burger);
  };

  // i18next translate id/en --------->
  const { t, i18n } = useTranslation();
  function clickLanguage() {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  }

  // EmailJs --------->
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qe6fcma",
        "template_aurlpoa",
        form.current,
        "iePxYksHGILoE-9jD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Successfully sent email");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      {/* Header Navbar ----------------- >>> */}
      <Navbar
        t={t}
        burger={burger}
        burgerToggle={burgerToggle}
        clickLanguage={clickLanguage}
      />

      {/* Banner Hero ----------------- >>> */}
      <div
        id="home"
        className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:px-5 sm:pt-24 md:pt-40 text-center"
      >
        <p className="sm:text-xl sm:mb-4 md:text-2xl lg:text-xl capitalize">
          {t("Home.1")}
        </p>
        <h1 className="sm:text-4xl sm:mb-4 md:text-5xl lg:text-6xl font-bold capitalize">
          {t("Home.2")}{" "}
          <span className="text-secondry">Muh Nur Aqsal Aminullah</span>
        </h1>
        <h3 className="sm:text-3xl sm:mb-7 md:text-4xl lg:text-5xl font-semibold">
          Front End{" "}
          <span className="underline underline-offset-8">Developer</span>
        </h3>
        <p className="sm:text-xl sm:mb-14 md:text-2xl lg:px-36">
          {t("Home.3")}
        </p>

        <div className="sm:w-full sm:flex sm:flex-col sm:items-center sm:gap-y-3 sm:mb-7 md:flex-row md:justify-center sm:md:gap-x-4">
          <a href="#contact">
            <button className="sm:w-fit sm:py-2 sm:px-6 sm:text-lg sm:flex sm justify-center sm:items-center sm:gap-x-3 lg:text-lg lg:py-2 rounded-md bg-secondry text-primary ">
              <span className="font-medium capitalize">{t("Home.4")}</span>
              <FaIcons.FaArrowRightLong className="text-primary" />
            </button>
          </a>
          <a
            href="CV_Muh Nur Aqsal Aminullah.pdf"
            download={"CV_Muh Nur Aqsal Aminullah.pdf"}
          >
            <button className="sm:w-fit sm:py-2 sm:px-6 sm:text-lg sm:flex sm justify-center sm:items-center sm:gap-x-3 lg:text-lg lg:py-2 rounded-md border border-secondry text-secondry capitalize">
              <span>{t("Home.5")} CV</span>
              <FaIcons.FaDownload className="text-secondry" />
            </button>
          </a>
        </div>

        <div className="sm:flex sm:gap-x-5">
          <a
            href="https://wa.me/6281914753612"
            target="_blank"
            className="sm:w-12 sm:h-12 sm:flex sm:justify-center sm:items-center rounded-full bg-secondry/[.4]"
          >
            <img src={waIcons} className="w-6" alt="" />
          </a>
          <a
            href="https://t.me/muh_aqsal"
            target="_blank"
            className="sm:w-12 sm:h-12 sm:flex sm:justify-center sm:items-center rounded-full bg-secondry/[.4]"
          >
            <img src={telegramIcons} className="w-6" alt="" />
          </a>
          <a
            href="https://www.instagram.com/muh_aqsal04/"
            target="_blank"
            className="sm:w-12 sm:h-12 sm:flex sm:justify-center sm:items-center rounded-full bg-secondry/[.4]"
          >
            <img src={instagramIcons} className="w-6" alt="" />
          </a>
        </div>

        <div className="sm:my-20 h-10 border border-white/[.3]"></div>
      </div>

      {/* About me ----------------- >>> */}
      <div
        id="about"
        className="sm:mx-8 sm:py-28 md:mx-10 ld:px-[150px] lg:px-0 lg:mx-[200px]"
      >
        <div>
          <div className="mb-3 flex items-center justify-center ld:hidden">
            <div className="sm:w-20 border-t border-secondry"></div>
            <h1 className="text-secondry font-medium capitalize text-3xl text-center sm:w-fit sm:py-1 sm:mx-3 md:px-2 ">
              {t("About.1")}
            </h1>
            <div className="sm:w-20 border-t border-secondry"></div>
          </div>

          <div className="ld:flex ld:justify-between ld:gap-x-10 lg:gap-x-20">
            <div className="sm:flex sm:justify-center lg:justify-end ld:w-[40%]">
              <div className="sm:relative sm:mt-5 lg:mt-0 rounded-lg overflow-hidden">
                <img
                  src={bgProfile}
                  className="sm:w-[150px] ld:w-[250px]"
                  alt=""
                />
              </div>
            </div>

            <div className="sm:mt-8 ld:mt-0 ld:w-[60%]">
              <div className="ld:mb-3 ld:flex ld:items-center sm:hidden">
                <h1 className="text-secondry font-medium capitalize text-4xl text-center sm:w-fit sm:py-1 sm:mr-3 md:pr-2 ">
                  {t("About.1")}
                </h1>
                <div className="sm:w-20 border-t border-secondry"></div>
              </div>
              <p className="lg:text-lg sm:text-center ld:text-start">
                {t("About.2_1")}{" "}
                <span className="text-secondry">frontend developer</span>{" "}
                {t("About.2_2")}
              </p>
              <p className="lg:text-lg sm:text-center ld:text-start sm:mt-5">
                {t("About.3")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills and Teknology ----------------- >>> */}
      <div id="skills" className="sm:mx-8 sm:py-28 md:mx-10 lg:mx-[200px]">
        <div className="mb-3 flex items-center justify-center">
          <div className="sm:w-20 border-t border-secondry"></div>
          <h1 className="text-secondry font-medium capitalize text-4xl text-center sm:w-fit sm:py-1 md:px-2 ">
            {t("skills.1")}
          </h1>
          <div className="sm:w-20 border-t border-secondry"></div>
        </div>

        <div>
          <p className="md:px-20 lg:text-lg text-center mb-5">
            {t("skills.2_1")} <br className="sm:hidden ld:block" />{" "}
            {t("skills.2_2")}
          </p>
          <p className="md:px-20 lg:text-lg text-center">
            {t("skills.3_1")} <br className="sm:hidden ld:block" />{" "}
            {t("skills.3_2")}
          </p>
        </div>

        <div className="sm:flex sm:flex-wrap sm:justify-evenly sm:gap-3 md:justify-center md:gap-5 ld:px-24 lg:px-36 mt-5">
          <img src={htmlIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={cssIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={jsIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={reactIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={reduxToolkitIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={tailwindIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={bootstrapIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={gitIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={githubIcons} className="sm:w-20 md:w-fit" alt="" />
          <img src={postmanIcons} className="sm:w-20 md:w-fit" alt="" />
        </div>
      </div>

      {/* Portfolio ----------------- >>> */}
      <div id="portfolio" className="sm:mx-8 sm:py-28 md:mx-10 lg:mx-[200px]">
        <div className="mb-3 flex items-center justify-center">
          <div className="sm:w-20 border-t border-secondry"></div>
          <h1 className="text-secondry font-medium capitalize text-4xl text-center sm:w-fit sm:px-3 sm:py-1 md:px-2 ">
            {t("portfolio.1")}
          </h1>
          <div className="sm:w-20 border-t border-secondry"></div>
        </div>

        <div>
          <p className="md:px-20 lg:text-lg text-center mb-10">
            {t("portfolio.2_1")} <br className="sm:hidden ld:block" />{" "}
            {t("portfolio.2_2")}
          </p>
        </div>

        <div className="sm:flex sm:flex-col sm:gap-y-5 md:flex-row md:justify-between">
          {datasW.map((items) => (
            <CardOne data={items} />
          ))}
        </div>

        <div className="w-32 border border-white/[.1] m-auto my-10"></div>

        <div className="sm:flex sm:flex-col sm:gap-y-5 md:flex-row md:justify-between md:flex-wrap">
          {displayedData.map((item) => (
            <CardTwo data={item} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            className="sm:text-lg sm:py-2 sm:px-5 rounded-md md:text-xl md:px-8 border border-secondry text-center"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View less" : "View all"}
          </button>
        </div>
      </div>

      {/* Contact ----------------- >>> */}
      <div id="contact" className="sm:mx-8 sm:py-28 md:mx-10 lg:mx-[200px]">
        <div className="mb-3 flex items-center justify-center">
          <div className="sm:w-20 border-t border-secondry"></div>
          <h1 className="text-secondry font-medium capitalize text-4xl text-center sm:w-fit sm:px-3 sm:py-1 md:px-2 ">
            {t("Contact.1")}
          </h1>
          <div className="sm:w-20 border-t border-secondry"></div>
        </div>

        <div>
          <p className="md:px-20 lg:text-lg text-center mb-5">
            {t("Contact.2_1")}
            <br className="sm:hidden ld:block" />
            {t("Contact.2_2")}
          </p>
          <p className="md:px-20 lg:text-lg text-center">
            {t("Contact.3_1")} <br className="sm:hidden ld:block" />{" "}
            {t("Contact.3_2")}
          </p>
        </div>

        <div className="sm:mt-10">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="sm:w-full md:w-1/2 mx-auto"
          >
            <input
              name="to_name"
              type="text"
              placeholder="Name..."
              className="sm:w-full sm:p-3 sm:mb-3 md:py-4 rounded-md bg-black/[.2] outline-none"
            />
            <br />
            <input
              name="reply_to"
              type="email"
              placeholder="Email..."
              className="sm:w-full sm:p-3 sm:mb-3 md:py-4 rounded-md bg-black/[.2] outline-none"
            />
            <br />
            <textarea
              name="message"
              placeholder="Pesan..."
              className="sm:w-full sm:h-32 sm:p-3 sm:mb-3 md:py-4 md:h-40 ld:h-52 rounded-md bg-black/[.2] outline-none"
            ></textarea>

            <div className="sm:flex sm:justify-end">
              <button
                type="submit"
                value="Send"
                className="sm:flex sm:justify-center sm:items-center sm:gap-x-1 sm:w-32 sm:h-10 sm:text-lg font-semibold rounded-md bg-secondry text-primary capitalize"
              >
                <span>{t("Contact.4")}</span>
                <IoIosSend className="sm:w-7 sm:h-7" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Change language ----------------- >>> */}
      <button
        className="sm:h-14 sm:w-14 sm:bottom-5 sm:right-5 fixed rounded-md bg-secondry/[.3] backdrop-blur-md z-50"
        onClick={clickLanguage}
      >
        {i18n.language === "en" ? "EN" : "ID"}
      </button>

      <Footer />
    </div>
  );
};

export default Home;
