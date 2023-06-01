"use client";

import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <video autoPlay playsInline loop muted className="w-full h-full z-[-1]">
        <source
          type="video/mp4"
          src="https://res.cloudinary.com/dyovdhidc/video/upload/v1685531829/Desktop_a4q6hi.mp4"
        />
      </video>
      <div className="absolute group  flex flex-col  justify-center gap-10 lg:gap-20">
        {/* <h1 className=" lg:text-7xl md:text-6xl text-4xl font-bold bg-clip-text text-transparent cursor-pointer  group-hover:bg-gradient-to-b from-orange-500 to-yellow-300  transition-colors outlinee ">
          Лесная Сказка
        </h1> */}
        <button className=" lg:text-lg outline_btn  group-hover:bg-gradient-to-r from-green-200 to-green-500  group-hover:text-black transform transition-transform hover:scale-110">
          Забронировать
        </button>
      </div>
    </div>
  );
};

export default Header;
