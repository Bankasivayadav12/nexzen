"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface JobApplyFlowSectionProps {
  onOpenEnquireModal?: () => void;
}

export default function JobApplyFlowSection({ onOpenEnquireModal }: JobApplyFlowSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    experience: "",
    resume: "",
    jobRef: "NXZ-101",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="job-apply-flow" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            JOB DETAIL + APPLY FLOW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#091F38] tracking-tight">
            Apply through NexZen — centralised candidate referral process
          </h2>
        </div>

        {/* 2-Column Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Dark Navy Job Detail Card */}
          <div className="lg:col-span-6 bg-[#091F38] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6 border border-slate-800">
            <div>
              {/* Job Ref Code Badge */}
              <div className="mb-3">
                <span className="inline-block bg-[#C69214]/20 text-[#D4A017] border border-[#C69214]/40 text-[10.5px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  NXZ-101
                </span>
              </div>

              {/* Job Title */}
              <h3 className="text-3xl font-black text-white tracking-tight mb-2">
                Accounts Payable Analyst
              </h3>

              {/* Subtitle Info Meta */}
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Company / Industry · Location · Experience · Qualification · Skills · Employment Type · Date Posted
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-6">
                <button
                  onClick={() => {
                    const formEl = document.getElementById("application-form-input");
                    formEl?.focus();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-3 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
                >
                  Apply Through NexZen
                </button>

                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`text-xs font-bold px-6 py-3 rounded-full transition-all duration-200 ${
                    isSaved
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-white hover:bg-slate-100 text-[#09101D]"
                  }`}
                >
                  {isSaved ? "Saved Job ✓" : "Save Job"}
                </button>
              </div>
            </div>

            {/* Bottom Privacy Note */}
            <div className="pt-6 border-t border-white/10 text-xs text-slate-400 font-medium">
              Recruiter contact details remain private. Candidates submit an application managed by NexZen.
            </div>
          </div>

          {/* Right Column: White Application Form Card */}
          <div className="lg:col-span-6 bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 my-auto">
                <div className="w-16 h-16 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#09101D]">
                  Application Submitted!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your application for <strong className="text-[#09101D]">Accounts Payable Analyst (NXZ-101)</strong> has been submitted to the NexZen placement desk.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gradient text-white text-xs font-bold px-8 py-3 rounded-full mt-4"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <h3 className="text-2xl font-black text-[#09101D] mb-4">
                  Application form
                </h3>

                {/* Name */}
                <div>
                  <input
                    id="application-form-input"
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-[#F8FAFC]"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-[#F8FAFC]"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-[#F8FAFC]"
                  />
                </div>

                {/* Qualification */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Qualification"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-[#F8FAFC]"
                  />
                </div>

                {/* Experience */}
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-[#F8FAFC]"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <input
                    type="text"
                    placeholder="Resume Upload (Paste link or drive URL)"
                    value={formData.resume}
                    onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-[#F8FAFC]"
                  />
                </div>

                {/* Job Reference ID */}
                <div>
                  <input
                    type="text"
                    required
                    readOnly
                    value={formData.jobRef}
                    className="w-full px-4 py-3 rounded-full border border-slate-200 text-xs focus:outline-none text-[#09101D] bg-slate-100 font-bold"
                  />
                </div>

                {/* Submit Application Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-gradient text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-full shadow-lg shadow-blue-500/25 mt-1"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
