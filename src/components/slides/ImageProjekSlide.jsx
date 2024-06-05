import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const ImageProjekSlide = ({ data }) => {
  return (
    <div className="h-full shadow-lg rounded-lg overflow-hidden">
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
        {data.map((items) => (
          <SwiperSlide
            key={items.id}
            className="text-black flex justify-center items-center"
          >
            <img src={items.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageProjekSlide;
