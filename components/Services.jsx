"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import services from "../public/assets/services/index.js";
import Image from "next/image.js";

const Services = ({ isEnglish }) => {
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
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderRef;

  return (
    <div className="  pb-12 bg-neutral-100" id="entertaiment">
      <div className="font-caveat flex flex-col justify-center items-center p-5 text-gray-800">
        <h1 className="md:text-8xl text-7xl ">
          {isEnglish ? "Everything you need" : "Все что нужно"}
        </h1>
      </div>
      <div className="relative">
        <Slider {...settings} ref={(ref) => (sliderRef = ref)}>
          {Object.values(services).map((service, index) => (
            <div className="flex flex-col justify-center items-center gap-3 border p-3 bg-white shadow">
              <Image
                src={service.image}
                alt={`Image ${index + 1}`}
                width={500}
                height={450}
                className="w-full px-1"
                key={`Image ${index + 1}`}
              />
              <div className="flex flex-col justify-center items-center gap-3 pt-3 text-3xl">
                <h3 className=" font-caveat text-gray-800 self-center ">
                  {isEnglish ? service.en : service.ru}
                </h3>
              </div>
            </div>
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

export default Services;
