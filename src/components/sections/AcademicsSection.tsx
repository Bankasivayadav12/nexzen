"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, CheckCircle2, X, ChevronRight, Award } from "lucide-react";

interface AcademicsSectionProps {
  onOpenEnquireModal: () => void;
}

interface AcademicProgram {
  letter: string;
  code: string;
  title: string;
  subjects: string;
  buttonText: string;
  level: "Undergraduate" | "Postgraduate";
  overview: string;
  curriculum: string[];
}

const programsData: AcademicProgram[] = [
  {
    letter: "B",
    code: "B.Com",
    title: "Bachelor of Commerce",
    subjects: "Financial Accounting · Corporate Accounting · Cost Accounting · Taxation · Business Law · Auditing · FM",
    buttonText: "View B.Com",
    level: "Undergraduate",
    overview: "Comprehensive undergraduate degree coaching with deep focus on corporate financial accounting standards.",
    curriculum: [
      "Financial Accounting & Advanced Bookkeeping",
      "Corporate Accounting & Company Secretarial Basics",
      "Direct & Indirect Taxation (GST & Income Tax)",
      "Financial Management & Capital Budgeting",
    ],
  },
  {
    letter: "M",
    code: "M.Com",
    title: "Master of Commerce",
    subjects: "Advanced Accounting · Finance · Taxation · Corporate Laws · Research / Projects",
    buttonText: "View M.Com",
    level: "Postgraduate",
    overview: "Postgraduate academic specialization designed for higher corporate roles, research, and university lecturship.",
    curriculum: [
      "Advanced Corporate Financial Reporting",
      "Strategic Financial Management & Analytics",
      "Corporate Laws & Governance Standards",
      "Academic Research Methodology & Thesis",
    ],
  },
  {
    letter: "B",
    code: "BBA",
    title: "Bachelor of Business Administration",
    subjects: "Accounting · Finance · Marketing · HR · Business Analytics",
    buttonText: "View BBA",
    level: "Undergraduate",
    overview: "Management & business administration foundation blending financial acumen with leadership skills.",
    curriculum: [
      "Principles of Management & Organizational Behavior",
      "Managerial Economics & Business Analytics",
      "Corporate Finance & Working Capital",
      "Marketing Management & Consumer Insights",
    ],
  },
  {
    letter: "M",
    code: "MBA",
    title: "Master of Business Administration",
    subjects: "Finance · Marketing · HR · Operations · Business Analytics",
    buttonText: "View MBA",
    level: "Postgraduate",
    overview: "Executive management program focusing on strategic finance, business intelligence, and leadership.",
    curriculum: [
      "Strategic Management & Business Policy",
      "Corporate Valuation & Portfolio Analytics",
      "Digital Marketing & HR Strategy",
      "Operations Management & Supply Chain",
    ],
  },
];

export default function AcademicsSection({ onOpenEnquireModal }: AcademicsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(null);

  return (
    <section id="academics-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            ACADEMICS PAGE
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09101D] tracking-tight">
            Strong Foundations. Stronger Careers.
          </h1>
        </div>

        {/* Top Row: 4 Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {programsData.map((prog) => (
            <motion.div
              key={prog.code}
              whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(0, 102, 255, 0.12)" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors group cursor-pointer"
              onClick={() => setSelectedProgram(prog)}
            >
              <div>
                {/* Faint Letter */}
                <div className="text-3xl font-light text-slate-400/80 mb-1">
                  {prog.letter}
                </div>

                {/* Program Title */}
                <h3 className="text-2xl font-black text-[#09101D] group-hover:text-[#0066FF] transition-colors">
                  {prog.code}
                </h3>

                {/* Subjects List */}
                <p className="text-slate-500 text-xs font-medium mt-3 leading-relaxed min-h-[60px]">
                  {prog.subjects}
                </p>
              </div>

              {/* View Button */}
              <div className="pt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProgram(prog);
                  }}
                  className="btn-gradient text-white text-[12.5px] font-bold py-2.5 px-5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
                >
                  {prog.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row Grid (Left Visual Ice Box + Right Page Intent Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Visual Ice Glass Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#DDEBFC] via-[#E4F4FA] to-[#E2F7F6] rounded-3xl p-8 border border-blue-100/70 shadow-xs flex flex-col justify-between relative overflow-hidden min-h-[220px]">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="my-auto z-10 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-white/80 backdrop-blur-sm text-[#0066FF]">
                Structured University Degree Coaching
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#09101D]">
                Connecting Academic Excellence with Corporate Placement
              </h3>
            </div>
          </div>

          {/* Right Page Intent Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-black text-[#09101D]">
                Page intent
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2 leading-relaxed">
                This page should not look like a small local tuition page. It should feel premium, structured and connected to future professional careers.
              </p>
            </div>

            {/* 4 Step Horizontal Process Pills with Blue Arrows */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              
              {/* Step 1 */}
              <div className="bg-[#F8FAFC] px-4 py-2.5 rounded-full border border-slate-200 text-xs font-extrabold text-[#09101D] shadow-2xs">
                Subject Support
              </div>

              <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

              {/* Step 2 */}
              <div className="bg-[#F8FAFC] px-4 py-2.5 rounded-full border border-slate-200 text-xs font-extrabold text-[#09101D] shadow-2xs">
                Concepts
              </div>

              <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

              {/* Step 3 */}
              <div className="bg-[#F8FAFC] px-4 py-2.5 rounded-full border border-slate-200 text-xs font-extrabold text-[#09101D] shadow-2xs">
                Exam Readiness
              </div>

              <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

              {/* Step 4 */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2.5 rounded-full border border-blue-200 text-xs font-black text-[#0066FF] shadow-2xs">
                Career Direction
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Interactive Academic Program Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {selectedProgram.level} Degree Program
              </span>

              <h3 className="text-3xl font-black text-[#09101D]">
                {selectedProgram.code} - {selectedProgram.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                {selectedProgram.overview}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Key Subject Support & Modules
                </h4>
                <div className="space-y-2 pt-1">
                  {selectedProgram.curriculum.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProgram(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Enquire for {selectedProgram.code}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
