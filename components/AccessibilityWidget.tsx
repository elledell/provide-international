"use client";

import { useState, useEffect } from "react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Accessibility State Settings
  const [textSize, setTextSize] = useState(100); // percentage
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0); // px
  
  // New Functional Toggles
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [isMonochrome, setIsMonochrome] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // The Bulb

  // Dynamically inject styles into the DOM based on active states
  useEffect(() => {
    const root = document.documentElement;
    
    // 1. Handle Spacing & Sizing directly on the DOM
    root.style.fontSize = `${textSize}%`;
    document.body.style.lineHeight = `${lineHeight}`;
    document.body.style.letterSpacing = `${letterSpacing}px`;

    // 2. Handle Global Overrides (Dark Mode, Fonts, Contrast) via an injected Style tag
    let styleEl = document.getElementById("a11y-dynamic-styles");
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "a11y-dynamic-styles";
      document.head.appendChild(styleEl);
    }

    let css = "";

    // Force Readable Font everywhere
    if (isReadableFont) {
      css += `
        * {
          font-family: Arial, Helvetica, sans-serif !important;
        }
      `;
    }

    // Build the global CSS filter string based on active toggles
    let filters = [];
    if (isDarkMode) filters.push("invert(1) hue-rotate(180deg)");
    if (isMonochrome) filters.push("grayscale(100%)");
    if (isHighContrast) filters.push("contrast(150%) saturate(120%)");

    if (filters.length > 0) {
      css += `
        html { 
          filter: ${filters.join(" ")} !important; 
          background-color: ${isDarkMode ? '#000000' : '#FFFFFF'} !important; 
        }
      `;
      
      // If Dark Mode (Smart Invert) is on, we MUST re-invert images and backgrounds 
      // so they don't look like negative x-rays.
      if (isDarkMode) {
        css += `
          img, video, iframe, svg, .bg-cover, .bg-center { 
            filter: invert(1) hue-rotate(180deg) ${isMonochrome ? 'grayscale(100%)' : ''} !important; 
          }
        `;
      }
    }

    styleEl.innerHTML = css;

    // Cleanup on unmount
    return () => {
      if (styleEl) styleEl.innerHTML = "";
    };

  }, [textSize, lineHeight, letterSpacing, isReadableFont, isMonochrome, isHighContrast, isDarkMode]);

  // Reset all settings
  const handleReset = () => {
    setTextSize(100);
    setLineHeight(1.5);
    setLetterSpacing(0);
    setIsReadableFont(false);
    setIsMonochrome(false);
    setIsHighContrast(false);
    setIsDarkMode(false);
  };

  // The universal accessibility icon
  const UniversalAccessIcon = (
    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </svg>
  );

  return (
    <div className="fixed top-[100px] right-0 z-[100] flex flex-col items-end">
      
      {/* The Expanded Toolbar */}
      <div 
        className={`bg-white shadow-2xl border-l border-b border-slate-200 w-20 flex flex-col transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full absolute right-0"}`}
      >
        
        {/* Header Icon */}
        <div className="bg-[#FF9900] w-full h-20 flex items-center justify-center text-white cursor-pointer hover:bg-orange-500 transition-colors" onClick={() => setIsOpen(false)} title="Close Menu">
          {UniversalAccessIcon}
        </div>

        {/* Scrollable Tools Container */}
        <div className="flex flex-col items-center py-6 space-y-5 max-h-[65vh] overflow-y-auto overflow-x-hidden custom-scrollbar">
          
          {/* 1. Text Resize Button */}
          <button 
            onClick={() => setTextSize(prev => prev < 150 ? prev + 10 : 100)} 
            className="w-14 h-14 rounded-full bg-slate-50 hover:bg-blue-50 text-[#152033] flex items-center justify-center transition-colors shadow-sm border border-slate-100"
            title="Resize Text"
          >
            <span className="font-serif font-black text-xl leading-none flex items-center">
              T<span className="text-sm ml-0.5 text-blue-600">↕</span>
            </span>
          </button>

          {/* 2. Vertical Spacing (Line Height) */}
          <button 
            onClick={() => setLineHeight(prev => prev < 2.5 ? prev + 0.25 : 1.5)} 
            className="w-14 h-14 rounded-full bg-slate-50 hover:bg-blue-50 text-[#152033] flex items-center justify-center transition-colors shadow-sm border border-slate-100"
            title="Line Spacing"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
          </button>

          {/* 3. Horizontal Spacing (Letter Spacing) */}
          <button 
            onClick={() => setLetterSpacing(prev => prev < 4 ? prev + 1 : 0)} 
            className="w-14 h-14 rounded-full bg-slate-50 hover:bg-blue-50 text-[#152033] flex items-center justify-center transition-colors shadow-sm border border-slate-100"
            title="Letter Spacing"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 8h8M8 16h8" /></svg>
          </button>

          {/* 4. Readable Font (A) */}
          <button 
            onClick={() => setIsReadableFont(!isReadableFont)}
            className={`w-14 h-14 rounded-full flex items-center justify-center font-serif font-black text-2xl transition-colors shadow-sm border ${isReadableFont ? "bg-[#152033] text-white border-[#152033]" : "bg-slate-50 hover:bg-blue-50 text-[#152033] border-slate-100"}`}
            title="Readable Font"
          >
            A
          </button>

          {/* 5. Monochrome / Grayscale (Crossed Drop) */}
          <button 
            onClick={() => setIsMonochrome(!isMonochrome)} 
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors shadow-sm border ${isMonochrome ? "bg-[#152033] text-white border-[#152033]" : "bg-slate-50 hover:bg-blue-50 text-[#152033] border-slate-100"}`}
            title="Monochrome"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3l18 18M9.88 9.88A9.975 9.975 0 0012 21a10.001 10.001 0 007.41-3.32M15 9.5c0-1.78-.71-3.39-1.87-4.57L12 3.5 10.15 5.3" />
            </svg>
          </button>

          {/* 6. High Contrast (Half Moon) */}
          <button 
            onClick={() => setIsHighContrast(!isHighContrast)} 
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors shadow-sm border ${isHighContrast ? "bg-[#152033] text-white border-[#152033]" : "bg-slate-50 hover:bg-blue-50 text-[#152033] border-slate-100"}`}
            title="High Contrast"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-2V6a6 6 0 010 12z"/></svg>
          </button>

          {/* 7. Dark Mode (Lightbulb) */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors shadow-sm border ${isDarkMode ? "bg-[#152033] text-white border-[#152033]" : "bg-slate-50 hover:bg-blue-50 text-[#152033] border-slate-100"}`}
            title="Dark Mode"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
          </button>
          
        </div>

        {/* Bottom Actions Container */}
        <div className="flex flex-col mt-auto border-t border-slate-200">
          
          {/* Reset Button */}
          <button 
            onClick={handleReset}
            className="w-full h-16 bg-[#FFC107] text-[#152033] flex items-center justify-center hover:bg-yellow-400 transition-colors"
            title="Reset All Settings"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
          </button>

          {/* Close Menu Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full h-16 bg-[#152033] text-white flex items-center justify-center hover:bg-black transition-colors"
            title="Close Accessibility Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

      </div>

      {/* The Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#FF9900] hover:bg-orange-500 text-white w-16 h-16 rounded-l-lg shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105"
          aria-label="Open Accessibility Menu"
        >
          {UniversalAccessIcon}
        </button>
      )}

    </div>
  );
}