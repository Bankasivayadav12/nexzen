"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";
import { FileText, CheckCircle2, ArrowRight } from "lucide-react";

export default function TermsPage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Header Hero Section */}
        <section className="relative bg-gradient-to-b from-[#091F38] via-[#0C2748] to-[#091F38] text-white py-16 px-4 sm:px-8 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C69214]/20 border border-[#C69214]/40 text-[#E5B22E] text-xs font-extrabold uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              <span>NEXZEN ASSET LEGAL</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Terms & <span className="text-[#C69214]">Conditions</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our platform, enrolling in courses, or utilizing strategic asset solutions.
            </p>
            <p className="text-xs text-slate-400 font-semibold">
              Last Updated: January 2026 | Effective Date: September 2026
            </p>
          </div>
        </section>

        {/* Policy Content Container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8 text-slate-700">
          
          {/* Box 1: Acceptance of Terms */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              1. Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              By accessing, browsing, or enrolling in programs provided by NexZen Asset (an evolution of Asset Integrated Info Systems), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please refrain from accessing our services.
            </p>
          </div>

          {/* Box 2: Enrollment & Fee Structure */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              2. Course Enrollment & Fee Guidelines
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>All course fees must be settled according to the payment structure outlined during batch confirmation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Scholarships and promotional discounts are subject to verification and eligibility criteria.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Batch transfers or deferrals must be formally requested in writing at least 7 working days prior to batch start date.</span>
              </li>
            </ul>
          </div>

          {/* Box 3: Intellectual Property */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              3. Intellectual Property Rights
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              All learning materials, practical project frameworks, software templates, lecture recordings, and proprietary tools provided during training remain the exclusive intellectual property of NexZen Asset. Unauthorized redistribution, copying, or commercial exploitation is strictly prohibited.
            </p>
          </div>

          {/* Box 4: Code of Conduct */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              4. Code of Conduct & Academic Integrity
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Students and professionals are expected to maintain professional decorum, adhere to attendance policies (minimum 80% attendance for certification eligibility), and fulfill assessment assignments with complete honesty and integrity.
            </p>
          </div>

          {/* Help Banner */}
          <div className="bg-gradient-to-r from-[#091F38] to-[#0052FF] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">Have questions about our Terms?</h3>
              <p className="text-xs text-slate-300">Speak directly with our legal & compliance team.</p>
            </div>
            <button
              onClick={() => setIsEnquireModalOpen(true)}
              className="bg-[#C69214] hover:bg-[#D4A017] text-white text-xs font-extrabold px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Contact Compliance</span>
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
