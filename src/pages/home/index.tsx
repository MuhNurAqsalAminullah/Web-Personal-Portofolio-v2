"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import '../../../i18next'
import dynamic from "next/dynamic";

// Import React-icons ---------->
import * as IoIcons from "react-icons/io";
import * as FaIcons from "react-icons/fa6";
import * as FaIconss from "react-icons/fa";

// Import Components ---------->
// import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

// import images ---------->
import { waveVector, profileImage, aboutImage } from "../../data/images";
import SkillSlide from "../../components/slides/SkillSlide";
import { getPortfolio } from "../../lib/api";

const Home = () => {
  // Display data portfolio -------->
  const [datas, setData] = useState<any[]>([]);
  // const [showAll, setShowAll] = useState(false);
  // const [datasW, setDataW] = useState(workPortfolio);
  // const displayedData = showAll ? datas : datas.slice(0, 3);
  const Navbar = dynamic(() => import('../../components/navbar'), { 
    ssr: false 
  });

  const CardOne = dynamic(() => import('../../components/card/CardOne'), {
    ssr: false
  });

  const CardTwo = dynamic(() => import('../../components/card/CardTwo'), {
    ssr: false
  });

  // i18next translate id/en --------->
  const { t, i18n } = useTranslation();
  function clickLanguage() {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  }

  // EmailJs --------->
  const form = useRef<any>();
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

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try{
      const query = `*[_type == "portfolio"] | order(_createdAt asc){_id, title, urlGithub, urlDemo, description, image, "category": category[]->{ _id, title}}`
      const response = await getPortfolio(query)
      console.log("hhh response",response)
      setData(response)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
              <a href="https://wa.me/6281914753612" target="_blank" rel="noreferrer">
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
                   rel="noreferrer"
                >
                  <FaIcons.FaGithub className="sm:text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhnuraqsalaminullah/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaIcons.FaLinkedin className="sm:text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/muh_aqsal04/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaIconss.FaInstagramSquare className="sm:text-xl " />
                </a>
              </div>
            </div>
          </div>

          <div className=" sm:mt-3 sm:mb-20 sm:w-[200px] md:w-[250px] md:mb-24 ld:mb-28 ld:w-[300px] lg:w-[350px] lg:mt-0 lg:mb-0">
            <img src={profileImage.src} alt="" />
          </div>
        </div>

        <img src={waveVector.src} className="w-screen absolute bottom-0" alt="" />
      </div>

      {/* About me ----------------- >>> */}
      <div
        id="about"
        className="sm:px-8 sm:pt-24 md:px-10 ld:px-[150px] lg:px-[200px]"
      >
        <div className="sm:flex sm:flex-col md:justify-center ld:items-center ld:gap-x-5 ld:flex-row">
          <div className="sm:w-full">
            <img
              src={aboutImage.src}
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
          {datas.map((item, index) => {
            return (
              index % 2 === 0 ? (
                <CardOne
                  key={item._id}
                  i18n={i18n}
                  {...item}
                />
              ) : (
                <CardTwo
                  key={item._id}
                  i18n={i18n}
                  {...item}
                />
              )
            )}
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
            <a href="https://github.com/MuhNurAqsalAminullah" target="_blank" rel="noreferrer">
              <FaIcons.FaGithub className="sm:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhnuraqsalaminullah/"
              target="_blank"
               rel="noreferrer"
            >
              <FaIcons.FaLinkedin className="sm:text-xl" />
            </a>
            <a href="https://www.instagram.com/muh_aqsal04/" target="_blank" rel="noreferrer">
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
                <span>
                  {t("Contact.4")}
                </span>
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