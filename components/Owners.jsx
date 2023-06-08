"use client";
import { useState } from "react";
import Image from "next/image";
import owners_img from "../public/assets/owners.jpg";

const Owners = ({ isEnglish }) => {
  const [showMore, setshowMore] = useState(false);

  const toggleShowMore = () => {
    setshowMore(!showMore);
  };

  return (
    <div
      className="flex m-5 justify-center flex-col items-center p-5 text-gray-800 "
      id="history"
    >
      <h1 className="md:text-8xl text-7xl font-caveat ">
        {isEnglish ? "A little about us" : "Немного о нас"}
      </h1>
      <h2 className=" self-end font-caveat md:text-3xl text-2xl pr-7">
        {isEnglish ? "Natalia and Andrey" : "Наталья и Андрей"}
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
            <span className="ml-3"></span>{" "}
            {isEnglish
              ? `Twenty-five years ago, my husband and I went and looked for a village where we could take our children from Brest, in our house to take a break from the city. We opened the map and drove through the villages of Kamyanetschina. One very nice and kind woman advised us this place.`
              : `Двадцать пять лет назад я и мой муж
            ездили и искали деревеньку, ку­да можно было бы вывезти детей из
            Бреста, в своем доме отдохнуть от города. Раскрыли карту и поехали
            по деревням Камянетчины. Одна очень приятная и добрая женщина
            посоветовала нам это место.`}
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>
            {isEnglish
              ? `Indeed, when we arrived at this place, we immediately felt the indescribable power of this place, here you fully feel the power of nature, thoughts are cleared and you are immersed in an unforgettable fairy tale. It's hard to describe in words.`
              : `Действительно, когда мы приехали на
            это место, мы сразу почувствовали неописуемую силу этого места,
            здесь в полную меру чувствуешь силу природы, мысли очищаются и ты
            погружаешься в незабываемую сказку. Тяжело описать словами.`}
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>
            {isEnglish
              ? `Everything here was done with their own hands - "made the dream come true." Then, an idea appeared: to host guests here and share this unforgettable atmosphere with others.`
              : `Все здесь делали своими руками -
            "воплощали мечту в реальность". Затем, появилась идея: принимать
            здесь гостей и делиться с другими этой незабываемой атмосферой.`}
          </p>
        </div>
      </div>
      {/* Here must be button to show rest text */}
      {showMore ? (
        <div className="text-md md:text-xl font-merri flex-1 md:pl-5">
          <p className="mb-3">
            <span className="ml-3"></span>
            {isEnglish
              ? `Of course, the consequences of the pandemic and the political situation affected everyone, we were among the first to feel it, so together with my husband we decided to master agriculture and environmental products.`
              : `Конечно же последствия пандемии и
            политической ситуации сказались на всех, мы это это почувствовали
            одни из первых, поэтому вместе с супругом решили осваивать сельское
            хозяйство и экологические продукты.`}
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>
            {isEnglish
              ? `Now in our livestock: a family of unusually crucian goats, thoroughbred hens, also two friendly dogs and a cat. The territory of the plot is a whole orchard with unique plant species, the husband is fond of breeding and selection. Since we are surrounded on all sides by the forest, mushrooms, forest berries and herbs grow in abundance.`
              : `Сейчас в нашем поголовье: семейство
            необычайно карасивых козочек, породистые курочки, также две
            дружелюбных собачки и кошка. Территория участка - это целый плодовый
            сад с уникальными видами растений, муж увлекается выведением и
            селекцией. Так как нас со всех сторон окружает лес, грибы, лесные
            ягоды и травы - произрастают в изобилии.`}
          </p>
          <p className="mb-3">
            <span className="ml-3"></span>
            {isEnglish
              ? `We also make our own goat cheese and other products from goat milk, herbal preparations from forest herbs, honey and other products. In general: we rarely go to the grocery store. Come visit us, we are always happy to share this fairy tale with people.`
              : `Также мы делаем свой козий сыр и
            другие продукты из козьего молока, травяные сборы из лесных трав,
            мед и другие продукты. В общем: в продуктовый магазин мы ездим
            редко. Приезжайте к нам в гости, мы всегда рады делиться с людьми
            этой сказкой.`}
          </p>
        </div>
      ) : (
        ""
      )}
      <button
        className=" font-amatic border-collapse  text-2xl tracking-wide hover:underline"
        onClick={toggleShowMore}
      >
        {showMore
          ? isEnglish
            ? "Hide"
            : "Скрыть"
          : isEnglish
          ? "Show More"
          : "Показать продолжение"}
      </button>
    </div>
  );
};

export default Owners;
