"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import reviews from "../public/assets/reviews/index.js";
import google_image from "../public/assets/reviews/google.png";
import Image from "next/image.js";

const Reviews = ({ isEnglish }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  let sliderRef;

  return (
    <div className=" bg-neutral-100">
      <div className="font-caveat flex flex-col justify-center items-center p-5 text-gray-800">
        <h1 className="md:text-8xl text-7xl ">
          {isEnglish ? "What is being said about us" : "То что о нас говорят"}
        </h1>
      </div>
      <div className="relative">
        <Slider {...settings} ref={(ref) => (sliderRef = ref)}>
          {Object.values(reviews).map((review) => (
            <div
              key={review.id}
              className="p-6 m-3 border rounded-md w-full h-full bg-white"
            >
              <div className="flex justify-between items-start">
                <div className="flex justify-start items-start gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={50}
                    height={50}
                    key={review.id}
                  />
                  <div className="flex flex-col justify-start items-start ">
                    <h1 className=" md:text-2xl text-xl font-bold text-gray-800">
                      {review.name}
                    </h1>
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                  </div>
                </div>
                <Image
                  src={google_image}
                  alt="google img"
                  width={100}
                  height={30}
                />
              </div>
              <p className="text-md md:text-xl font-merri text-gray-800 pt-3 tracking-wide">
                <span className="ml-3"></span>
                {isEnglish ? review.en : review.ru}
              </p>
            </div>
          ))}
        </Slider>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 "
          onClick={() => sliderRef.slickPrev()}
        >
          <BsArrowLeftShort className="h-20 w-20 opacity-50 hover:opacity-100 hover:scale-[110%]" />
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 h-full "
          onClick={() => sliderRef.slickNext()}
        >
          <BsArrowRightShort className="h-20 w-20 opacity-50 hover:opacity-100 hover:scale-[110%] " />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
