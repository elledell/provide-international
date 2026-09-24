import Link from 'next/link';
import { Camera, HeartHandshake, Sprout, BookOpen, Users, Activity, Globe } from 'lucide-react';

// Using a TypeScript interface for clean props
interface GalleryItemProps {
  image: string;
  title: string;
  icon: React.ElementType;
  heightClass: string;
}

const GalleryItem = ({ image, title, icon: Icon, heightClass }: GalleryItemProps) => (
  <div className={`relative rounded-2xl overflow-hidden group shadow-md w-full ${heightClass}`}>
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#152033]/90 via-[#152033]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute bottom-0 left-0 w-full p-6 flex items-end gap-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <div className="w-12 h-12 shrink-0 rounded-full bg-[#FFC107] text-[#152033] flex items-center justify-center shadow-lg">
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <h4 className="text-white font-bold text-xl drop-shadow-md pb-2">
        {title}
      </h4>
    </div>
  </div>
);

export default function MediaSnippet() {
  return (
    <section className="py-20 lg:py-32 bg-white text-[#152033] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-[#FFC107] font-black tracking-[0.2em] uppercase text-sm mb-4 flex items-center justify-center gap-2">
            <Camera size={18} strokeWidth={3} /> Provide International In Action
          </span>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Our Impact in Pictures
          </h2>
          <p className="text-slate-600 text-[17px] leading-relaxed max-w-2xl mx-auto">
            From grassroots healthcare initiatives to community empowerment and climate mitigation, see how we are building a more resilient Kenya every single day.
          </p>
        </div>

        {/* --- 6-IMAGE MASONRY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-[700px]">
          
          {/* COLUMN 1: Tall then Short */}
          <div className="flex flex-col gap-6 h-full">
            <GalleryItem 
              heightClass="h-[300px] lg:h-[60%]"
              image="/g1.jfif"
              title="Community Outreach"
              icon={Users}
            />
            <GalleryItem 
              heightClass="h-[250px] lg:h-[40%]"
              image="/g2.jfif"
              title="Agricultural Sustainability"
              icon={Sprout}
            />
          </div>

          {/* COLUMN 2: Short then Tall */}
          <div className="flex flex-col gap-6 h-full">
             <GalleryItem 
              heightClass="h-[250px] lg:h-[40%]"
              image="/g3.jfif"
              title="Education & Mentorship"
              icon={BookOpen}
            />
            <GalleryItem 
              heightClass="h-[300px] lg:h-[60%]"
              image="/g4.jfif"
              title="Maternal Healthcare"
              icon={Activity}
            />
          </div>

          {/* COLUMN 3: Tall then Short */}
          <div className="flex flex-col gap-6 h-full">
             <GalleryItem 
              heightClass="h-[300px] lg:h-[60%]"
              image="/g5.jfif"
              title="Disaster Relief"
              icon={HeartHandshake}
            />
            <GalleryItem 
              heightClass="h-[250px] lg:h-[40%]"
              image="/g6.jfif"
              title="Global Partnerships"
              icon={Globe}
            />
          </div>
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <div className="mt-16 flex justify-center">
          <Link 
            href="/media" 
            className="bg-[#152033] text-white px-10 py-4 rounded font-black shadow-md uppercase tracking-[0.15em] text-xs flex items-center justify-center transition-all duration-300 hover:bg-[#FFC107] hover:text-[#152033] hover:-translate-y-1"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </section>
  );
}