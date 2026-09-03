"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, X, Award, GraduationCap, BookOpen, Layers } from "lucide-react";

interface ProfessionalCoursesSectionProps {
  onOpenEnquireModal: () => void;
}

interface CourseCard {
  bigLogo: string;
  code: string;
  fullName: string;
  features: string[];
  levels: string;
  body: string;
  overview: string;
}

const coursesData: CourseCard[] = [
  {
    bigLogo: "CA",
    code: "CA",
    fullName: "Chartered Accountant (ICAI)",
    features: ["Classroom Training", "Exam Preparation", "Mock Tests", "Mentoring"],
    levels: "Foundation / Intermediate / Final",
    body: "Institute of Chartered Accountants of India",
    overview: "India's premier financial charter qualification covering accounting, auditing, taxation, corporate laws, and strategic management.",
  },
  {
    bigLogo: "CMA",
    code: "CMA",
    fullName: "Cost & Management Accountant",
    features: ["Classroom Training", "Exam Preparation", "Mock Tests", "Mentoring"],
    levels: "Foundation / Intermediate / Final",
    body: "ICMAI (India) & IMA (USA)",
    overview: "Specialized qualification focusing on strategic cost management, corporate financial planning, and performance management.",
  },
  {
    bigLogo: "CS",
    code: "CS",
    fullName: "Company Secretary",
    features: ["Classroom Training", "Exam Preparation", "Mock Tests", "Mentoring"],
    levels: "CSEET / Executive / Professional",
    body: "Institute of Company Secretaries of India",
    overview: "Elite corporate governance and legal compliance designation mastering company law and board advisory.",
  },
  {
    bigLogo: "CPA",
    code: "CPA",
    fullName: "Certified Public Accountant",
    features: ["Classroom Training", "Exam Preparation", "Mock Tests", "Mentoring"],
    levels: "AUD / FAR / REG / BAR",
    body: "AICPA (USA)",
    overview: "The world's highest standard US accounting qualification recognized across global MNCs and Big 4 firms.",
  },
  {
    bigLogo: "ACCA",
    code: "ACCA",
    fullName: "Association of Chartered Certified Accountants",
    features: ["Classroom Training", "Exam Preparation", "Mock Tests", "Mentoring"],
    levels: "Knowledge / Skills / Strategic Professional",
    body: "ACCA (UK Global)",
    overview: "Global chartered accountancy qualification recognized in 180+ countries with flexible quarterly computer-based exams.",
  },
  {
    bigLogo: "Diploma",
    code: "Diploma in IFRS",
    fullName: "Diploma in International Financial Reporting",
    features: ["Classroom Training", "Exam Preparation", "Mock Tests", "Mentoring"],
    levels: "Professional Specialization",
    body: "ACCA (UK)",
    overview: "Specialized 6-month diploma mastering IFRS & IAS global accounting standards for corporate financial statements.",
  },
  {
    bigLogo: "EA",
    code: "EA",
    fullName: "Enrolled Agent",
    features: ["Classroom Training", "Exam Preparation", "Mock Tests", "Mentoring"],
    levels: "Part 1 / Part 2 / Part 3 SEE",
    body: "Internal Revenue Service (IRS USA)",
    overview: "Highest credential awarded by the US IRS authorizing unlimited representation before the US tax authority.",
  },
];

export default function ProfessionalCoursesSection({ onOpenEnquireModal }: ProfessionalCoursesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<CourseCard | null>(null);

  return (
    <section id="professional-courses-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Section Header */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            PROFESSIONAL COURSES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09101D] tracking-tight">
            Prepare for globally recognised professional qualifications
          </h1>
        </div>

        {/* 7 Qualifications Cards Grid Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-8">
          {coursesData.map((course) => (
            <motion.div
              key={course.code}
              whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(0, 102, 255, 0.12)" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors group cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div>
                {/* Big Blue Logo / Abbreviation */}
                <div className="text-2xl sm:text-3xl font-black text-[#0066FF] tracking-tight mb-0.5">
                  {course.bigLogo}
                </div>

                {/* Qualification Code/Name */}
                <h3 className="text-xs sm:text-sm font-extrabold text-[#09101D] group-hover:text-[#0066FF] transition-colors leading-tight">
                  {course.code}
                </h3>

                {/* Features List */}
                <div className="space-y-1 my-3 sm:my-4 pt-2.5 sm:pt-3 border-t border-slate-100">
                  {course.features.map((f, idx) => (
                    <div key={idx} className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Dark Navy Qualification Detail Banner */}
        <div className="bg-[#091427] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Qualification detail pages
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              Each card routes to levels, subjects, batches, mentor info and enquiry.
            </p>
          </div>

          {/* Center White Pill Box */}
          <div className="bg-white text-[#09101D] font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md text-center">
            Foundation / Intermediate / Final
          </div>

          {/* Right Gradient CTA Button */}
          <button
            onClick={onOpenEnquireModal}
            className="btn-gradient text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 shrink-0 w-full sm:w-auto"
          >
            Explore Professional Courses
          </button>

        </div>

      </div>

      {/* Qualification Modal Detail */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {selectedCourse.body}
              </span>

              <h3 className="text-3xl font-black text-[#09101D]">
                {selectedCourse.fullName}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                {selectedCourse.overview}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Program Levels:</span>
                  <span className="font-extrabold text-[#0066FF]">{selectedCourse.levels}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 font-medium">Exam Body:</span>
                  <span className="font-bold text-[#09101D]">{selectedCourse.body}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Included Preparation Support
                </h4>
                {selectedCourse.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Enquire for {selectedCourse.code}</span>
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
