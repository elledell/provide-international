"use client";

import { useState, useEffect } from "react";

const newsItems = [
  "UPDATE: KOROGOCHO NUTRITION PROGRAM EXPANDS TO SUPPORT 500 MORE FAMILIES",
  "COMMUNITY HEALTH CLINIC OPEN DAYS SCHEDULE ANNOUNCED FOR THIS QUARTER",
  "#ENDGBV — SAFE SPACES AND COUNSELING CENTERS NOW OPEN DAILY",
  "PARTNERSHIP INITIATIVE LAUNCHED FOR MATERNAL & CHILD HEALTHCARE",
];

export default function TopBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
        setIsAnimating(true);
      }, 250);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-brandBlue-700 text-brandBlue-50 border-b border-brandBlue-500/30">
      <div className="w-full px-6 py-2.5 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* News Ticker */}
        <div className="flex items-center gap-3 overflow-hidden flex-1 justify-start">
          <span className="shrink-0 bg-brandGold-500 text-slate-950 font-black text-xs tracking-wider px-3 py-1 rounded-[3px] uppercase shadow-sm">
            Latest News
          </span>

          <div className="h-6 overflow-hidden flex items-center">
            <p
              className={`font-bold text-white tracking-wide text-xs sm:text-sm truncate transition-all duration-300 ease-out transform ${
                isAnimating
                  ? "translate-y-0 opacity-100 scale-100"
                  : "-translate-y-2 opacity-0 scale-95"
              }`}
            >
              {newsItems[currentIndex]}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 shrink-0 justify-end">
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            Follow Us:
          </span>
          
          <div className="flex items-center gap-3.5 text-white">
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X (Twitter)"
              className="hover:text-brandGold-500 hover:scale-110 transition-all duration-200"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-brandGold-500 hover:scale-110 transition-all duration-200"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-brandGold-500 hover:scale-110 transition-all duration-200"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-brandGold-500 hover:scale-110 transition-all duration-200"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}