"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CareerGuidanceSectionProps {
  onOpenEnquireModal: () => void;
}

const situationOptions = [
  "I am pursuing B.Com",
  "I completed B.Com",
  "I am pursuing MBA",
  "I want CA / CMA / ACCA",
  "I want a Finance Job",
  "I want to switch my career",
  "I need a Certification",
];

export default function CareerGuidanceSection({ onOpenEnquireModal }: CareerGuidanceSectionProps) {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);

  return (
    <section id="career-guidance" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            CAREER GUIDANCE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#09101D] tracking-tight">
            Not sure which path to choose?
          </h2>
        </div>

        {/* 2-Column Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: White Situation Selector Card */}
          <div className="lg:col-span-6 bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-black text-[#09101D] mb-4">
                Choose your situation
              </h3>

              {/* 2-Column Pill Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {situationOptions.map((sit) => {
                  const isSelected = selectedSituation === sit;
                  return (
                    <motion.button
                      key={sit}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSituation(isSelected ? null : sit)}
                      className={`px-4 py-3 rounded-full text-xs font-extrabold transition-all duration-200 text-left border ${
                        isSelected
                          ? "bg-[#0066FF] text-white border-[#0066FF] shadow-md"
                          : "bg-white text-[#09101D] border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
                      }`}
                    >
                      {sit}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenEnquireModal}
                className="btn-gradient text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 w-full sm:w-auto text-center"
              >
                Get Career Guidance
              </button>
            </div>
          </div>

          {/* Right Column: Soft Ice Gradient Visual Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#DDEBFC] via-[#E4F4FA] to-[#E2F7F6] rounded-[28px] p-6 sm:p-8 flex flex-col justify-end relative overflow-hidden border border-blue-100/60 shadow-xs min-h-[300px] sm:min-h-[340px]">
            
            {/* Background Blur Orbs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />

            {/* Bottom Right Floating Card: Counselling Route */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl border border-white/90 max-w-sm sm:ml-auto z-10 space-y-4 w-full">
              <h4 className="text-lg font-black text-[#09101D] tracking-tight">
                Counselling route
              </h4>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-slate-100 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#09101D]">
                  Profile
                </span>

                <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

                <span className="bg-slate-100 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#09101D]">
                  Goal
                </span>

                <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />
              </div>

              <div>
                <span className="inline-block bg-[#EBF3FF] border border-blue-200 text-xs font-extrabold px-4 py-2 rounded-full text-[#0066FF]">
                  Recommended path
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
