import MediaSnippet from "@/components/MediaSnippet";
import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
       <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-28 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center bg-[#152033]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.25] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('/g1.jfif')" }} // Use your best gallery image here
        ></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center">
          <h4 className="text-[#FFC107] font-black text-sm md:text-base uppercase tracking-[0.2em] mb-4">
            Media & Gallery
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-[72px] font-black text-white tracking-tight leading-[1.1] mb-6">
            Witness the <br className="hidden md:block"/>
            <span className="text-[#FFC107]">Transformation.</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            A visual journey of resilience, empowerment, and community development across Kenya.
          </p>
          <div className="w-20 h-1.5 bg-[#FFC107] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- REUSE THE GALLERY COMPONENT --- */}
      {/* We can drop the snippet directly in here. You can also expand this later with multiple instances of the grid or pagination. */}
      <div className="-mt-16">
        <MediaSnippet />
      </div>

       <Footer /> 
    </main>
  );
}