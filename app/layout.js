import "./globals.css";
import { Pattaya, Amatic_SC, Caveat, Merriweather } from "next/font/google";
import img from "./opengraph-image.jpg";

const pattaya = Pattaya({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans-serif",
});

const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cursive",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
});

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-normal",
});

export const metadata = {
  title:
    "Агроусадьба Лесная Сказка на Ферме в Беловежской Пуще | Аренда дома | Отдых на природе | Агро-туризм | Эко-туризм",
  description: `Аренда дома на территории эко-фермы в заповедной зоне национального парка Беловежская Пуща, вдали от всех, в окружении густого леса.
     Здесь вы сможете наблюдать за дикими животными и наслаждаться природой. 
     Услуги: блюда с фермы на стол, баня, продукты: козье молоко, сыры, яйца, овощи и грибы, травяные сборы, Wi-Fi, детская площадка и кроватка для младенцев, барбекю и бесседка.`,
  keywords: [
    "Аренда дома",
    "Отдых на природе",
    "Агро-туризм",
    "Эко-туризм",
    "Ферма",
    "Отдых на Ферме",
  ],
  image: {
    "@type": "ImageObject",
    url: img,
    width: 200,
    height: 200,
  },
  review: {
    "@type": "Review",
    name: "Незабываеме впечатления",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Любовь Мамайко",
    },
    datePublished: "2022-06-03",
    reviewBody: `Очень атмосферное и уютное место. От сердца рекомендую. Отдохнули душой и телом.
    Уютный дом с прекрасным интерьером, настоящая эклетика, но каждая вещи на своем месте. Приятные ароматы в доме, свежее постельное белье. Вкуснейшая домашняя еда и горячая банька. Как может быть еще лушче.
    Нам повезло, мы попали на период брачного сезона у оленей. Было чудно засыпать под их рев.
    Благодарю хозяев за уют и теплый прием.`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${pattaya.variable} ${amatic.variable} ${caveat.variable} ${merri.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
