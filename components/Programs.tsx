"use client";

import { useState } from "react";
import Link from "next/link";

export default function Programs() {
  // Track which card is currently flipped
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Maternal Health",
      desc: "Access essential resources and medical support for mothers and infants.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
    {
      title: "Access To Info",
      desc: "Submit your grievances securely through our online community portal.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
    },
    {
      title: "Library",
      desc: "Explore our archive of community reports, newsletters, and strategic plans.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
        </svg>
      ),
    },
    {
      title: "Donate Now",
      desc: "Your support directly empowers vulnerable communities across the region.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-6 relative z-20 -mt-28 mb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {cards.map((card, idx) => (
          /* Perspective container for the 3D effect */
          <div 
            key={idx} 
            className="relative w-full h-[280px] [perspective:1000px] cursor-pointer"
            onClick={() => setActiveCard(activeCard === idx ? null : idx)}
            onMouseEnter={() => setActiveCard(idx)}
            onMouseLeave={() => setActiveCard(null)}
          >
            
            {/* The flip is now controlled by the activeCard state instead of purely group-hover */}
            <div className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] shadow-xl rounded-xl ${activeCard === idx ? '[transform:rotateY(180deg)]' : ''}`}>
              
              {/* --- FRONT FACE --- */}
              <div className="absolute inset-0 bg-white rounded-xl [backface-visibility:hidden] flex flex-col items-center justify-center p-6 border-b-[6px] border-brandGold-500">
                <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center text-brandGold-500 mb-6 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-extrabold text-slate-800 text-center tracking-tight">
                  {card.title}
                </h3>
              </div>

              {/* --- BACK FACE --- */}
              <div className="absolute inset-0 bg-gradient-to-br from-brandGold-500 to-orange-500 rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-8 text-white text-center shadow-inner">
                <h3 className="text-[22px] font-black mb-3 leading-tight drop-shadow-sm">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-white/90 mb-8 leading-relaxed">
                  {card.desc}
                </p>
                <Link
                  href={idx === 3 ? "#donate" : "#"}
                  // Added e.stopPropagation() so clicking the link doesn't instantly flip the card back before navigating
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white text-brandGold-500 font-extrabold py-2.5 px-8 rounded-full text-sm hover:scale-105 shadow-md transition-transform duration-300"
                >
                  Click Here
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}