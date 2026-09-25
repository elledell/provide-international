"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Pioneers tackling climate change", 
  "Combatting Drug Abuse in our communities", 
  "Providing Nutritional Services", 
  "Providing Support to those Living with HIV/AIDS", 
  "Championing an end to Gender-Based Violence", 
  "Providing Empowerment Programmes Across Kenya", 
  "The Challenge of Mental Health", 
  "Peace-Building & Conflict Resolution", 
  "Disaster Relief & Management" 
];

const bgImages = [
  "/h1.jfif",
  "/h2.jfif",
  "/h3.jfif",
  "/h4.jfif",
  "/h5.jfif"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000); 
    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 30 : 80; 

    if (!isDeleting && text === currentPhrase) {
      typingSpeed = 6000; 
    } else if (isDeleting && text === "") {
      typingSpeed = 500; 
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(
          isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
   
    <main className="relative pt-20 pb-32 lg:pt-24 lg:pb-40 overflow-hidden flex flex-col items-center text-center">
      
      {bgImages.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            idx === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      
      <div className="absolute inset-0 bg-slate-900/65"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* SHRUNK TEXT from 56px to 5xl */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-8 drop-shadow-md min-h-[80px] lg:min-h-[100px] flex items-center justify-center">
          <span>
            {text}
            <span className="animate-pulse border-r-[4px] border-brandGold-500 ml-1.5 h-[1.1em] inline-block align-middle"></span>
          </span>
        </h2>
        
        {/* SHRUNK CONTACT PILL PADDING & FONT SIZE */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-5 bg-slate-900/90 border border-slate-700/50 rounded-full px-6 py-2.5 text-white text-[13px] font-medium shadow-2xl">
          <span className="flex items-center gap-2">
            <span className="text-brandGold-500 font-bold">Email:</span> info@provideinternational.org
          </span>
          <span className="hidden sm:block text-slate-600">|</span>
          <span className="flex items-center gap-2">
            <span className="text-brandGold-500 font-bold">Toll Free:</span> +254 769 673 239
          </span>
        </div>
      </div>
    </main>
  );
}