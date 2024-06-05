import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

// Import React-icons ---------->
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa6";
import * as FaIconss from "react-icons/fa";

// Import Components ---------->
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CardOne from "../../components/card/CardOne";
import CardTwo from "../../components/card/CardTwo";
import personalPortfolio from "../../data/Portfolio";

// import images ---------->
import { waveVector, profileImage, aboutImage } from "../../data/images";
import SkillSlide from "../../components/slides/SkillSlide";

const Home = () => {
  // Display data portfolio -------->
  const [datas, setData] = useState(personalPortfolio);
  // const [showAll, setShowAll] = useState(false);
  // const [datasW, setDataW] = useState(workPortfolio);
  // const displayedData = showAll ? datas : datas.slice(0, 3);

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
      <Navbar t={t} i18n={i18n} clickLanguage={clickLanguage} />

      {/* Banner Hero ----------------- >>> */}
      <div id="Home" className="bg-primary sm:h-full lg:h-screen relative">
        <div className="sm:px-5 sm:pt-24 sm:flex sm:items-center sm:flex-col md:px-[100px] md:pt-32 lg:pt-32 lg:flex-row lg:justify-between lg:px-[150px] ">
          <div className="sm:text-center sm:mb-5 md:mb-10 lg:mb-0 lg:text-start ld:w-3/4 lg:w-1/2 ">
            <h3 className="sm:text-base md:text-lg xl:text-xl text-white mb-1 capitalize">
              {/* Hi, there! */}
              {t("Home.1")}
            </h3>
            <h1 className="sm:text-4xl md:text-5xl xl:text-6xl text-white font-bold sm:mb-8 capitalize">
              {/* I’m{" "} */}
              {t("Home.2")}{" "}
              <span className="text-secondary font-[K2D]">
                Muh Nur Aqsal Aminullah 👋🏻
              </span>
            </h1>
            <p className="sm:text-sm md:text-base xl:text-lg text-white sm:mb-8">
              <span className="capitalize">{t("Home.3_1")} </span>
              <span className="font-bold">{t("Home.3_2")}</span> {t("Home.3_3")}
            </p>

            <div className="sm:mb-8 flex sm:justify-center lg:justify-start gap-x-5">
              <a href="https://wa.me/6281914753612" target="_blank">
                <button className="sm:text-sm md:text-base xl:text-lg px-5 py-1 font-[K2D] rounded-md bg-secondary text-primary font-bold uppercase">
                  {/* HIRE ME */}
                  {t("Home.4")}
                </button>
              </a>
              <a
                href="CV_Muh Nur Aqsal Aminullah.pdf"
                download={"CV_Muh Nur Aqsal Aminullah.pdf"}
                className="flex gap-x-3 sm:text-sm md:text-base xl:text-lg py-1 rounded-md text-secondary font-semibold uppercase"
              >
                {/* <p className="font-[K2D]">DOWNLOAD MY CV</p> */}
                <p className="font-[K2D]">{t("Home.5")}</p>
                <FaIcons.FaDownload className="text-secondry" />
              </a>
            </div>

            <div className="text-white">
              <div className="flex sm:justify-center lg:justify-normal gap-x-3">
                <a
                  href="https://github.com/MuhNurAqsalAminullah"
                  target="_blank"
                >
                  <FaIcons.FaGithub className="sm:text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhnuraqsalaminullah/"
                  target="_blank"
                >
                  <FaIcons.FaLinkedin className="sm:text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/muh_aqsal04/"
                  target="_blank"
                >
                  <FaIconss.FaInstagramSquare className="sm:text-xl " />
                </a>
              </div>
            </div>
          </div>

          <div className=" sm:mt-3 sm:mb-20 sm:w-[200px] md:w-[250px] md:mb-24 ld:mb-28 ld:w-[300px] lg:w-[350px] lg:mt-0 lg:mb-0">
            <img src={profileImage} alt="" />
          </div>
        </div>

        <img src={waveVector} className="w-screen absolute bottom-0" alt="" />
      </div>

      {/* About me ----------------- >>> */}
      <div
        id="about"
        className="sm:px-8 sm:pt-24 md:px-10 ld:px-[150px] lg:px-[200px]"
      >
        <div className="sm:flex sm:flex-col md:justify-center ld:items-center ld:gap-x-5 ld:flex-row">
          <div className="sm:w-full">
            <img
              src={aboutImage}
              className="sm:w-2/3 md:w-1/2 ld:w-3/4 lg:w-3/4 md:m-auto ld:m-0 rounded-lg m-auto"
              alt=""
            />
          </div>

          <div className="sm:w-full sm:mt-5 ld:mt-0">
            <h1 className="sm:text-2xl lg:text-3xl sm:text-center ld:text-start uppercase font-[Mali] font-bold text-secondary">
              {t("About.1")}
            </h1>
            <h2 className="sm:text-xl lg:text-2xl sm:text-center ld:text-start font-bold text-primary capitalize">
              frontend developer
            </h2>
            <p className="text-text-1 mt-4 sm:text-center ld:text-start">
              {t("About.2")}
            </p>
            <p className="text-text-1 mt-4 sm:text-center ld:text-start">
              {t("About.3")}
            </p>
          </div>
        </div>
      </div>

      {/* Skills and Teknology ----------------- >>> */}
      <div id="skills" className="sm:pt-28">
        <div className="sm:px-8 sm:py-10 md:px-10  lg:px-[150px] bg-primary border">
          <div className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-y-5 ld:gap-y-0 ld:flex-row ld:gap-x-5">
            <div className="">
              <h1 className="sm:text-2xl lg:text-3xl text-secondary font-bold font-[Mali] whitespace-nowrap uppercase">
                {/* TECH STACK SKILLS */}
                {t("Skills.1")}
              </h1>
            </div>
            <span className="sm:hidden ld:block text-white">|</span>
            <div className=" sm:w-full ld:w-[60%] lg:w-[70%] relative">
              <SkillSlide />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio ----------------- >>> */}
      <div id="portfolio" className="sm:px-8 sm:pt-28 md:px-10 lg:px-[200px]">
        <h1 className="sm:text-2xl lg:text-3xl sm:text-center ld:text-start uppercase font-[Mali] font-bold text-secondary">
          {t("portfolio.1_1")}{" "}
          <span className="lowercase">{t("portfolio.1_2")}</span>{" "}
          {t("portfolio.1_3")} 🧩
        </h1>
        <p className="text-text-1 mt-2">
          {t("portfolio.2_1")} <br />
          {t("portfolio.2_2")}
        </p>

        <div className="mt-10 ld:px-14">
          {datas.map((item) =>
            item.id % 2 === 0 ? (
              <CardOne
                key={item.id}
                {...item}
                description={item.description[i18n.language]}
              />
            ) : (
              <CardTwo
                key={item.id}
                {...item}
                description={item.description[i18n.language]}
              />
            )
          )}
        </div>
      </div>

      {/* Contact ----------------- >>> */}
      <div id="contact" className="sm:px-8 sm:py-28 md:px-10 lg:px-[200px]">
        <div className="mb-3 flex items-center justify-center">
          <h1 className="sm:text-2xl lg:text-3xl sm:text-center ld:text-start uppercase font-[Mali] font-bold text-secondary">
            {t("Contact.1")}
          </h1>
        </div>

        <div>
          <p className="text-text-1 text-center mb-5">
            {t("Contact.2_1")}
            <br className="sm:hidden ld:block" />
            {t("Contact.2_2")}
          </p>
          <p className="text-text-1 text-center">
            {t("Contact.3_1")} <br className="sm:hidden ld:block" />{" "}
            {t("Contact.3_2")}
          </p>
        </div>

        <div className="text-primary mt-4">
          <div className="flex sm:justify-center gap-x-3">
            <a href="https://github.com/MuhNurAqsalAminullah" target="_blank">
              <FaIcons.FaGithub className="sm:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhnuraqsalaminullah/"
              target="_blank"
            >
              <FaIcons.FaLinkedin className="sm:text-xl" />
            </a>
            <a href="https://www.instagram.com/muh_aqsal04/" target="_blank">
              <FaIconss.FaInstagramSquare className="sm:text-xl " />
            </a>
          </div>
        </div>

        <div className="sm:mt-5">
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
                className="sm:flex sm:justify-center sm:items-center sm:gap-x-1 sm:w-32 sm:h-10 font-semibold rounded-md bg-secondary text-white capitalize"
              >
                <span>{t("Contact.4")}</span>
                <IoIcons.IoIosSend className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;

// Banner v2
{
  /* <div
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
      </div> */
}

// About v2
{
  /* <div
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
              <div className="sm:relative sm:mt-5 lg:mt-0 rounded-lg overflow-hidden bg-slate-400">
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
      </div> */
}

// Skills v2
{
  /* <div id="skills" className="sm:mx-8 sm:py-28 md:mx-10 lg:mx-[200px]">
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
      </div> */
}

// Project v2
{
  /* <div id="portfolio" className="sm:mx-8 sm:py-28 md:mx-10 lg:mx-[200px]">
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
      </div> */
}

// Change language v2
{
  /* <button
        className="sm:h-14 sm:w-14 sm:bottom-5 sm:right-5 fixed rounded-md bg-secondry/[.3] backdrop-blur-md z-50"
        onClick={clickLanguage}
      >
        {i18n.language === "en" ? "EN" : "ID"}
      </button> */
}
