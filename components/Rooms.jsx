import Image from "next/image.js";
import images from "../public/assets/rooms/index.js";

const Room = ({ image, description, reverse }) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-shrink-0 md:w-1/2">
        <Image
          src={image}
          alt="Room"
          width={1080}
          height={1320}
          className="w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center p-5 text-gray-800 md:w-1/2">
        <h2 className="md:text-3xl text-2xl font-caveat">{description}</h2>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <div>
      <div className="font-caveat flex flex-col justify-center items-center p-5 text-gray-800">
        <h1 className="md:text-8xl text-7xl ">Каждый найдет для себя</h1>
      </div>

      <Room
        image={images.room1}
        description="Охотничий уголок"
        reverse={false}
      />
      <Room
        image={images.room2}
        description="Арабская ночь (семейный)"
        reverse={true}
      />
      <Room
        image={images.room3}
        description="В гостях у Жюль Верна"
        reverse={false}
      />
    </div>
  );
};

export default Rooms;
