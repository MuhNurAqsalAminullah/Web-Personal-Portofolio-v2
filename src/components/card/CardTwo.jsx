import React, { useEffect, useState } from "react";
import * as FaIconss from "react-icons/fa";
import ImageProjekSlide from "../slides/ImageProjekSlide";

const CardTwo = (props) => {
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
    <div className="sm:flex sm:flex-col-reverse md:flex-row md:justify-between my-20">
      <div className="sm:w-full flex flex-col justify-between md:w-[45%]">
        <div className="">
          <h3 className="uppercase font-[K2D] font-bold sm:text-lg sm:mt-5 md:mt-0 lg:text-xl text-center mb-3">
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
      <div className="sm:w-full sm:h-48 md:w-[45%] md:my-auto ld:my-0 ld:h-60">
        <ImageProjekSlide data={image} />
      </div>
    </div>
  );
};

export default CardTwo;

// CardTwo v2
// const CardTwo = ({ data }) => {
//   const [skills, setSkills] = useState(data.skills);
//   const [img, setImg] = useState(data.image);

//   const [linkGithub, setLinkGithub] = useState(false);
//   const [linkDemo, setLinkDemo] = useState(false);

//   useEffect(() => {
//     if (data.urlGithub === "") {
//       setLinkGithub(true);
//     }
//     if (data.urlDemo === "") {
//       setLinkDemo(true);
//     }
//   }, []);

//   return (
//     <div className="sm:w-full sm:h-full md:w-[32%] rounded-md overflow-hidden shadow-opsi-1 relative">
//       <div className="sm:h-48 md:h-36 ld:h-48 bg-slate-500">
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

//       <div className="sm:p-3 sm:flex sm:flex-col sm:justify-between">
//         <div className="sm:flex sm:justify-between sm:items-center sm:text-xl capitalize font-bold">
//           <h4>{data.title}</h4>
//         </div>

//         <div className="sm:flex sm:justify-between sm:items-end sm:gap-x-5">
//           <div className="sm:flex sm:items-center sm:flex-wrap sm:gap-x-2 capitalize text-slate-400">
//             {skills.map((item) => (
//               <div>{item.title}</div>
//             ))}
//           </div>

//           <div className="sm:flex sm:justify-between sm:items-center sm:gap-x-3">
//             <a href={data.urlDemo} target="_blank">
//               <FaExternalLinkAlt
//                 className={linkDemo ? "hidden" : "sm:w-5 sm:h-5"}
//               />
//             </a>
//             <a href={data.urlGithub} target="_blank">
//               <FaGithub className={linkGithub ? "hidden" : "sm:w-5 sm:h-5"} />
//             </a>
//             {/* <FaExternalLinkAlt className="sm:w-5 sm:h-5" /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// selanjutnya saya ingin memberikan 2 bahasa berbeda pada website saya buat sebelumnya yaitu dengan bahasa indonesia dan inggris menggunakan i18next react
