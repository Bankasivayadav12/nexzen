"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";
import { Handshake, CheckCircle2, Award, Briefcase, ArrowRight } from "lucide-react";

export default function JobAssistancePolicyPage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Header Hero Section */}
        <section className="relative bg-gradient-to-b from-[#091F38] via-[#0C2748] to-[#091F38] text-white py-16 px-4 sm:px-8 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C69214]/20 border border-[#C69214]/40 text-[#E5B22E] text-xs font-extrabold uppercase tracking-widest">
              <Handshake className="w-4 h-4" />
              <span>CAREER SUCCESS POLICY</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Job Assistance <span className="text-[#C69214]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Our structured 100% Placement Support framework connects qualified candidates with top hiring partners across Accounting, Finance, Tech & Corporate domains.
            </p>
            <p className="text-xs text-slate-400 font-semibold">
              NexZen Asset Career Support Ecosystem | 25+ Years Legacy
            </p>
          </div>
        </section>

        {/* Policy Content Container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8 text-slate-700">
          
          {/* Box 1: Eligibility Criteria */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              1. Candidate Qualification & Eligibility
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              To unlock premium placement assistance services and interview drives with our 500+ corporate partners, candidates must meet the following performance standards:
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Maintain a minimum of 85% attendance across all live training sessions and practical workshops.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Successfully complete all capstone projects, assignments, and mock interview assessments.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Clear the final NexZen Certification Assessment with a minimum aggregate score of 70%.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Support Scope */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              2. Scope of Placement Support Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#091F38] font-bold text-sm">
                  <Briefcase className="w-4 h-4 text-[#0066FF]" />
                  <span>Resume & Profile Optimization</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ATS-compliant resume design, LinkedIn optimization, and portfolio building tailored to industry expectations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[#091F38] font-bold text-sm">
                  <Award className="w-4 h-4 text-[#C69214]" />
                  <span>Mock Interviews & Guidance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  1-on-1 technical and HR mock interviews with domain experts, offering actionable performance feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: Unlimited Interview Drives */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              3. Interview Opportunity Commitment
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Eligible candidates receive dedicated placement support until they secure an offer letter, with access to exclusive hiring drives from CA Firms, Big4 MNCs, Corporates, BFSI institutions, and Tech companies.
            </p>
          </div>

          {/* Banner */}
          <div className="bg-gradient-to-r from-[#091F38] to-[#0052FF] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">Ready to launch your professional career?</h3>
              <p className="text-xs text-slate-300">Talk with our career placement officers today.</p>
            </div>
            <button
              onClick={() => setIsEnquireModalOpen(true)}
              className="bg-[#C69214] hover:bg-[#D4A017] text-white text-xs font-extrabold px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Speak to Placement Cell</span>
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
