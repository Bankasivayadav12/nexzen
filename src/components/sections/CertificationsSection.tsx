"use client";

import React from "react";
import { ShieldCheck, Award, ArrowUpRight, CheckCircle } from "lucide-react";

interface CertificationsSectionProps {
  onOpenEnquireModal: () => void;
}

const certifications = [
  {
    code: "CA",
    title: "Chartered Accountancy",
    provider: "ICAI",
    duration: "3 - 4 Years",
    highlights: ["Foundation to Final Coaching", "Articleship Practical Guidance", "Mock Test Series & Mentorship"],
    accent: "from-blue-600 to-indigo-600",
  },
  {
    code: "CMA",
    title: "Cost & Management Accountant",
    provider: "ICMAI / IMA US",
    duration: "2 - 3 Years",
    highlights: ["Corporate Strategic Planning", "Financial Decision Support", "Cost Auditing & Analytics"],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    code: "ACCA",
    title: "Global Chartered Accountant",
    provider: "ACCA UK",
    duration: "2 - 3 Years",
    highlights: ["Recognized in 180+ Countries", "Flexible Exam Windows", "IFRS Compliant Curriculum"],
    accent: "from-cyan-500 to-blue-600",
  },
  {
    code: "IFRS",
    title: "Diploma in IFRS",
    provider: "ACCA UK Certification",
    duration: "6 Months",
    highlights: ["Global Accounting Standards", "Real Case Study Analysis", "High Demand MNC Qualification"],
    accent: "from-blue-600 to-[#00C6FF]",
  },
];

export default function CertificationsSection({ onOpenEnquireModal }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-16 bg-[#F4F7FB] w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Certification Path</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09101D] tracking-tight">
              Prestigious Global & National Qualifications
            </h2>
          </div>
          <button
            onClick={onOpenEnquireModal}
            className="btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 self-start md:self-auto"
          >
            <span>View All Certification Batches</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item) => (
            <div
              key={item.code}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] text-lg font-black flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.code}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#09101D] group-hover:text-[#0066FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-slate-400 mt-0.5">
                  Body: {item.provider}
                </p>

                <div className="space-y-2 my-5 pt-2 border-t border-slate-100">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenEnquireModal}
                className="w-full mt-2 bg-blue-50 hover:bg-[#0066FF] text-[#0066FF] hover:text-white font-bold text-xs py-2.5 rounded-xl transition-all duration-200 text-center"
              >
                Explore {item.code} Course
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
