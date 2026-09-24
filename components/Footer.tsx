import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#152033] text-white pt-20 pb-10">
      {/* Using a very dark, rich shade of your brand blue for the background */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16">
        
        {/* --- TOP SECTION: Brand & Newsletter --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          
          {/* Left: Brand & Tagline */}
          <div className="lg:w-1/2 max-w-xl">
            <h4 className="text-[#FFC107] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Provide International
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif leading-[1.1] mb-6 text-white">
              Bring hope into your everyday.
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-md">
              Community-inspired initiatives, healthcare services, and empowerment programs designed for meaningful, sustainable living.
            </p>
          </div>

          {/* Right: Newsletter Box */}
          <div className="lg:w-1/2 w-full max-w-xl">
            <div className="border border-white/20 p-8 lg:p-10 rounded-sm">
              <h4 className="text-[#FFC107] font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
                Stay Connected
              </h4>
              <h3 className="text-2xl md:text-3xl font-serif leading-tight mb-8 text-white">
                New impact stories, community updates, and meaningful reports.
              </h3>
              
              <form className="flex flex-col sm:flex-row w-full h-12">
                <input 
                  type="email" 
                  placeholder="Enter email address..." 
                  required
                  className="flex-1 bg-[#f8fafc] px-4 py-3 sm:py-0 text-slate-900 placeholder-slate-500 text-sm outline-none focus:ring-2 focus:ring-[#FFC107]"
                />
                <button 
                  type="submit" 
                  className="bg-[#395684] hover:bg-[#2a4266] transition-colors text-white font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 sm:py-0 h-full mt-3 sm:mt-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- MIDDLE SECTION: 4-Column Links --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 py-16 border-t border-white/10">
          
          {/* Column 1 */}
          <div>
            <h4 className="text-[#FFC107] font-bold text-[11px] uppercase tracking-[0.2em] mb-6">About</h4>
            <ul className="space-y-4">
              <li><Link href="#our-story" className="text-slate-300 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link href="#leadership" className="text-slate-300 hover:text-white transition-colors text-sm">Leadership Team</Link></li>
              <li><Link href="#financials" className="text-slate-300 hover:text-white transition-colors text-sm">Financials</Link></li>
              <li><Link href="#careers" className="text-slate-300 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#FFC107] font-bold text-[11px] uppercase tracking-[0.2em] mb-6">Initiatives</h4>
            <ul className="space-y-4">
              <li><Link href="#mother-child" className="text-slate-300 hover:text-white transition-colors text-sm">Mother & Child</Link></li>
              <li><Link href="#nutrition" className="text-slate-300 hover:text-white transition-colors text-sm">Nutrition Services</Link></li>
              <li><Link href="#boda-girls" className="text-slate-300 hover:text-white transition-colors text-sm">Boda Girls</Link></li>
              <li><Link href="#emergency" className="text-slate-300 hover:text-white transition-colors text-sm">Emergency Relief</Link></li>
              <li><Link href="#view-all" className="text-slate-300 hover:text-white transition-colors text-sm">View All</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[#FFC107] font-bold text-[11px] uppercase tracking-[0.2em] mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#donate" className="text-slate-300 hover:text-white transition-colors text-sm">Donate Now</Link></li>
              <li><Link href="#volunteer" className="text-slate-300 hover:text-white transition-colors text-sm">Volunteer</Link></li>
              <li><Link href="#privacy" className="text-slate-300 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#terms" className="text-slate-300 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="#partner" className="text-slate-300 hover:text-white transition-colors text-sm">Partner Program</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#FFC107] font-bold text-[11px] uppercase tracking-[0.2em] mb-6">Connect</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 pr-4">
              Follow Provide International for community stories, field updates and new releases.
            </p>
            <a href="mailto:info@provideinternational.org" className="block text-slate-300 hover:text-white transition-colors text-sm mb-6">
              info@provideinternational.org
            </a>
            <div className="flex gap-3">
              <a href="#instagram" className="border border-white/30 text-white hover:border-white transition-colors text-[10px] uppercase tracking-[0.15em] px-5 py-2.5">
                Instagram
              </a>
              <a href="#linkedin" className="border border-white/30 text-white hover:border-white transition-colors text-[10px] uppercase tracking-[0.15em] px-5 py-2.5">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* --- LOWER MIDDLE: Trust Badges --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10 py-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
          
          <div className="py-4 lg:py-0 px-4">
            <h5 className="text-white font-serif font-bold text-lg mb-1">Tax Deductible</h5>
            <p className="text-slate-400 text-xs">On all eligible donations</p>
          </div>
          
          <div className="py-4 lg:py-0 px-4">
            <h5 className="text-white font-serif font-bold text-lg mb-1">Transparent</h5>
            <p className="text-slate-400 text-xs">Annual financial reporting</p>
          </div>
          
          <div className="py-4 lg:py-0 px-4">
            <h5 className="text-white font-serif font-bold text-lg mb-1">Secure Checkout</h5>
            <p className="text-slate-400 text-xs">Safe and trusted payments</p>
          </div>
          
          <div className="py-4 lg:py-0 px-4">
            <h5 className="text-white font-serif font-bold text-lg mb-1">Made with Heart</h5>
            <p className="text-slate-400 text-xs">Designed to inspire hope</p>
          </div>

        </div>

        {/* --- BOTTOM SECTION: Copyright & Payments --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-slate-400 text-sm">
            Copyright © {new Date().getFullYear()} / Provide International
          </p>
          
          {/* Simulated Payment Icons */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[8px] font-black text-blue-800">AMEX</div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center text-[10px] font-black text-slate-900">Pay</div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
              <div className="flex">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 -mr-1.5 opacity-90"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 opacity-90"></div>
              </div>
            </div>
            <div className="w-10 h-6 bg-white rounded flex items-center justify-center font-serif text-[10px] font-bold text-blue-900 italic">Visa</div>
          </div>
        </div>

      </div>
    </footer>
  );
}