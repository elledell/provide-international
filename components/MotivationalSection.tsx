"use client";

import Link from "next/link";

export default function MotivationalSection() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#395684] overflow-hidden">
      
      {/* Inject custom CSS for the continuous "flowing river" animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flowLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes flowRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-flow-left {
          display: flex;
          width: 200%;
          animation: flowLeft 40s linear infinite;
        }
        .animate-flow-right {
          display: flex;
          width: 200%;
          animation: flowRight 40s linear infinite;
        }
      `}} />

      {/* --- TOP WAVE DIVIDER --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-[60px] lg:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      {/* --- BOTTOM WAVE DIVIDER --- */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 rotate-180">
        <svg className="relative block w-full h-[60px] lg:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#f8fafc]"></path>
        </svg>
      </div>

      {/* --- THE FLOWING RIVER OF TEXT (Background) --- */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12 lg:gap-24 opacity-10 pointer-events-none select-none overflow-hidden z-0">
        <div className="animate-flow-left whitespace-nowrap text-[80px] lg:text-[140px] font-black text-white uppercase tracking-tight">
          <div className="w-1/2 flex justify-around">
            <span>Every Drop Creates The Sea • </span>
            <span>Every Drop Creates The Sea • </span>
          </div>
          <div className="w-1/2 flex justify-around">
            <span>Every Drop Creates The Sea • </span>
            <span>Every Drop Creates The Sea • </span>
          </div>
        </div>

        <div className="animate-flow-right whitespace-nowrap text-[80px] lg:text-[140px] font-black text-white uppercase tracking-tight">
          <div className="w-1/2 flex justify-around">
            <span>Together We Flow • </span>
            <span>Together We Flow • </span>
          </div>
          <div className="w-1/2 flex justify-around">
            <span>Together We Flow • </span>
            <span>Together We Flow • </span>
          </div>
        </div>
      </div>

      {/* --- FOREGROUND CONTENT (2-Column Layout) --- */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mt-10">
        
        {/* LEFT SIDE: Massive Director Portrait */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Soft glow behind the image */}
            <div className="absolute inset-0 bg-[#FFC107] rounded-full blur-[80px] opacity-30"></div>
            
            {/* The Image itself - Scaled up significantly */}
            <img 
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop" 
              alt="Director Portrait" 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full border-[6px] lg:border-[10px] border-[#FFC107] object-cover shadow-2xl z-10"
            />
            
            {/* Quote Icon Badge - Enlarged to match the image scale */}
            <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 bg-white text-[#395684] rounded-full p-4 lg:p-6 shadow-2xl z-20 transform hover:scale-110 transition-transform">
              <svg className="w-8 h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Quote & Typography */}
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Main Quote Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[72px] xl:text-[80px] font-black text-white tracking-tight leading-[1.05] mb-8 drop-shadow-lg">
            "Every single drop <br />
            <span className="text-[#FFC107]">creates the sea."</span>
          </h2>

          {/* Motivational Text */}
          <p className="text-white/95 text-lg md:text-xl lg:text-[22px] leading-relaxed font-medium mb-8 max-w-2xl drop-shadow-sm">
            No contribution is too small. It is the collective flow of our shared compassion that washes away hardship and brings life to vulnerable communities. Be the drop that starts a ripple of endless hope.
          </p>

          {/* Director Name & Title */}
          <div className="mb-12 flex flex-col lg:flex-row items-center lg:items-center gap-4">
            <span className="hidden lg:block w-12 h-1 bg-[#FFC107] rounded-full"></span>
            <div>
              <h4 className="text-white font-bold text-xl lg:text-2xl tracking-wide">Dr. Robert O. Mensah</h4>
              <p className="text-[#FFC107] font-extrabold text-xs lg:text-sm uppercase tracking-[0.2em] mt-1">Founder & Executive Director</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link 
              href="/donate" 
              className="w-full sm:w-auto text-center bg-[#FFC107] hover:bg-yellow-400 text-slate-900 font-black px-12 py-5 rounded-full transition-all duration-300 text-[15px] uppercase tracking-widest shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,193,7,0.5)] hover:-translate-y-1"
            >
              Make Your Impact
            </Link>
            
            <Link 
              href="/volunteer" 
              className="w-full sm:w-auto text-center bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-[#395684] font-black px-10 py-[18px] rounded-full transition-all duration-300 text-[15px] uppercase tracking-widest"
            >
              Become a Volunteer
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}