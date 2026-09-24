"use client";

import { useState } from "react";
import Link from "next/link";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";

export default function DonatePage() {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("monthly");
  const [amount, setAmount] = useState<number>(50);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mpesa" | "paypal">("card");

  const presetAmounts = [25, 50, 100, 250, 500];

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center bg-[#152033]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8fafc] to-transparent z-10"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 relative z-20 text-center">
          <h4 className="text-[#FFC107] font-black text-sm md:text-base uppercase tracking-[0.2em] mb-4">
            Your Impact
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Become the Drop <br className="hidden md:block"/>
            <span className="text-[#FFC107]">That Creates the Sea.</span>
          </h1>
        </div>
      </section>

      {/* --- DONATION LAYOUT --- */}
      <section className="relative z-30 -mt-16 lg:-mt-24 pb-24 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT SIDE: The "Why" & Narrative */}
            <div className="w-full lg:w-5/12 pt-8 lg:pt-16 order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-black text-[#152033] mb-6 leading-tight">
                Empower Communities, <br/> Transform Lives.
              </h2>
              <p className="text-slate-600 text-[17px] leading-relaxed mb-8">
                Your contribution directly funds life-saving healthcare, nutrition programs, and educational support in Nairobi's urban slums and Kenya's arid regions. We ensure that every dollar is maximized for grassroots impact.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-[#395684]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#152033] mb-1">Tax Deductible</h4>
                    <p className="text-sm text-slate-500">Provide International is a registered NGO. Your donations are fully tax-deductible.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-blue-50 flex items-center justify-center text-[#395684]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#152033] mb-1">Secure Transaction</h4>
                    <p className="text-sm text-slate-500">We use bank-level encryption to ensure your payment information is 100% secure.</p>
                  </div>
                </div>
              </div>

              {/* Trust Image */}
              <div className="rounded-2xl overflow-hidden shadow-md h-[250px]">
                <img 
                  src="https://images.unsplash.com/photo-1593113589914-07599052b61f?q=80&w=800&auto=format&fit=crop" 
                  alt="Community Impact" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE: Interactive Donation Card Mockup */}
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <div className="bg-white rounded-[2rem] shadow-2xl p-6 sm:p-10 border border-slate-100">
                
                {/* Donation Frequency Toggle */}
                <div className="flex bg-slate-100 p-1.5 rounded-xl mb-8">
                  <button 
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 ${donationType === "one-time" ? "bg-white text-[#152033] shadow-sm" : "text-slate-500 hover:text-[#152033]"}`}
                  >
                    Give Once
                  </button>
                  <button 
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 py-3 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 ${donationType === "monthly" ? "bg-[#395684] text-white shadow-sm" : "text-slate-500 hover:text-[#152033]"}`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection Grid */}
                <div className="mb-8">
                  <h3 className="text-slate-800 font-bold mb-4">Select an amount</h3>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setAmount(preset)}
                        className={`py-4 rounded-xl font-black text-lg border-2 transition-all duration-200 ${amount === preset ? "border-[#FFC107] bg-[#FFC107]/10 text-[#152033]" : "border-slate-200 text-slate-600 hover:border-[#395684] hover:text-[#395684]"}`}
                      >
                        ${preset}
                      </button>
                    ))}
                    <button
                      onClick={() => setAmount(0)}
                      className={`py-4 rounded-xl font-bold text-sm border-2 transition-all duration-200 ${amount === 0 ? "border-[#FFC107] bg-[#FFC107]/10 text-[#152033]" : "border-slate-200 text-slate-600 hover:border-[#395684]"}`}
                    >
                      Custom
                    </button>
                  </div>
                  
                  {/* Custom Amount Input (Shows if amount is 0) */}
                  {amount === 0 && (
                    <div className="relative mt-4 animate-fade-in">
                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">$</span>
                      <input 
                        type="number" 
                        placeholder="Other Amount" 
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl py-4 pl-10 pr-4 font-bold text-lg text-[#152033] focus:outline-none focus:border-[#FFC107]"
                        autoFocus
                      />
                    </div>
                  )}

                  {/* Contextual Impact Message */}
                  <p className="text-sm text-slate-500 mt-4 text-center bg-blue-50/50 py-3 rounded-lg border border-blue-100">
                    {donationType === "monthly" 
                      ? `A monthly gift of $${amount || "..."} helps sustain long-term community programs.`
                      : `Your one-time gift of $${amount || "..."} provides immediate relief to those in need.`}
                  </p>
                </div>

                {/* Personal Information (Mock Fields) */}
                <div className="mb-8 space-y-4">
                  <h3 className="text-slate-800 font-bold mb-4">Your Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#395684]" />
                    <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#395684]" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#395684]" />
                </div>

                {/* Payment Methods */}
                <div className="mb-10">
                  <h3 className="text-slate-800 font-bold mb-4">Payment Method</h3>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setPaymentMethod("card")}
                      className={`flex-1 py-3 border-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors ${paymentMethod === "card" ? "border-[#395684] text-[#395684] bg-blue-50" : "border-slate-200 text-slate-500"}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                      Card
                    </button>
                    <button 
                      onClick={() => setPaymentMethod("mpesa")}
                      className={`flex-1 py-3 border-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors ${paymentMethod === "mpesa" ? "border-green-600 text-green-700 bg-green-50" : "border-slate-200 text-slate-500"}`}
                    >
                      M-Pesa
                    </button>
                    <button 
                      onClick={() => setPaymentMethod("paypal")}
                      className={`flex-1 py-3 border-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors ${paymentMethod === "paypal" ? "border-[#003087] text-[#003087] bg-blue-50" : "border-slate-200 text-slate-500"}`}
                    >
                      PayPal
                    </button>
                  </div>
                </div>

                {/* The Main Donate Button */}
                <button className="w-full bg-[#FFC107] hover:bg-yellow-400 text-[#152033] font-black text-xl tracking-wide uppercase py-5 rounded-xl shadow-[0_10px_20px_rgba(255,193,7,0.3)] hover:shadow-[0_15px_25px_rgba(255,193,7,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  DONATE {amount > 0 ? `$${amount}` : ""}
                </button>
                
                <p className="text-center text-xs text-slate-400 mt-6 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                  Guaranteed safe & secure checkout
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