"use client";
import Image from "next/image";
import React from "react";
import sotial from "../public/assets/contacts/index.js";
import map from "../public/assets/map.jpg";

const Footer = ({ isEnglish }) => {
  const phoneNumber = "+375292296151";
  const googleMapsUrl =
    "https://www.google.com/maps/place/Agrousadba+Lesnaya+Skazka/@52.5792643,23.7377595,15z/data=!4m21!1m11!3m10!1s0x47205ae7c7f062d9:0x974eddf2ee9ddc4d!2sAgrousadba+Lesnaya+Skazka!5m2!4m1!1i2!8m2!3d52.5818635!4d23.7467304!10e7!16s%2Fg%2F11c5btyhc_!3m8!1s0x47205ae7c7f062d9:0x974eddf2ee9ddc4d!5m2!4m1!1i2!8m2!3d52.5818635!4d23.7467304!16s%2Fg%2F11c5btyhc_?entry=ttu";
  const instagramUrl = "https://www.instagram.com/usadba_lesnaja_skazka/";
  const whatsappUrl = "https://wa.me/375292296151";
  const viberUrl = "viber://chat?number=+375292296151";
  const telegramUrl = "https://telegram.me/yourtelegramusername";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    window.location.href = whatsappUrl;
  };

  const handleViberClick = () => {
    window.location.href = viberUrl;
  };

  return (
    <div id="contact">
      <div className="font-caveat  p-5 text-gray-700">
        <h2 className="md:text-8xl text-7xl ">
          {isEnglish
            ? "Please contact us for more information and booking."
            : "Пожалуйста свяжитесь с нами для уточнения информации и бронирования"}
        </h2>
      </div>
      <div className="font-caveat  p-5 text-gray-800">
        <h1 className="md:text-8xl text-7xl ">
          {isEnglish ? "Contact" : "Контакт"} ↓
        </h1>
      </div>
      <div
        className="font-merri bg-violet-950 text-white flex 
              justify-between items-start p-3 md:p-5 tracking-wider py-20"
      >
        <div>
          <ul className="pb-5">
            <li className="pb-3 hover:underline">
              {isEnglish ? "Adres:" : "Адрес:"}{" "}
              <a href={googleMapsUrl}>
                Деревня Вилы 21, Belaya 224000, Belarus
              </a>
            </li>
            <li className="pb-1 hover:underline">
              {isEnglish ? "Phone" : "Телефон:"}{" "}
              <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
                {phoneNumber}
              </a>
            </li>
            {/* <li className="pb-1 hover:underline">
            Email:{" "}
            <a href="mailto:your-email@example.com">your-email@example.com</a>
          </li> */}
          </ul>
          <div className="flex gap-3">
            {sotial.map((soc) => (
              <a href={soc.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={soc.icon}
                  alt={soc.name}
                  width={50}
                  height={50}
                  className="hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-2
        md:flex-row md:gap-20 md:mr-10"
        >
          <h2 className=" font-caveat text-4xl md:text-6xl">
            {isEnglish ? "Map" : "Карта"} →
          </h2>
          <Image
            src={map}
            width={150}
            height={100}
            alt="Map"
            className="rounded-2xl hover:scale-90 hover:shadow-2xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
