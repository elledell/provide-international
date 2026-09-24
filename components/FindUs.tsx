export default function FindUs() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h4 className="text-[#FFC107] font-black text-sm uppercase tracking-widest mb-2">
            Find Us
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-[#152033] mb-4">
            Head Office Location
          </h2>
          <div className="w-16 h-1 bg-[#FFC107] mx-auto"></div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* LEFT SIDE: Contact Card (Brand Blue #395684) */}
          <div className="relative bg-[#395684] rounded-2xl p-8 md:p-12 shadow-xl w-full flex flex-col justify-center">

            <h3 className="text-[#FFC107] font-bold text-xl mb-8">Nairobi HQ</h3>

            <div className="space-y-8">
              
              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white/10 rounded flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Provide International</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Kayole, Spine Road<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white/10 rounded flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Working Hours</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    08:00 AM - 06:00 PM<br />
                    Monday - Friday
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white/10 rounded flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Call Us</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Office: +254 769 673 239
                  </p>
                </div>
              </div>

              {/* Digital Channels */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 shrink-0 bg-white/10 rounded flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Digital Channels</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    info@provideinternational.org
                  </p>
                  <p className="text-[#FFC107] text-sm mt-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                    +254 769 673 239 (Text Only)
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Overlapping Images & Map */}
          <div className="w-full flex flex-col gap-4">
            
            {/* Top Container: Two Overlapping Images */}
            <div className="relative w-full h-[300px] sm:h-[400px]">
              
              {/* Primary Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                alt="Headquarters Building" 
                className="absolute top-0 left-0 w-3/4 h-[85%] object-cover rounded-2xl shadow-md"
              />
              
              {/* Overlapping Foreground Sign Image */}
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=600&auto=format&fit=crop" 
                alt="Provide International Sign" 
                className="absolute bottom-0 right-0 w-1/2 h-[75%] object-cover rounded-2xl border-[6px] border-white shadow-xl"
              />
            </div>

            {/* Bottom Container: Map with View Button */}
            <div className="relative w-full h-[200px] sm:h-[250px] bg-slate-300 rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Map Background" 
                className="w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute inset-0 bg-[#152033]/30 mix-blend-multiply"></div>
              
              {/* Center Map Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-[15px] px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  View on Google Maps
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}