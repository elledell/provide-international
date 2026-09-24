"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function VolunteerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your form submission logic (e.g., Convex mutation) goes here
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: Visual & Narrative */}
      <div className="w-full lg:w-5/12 bg-[#152033] relative flex flex-col justify-between p-8 lg:p-16 min-h-[40vh] lg:min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113589914-07599052b61f?q=80&w=1200&auto=format&fit=crop')" }}
        ></div>
        
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-[#FFC107] font-bold text-sm uppercase tracking-widest transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Be the drop that <br />
            <span className="text-[#FFC107]">starts a ripple.</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-md">
            No contribution is too small. It is the collective flow of our shared compassion that washes away hardship and brings life to vulnerable communities.
          </p>
        </div>

        <div className="relative z-10 mt-12 lg:mt-0">
          <div className="w-16 h-1 bg-[#FFC107] mb-6"></div>
          <h4 className="text-white font-bold text-lg">Dr. Robert O. Mensah</h4>
          <p className="text-[#FFC107] text-xs font-black uppercase tracking-widest">Founder & Executive Director</p>
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="w-full lg:w-7/12 flex items-center justify-center p-8 lg:p-16 bg-[#f8fafc]">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          
          {isSubmitted ? (
            // Success State
            <div className="text-center py-12 animate-fade-in">
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-black text-[#152033] mb-4">Application Received!</h2>
              <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
                Thank you for stepping up to make an impact. Our community coordination team will reach out to you within 48 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-[#395684] hover:bg-[#152033] text-white font-black px-8 py-3.5 rounded uppercase tracking-widest text-sm transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : (
            // The Form
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-black text-[#152033] mb-3">Join the Mission</h2>
                <p className="text-slate-500">Fill out the details below and our team will connect with you to find the perfect volunteer opportunity.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#152033] uppercase tracking-wide">First Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#395684] focus:ring-1 focus:ring-[#395684] transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#152033] uppercase tracking-wide">Last Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#395684] focus:ring-1 focus:ring-[#395684] transition-all" placeholder="Doe" />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#152033] uppercase tracking-wide">Email Address</label>
                    <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#395684] focus:ring-1 focus:ring-[#395684] transition-all" placeholder="jane@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#152033] uppercase tracking-wide">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#395684] focus:ring-1 focus:ring-[#395684] transition-all" placeholder="+254 700 000 000" />
                  </div>
                </div>

                {/* Program Interest */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#152033] uppercase tracking-wide">Area of Interest</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-700 focus:outline-none focus:border-[#395684] focus:ring-1 focus:ring-[#395684] transition-all appearance-none cursor-pointer">
                    <option value="general">General Volunteering</option>
                    <option value="healthcare">Healthcare & Nutrition</option>
                    <option value="education">Education & Youth Mentorship</option>
                    <option value="climate">Climate & Agriculture</option>
                    <option value="events">Event Coordination</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#152033] uppercase tracking-wide">Why do you want to volunteer?</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-[#395684] focus:ring-1 focus:ring-[#395684] transition-all resize-none" placeholder="Tell us a little bit about yourself and your passion for our mission..."></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-[#FFC107] hover:bg-yellow-400 text-[#152033] font-black text-lg tracking-widest uppercase py-4 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 mt-4">
                  Submit Application
                </button>
              </form>
            </>
          )}

        </div>
      </div>

    </main>
  );
}