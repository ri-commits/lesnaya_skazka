import Image from "next/image";
import React from "react";
import vily from "../public/assets/vily.jpg";

const About = () => {
  return (
    <div className="flex justify-center flex-col items-center p-5 text-gray-800 ">
      <h1 className="md:text-8xl text-7xl font-caveat ">Место Силы</h1>
      <div className="pt-3 m-5 flex flex-col md:flex-row justify-between items-center ">
        <div className="text-md md:text-xl font-merri flex-1 md:pl-5">
          <p>
            <span className="text-3xl text-bold ">C</span>реди Беловежской пущи,
            волшебная деревня Вилы расцветает. Она уютно украшена Лесной и Белой
            реками, и звери рядом восхищаются полей и лесов красотой.
          </p>
          <p>
            {" "}
            Здесь когда-то жила зажиточная крестьянская семья, и мельница в
            месте рек собирала плоды.{" "}
          </p>
          <p>
            Это место - место силы, энергия его бьет ключом. Археологи нашли
            свидетельства древних поселений, что подтверждают волшебство этого
            места. Погрузись в сказку!
          </p>
        </div>
        <Image
          src={vily}
          width={800}
          height={600}
          className="w-full h-full mt-3 flex-1"
        />
      </div>
    </div>
  );
};

export default About;
