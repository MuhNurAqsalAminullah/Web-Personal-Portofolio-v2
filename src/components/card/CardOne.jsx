import React, { useEffect, useState } from "react";

import * as FaIconss from "react-icons/fa";

import ImageProjekSlide from "../slides/ImageProjekSlide";

const CardOne = (props) => {
  const { title, description, skills, image, urlGithub, urlDemo } = props;

  const [linkGithub, setLinkGithub] = useState(false);
  const [linkDemo, setLinkDemo] = useState(false);

  useEffect(() => {
    if (urlGithub === "") {
      setLinkGithub(true);
    }
    if (urlDemo === "") {
      setLinkDemo(true);
    }
  }, []);

  return (
    <div className="sm:flex sm:flex-col md:flex-row md:justify-between">
      <div className=" sm:w-full sm:h-48 md:w-[45%] md:my-auto ld:my-0 ld:h-60">
        <ImageProjekSlide data={image} />
      </div>
      <div className="sm:w-full flex flex-col justify-between md:w-[45%]">
        <div className="">
          <h3 className="uppercase font-[K2D] sm:mt-5 md:mt-0 font-bold sm:text-lg lg:text-xl text-center mb-3">
            {title}
          </h3>
          <p className="text-text-1 text-center sm:mb-1 ld:mb-3">
            {description}
          </p>

          <div className="sm:flex gap-x-3 justify-center font-bold">
            {skills.map((items) => (
              <p key={items.id} className="font-[K2D] text-primary capitalize">
                {items.title}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-x-5 justify-center sm:mt-3 ld:mt-0">
          <a
            href={urlGithub}
            target="_blank"
            className={linkGithub ? "hidden" : "flex items-center gap-x-2"}
          >
            <p className="text-primary font-[K2D] font-bold capitalize">
              github
            </p>
            <FaIconss.FaGithub className="text-primary" />
          </a>
          <a
            href={urlDemo}
            target="_blank"
            className={linkDemo ? "hidden" : "flex items-center gap-x-2"}
          >
            <p className="text-primary font-[K2D] font-bold capitalize">
              link demo
            </p>
            <FaIconss.FaExternalLinkAlt className="text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardOne;

// CardOne v2
// const CardOne = ({ data }) => {
//   const [skills, setSkills] = useState(data.skills);
//   const [img, setImg] = useState(data.image);

//   const [linkGithub, setLinkGithub] = useState(false);

//   useEffect(() => {
//     if (data.urlGithub === "") {
//       setLinkGithub(true);
//     }
//   }, []);

//   return (
//     <div className="sm:w-full md:w-[45%] rounded-md overflow-hidden shadow-opsi-1 relative">
//       <div className="sm:h-48 ld:h-60 sm:flex sm:items-center sm:justify-center bg-slate-500">
//         <Swiper
//           pagination={{
//             clickable: true,
//           }}
//           autoplay={{
//             delay: 3000,
//           }}
//           modules={[Pagination, Autoplay]}
//           className="mySwiper"
//         >
//           {img.map((item) => (
//             <SwiperSlide className="text-black flex justify-center items-center">
//               <img src={item.img} alt="" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="sm:p-3">
//         <div className="sm:flex sm:justify-between sm:items-center sm:text-xl md:text-xl capitalize font-bold">
//           <h4>{data.title}</h4>
//         </div>

//         <div className="sm:flex sm:justify-between sm:items-center sm:gap-3">
//           <div className="sm:flex sm:items-center sm:flex-wrap sm:gap-x-2 capitalize text-slate-400">
//             {skills.map((item) => (
//               <div>{item.title}</div>
//             ))}
//           </div>
//           <div className="sm:flex sm:justify-between sm:items-center sm:gap-x-3">
//             <a href={data.urlGithub} target="_blank">
//               <FaGithub className={linkGithub ? "hidden" : "sm:w-6 sm:h-6"} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardOne;
