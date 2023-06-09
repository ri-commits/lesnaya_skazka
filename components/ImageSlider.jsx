"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import images from "../public/assets/index.js";
import Image from "next/image.js";

const ImageSlider = ({ isEnglish }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  let sliderRef;

  return (
    <div className=" p-3 pb-12 bg-neutral-100">
      <div className="font-caveat flex flex-col justify-center items-center p-5 text-gray-800">
        <h1 className="md:text-8xl text-7xl ">
          {isEnglish ? `What surrounds us` : `То что нас окружает`}
        </h1>
        <div className="flex gap-10 pt-2 text-2xl">
          <p>{isEnglish ? "nature" : "природа"}</p>
          <p>{isEnglish ? "appeasement" : "умиратворение"}</p>
          <p>{isEnglish ? "fairy tale" : "сказка"}</p>
        </div>
      </div>
      <div className="relative">
        <Slider {...settings} ref={(ref) => (sliderRef = ref)}>
          {Object.values(images).map((image, index) => (
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={400}
              height={600}
              className="w-full px-1"
              key={`Image ${index + 1}`}
            />
          ))}
        </Slider>

        <button
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white "
          onClick={() => sliderRef.slickPrev()}
        >
          <HiChevronLeft className="h-20 w-20 opacity-50 hover:opacity-100 hover:scale-[110%]" />
        </button>

        <button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white h-full "
          onClick={() => sliderRef.slickNext()}
        >
          <HiChevronRight className="h-20 w-20 opacity-50 hover:opacity-100 hover:scale-[110%] " />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
