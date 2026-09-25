"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      subLinks: [
        {
          name: "Our Story",
          href: "/about",
          icon: (
            <svg className="w-4 h-4 text-brandBlue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
        },
        {
          name: "Where We Work",
          href: "/about#where-we-work",
          icon: (
            <svg className="w-4 h-4 text-brandBlue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          ),
        },
      ],
    },
    { name: "Our Team", href: "/our-team" },
    { name: "Programs", href: "/programs" },
    { name: "Partners", href: "/partners" },
    {
      name: "Media",
      href: "#",
      subLinks: [
        {
          name: "Gallery",
          href: "/media",
          icon: (
            <svg className="w-4 h-4 text-brandBlue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          ),
        },
        {
          name: "Strategic Plan 2022-2026",
          href: "#",
          icon: (
            <svg className="w-4 h-4 text-brandBlue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          ),
        },
        {
          name: "2022-23 Newsletter",
          href: "#",
          icon: (
            <svg className="w-4 h-4 text-brandBlue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          ),
        },
      ],
    },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[90] w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-between items-center h-[76px]">
        
        {/* --- LEFT: LOGO (Fixed width on desktop for perfect centering) --- */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 z-50 lg:w-[220px]">
          <Image 
            src="/provide.png" 
            alt="Provide International Logo" 
            width={48} 
            height={48} 
            className="w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] object-contain"
            priority
          />
          <div className="flex flex-col justify-center mt-1">
            <h1 className="text-xl sm:text-2xl lg:text-[24px] font-black text-brandBlue-700 leading-none tracking-tight">
              PROVIDE
            </h1>
            <p className="text-[0.55rem] sm:text-[0.6rem] lg:text-[0.65rem] text-slate-900 font-extrabold tracking-[0.28em] mt-1">
              INTERNATIONAL
            </p>
          </div>
        </Link>
        
        {/* --- CENTER: NAVIGATION LINKS --- */}
        <div className="hidden lg:flex items-center justify-center h-full gap-5 xl:gap-8 flex-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group h-full flex items-center">
              <Link
                href={item.href}
                className="flex items-center text-brandBlue-700 font-bold text-[14px] xl:text-[15px] hover:text-brandGold-500 transition-colors h-full"
              >
                {item.name}
                {item.subLinks && (
                  <span className="ml-1 flex items-center justify-center text-lg font-medium leading-none w-3">
                    <span className="block group-hover:hidden">+</span>
                    <span className="hidden group-hover:block leading-none mt-[-2px]">-</span>
                  </span>
                )}
              </Link>

              {item.subLinks && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-2">
                    {item.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="flex items-center gap-3 px-5 py-3 hover:bg-brandBlue-50 border-b border-slate-100 last:border-b-0 transition-colors group/sub"
                      >
                        <div className="bg-brandBlue-50 p-2 rounded-full group-hover/sub:bg-white transition-colors">
                          {subLink.icon}
                        </div>
                        <span className="text-brandBlue-700 font-bold text-[14px]">
                          {subLink.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- RIGHT: DONATE BUTTON & MOBILE TOGGLE (Fixed width on desktop for perfect centering) --- */}
        <div className="flex items-center justify-end lg:w-[220px]">
          <Link
            href="/donate"
            className="hidden lg:flex items-center justify-center bg-brandGold-500 text-slate-900 font-black text-[13px] uppercase tracking-wide px-6 py-2.5 rounded hover:bg-yellow-500 hover:scale-105 shadow-md transition-all duration-200"
          >
            Donate
          </Link>

          <button 
            className="lg:hidden p-2 text-brandBlue-700 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </div>

      </div>

      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-brandBlue-900/60 backdrop-blur-sm z-[80] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Sliding Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl z-[85] lg:hidden transform transition-transform duration-300 ease-in-out flex flex-col pt-[80px] ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="flex-1 overflow-y-auto px-6 pb-24 custom-scrollbar">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-slate-100 last:border-none">
                
                <div className="flex items-center justify-between py-3">
                  <Link 
                    href={item.href} 
                    className="text-brandBlue-700 font-black text-[16px] w-full"
                    onClick={() => !item.subLinks && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {item.subLinks && (
                    <button 
                      className="p-1.5 text-brandBlue-500 bg-brandBlue-50 rounded-md"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <ChevronDown size={18} className={`transform transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>

                {item.subLinks && (
                  <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"}`}>
                    {item.subLinks.map((subLink) => (
                      <Link 
                        key={subLink.name} 
                        href={subLink.href}
                        className="pl-2 py-2 text-brandBlue-700 font-bold text-[13px] flex items-center gap-3 rounded-md hover:bg-brandBlue-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="bg-brandBlue-50 p-1.5 rounded-full shrink-0">
                          {subLink.icon}
                        </div>
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-slate-100 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          <Link
            href="/donate"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-full bg-brandGold-500 hover:bg-yellow-500 text-slate-900 font-black text-[15px] uppercase tracking-wide py-3.5 rounded shadow-md transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
}