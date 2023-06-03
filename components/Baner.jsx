import Image from "next/image";
import Link from "next/link";

const Baner = () => {
  const links = ["ИСТОРИЯ", "УДОБСТВА", "РАЗВЛЕЧЕНИЯ", "ПРОДУКЦИЯ"];
  return (
    <div>
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
      <div className="flex justify-center items-center gap-5 p-3 ">
        {links.map((link) => (
          <Link
            href="#"
            className="font-amatic text-fuchsia-95 sm:text-2xl text-xl tracking-wide px-3 hover:underline"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Baner;
