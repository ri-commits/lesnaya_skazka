"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Baner = () => {
  const links = [
    {
      name: "ИСТОРИЯ",
      id: "#history",
    },
    {
      name: "УДОБСТВА",
      id: "#facilities",
    },
    {
      name: "РАЗВЛЕЧЕНИЯ",
      id: "#entertaiment",
    },
    {
      name: "КОНТАКТ",
      id: "#contact",
    },
  ];
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.getElementById("header").clientHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsBannerVisible(scrollTop < headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-300 ${
        isBannerVisible ? "" : "-translate-y-1/2"
      }`}
    >
      <div className="relative">
        <h1 className="absolute top-1 left-3 font-amatic text-white text-3xl tracking-wider cursor-pointer font-bold">
          L<span className="font-normal ">|</span>S
        </h1>
        <div
          className="font-pattaya bg-violet-950 text-white flex
              justify-center items-center p-3 tracking-wider"
        >
          Агроусадьба Лесная Сказка
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 p-3 bg-white">
        {links.map((link) => (
          <Link
            href={link.id}
            className="font-amatic  sm:text-3xl text-2xl tracking-wide px-3 hover:underline"
            key={link.id}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Baner;
