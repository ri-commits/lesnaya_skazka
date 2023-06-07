"use client";
import { useState } from "react";
import Image from "next/image";
import owners_img from "../public/assets/owners.jpg";

const Owners = () => {
  const [showMore, setshowMore] = useState(false);

  const toggleShowMore = () => {
    setshowMore(!showMore);
  };

  return (
    <div
      className="flex m-5 justify-center flex-col items-center p-5 text-gray-800 "
      id="history"
    >
      <h1 className="md:text-8xl text-7xl font-caveat ">Немного о нас</h1>
      <h2 className=" self-end font-caveat md:text-3xl text-2xl pr-7">
        Наталья и Андрей
      </h2>
      <div className="pt-3  flex md:flex-row flex-col justify-between items-start ">
        <Image
          src={owners_img}
          width={520}
          height={330}
          className="w-full h-full mt-3 flex-1 rounded-xl mb-3"
        />

        <div className="text-md md:text-xl font-merri flex-1 md:pl-5">
          <p className="mb-3">
            <span className="ml-3"></span> Двадцать пять лет назад я и мой муж
            ездили и искали деревеньку, ку­да можно было бы вывезти детей из
            Бреста, в своем доме отдохнуть от города. Раскрыли карту и поехали
            по деревням Камянетчины. Одна очень приятная и добрая женщина
            посоветовала нам это место.
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>Действительно, когда мы приехали на
            это место, мы сразу почувствовали неописуемую силу этого места,
            здесь в полную меру чувствуешь силу природы, мысли очищаются и ты
            погружаешься в незабываемую сказку. Тяжело описать словами.
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>Все здесь делали своими руками -
            "воплощали мечту в реальность". Затем, появилась идея: принимать
            здесь гостей и делиться с другими этой незабываемой атмосферой.{" "}
          </p>
        </div>
      </div>
      {/* Here must be button to show rest text */}
      {showMore ? (
        <div className="text-md md:text-xl font-merri flex-1 md:pl-5">
          <p className="mb-3">
            <span className="ml-3"></span>Конечно же последствия пандемии и
            политической ситуации сказались на всех, мы это это почувствовали
            одни из первых, поэтому вместе с супругом решили осваивать сельское
            хозяйство и экологические продукты.{" "}
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>Сейчас в нашем поголовье: семейство
            необычайно карасивых козочек, породистые курочки, также две
            дружелюбных собачки и кошка. Территория участка - это целый плодовый
            сад с уникальными видами растений, муж увлекается выведением и
            селекцией. Так как нас со всех сторон окружает лес, грибы, лесные
            ягоды и травы - произрастают в изобилии.{" "}
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>Также мы делаем свой козий сыр и
            другие продукты из козьего молока, травяные сборы из лесных трав,
            мед и другие продукты. В общем: в продуктовый магазин мы ездим
            редко. Приезжайте к нам в гости, мы всегда рады делиться с людьми
            этой сказкой.
          </p>
        </div>
      ) : (
        ""
      )}
      <button
        className=" font-amatic border-collapse  text-2xl tracking-wide hover:underline"
        onClick={toggleShowMore}
      >
        {showMore ? "Скрыть" : "Показать продолжение"}
      </button>
    </div>
  );
};

export default Owners;
