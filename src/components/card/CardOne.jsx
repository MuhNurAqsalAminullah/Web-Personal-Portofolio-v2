import React, { useEffect, useState } from "react";
import {
  FaCss3,
  FaExternalLinkAlt,
  FaEye,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const CardOne = ({ data }) => {
  const [skills, setSkills] = useState(data.skills);
  const [img, setImg] = useState(data.image);

  const [linkGithub, setLinkGithub] = useState(false);

  useEffect(() => {
    if (data.urlGithub === "") {
      setLinkGithub(true);
    }
  }, []);

  return (
    <div className="sm:w-full md:w-[45%] rounded-md overflow-hidden shadow-opsi-1 relative">
      <div className="sm:h-48 ld:h-60 sm:flex sm:items-center sm:justify-center bg-slate-500">
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

      <div className="sm:p-3">
        <div className="sm:flex sm:justify-between sm:items-center sm:text-xl md:text-xl capitalize font-bold">
          <h4>{data.title}</h4>
        </div>

        <div className="sm:flex sm:justify-between sm:items-center sm:gap-3">
          <div className="sm:flex sm:items-center sm:flex-wrap sm:gap-x-2 capitalize text-slate-400">
            {skills.map((item) => (
              <div>{item.title}</div>
            ))}
          </div>
          <div className="sm:flex sm:justify-between sm:items-center sm:gap-x-3">
            <a href={data.urlGithub} target="_blank">
              <FaGithub className={linkGithub ? "hidden" : "sm:w-6 sm:h-6"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
