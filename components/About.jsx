import Image from "next/image";
import React from "react";
import vily from "../public/assets/vily.jpg";

const About = ({ isEnglish }) => {
  return (
    <div className="flex justify-center flex-col items-center p-5 text-gray-800 ">
      <h1 className="md:text-8xl text-7xl font-caveat ">
        {isEnglish ? "Place of Power" : "Место Силы"}
      </h1>
      <div className="pt-3 m-5 flex flex-col md:flex-row justify-between items-center ">
        <div className="text-md md:text-xl font-merri flex-1 md:pl-5">
          <p>
            <span className="text-3xl text-bold ">{isEnglish ? "I" : "C"}</span>
            {isEnglish
              ? `n the middle of Belovezhskaya Pushcha, the magical village of Vila flourishes. It is comfortably decorated with the Forest and White rivers, and the animals nearby admire the beauty of the fields and forests.`
              : `реди Беловежской пущи,
            волшебная деревня Вилы расцветает. Она уютно украшена Лесной и Белой
            реками, и звери рядом восхищаются полей и лесов красотой.`}
          </p>
          <p>
            <span className="ml-3"></span>
            {isEnglish
              ? `A wealthy peasant family once lived here, and the mill in the place of the rivers collected fruits.`
              : `Здесь когда-то жила зажиточная
            крестьянская семья, и мельница в месте рек собирала плоды.`}{" "}
          </p>
          <p>
            <span className="ml-3"></span>
            {isEnglish
              ? `This place is a place of power, its energy is in full swing. Archaeologists have found evidence of ancient settlements, which confirm the magic of this place. Immerse yourself in a fairy tale!`
              : `Это место - место силы, энергия его бьет ключом. Археологи нашли свидетельства древних поселений, что подтверждают волшебство этого места. Погрузись в сказку!`}
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
