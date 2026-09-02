"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Quote, ChevronRight, X, Building, Award, CheckCircle2 } from "lucide-react";

interface AlumniPageSectionProps {
  onOpenEnquireModal: () => void;
}

interface AlumniCard {
  id: string;
  name: string;
  program: string;
  designation: string;
  company: string;
  quote: string;
}

const alumniData: AlumniCard[] = [
  {
    id: "01",
    name: "Alumni 01",
    program: "Accounts Payable Analyst & SAP FICO",
    designation: "Senior AP Analyst",
    company: "Big 4 Accounting Firm",
    quote: "Short success quote goes here after approval.",
  },
  {
    id: "02",
    name: "Alumni 02",
    program: "Tally Prime & GST Practical Training",
    designation: "Taxation Specialist",
    company: "MNC Financial Services",
    quote: "Short success quote goes here after approval.",
  },
  {
    id: "03",
    name: "Alumni 03",
    program: "Financial Modelling & Valuation",
    designation: "Equity Research Analyst",
    company: "Global Investment Bank",
    quote: "Short success quote goes here after approval.",
  },
  {
    id: "04",
    name: "Alumni 04",
    program: "ACCA Global Chartered Track",
    designation: "Audit Associate",
    company: "Corporate Risk Advisory",
    quote: "Short success quote goes here after approval.",
  },
];

export default function AlumniPageSection({ onOpenEnquireModal }: AlumniPageSectionProps) {
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniCard | null>(null);

  return (
    <section id="alumni-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            OUR ALUMNI
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09101D] tracking-tight">
            Careers built through learning and practice
          </h1>
        </div>

        {/* 4 Alumni Cards Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {alumniData.map((alum) => (
            <motion.div
              key={alum.id}
              whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(0, 102, 255, 0.12)" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors group cursor-pointer"
              onClick={() => setSelectedAlumni(alum)}
            >
              <div>
                {/* Top Soft Cyan/Teal Gradient Circle Avatar */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#A6F3E6] via-[#B2EBF2] to-[#E0F7FA] border-2 border-white shadow-sm flex items-center justify-center text-[#0066FF] mb-4">
                  <User className="w-6 h-6 text-[#0066FF]/60" />
                </div>

                {/* Name Title */}
                <h3 className="text-2xl font-black text-[#09101D] group-hover:text-[#0066FF] transition-colors">
                  {alum.name}
                </h3>

                {/* Details List */}
                <div className="space-y-1 my-3 text-xs font-medium text-slate-400">
                  <div>Program / Role Training</div>
                  <div>Current Designation</div>
                  <div>Company Placeholder</div>
                </div>
              </div>

              {/* Bottom Quote Box */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-700 italic leading-snug">
                  &ldquo;{alum.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Privacy Rule Note Banner */}
        <div className="bg-[#FDF3C4]/90 border border-[#F6E05E] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-ping" />
          <p className="text-xs sm:text-sm text-[#744210] font-medium leading-normal">
            <strong className="font-extrabold text-[#522E08]">Privacy rule:</strong>{" "}
            show first name, program, role, company and quote only. Do not display private contact information.
          </p>
        </div>

      </div>

      {/* Alumni Detail Modal */}
      <AnimatePresence>
        {selectedAlumni && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedAlumni(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#A6F3E6] via-[#B2EBF2] to-[#E0F7FA] flex items-center justify-center">
                  <User className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#09101D]">
                    {selectedAlumni.name}
                  </h3>
                  <p className="text-xs text-[#0066FF] font-extrabold">
                    {selectedAlumni.designation} · {selectedAlumni.company}
                  </p>
                </div>
              </div>

              <div className="my-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs">
                <div className="font-bold text-slate-700">Completed Program:</div>
                <div className="text-slate-600 font-medium">{selectedAlumni.program}</div>
                <div className="pt-2 border-t border-blue-200/50 italic text-slate-800 font-semibold">
                  &ldquo;{selectedAlumni.quote}&rdquo;
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedAlumni(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedAlumni(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Build Your Career</span>
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
