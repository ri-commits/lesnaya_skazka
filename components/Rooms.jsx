import Image from "next/image.js";
import images from "../public/assets/rooms/index.js";
import cloud from "../public/assets/cloud.png";
import Link from "next/link.js";

const ReservationButton = ({ isEnglish }) => (
  <Link
    href="#contact"
    className="mt-3 group text-gray-800 py-4 md:py-5 px-8 md:px-10 relative overflow-hidden"
  >
    <span
      className="absolute inset-0 bg-cover bg-center transition-opacity opacity-0  group-hover:opacity-100"
      style={{ backgroundImage: `url(${cloud.src})` }}
    ></span>
    <span className="relative z-10 font-caveat md:text-3xl text-2xl group-hover:text-white">
      {isEnglish ? "Book" : "Забронировать"}
    </span>
  </Link>
);

const Room = ({ isEnglish, image, description, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      id="facilities"
    >
      <div className="flex-shrink-0 md:w-1/2">
        <Image
          src={image}
          alt="Room"
          width={800}
          height={700}
          className="w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5 text-gray-800 md:w-1/2">
        <h2 className="md:text-6xl text-3xl font-caveat">{description}</h2>
        <ReservationButton isEnglish={isEnglish} />
      </div>
    </div>
  );
};

const Rooms = ({ isEnglish }) => {
  return (
    <div>
      <div className="font-caveat flex flex-col justify-center items-center p-5 text-gray-800">
        <h1 className="md:text-8xl text-7xl ">
          {isEnglish
            ? "Everyone will find something"
            : "Каждый найдет для себя"}
        </h1>
      </div>

      <Room
        image={images.room1}
        description={isEnglish ? "Hunting corner" : "Охотничий уголок"}
        reverse={false}
        key="room1"
        isEnglish={isEnglish}
      />
      <Room
        image={images.room2}
        description={
          isEnglish ? "Arabian Night (family)" : "Арабская ночь (семейный)"
        }
        reverse={true}
        key="room2"
        isEnglish={isEnglish}
      />
      <Room
        image={images.room3}
        description={
          isEnglish ? "Visiting Jules Verne" : "В гостях у Жюль Верна"
        }
        reverse={false}
        key="room3"
        isEnglish={isEnglish}
      />
    </div>
  );
};

export default Rooms;
