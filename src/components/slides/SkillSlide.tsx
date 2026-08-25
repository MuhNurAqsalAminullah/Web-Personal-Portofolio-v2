import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// @ts-ignore – CSS imports are handled by the bundler, not by TypeScript
import "swiper/css";
// @ts-ignore
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
          <img src={htmlIcons.src} alt="html icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={cssIcons.src} alt="css icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={jsIcons.src} alt="javascript icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={reactIcons.src} alt="react icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={reduxToolkitIcons.src} alt="redux toolkit icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={tailwindIcons.src} alt="tailwind icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={bootstrapIcons.src} alt="bootsrap icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={gitIcons.src} alt="git icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={githubIcons.src} alt="github icons" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imge">
          <img src={postmanIcons.src} alt="postman icons" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SkillSlide;
