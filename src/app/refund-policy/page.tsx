"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";
import { ShieldCheck, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function RefundPolicyPage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Header Hero Section */}
        <section className="relative bg-gradient-to-b from-[#091F38] via-[#0C2748] to-[#091F38] text-white py-16 px-4 sm:px-8 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C69214]/20 border border-[#C69214]/40 text-[#E5B22E] text-xs font-extrabold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>TRANSPARENT GUARANTEE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Refund <span className="text-[#C69214]">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We stand by the quality of our industry-aligned education. Review our clear and fair refund and batch modification guidelines below.
            </p>
            <p className="text-xs text-slate-400 font-semibold">
              Last Updated: January 2026 | NexZen Asset Policy Guidelines
            </p>
          </div>
        </section>

        {/* Policy Content Container */}
        <section className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8 text-slate-700">
          
          {/* Box 1: Pre-Batch Refund Window */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              1. 7-Day Refund Window (Prior to Batch Commencement)
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Students who register for a program and decide to cancel their enrollment at least 7 days before the official batch start date are eligible for a 100% full refund minus nominal administrative processing fees.
            </p>
          </div>

          {/* Box 2: Post Batch Start Guidelines */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              2. Post-Commencement Refund Eligibility
            </h2>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span><strong>Within First 2 Sessions:</strong> A 70% refund of tuition fees is applicable if written cancellation request is submitted before session 3.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span><strong>After Session 3:</strong> Fees become non-refundable as resources, software licenses, and mentor allocations are locked for the batch duration.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Batch rescheduling option is always available to transfer your enrollment to a future batch free of charge.</span>
              </li>
            </ul>
          </div>

          {/* Box 3: Refund Process & Timeline */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
            <h2 className="text-xl font-bold text-[#091F38] flex items-center gap-2">
              <span className="w-2 h-6 bg-[#C69214] rounded-full inline-block"></span>
              3. Processing Timeline & Method
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Approved refunds will be processed via the original method of payment within 7–10 business days from approval confirmation. Email notification with bank transaction receipt will be provided to the candidate.
            </p>
          </div>

          {/* Contact Banner */}
          <div className="bg-gradient-to-r from-[#091F38] to-[#0052FF] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-bold">Request a Refund or Batch Reschedule?</h3>
              <p className="text-xs text-slate-300">Our student support desk is available to assist you.</p>
            </div>
            <button
              onClick={() => setIsEnquireModalOpen(true)}
              className="bg-[#C69214] hover:bg-[#D4A017] text-white text-xs font-extrabold px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <span>Submit Request</span>
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
