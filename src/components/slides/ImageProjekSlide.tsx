import React, { useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// @ts-ignore – CSS imports are handled by the bundler, not by TypeScript
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { urlFor } from "../../lib/sanity";

const ImageProjekSlide = ({data}: {data: any[]}) => {
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
            <img src={urlFor(items.asset).url()} alt={items.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageProjekSlide;
