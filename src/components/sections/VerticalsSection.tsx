"use client";

import React, { useState } from "react";
import { BookOpen, GraduationCap, Award, Briefcase, ChevronRight, Check } from "lucide-react";

interface VerticalsSectionProps {
  onOpenEnquireModal: () => void;
}

const verticals = [
  {
    id: "academics",
    title: "Academic Learning",
    badge: "Vertical 01",
    subtitle: "Structured University Degrees & Pre-Professional Foundations",
    description: "Empowering students with holistic undergraduate and postgraduate commerce, finance, and accounting foundations.",
    icon: GraduationCap,
    features: [
      "B.Com & M.Com Integrated Coaching",
      "Core Accounting & Financial Modeling",
      "Offline & Interactive Mentorship",
      "Semester Exam Preparation & Revision",
    ],
  },
  {
    id: "courses",
    title: "Professional Courses",
    badge: "Vertical 02",
    subtitle: "Industry-Aligned Professional Qualifications",
    description: "Specialized, rigorous training programs built to bridge the gap between classroom theory and real-world finance requirements.",
    icon: BookOpen,
    features: [
      "Advanced Taxation & GST Compliance",
      "Corporate Finance & SAP ERP Training",
      "Financial Reporting & Auditing Standards",
      "Practical Tally Prime & Excel Automation",
    ],
  },
  {
    id: "certifications",
    title: "Industry Certifications",
    badge: "Vertical 03",
    subtitle: "Global & National Professional Certifications",
    description: "Comprehensive coaching for top-tier prestigious certifications including CA, CMA, ACCA, and IFRS with record pass percentages.",
    icon: Award,
    features: [
      "CA Foundation, Intermediate & Final",
      "CMA India & US CMA Programs",
      "ACCA Global Professional Papers",
      "Diploma in IFRS (ACCA UK)",
    ],
  },
  {
    id: "training",
    title: "Job-Ready Training",
    badge: "Vertical 04",
    subtitle: "Hands-on Practical Finance Job Training",
    description: "Real-world simulation modules designed by CFOs and senior accountants to guarantee placement readiness.",
    icon: Briefcase,
    features: [
      "Live Corporate Ledger Simulations",
      "Interview Coaching & Resume Building",
      "100% Guaranteed Placement Support",
      "Mock Audits & Case Study Workshops",
    ],
  },
];

export default function VerticalsSection({ onOpenEnquireModal }: VerticalsSectionProps) {
  const [activeTab, setActiveTab] = useState("academics");
  const currentVertical = verticals.find((v) => v.id === activeTab) || verticals[0];

  return (
    <section id="verticals" className="py-16 bg-white border-y border-slate-100 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            5 Major Verticals
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#09101D] tracking-tight">
            A Unified Ecosystem for Finance & Career Growth
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Backed by 25+ years of institutional legacy, NEXZEN ASSET delivers end-to-end training solutions across all major verticals.
          </p>
        </div>

        {/* Vertical Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {verticals.map((v) => {
            const Icon = v.icon;
            const isActive = activeTab === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActiveTab(v.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "btn-gradient text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#0066FF]"}`} />
                <span>{v.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Detail Card */}
        <div className="bg-[#F4F7FB] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-100/70 px-3 py-1 rounded-md uppercase">
              {currentVertical.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09101D]">
              {currentVertical.title}
            </h3>
            <p className="text-sm font-bold text-blue-600">
              {currentVertical.subtitle}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {currentVertical.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentVertical.features.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-white p-3 rounded-xl border border-slate-200/60 shadow-2xs">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF] shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between h-full space-y-6 shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4">
                <currentVertical.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#09101D]">
                Interested in {currentVertical.title}?
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Connect with our expert faculty to discuss batch schedules, syllabus outlines, and scholarship options.
              </p>
            </div>

            <button
              onClick={onOpenEnquireModal}
              className="w-full btn-gradient text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2"
            >
              <span>Download Syllabus & Enquire</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
