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
      <h1 className="absolute  text-6xl font-bold bg-clip-text text-transparent cursor-pointer hover:text-white transition-colors outlinee ">
        Лесная Сказка
      </h1>
    </div>
  );
};

export default Header;
