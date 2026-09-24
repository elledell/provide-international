import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="pt-20 pb-28 lg:pt-32 lg:pb-40 bg-white overflow-hidden relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Scaled-up Video & Image Grid */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Main large VIDEO component */}
            <div className="relative z-10 w-[90%] rounded-lg overflow-hidden shadow-2xl bg-slate-900">
              <video 
                src="/vid2.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[450px] lg:h-[550px] object-cover opacity-90"
              />
            </div>
            
            {/* Smaller overlapping IMAGE component */}
            <div className="absolute right-0 lg:-right-6 bottom-[-60px] lg:bottom-[-80px] z-20 w-3/4 lg:w-[70%] rounded-lg overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
                alt="Provide International Community Work" 
                className="w-full h-[280px] lg:h-[350px] object-cover"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-8 right-4 lg:right-0 z-30 bg-[#FFC107] text-slate-900 p-6 rounded-sm shadow-xl flex flex-col items-center justify-center animate-bounce-slow">
              <span className="text-4xl lg:text-5xl font-black leading-none mb-1">25+</span>
              <span className="text-xs font-bold uppercase tracking-widest text-center">Years of<br/>Impact</span>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-[-30px] left-[-30px] w-40 h-40 bg-blue-50 rounded-full z-0"></div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-1 bg-[#FFC107]"></span>
              <h3 className="text-[#FFC107] font-bold text-sm uppercase tracking-widest">About Provide</h3>
            </div>
            
            {/* Heading color changed to the blue theme */}
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#395684] mb-6 leading-tight uppercase tracking-wide">
              Empowering Communities, <br className="hidden md:block"/> Transforming Lives.
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              We welcome you with great joy to Provide International. We are here to drive sustainable change and empower vulnerable communities, providing a space for holistic growth, essential healthcare, and unwavering support. 
            </p>
            
            <p className="text-slate-600 text-lg mb-10 leading-relaxed italic border-l-4 border-[#FFC107] pl-4 bg-blue-50/50 py-3">
              We operate on a simple but powerful philosophy: empowering a single community creates a ripple effect that transforms the entire world.
            </p>

            {/* Sub Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
              
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#395684] mb-4 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-[#395684] mb-2">Join the Mission</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Looking to make a tangible difference? Provide International offers a dedicated platform, perfect for grassroots impact.
                </p>
                {/* GUARANTEED SOLID BLUE BUTTON */}
                <Link href="#volunteer" className="inline-block w-full sm:w-auto text-center bg-[#395684] text-white font-black text-xs lg:text-[13px] uppercase tracking-widest px-8 py-4 rounded-md hover:bg-[#2b4266] transition-colors shadow-md">
                  Get Connected
                </Link>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#395684] mb-4 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-[#395684] mb-2">Study the Impact</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Ready to delve deeper into our community initiatives? Explore our comprehensive reports for profound insights.
                </p>
                {/* Outline button to complement the solid one */}
                <Link href="#reports" className="inline-block w-full sm:w-auto text-center bg-white border-2 border-[#395684] text-[#395684] font-black text-xs lg:text-[13px] uppercase tracking-widest px-8 py-3.5 rounded-md hover:bg-blue-50 transition-colors shadow-sm">
                  View Reports
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}