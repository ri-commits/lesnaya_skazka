"use client";

import React from "react";

const Header = () => {
  return (
    <div
      className="relative w-full h-full flex items-end justify-center"
      id="header"
    >
      <video autoPlay playsInline loop muted className="w-full h-full z-[-1]">
        <source
          type="video/mp4"
          src="https://res.cloudinary.com/dyovdhidc/video/upload/v1685531829/Desktop_a4q6hi.mp4"
        />
      </video>

      {/* <button className="absolute mb-40 font-pattaya lg:text-lg outline_btn  hover:bg-gradient-to-r from-green-200 to-green-500  hover:text-black transform transition-transform hover:scale-110">
        Забронировать
      </button> */}
    </div>
  );
};

export default Header;
