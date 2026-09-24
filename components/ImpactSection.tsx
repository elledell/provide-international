"use client";

import { useState, useRef, useEffect } from "react";

// Array of initiatives with embedded SVG icons
const initiatives = [
  {
    id: "emergency",
    label: "General Emergency Fund",
    icon: (
      <svg className="w-5 h-5 text-brandBlue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "health",
    label: "Mother & Child Healthcare",
    icon: (
      <svg className="w-5 h-5 text-brandBlue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "nutrition",
    label: "Nutrition & Livelihoods",
    icon: (
      <svg className="w-5 h-5 text-brandBlue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ImpactSection() {
  const [selectedInitiative, setSelectedInitiative] = useState(initiatives[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState(5000);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-brandBlue-50 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT SIDE: Text & Media Bento Grid --- */}
          <div className="w-full lg:w-1/2 flex flex-col">
            
            <p className="text-brandGold-500 text-sm font-extrabold uppercase tracking-widest mb-4">
              A help to those who need it
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-brandBlue-600 mb-10 leading-tight tracking-tight">
              Each donation is an essential help <br className="hidden xl:block" /> for everyone's life.
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Top Large Video */}
              <div className="col-span-2 rounded-3xl overflow-hidden shadow-lg h-64 md:h-[380px] relative group">
                <video 
                  src="/vid1.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandBlue-600/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white text-2xl font-black drop-shadow-md">Joy in the Community</h3>
                </div>
              </div>
              
              {/* Bottom Left Image */}
              <div className="col-span-1 rounded-3xl overflow-hidden shadow-lg h-40 md:h-56 relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brandBlue-600/80 to-transparent flex items-end p-5">
                  <p className="text-white font-bold text-sm md:text-lg leading-tight">Mother & Child</p>
                </div>
              </div>
              
              {/* Bottom Right Image */}
              <div className="col-span-1 rounded-3xl overflow-hidden shadow-lg h-40 md:h-56 relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brandBlue-600/80 to-transparent flex items-end p-5">
                  <p className="text-white font-bold text-sm md:text-lg leading-tight">Nutrition Services</p>
                </div>
              </div>
            </div>

          </div>


          {/* --- RIGHT SIDE: Inquiry Form Card --- */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12">
              
              <h3 className="text-3xl font-black text-brandBlue-600 mb-2">Support Our Cause</h3>
              <p className="text-slate-500 mb-8 text-sm md:text-base font-medium">
                Use the form below to select a program and define your donation parameters.
              </p>

              <form className="space-y-5">
                
                {/* 1. Custom Target Initiative Dropdown */}
                <div 
                  ref={dropdownRef}
                  className={`relative bg-brandBlue-50/50 rounded-2xl p-5 border transition-colors flex items-start gap-4 ${
                    isDropdownOpen ? "border-brandGold-500" : "border-transparent focus-within:border-brandGold-500"
                  }`}
                >
                  <div className="pt-1 text-brandBlue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <label className="block text-sm font-bold text-brandBlue-700 mb-2">Target Initiative</label>
                    
                    {/* The Clickable Trigger */}
                    <div 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        {selectedInitiative.icon}
                        <span className="text-brandBlue-600 font-semibold text-sm group-hover:text-brandBlue-500 transition-colors">
                          {selectedInitiative.label}
                        </span>
                      </div>
                      <svg className={`w-4 h-4 text-brandBlue-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                    </div>

                    {/* The Absolute Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-brandBlue-100 shadow-2xl rounded-xl overflow-hidden z-20 origin-top animate-in fade-in zoom-in-95 duration-100">
                        {initiatives.map((init) => (
                          <div
                            key={init.id}
                            onClick={() => {
                              setSelectedInitiative(init);
                              setIsDropdownOpen(false);
                            }}
                            className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-colors ${
                              selectedInitiative.id === init.id ? 'bg-brandBlue-50' : 'hover:bg-brandBlue-50/50'
                            }`}
                          >
                            {init.icon}
                            <span className="text-brandBlue-700 font-semibold text-sm">{init.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

                {/* 2. Budget Range Field (Donation Amount) */}
                <div className="bg-brandBlue-50/50 rounded-2xl p-5 border border-transparent transition-colors flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="pt-1 text-brandBlue-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-brandBlue-700 mb-1">Estimated Donation (Ksh)</label>
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="1000" 
                      max="100000" 
                      step="1000"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(Number(e.target.value))}
                      className="w-full h-2 bg-brandBlue-100 rounded-lg appearance-none cursor-pointer accent-brandBlue-600"
                    />
                  </div>
                  
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex-1">
                      <span className="text-xs font-bold text-brandBlue-400 block mb-1 uppercase tracking-wider">Selected Amount</span>
                      <div className="bg-white rounded-xl p-3 text-sm text-brandBlue-700 shadow-sm border border-brandBlue-100 font-bold">
                        Ksh {Number(donationAmount).toLocaleString()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold text-brandBlue-400 block mb-1 uppercase tracking-wider">Maximum Range</span>
                      <div className="bg-white rounded-xl p-3 text-sm text-brandBlue-700 shadow-sm border border-brandBlue-100 font-bold">
                        Ksh 100,000+
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Donation Frequency */}
                <div className="bg-brandBlue-50/50 rounded-2xl p-5 border border-transparent focus-within:border-brandGold-500 transition-colors flex items-start gap-4 cursor-pointer hover:bg-brandBlue-100/50">
                  <div className="pt-1 text-brandBlue-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="flex-1 w-full">
                    <label className="block text-sm font-bold text-brandBlue-700 mb-1">Donation Frequency</label>
                    <div className="w-full bg-transparent outline-none text-brandBlue-600 font-semibold text-sm">
                      Monthly Recurring
                    </div>
                  </div>
                </div>

                {/* Highly Visible Submit Button */}
                <button type="button" className="w-full bg-brandGold-500 hover:bg-yellow-400 text-slate-900 font-black py-5 rounded-2xl transition-all duration-300 mt-6 text-[16px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1">
                  Proceed to Donate
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}