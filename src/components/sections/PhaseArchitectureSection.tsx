"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhaseArchitectureSection() {
  const phase1Features = [
    "Fast Static Pages",
    "5 Core Verticals",
    "Course Catalog",
    "Enquiry Lead Forms",
    "Job Opportunities Desk",
    "Offline Batch Schedules",
    "WhatsApp & Call CTAs",
    "SEO Optimization",
    "Mobile Responsive UI",
    "Certification Badges",
    "Corporate Solutions",
    "Location & Center Maps",
  ];

  const futurePhaseFeaturesCol1 = [
    "Online Classes",
    "Student Login",
    "Online Payments",
    "Assignments",
    "Mock Exams",
    "Attendance",
    "Recruiter Portal",
    "AI Career Guidance",
  ];

  const futurePhaseFeaturesCol2 = [
    "Recorded Courses",
    "LMS",
    "Student Dashboard",
    "Tests",
    "Certificates",
    "Progress Tracking",
    "Corporate Portal",
    "Mobile App",
  ];

  return (
    <section id="phase-architecture" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            PHASE 1 VS FUTURE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#091F38] tracking-tight">
            Build simple now. Keep scalable later.
          </h2>
        </div>

        {/* 2-Column Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column: Dark Navy Card (Phase 1) */}
          <div className="bg-[#091F38] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6 border border-slate-800">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                PHASE 1 — Static / Lightweight Website
              </h3>
              <p className="text-xs sm:text-sm text-[#D4A017] font-extrabold mt-1">
                Required now
              </p>

              {/* 2-Column Grid of 12 White Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {phase1Features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-full px-4 py-3 text-center text-xs font-extrabold text-[#091F38] shadow-xs hover:scale-[1.02] transition-transform"
                  >
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Golden Yellow Bottom Warning Box */}
            <div className="bg-[#FEF3C7] text-[#92400E] border border-[#F59E0B]/30 rounded-2xl p-4 sm:p-5 text-center text-xs sm:text-sm font-extrabold shadow-xs">
              No payment gateway · No student login · No complex LMS initially
            </div>
          </div>

          {/* Right Column: White Card (Future Phase) */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D] tracking-tight">
                FUTURE PHASE — Architecture-ready
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                Do not imply these features are required immediately
              </p>

              {/* 2-Column Grid of 16 Future Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {/* Column 1 */}
                <div className="space-y-3">
                  {futurePhaseFeaturesCol1.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/90 rounded-full px-4 py-3 text-center text-xs font-bold text-[#09101D] shadow-2xs hover:border-blue-300 transition-colors"
                    >
                      {feat}
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  {futurePhaseFeaturesCol2.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/90 rounded-full px-4 py-3 text-center text-xs font-bold text-[#09101D] shadow-2xs hover:border-blue-300 transition-colors"
                    >
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
