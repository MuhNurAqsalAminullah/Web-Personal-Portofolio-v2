import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import {
  bootstrapIcons,
  cssIcons,
  gitIcons,
  githubIcons,
  htmlIcons,
  jsIcons,
  postmanIcons,
  reactIcons,
  reduxToolkitIcons,
  tailwindIcons,
} from "../../data/images";

const SkillSlide = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 6,
        },
        992: {
          slidesPerView: 7,
        },
      }}
      slidesPerView={5}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      loop={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="imge">
          <img src={htmlIcons} alt="html icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={cssIcons} alt="css icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={jsIcons} alt="javascript icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={reactIcons} alt="react icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={reduxToolkitIcons} alt="redux toolkit icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={tailwindIcons} alt="tailwind icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={bootstrapIcons} alt="bootsrap icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={gitIcons} alt="git icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={githubIcons} alt="github icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={postmanIcons} alt="postman icons" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillSlide;
// <div className="border border-red-400 sm:w-full md:w-[45%]">
{
  /* <div className="sm:w-full bg-slate-500"> */
}
{
  /* </div> */
}
// </div>
