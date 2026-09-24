import Link from "next/link";
 import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programsData = [
  {
    title: "Mother & Child Healthcare",
    description: "The well-being of mothers and children is crucial for the healthy development of societies. We provide essential maternal and child healthcare to ensure safe deliveries and healthy beginnings.",
    goal: 20000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Nutrition & Livelihoods Program",
    description: "There is a growing need for programs that address the socio-economic well-being of individuals and communities. We offer nutrition education and enhance livelihoods through active training.",
    goal: 15000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Support to People Living with HIV/AIDS",
    description: "We support people living with HIV/AIDS in our communities in a variety of ways including advocacy, access to medication, and community destigmatization efforts.",
    goal: 18000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Combatting Gender-Based Violence",
    description: "Provide International's Commitment to Change! We are deeply committed to addressing and mitigating the impact of Gender-Based Violence (GBV) in the slums of Korogocho, Kayole, and Dandora.",
    goal: 10000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Women Economic Empowerment",
    description: "Improving Lives Through Economic Empowerment. We believe that empowering women, especially single mothers and young girls, is crucial for fostering sustainable development and creating resilient communities.",
    goal: 20000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1593113589914-07599052b61f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Educational Support for Vulnerable Children",
    description: "For over 30 years, Provide International has been dedicated to supporting the education of vulnerable children living in marginalized communities, bridging the gap to socioeconomic advancement.",
    goal: 15000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Transforming Mental Health",
    description: "Transforming Mental Health in Nairobi's Underserved Communities Since 1986. Our comprehensive approach integrates clinical services, community education, and policy advocacy.",
    goal: 12000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Disaster Response and Management",
    description: "In the high-risk areas of Korogocho, Kayole, and Dandora, disaster response and management are critical to protecting vulnerable communities from frequent and severe crises.",
    goal: 25000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Health Support for Vulnerable Communities",
    description: "We are dedicated to ensuring that every individual has access to quality healthcare, regardless of their socioeconomic status or geographic location.",
    goal: 20000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Pioneering Peace and Harmony",
    description: "Our mission is to foster peaceful coexistence and sustainable development. Amidst political tensions and resource scarcity, we are dedicated to creating lasting solutions that bridge divides.",
    goal: 10000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Climate Change Mitigation Initiatives",
    description: "Reviving Agriculture in Arid and Semi-Arid Regions. We support farmers in Kitui County with sustainable agricultural practices, irrigation systems, and soil conservation techniques.",
    goal: 10000,
    raised: 0,
    image: "https://images.unsplash.com/photo-1628183186290-a7cb745ff8dc?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-28 lg:pt-56 lg:pb-40 overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-[#152033]/85 mix-blend-multiply"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center mt-10">
          <h4 className="text-[#FFC107] font-black text-sm md:text-base uppercase tracking-[0.25em] mb-4">
            A help to those who need it
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-white tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto">
            These are the programs we are running currently at <span className="text-[#FFC107]">Provide International</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FFC107] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- PROGRAMS GRID --- */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {programsData.map((program, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col group hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                
                {/* Top Image & Floating Donate Button */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#152033]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  
                  {/* Floating Donate Button */}
                  <Link 
                    href="/#donate" 
                    className="absolute bottom-4 right-4 bg-[#FFC107] hover:bg-yellow-400 text-slate-900 px-6 py-2.5 font-black text-[11px] uppercase tracking-widest rounded shadow-lg transition-transform hover:-translate-y-1"
                  >
                    Donate Now
                  </Link>
                </div>

                {/* Card Body */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-black text-[#152033] mb-4 leading-tight">
                    {program.title}
                  </h3>
                  
                  {/* line-clamp-4 keeps all text descriptions the exact same height visually */}
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-8 line-clamp-4 flex-1">
                    {program.description}
                  </p>

                  {/* Progress Bar & Stats */}
                  <div className="mt-auto">
                    
                    {/* The Bar */}
                    <div className="w-full bg-slate-100 h-2 rounded-full mb-3 overflow-hidden">
                      {/* Width is calculated dynamically, defaults to 0% based on your data */}
                      <div 
                        className="bg-[#395684] h-full rounded-full" 
                        style={{ width: `${program.goal > 0 ? (program.raised / program.goal) * 100 : 0}%` }}
                      ></div>
                    </div>
                    
                    {/* Goal & Raised Numbers */}
                    <div className="flex justify-between items-center text-[11px] font-black text-slate-500 uppercase tracking-widest mb-8">
                      <span>Goal: ${program.goal.toLocaleString()}</span>
                      <span className="text-[#395684]">Raised: ${program.raised.toLocaleString()}</span>
                    </div>
                    
                    {/* View Details Button */}
                    <Link 
                      href={`/programs/${program.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="block w-full text-center border-2 border-[#152033] text-[#152033] hover:bg-[#152033] hover:text-white transition-colors duration-300 py-3.5 rounded font-black text-xs uppercase tracking-[0.15em]"
                    >
                      View Details
                    </Link>

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

       <Footer />
    </main>
  );
}