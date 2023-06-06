import About from "@/components/About";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import Owners from "@/components/Owners";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <ImageSlider />
      <Rooms />
      <Services />
      <Owners />
      <Reviews />
    </div>
  );
}
