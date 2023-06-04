"use client";

import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../public/assets/index.js";
import Image from "next/image.js";

const ImageSlider = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      // Function to slide to the next image
      sliderRef.slickNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  let sliderRef;

  return (
    <div className="relative">
      <Slider {...settings} ref={(ref) => (sliderRef = ref)}>
        {Object.values(images).map((image, index) => (
          <div key={index} className="flex itens-center justify-center">
            <div className="w-full h-full">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={730}
                height={920}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
