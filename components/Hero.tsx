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

// Replaced with your local images from the public folder
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

  // Background Image Slider
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000); // Slowed down to 8 seconds to match the slower text reading time
    return () => clearInterval(imageInterval);
  }, []);

  // Fixed Typewriter Effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 30 : 80; 

    // Determine the pause duration based on the current state
    if (!isDeleting && text === currentPhrase) {
      // Pause for 6 seconds (6000ms) when the phrase is fully typed out
      typingSpeed = 6000; 
    } else if (isDeleting && text === "") {
      // Pause for half a second before typing the next word
      typingSpeed = 500; 
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        // ONLY trigger deletion AFTER the 6-second timeout has finished
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Move to the next phrase once fully deleted
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        // Otherwise, add or remove the next character
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
    <main className="relative pt-28 pb-48 lg:pt-36 lg:pb-56 overflow-hidden flex flex-col items-center text-center">
      
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-tight mb-10 drop-shadow-md min-h-[100px] lg:min-h-[140px] flex items-center justify-center">
          <span>
            {text}
            <span className="animate-pulse border-r-[4px] border-brandGold-500 ml-1.5 h-[1.1em] inline-block align-middle"></span>
          </span>
        </h2>
        
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-slate-900/90 border border-slate-700/50 rounded-full px-8 py-3 text-white text-[14px] font-medium shadow-2xl">
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