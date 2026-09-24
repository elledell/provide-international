import Link from "next/link";
import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";

// Mock data for the partners to populate the grid
const partnersData = [
  {
    name: "Global Health Initiative",
    category: "Healthcare Partner",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    )
  },
  {
    name: "EduCare Foundation",
    category: "Education Partner",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    )
  },
  {
    name: "AgriSustain Kenya",
    category: "Livelihoods Partner",
    image: "https://images.unsplash.com/photo-1628183186290-a7cb745ff8dc?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    name: "Women Forward",
    category: "Empowerment Partner",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )
  },
  {
    name: "Clean Water Org",
    category: "Sanitation Partner",
    image: "https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  {
    name: "Nairobi Tech Hub",
    category: "Technology Partner",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  },
  {
    name: "Safe Shelter Coalition",
    category: "Housing Partner",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )
  },
  {
    name: "Mental Health Assoc.",
    category: "Wellness Partner",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  }
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-28 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center bg-[#152033]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.15] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center">
          <h4 className="text-[#FFC107] font-black text-sm md:text-base uppercase tracking-[0.2em] mb-4">
            Our Network
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-black text-white tracking-tight leading-[1.1] mb-6">
            Collaborating for <br className="hidden md:block"/>
            <span className="text-[#FFC107]">Greater Impact.</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Meaningful change requires collective action. We are proud to work alongside these incredible organizations to transform communities across Kenya.
          </p>
          <div className="w-20 h-1.5 bg-[#FFC107] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- PARTNERS GRID --- */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
          
          {/* 4-Column Layout Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            
            {partnersData.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-[#FFC107] group"
              >
                
                {/* Top Image */}
                <div className="h-56 relative w-full overflow-hidden bg-slate-200">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[#395684]/10 mix-blend-multiply"></div>
                </div>

                {/* Bottom Solid Card Section */}
                <div className="relative bg-[#FFC107] pt-12 pb-8 px-4 text-center flex-1 flex flex-col justify-center">
                  
                  {/* Overlapping Circular Icon */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#152033] rounded-full border-[5px] border-white flex items-center justify-center text-white shadow-md z-10 group-hover:bg-[#395684] transition-colors duration-300">
                    {partner.icon}
                  </div>

                  {/* Text Content */}
                  <h3 className="font-black text-[15px] uppercase tracking-widest text-[#152033] mb-1.5 px-2">
                    {partner.name}
                  </h3>
                  <p className="text-xs font-bold text-[#152033]/70 uppercase tracking-wide">
                    {partner.category}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 bg-[#395684] text-center px-6">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          Partner With Us
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
          Are you an organization looking to drive sustainable development in Kenya? Let's join forces.
        </p>
        <Link 
          href="/#contact" 
          className="inline-block bg-[#FFC107] hover:bg-yellow-400 text-[#152033] font-black px-10 py-4 rounded-lg transition-all duration-300 text-sm uppercase tracking-widest shadow-xl hover:-translate-y-1"
        >
          Get in Touch
        </Link>
      </section>

      <Footer /> 
    </main>
  );
}