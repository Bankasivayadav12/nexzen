"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";
import { Lock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Header Hero Section */}
        <section className="relative bg-gradient-to-b from-[#091F38] via-[#0C2748] to-[#091F38] text-white py-16 px-4 sm:px-8 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C69214]/20 border border-[#C69214]/40 text-[#E5B22E] text-xs font-extrabold uppercase tracking-widest">
              <Lock className="w-4 h-4" />
              <span>DATA PROTECTION COMMITMENT</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Privacy <span className="text-[#C69214]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              At NexZen Asset, we prioritize your privacy and data security. Learn how we collect, protect, and handle your information.
            </p>
            <p className="text-xs text-slate-400 font-semibold">
              Last Updated: January 2026 | NexZen Asset Data Governance
            </p>
          </div>
        </section>

        {/* Policy Content Container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8 text-slate-700">
          
          {/* Box 1: Information Collection */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              1. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              When you submit inquiries, register for courses, or request counseling, we collect relevant information such as your name, email address, phone number, academic background, and career objectives.
            </p>
          </div>

          {/* Box 2: Use of Data */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              2. How We Use Your Data
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>To deliver course materials, batch schedules, and academic updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>To facilitate placement support and submit candidates to corporate hiring partners.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>To communicate important compliance, fee receipts, and certification notices.</span>
              </li>
            </ul>
          </div>

          {/* Box 3: Data Security & Sharing */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              3. Data Security & Third-Party Protection
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              NexZen Asset employs enterprise-grade encryption and secure database controls. We never sell, rent, or trade candidate personal data to third-party advertisers. Data is shared exclusively with verified corporate employers for placement purposes.
            </p>
          </div>

          {/* Help Banner */}
          <div className="bg-gradient-to-r from-[#091F38] to-[#0052FF] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">Data Privacy Inquiry?</h3>
              <p className="text-xs text-slate-300">Contact our Data Officer at info@assettally.com</p>
            </div>
            <button
              onClick={() => setIsEnquireModalOpen(true)}
              className="bg-[#C69214] hover:bg-[#D4A017] text-white text-xs font-extrabold px-6 py-[#C69214] py-3 rounded-full shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Contact Privacy Officer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </section>
      </main>

      <Footer onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
}
