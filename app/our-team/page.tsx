import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data for the team grid to keep the code clean and easy to update
const teamMembers = [
  {
    name: "Dr. Samuel Ochieng",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    bio: "Leading our healthcare initiatives with over 15 years of experience in rural medicine."
  },
  {
    name: "Sarah Wanjiku",
    role: "Community Outreach Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Bridging the gap between our programs and the grassroots communities we serve."
  },
  {
    name: "David Kipkorir",
    role: "Financial Director",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=800&auto=format&fit=crop",
    bio: "Ensuring total transparency and maximum impact for every donation received."
  },
  {
    name: "Grace Mutuku",
    role: "Head of Education Programs",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    bio: "Designing curriculum and vocational training for youth empowerment."
  },
  {
    name: "Michael Odhiambo",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "Coordinating logistics across our Nairobi and rural field offices."
  },
  {
    name: "Faith Njoroge",
    role: "Nutrition Specialist",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    bio: "Driving food security programs and maternal nutrition education."
  }
];

export default function OurTeamPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar /> 

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-28 lg:pt-56 lg:pb-40 overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-[50vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-[#152033]/85 mix-blend-multiply"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center mt-10">
          <h4 className="text-[#FFC107] font-black text-sm md:text-base uppercase tracking-[0.25em] mb-4">
            Our People
          </h4>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white tracking-tight leading-[1.05] mb-8">
            Meet the Minds <br className="hidden md:block" />
            <span className="text-[#FFC107]">Behind the Mission.</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#FFC107] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- DIRECTOR SPOTLIGHT SECTION --- */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#395684]/5 rounded-bl-[200px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Massive Portrait */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-[#FFC107] rounded-2xl blur-[40px] opacity-20 translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop" 
                  alt="Dr. Robert O. Mensah" 
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl border-4 border-white z-10"
                />
                <div className="absolute -bottom-8 -right-8 bg-[#152033] p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                  <svg className="w-10 h-10 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Biography */}
            <div className="w-full lg:w-7/12 flex flex-col">
              <h4 className="text-[#395684] font-black text-sm uppercase tracking-[0.2em] mb-4">
                Founder & Executive Director
              </h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#152033] mb-8 leading-tight">
                Dr. Robert O. Mensah
              </h2>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-10">
                <p>
                  With a profound dedication to grassroots development, Dr. Mensah founded Provide International with a singular vision: to create sustainable, community-led infrastructure for those who need it most. 
                </p>
                <p>
                  His leadership has been instrumental in scaling our impact from a small community initiative in Nairobi's urban slums to a nationwide force for healthcare, education, and economic empowerment. Under his guidance, our community health outcomes are projected to more than double over the next two years.
                </p>
                <p className="font-bold text-[#152033] italic text-xl border-l-4 border-[#FFC107] pl-6 py-2 mt-8">
                  "It is the collective flow of our shared compassion that washes away hardship. Be the drop that starts a ripple of endless hope."
                </p>
              </div>

              {/* Social Links for Director */}
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-[#f8fafc] border border-slate-200 flex items-center justify-center text-[#395684] hover:bg-[#395684] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#f8fafc] border border-slate-200 flex items-center justify-center text-[#395684] hover:bg-[#395684] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM GRID SECTION --- */}
      <section className="py-24 lg:py-32 bg-[#f8fafc]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
          
          <div className="text-center mb-16 lg:mb-20">
            <h4 className="text-[#FFC107] font-black text-sm uppercase tracking-[0.2em] mb-4">
              Leadership Team
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#152033] tracking-tight">
              Dedicated to the Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                
                {/* Image Container */}
                <div className="relative h-[350px] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle blue overlay on hover */}
                  <div className="absolute inset-0 bg-[#395684]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text Content */}
                <div className="p-8">
                  <p className="text-[#FFC107] font-extrabold text-xs uppercase tracking-widest mb-2">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-black text-[#152033] mb-4">
                    {member.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- JOIN THE TEAM CTA --- */}
      <section className="py-24 bg-[#395684] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Want to make a difference?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            We are always looking for passionate volunteers, medical professionals, and educators to join our cause and expand our impact across Kenya.
          </p>
          <Link 
            href="/#volunteer" 
            className="inline-block bg-[#FFC107] hover:bg-yellow-400 text-slate-900 font-black px-12 py-5 rounded-md transition-all duration-300 text-[15px] uppercase tracking-widest shadow-xl hover:-translate-y-1"
          >
            Become a Volunteer
          </Link>
        </div>
      </section>

      <Footer /> 
    </main>
  );
}