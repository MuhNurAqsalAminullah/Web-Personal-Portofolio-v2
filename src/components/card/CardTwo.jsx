import React, { Fragment, useEffect, useState } from "react";
import { FaExternalLinkAlt, FaEye, FaGithub } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const CardTwo = ({ data }) => {
  const [skills, setSkills] = useState(data.skills);
  const [img, setImg] = useState(data.image);

  const [linkGithub, setLinkGithub] = useState(false);
  const [linkDemo, setLinkDemo] = useState(false);

  useEffect(() => {
    if (data.urlGithub === "") {
      setLinkGithub(true);
    }
    if (data.urlDemo === "") {
      setLinkDemo(true);
    }
  }, []);

  return (
    <div className="sm:w-full sm:h-full md:w-[32%] rounded-md overflow-hidden shadow-opsi-1 relative">
      <div className="sm:h-48 md:h-36 ld:h-48 bg-slate-500">
        <Swiper
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {img.map((item) => (
            <SwiperSlide className="text-black flex justify-center items-center">
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="sm:p-3 sm:flex sm:flex-col sm:justify-between">
        <div className="sm:flex sm:justify-between sm:items-center sm:text-xl capitalize font-bold">
          <h4>{data.title}</h4>
        </div>

        <div className="sm:flex sm:justify-between sm:items-end sm:gap-x-5">
          <div className="sm:flex sm:items-center sm:flex-wrap sm:gap-x-2 capitalize text-slate-400">
            {skills.map((item) => (
              <div>{item.title}</div>
            ))}
          </div>

          <div className="sm:flex sm:justify-between sm:items-center sm:gap-x-3">
            <a href={data.urlDemo} target="_blank">
              <FaExternalLinkAlt
                className={linkDemo ? "hidden" : "sm:w-5 sm:h-5"}
              />
            </a>
            <a href={data.urlGithub} target="_blank">
              <FaGithub className={linkGithub ? "hidden" : "sm:w-5 sm:h-5"} />
            </a>
            {/* <FaExternalLinkAlt className="sm:w-5 sm:h-5" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
