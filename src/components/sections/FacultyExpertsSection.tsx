"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, X, ChevronRight } from "lucide-react";

interface FacultyExpertsSectionProps {
  onOpenEnquireModal: () => void;
}

export default function FacultyExpertsSection({ onOpenEnquireModal }: FacultyExpertsSectionProps) {
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null);

  const facultyCards = [1, 2, 3, 4];

  return (
    <section id="faculty-experts" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            FACULTY / INDUSTRY EXPERTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#09101D] tracking-tight">
            Learn from experienced professionals
          </h2>
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {facultyCards.map((num) => (
            <motion.div
              key={num}
              whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(0, 102, 255, 0.12)" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors group cursor-pointer"
              onClick={() => setSelectedFaculty(num)}
            >
              <div>
                {/* Ice Gradient Photo Placeholder */}
                <div className="bg-gradient-to-br from-[#DDEBFC] via-[#E4F4FA] to-[#E2F7F6] rounded-2xl h-44 sm:h-48 w-full mb-4 border border-blue-100/60 flex items-center justify-center">
                  <UserCheck className="w-10 h-10 text-[#0066FF]/40" />
                </div>

                {/* Faculty Name Title */}
                <h3 className="text-xl font-black text-[#09101D] group-hover:text-[#0066FF] transition-colors">
                  Faculty Placeholder
                </h3>

                {/* Subtitles & Details */}
                <div className="space-y-0.5 my-3 text-xs text-slate-500 font-medium leading-relaxed">
                  <div>Qualification</div>
                  <div>Specialisation</div>
                  <div>Years of Experience</div>
                  <div>Subjects / Roles Handled</div>
                </div>
              </div>

              {/* View Profile CTA Button */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFaculty(num);
                  }}
                  className="btn-gradient text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Golden Yellow Warning / Note Box */}
        <div className="bg-[#FDE68A] text-[#78350F] rounded-2xl p-4 sm:p-5 text-center text-xs sm:text-sm font-extrabold shadow-xs border border-[#F6E05E]">
          No fabricated names: use placeholders until actual faculty names, photos and qualifications are available.
        </div>

      </div>

      {/* Faculty Profile Modal Drawer */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                FACULTY PROFILE #{selectedFaculty}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D]">
                Faculty Placeholder
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Senior Chartered Accountant & Academic Mentor
              </p>

              <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Qualification:</span>
                  <span className="font-bold text-[#09101D]">CA / CMA / ACCA Charter</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Specialisation:</span>
                  <span className="font-bold text-[#09101D]">Corporate Tax & IFRS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Years of Experience:</span>
                  <span className="font-bold text-[#0066FF]">15+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Roles Handled:</span>
                  <span className="font-bold text-[#09101D]">Ex-Big 4 Senior Auditor</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedFaculty(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedFaculty(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Connect with Counselor</span>
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
