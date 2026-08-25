import React, { useEffect, useState } from "react";

import * as FaIconss from "react-icons/fa";

import ImageProjekSlide from "../slides/ImageProjekSlide";

interface Props {
  i18n: any;
  title: string;
  description: string;
  category: any[];
  image: { img: string }[];
  urlGithub: string;
  urlDemo: string;
}

const CardOne = (props: Props) => {
  const { i18n, title, description, category, image, urlGithub, urlDemo } = props;

  const [linkGithub, setLinkGithub] = useState(false);
  const [linkDemo, setLinkDemo] = useState(false);

  useEffect(() => {
    console.log("hhh image :", image);
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
            {description[i18n.language]}
          </p>

          <div className="sm:flex gap-x-3 justify-center font-bold">
            {category.map((items) => (
              <p key={items?._id} className="font-[K2D] text-primary capitalize">
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
