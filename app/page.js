"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import Owners from "@/components/Owners";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Baner from "@/components/Baner";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Load the language preference from local storage on component mount
    const storedLanguage = localStorage.getItem("language");
    setIsEnglish(storedLanguage === "english");
  }, []);

  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguageToggle = () => {
    const newLanguage = isEnglish ? "russian" : "english";
    setIsEnglish((prev) => !prev);
    localStorage.setItem("language", newLanguage);
  };
  return (
    <div>
      <Baner onLanguageToggle={handleLanguageToggle} isEnglish={isEnglish} />
      <Header isEnglish={isEnglish} />
      <About isEnglish={isEnglish} />
      <ImageSlider isEnglish={isEnglish} />
      <Rooms isEnglish={isEnglish} />
      <Services isEnglish={isEnglish} />
      <Owners isEnglish={isEnglish} />
      <Reviews isEnglish={isEnglish} />
      <Footer isEnglish={isEnglish} />
    </div>
  );
}
