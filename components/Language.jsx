"use client";
import { useState, useEffect } from "react";

const LanguageToggle = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    // Load the language preference from local storage on component mount
    const storedLanguage = localStorage.getItem("language");
    setIsEnglish(storedLanguage === "english");
  }, []);

  const handleToggle = () => {
    const newLanguage = isEnglish ? "russian" : "english";
    setIsEnglish((prev) => !prev);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <button
      className="font-amatic text-white text-3xl tracking-wider cursor-pointer font-bold"
      onClick={handleToggle}
    >
      {isEnglish ? "РУ" : "EN"}
    </button>
  );
};

export default LanguageToggle;
