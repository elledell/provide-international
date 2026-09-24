import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Link from "next/link";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
       <Navbar /> 

      {/* --- HERO / INTRO SECTION --- */}
      <section className="relative pt-40 pb-28 lg:pt-56 lg:pb-40 overflow-hidden flex items-center justify-center min-h-[50vh] md:min-h-[60vh] bg-[#f8fafc]">
        
        {/* Guaranteed Background Image with low opacity for a clean, textured look */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.08] mix-blend-multiply pointer-events-none"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop')" 
          }}
        ></div>

        {/* Subtle curved shape overlay to match the inspiration design */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#395684]/[0.03] rounded-bl-[150px] pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center mt-10">
          <h4 className="text-[#FFC107] font-black text-sm md:text-base uppercase tracking-[0.25em] mb-6">
            Our Story
          </h4>
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black text-[#152033] tracking-tight leading-[1.05] mb-8">
            Building Hope, <br className="hidden md:block" />
            <span className="text-[#395684]">One Community at a Time.</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#FFC107] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- OUR STORY (Narrative Section) --- */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Organic Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div 
                className="relative w-full max-w-[600px] aspect-square overflow-hidden shadow-2xl border-8 border-white"
                style={{
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" // Organic flowy blob shape
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop" 
                  alt="Provide International Community Work" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>

            {/* Right: Story Text */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#152033] mb-8 leading-tight">
                A Vision for <br className="hidden lg:block"/> Sustainable Change
              </h2>
              <div className="space-y-6 text-slate-600 text-[17px] leading-[1.85]">
                <p>
                  Provide International operates in some of Kenya's most underserved and challenging areas, with a focus on creating meaningful and lasting impact. Our work is concentrated in the urban slums of Nairobi and the arid and semi-arid regions of Kenya.
                </p>
                <p>
                  We recognized early on that addressing critical needs requires more than just temporary relief. It requires deeply integrated, sustainable development that empowers communities to build resilience and dictate their own futures.
                </p>
                <p className="font-bold text-[#395684] border-l-4 border-[#FFC107] pl-5 py-2 mt-4 bg-blue-50/50">
                  Our dedicated efforts reflect our commitment to creating positive change and fostering hope in communities across Kenya.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHERE WE WORK (Editorial Cards) --- */}
      {/* Background changed to #395684 to prevent crashing into the footer */}
      <section id="where-we-work" className="py-24 lg:py-32 bg-[#395684] relative">
        
        {/* Soft background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#152033] rounded-full blur-[120px] opacity-20 -translate-y-1/2"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          
          <div className="text-center mb-16 lg:mb-24">
            <h4 className="text-[#FFC107] font-black text-sm uppercase tracking-[0.2em] mb-4">
              Where We Work
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Targeting Crucial Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1: Urban Slums */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col group">
              <div className="h-[250px] lg:h-[300px] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=1000&auto=format&fit=crop" 
                  alt="Nairobi Urban Slums" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152033]/90 to-transparent flex items-end p-8">
                  <h3 className="text-3xl lg:text-4xl font-black text-white">Nairobi's Urban Slums</h3>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex-1 flex flex-col">
                <p className="text-[#395684] font-bold text-sm uppercase tracking-widest mb-4">
                  Kayole & Korogocho
                </p>
                <p className="text-slate-600 text-[15px] leading-[1.8] mb-6">
                  We tackle pressing issues such as inadequate healthcare, poor nutrition, and limited economic opportunities. Our efforts include providing essential maternal and child healthcare, offering nutrition education, and enhancing livelihoods through vocational training.
                </p>
                <p className="text-slate-600 text-[15px] leading-[1.8]">
                  Additionally, we improve hygiene and sanitation by implementing waste management solutions, which are vital for maintaining health and dignity in densely populated areas.
                </p>
              </div>
            </div>

            {/* Card 2: Rural & Arid Regions */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col group">
              <div className="h-[250px] lg:h-[300px] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1593113589914-07599052b61f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Rural and Arid Kenya" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#152033]/90 to-transparent flex items-end p-8">
                  <h3 className="text-3xl lg:text-4xl font-black text-white">Rural & Arid Regions</h3>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex-1 flex flex-col">
                <p className="text-[#395684] font-bold text-sm uppercase tracking-widest mb-4">
                  Across Kenya
                </p>
                <p className="text-slate-600 text-[15px] leading-[1.8] mb-6">
                  We focus on improving food security through comprehensive agricultural services, including support for sustainable farming practices. Our initiatives also ensure access to clean water and promote environmental conservation.
                </p>
                <p className="text-slate-600 text-[15px] leading-[1.8]">
                  By addressing the critical challenges posed by harsh environmental conditions, these programs not only enhance agricultural productivity but also help communities build resilience and sustain their livelihoods.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

     <Footer /> 
    </main>
  );
}