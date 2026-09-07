"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Briefcase, Award, Users, TrendingUp, ArrowRight, X, CheckCircle2 } from "lucide-react";

interface FiveDoorsSectionProps {
  onOpenEnquireModal: () => void;
}

interface DoorCard {
  letter: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  buttonText: string;
  href: string;
  theme: {
    accentColor: string;
    numColor: string;
    watermarkColor: string;
    iconBg: string;
    iconBorder: string;
    iconColor: string;
    tagBg: string;
    tagText: string;
    lineBg: string;
  };
  details: {
    overview: string;
    highlights: string[];
    outcomes: string;
  };
}

const doorsData: DoorCard[] = [
  {
    letter: "A",
    number: "01",
    title: "Academics",
    description: "Strong foundations for B.Com, M.Com, BBA and MBA learners.",
    tags: ["B.Com", "M.Com", "BBA", "MBA"],
    buttonText: "Explore Academics",
    href: "/academics",
    theme: {
      accentColor: "#0066FF",
      numColor: "text-[#0066FF]",
      watermarkColor: "text-blue-200/60",
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
      iconColor: "text-[#0066FF]",
      tagBg: "bg-[#EBF3FF] hover:bg-blue-100",
      tagText: "text-[#0066FF]",
      lineBg: "bg-[#0066FF]",
    },
    details: {
      overview: "Comprehensive academic degree coaching combined with practical financial accounting standards.",
      highlights: [
        "University curriculum aligned semester modules",
        "Expert university faculty and guest lectures",
        "Exam preparation, revision test series & study kits",
        "Integrated computer practical training",
      ],
      outcomes: "Build top academic percentage and solid core accounting fundamentals.",
    },
  },
  {
    letter: "P",
    number: "02",
    title: "Professional Courses",
    description: "Prepare for recognised professional qualifications.",
    tags: ["CA", "CMA", "CS", "CPA", "ACCA", "IFRS", "EA"],
    buttonText: "Explore Courses",
    href: "/courses",
    theme: {
      accentColor: "#C69214",
      numColor: "text-[#C69214]",
      watermarkColor: "text-amber-200/60",
      iconBg: "bg-amber-50",
      iconBorder: "border-amber-100",
      iconColor: "text-[#C69214]",
      tagBg: "bg-[#FFF8E6] hover:bg-amber-100",
      tagText: "text-[#C69214]",
      lineBg: "bg-[#C69214]",
    },
    details: {
      overview: "Rigorous coaching for top national and international charter qualifications.",
      highlights: [
        "CA (ICAI) Foundation, Inter & Final preparation",
        "CMA (ICMAI & US CMA) dual-track coaching",
        "ACCA UK global chartered accountant papers",
        "Diploma in IFRS by ACCA UK certification",
      ],
      outcomes: "Attain elite charter designations with industry-leading pass percentages.",
    },
  },
  {
    letter: "C",
    number: "03",
    title: "Certifications",
    description: "Build specialised skills and add credentials.",
    tags: ["NISM", "NCFM", "Tally", "Excel", "Power BI"],
    buttonText: "View All Certifications",
    href: "/certifications",
    theme: {
      accentColor: "#0D9488",
      numColor: "text-[#0D9488]",
      watermarkColor: "text-teal-200/60",
      iconBg: "bg-teal-50",
      iconBorder: "border-teal-100",
      iconColor: "text-[#0D9488]",
      tagBg: "bg-[#E6FFFA] hover:bg-teal-100",
      tagText: "text-[#0D9488]",
      lineBg: "bg-[#0D9488]",
    },
    details: {
      overview: "Short-term skill booster certifications for financial software and market analytics.",
      highlights: [
        "Advanced Excel & Financial Modeling VBA",
        "Power BI for Finance & Interactive Dashboards",
        "Tally Prime with Practical GST & TDS Filing",
        "NISM Series V-A & NCFM Capital Markets Prep",
      ],
      outcomes: "Add high-value tech & analytics badges to your resume.",
    },
  },
  {
    letter: "J",
    number: "04",
    title: "Job-Ready Training",
    description: "Choose domain, choose role, train with projects.",
    tags: ["Accounting", "Audit", "Tax", "Capital Markets"],
    buttonText: "Explore Roles",
    href: "/training",
    theme: {
      accentColor: "#9333EA",
      numColor: "text-[#9333EA]",
      watermarkColor: "text-purple-200/60",
      iconBg: "bg-purple-50",
      iconBorder: "border-purple-100",
      iconColor: "text-[#9333EA]",
      tagBg: "bg-[#F3E8FF] hover:bg-purple-100",
      tagText: "text-[#9333EA]",
      lineBg: "bg-[#9333EA]",
    },
    details: {
      overview: "100% practical simulation job training matching corporate finance job roles.",
      highlights: [
        "Real ledger auditing and corporate tax simulation",
        "Live ERP / SAP & Tally enterprise projects",
        "Mock interviews & resume building by senior CFOs",
        "100% placement support & hiring partner drives",
      ],
      outcomes: "Transition directly from student to employed finance professional.",
    },
  },
  {
    letter: "S",
    number: "05",
    title: "Strategic Solutions",
    description: "Consultation and training solutions for businesses and institutions.",
    tags: ["Advisory", "Corporate Training", "College Partnerships"],
    buttonText: "Talk to Team",
    href: "/solutions",
    theme: {
      accentColor: "#059669",
      numColor: "text-[#059669]",
      watermarkColor: "text-emerald-200/60",
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-100",
      iconColor: "text-[#059669]",
      tagBg: "bg-[#ECFDF5] hover:bg-emerald-100",
      tagText: "text-[#059669]",
      lineBg: "bg-[#059669]",
    },
    details: {
      overview: "B2B workforce development, corporate finance training, and university MOU tie-ups.",
      highlights: [
        "Customized employee upskilling in IFRS & Taxation",
        "Campus-to-Corporate student training programs",
        "Institutional curriculum integration & MOU partnerships",
        "CFO strategic financial advisory solutions",
      ],
      outcomes: "Transform institutional capability and corporate workforce efficiency.",
    },
  },
];

export default function FiveDoorsSection({ onOpenEnquireModal }: FiveDoorsSectionProps) {
  const [selectedDoor, setSelectedDoor] = useState<DoorCard | null>(null);

  const getDoorIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5" />;
      case 1:
        return <Briefcase className="w-5 h-5" />;
      case 2:
        return <Award className="w-5 h-5" />;
      case 3:
        return <Users className="w-5 h-5" />;
      case 4:
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="five-doors" className="relative pt-6 sm:pt-8 pb-4 sm:pb-6 bg-gradient-to-b from-[#EDF3FA] via-[#F4F8FF] to-[#EDF3FA] w-full overflow-hidden">
      
      {/* Decorative Wave Curves in Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[300px] pointer-events-none opacity-60">
        <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M150 0 C300 60 450 180 600 240 V0 H150 Z" fill="url(#five_doors_top_wave)" />
          <defs>
            <linearGradient id="five_doors_top_wave" x1="150" y1="0" x2="600" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5B82E" stopOpacity="0.4" />
              <stop offset="0.7" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section matching reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black bg-[#EBF3FF] text-[#0066FF] tracking-[0.16em] uppercase border border-blue-200/60 shadow-xs mb-3">
              FIVE-VERTICAL INTERACTIVE SECTION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#091F38] tracking-tight leading-tight">
              Five clear doors into the <span className="text-[#091F38]">Nex</span><span className="text-[#C69214]">Zen</span> ecosystem
            </h2>
          </div>

          {/* Right Header Graphics matching reference screenshot */}
          <div className="flex items-center gap-6 hidden sm:flex shrink-0">
            <div className="text-right">
              <div className="text-xl sm:text-2xl font-black italic text-[#091F38] leading-none tracking-wide">
                Learn Practice Grow Get Hired
              </div>
            </div>
            <div className="h-10 w-px bg-slate-300"></div>
            <div className="text-left text-[10px] font-extrabold tracking-widest text-slate-500 uppercase leading-tight">
              <span>SAME LEARNING</span><br />
              <span className="text-[#0066FF]">DIFFERENT</span><br />
              <span className="text-[#C69214]">BRIGHTER FUTURE</span>
            </div>
          </div>
        </div>

        {/* 5 Column Door Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {doorsData.map((door, index) => (
            <motion.div
              key={door.number}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 40px -10px rgba(9, 31, 56, 0.1)" }}
              transition={{ type: "spring", stiffness: 350, damping: 24 }}
              className="bg-white/95 backdrop-blur-md rounded-[28px] p-5 sm:p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between h-full relative overflow-hidden group cursor-pointer hover:border-blue-300 transition-all"
              onClick={() => setSelectedDoor(door)}
            >
              <div>
                {/* Top Row: Ghost Watermark Letter & Circular Icon Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-4xl sm:text-5xl font-black ${door.theme.watermarkColor} select-none leading-none`}>
                    {door.letter}
                  </span>
                  <div className={`w-10 h-10 rounded-full ${door.theme.iconBg} border ${door.theme.iconBorder} flex items-center justify-center ${door.theme.iconColor} group-hover:scale-110 transition-transform`}>
                    {getDoorIcon(index)}
                  </div>
                </div>

                {/* Number & Title */}
                <h3 className="text-xl sm:text-[22px] font-black text-[#091F38] leading-tight tracking-tight mt-1">
                  <span className={`${door.theme.numColor} mr-2`}>{door.number}</span>
                  {door.title}
                </h3>

                {/* Subtitle Description */}
                <p className="text-slate-500 text-xs font-medium mt-2 leading-relaxed min-h-[38px]">
                  {door.description}
                </p>

                {/* Pill Tags Container */}
                <div className="flex flex-wrap gap-1.5 my-5">
                  {door.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-bold px-3 py-1 rounded-full transition-colors ${door.theme.tagBg} ${door.theme.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Color Indicator Line */}
                <div className={`w-8 h-1 ${door.theme.lineBg} rounded-full mb-4 group-hover:w-12 transition-all duration-300`}></div>
              </div>

              {/* Action Button - Gradient Blue-to-Gold CTA */}
              <Link
                href={door.href}
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white text-xs font-extrabold py-2.5 px-4 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-1.5 mt-2 group-hover:scale-[1.02]"
              >
                <span>{door.buttonText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline Bar matching reference screenshot */}
        <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-[11px] font-black uppercase tracking-[0.16em] gap-2">
          <div className="flex items-center gap-2 text-[#C69214]">
            <span className="w-6 h-0.5 bg-[#C69214] inline-block rounded-full"></span>
            <span>SKILLS TODAY. A BRIGHTER TOMORROW.</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-5 text-slate-500 font-bold">
            <span className="hover:text-[#0066FF] transition-colors">PEOPLE</span>
            <span className="text-slate-300 font-normal">|</span>
            <span className="hover:text-[#0066FF] transition-colors">SKILLS</span>
            <span className="text-slate-300 font-normal">|</span>
            <span className="hover:text-[#0066FF] transition-colors">OPPORTUNITIES</span>
            <span className="text-slate-300 font-normal">|</span>
            <span className="hover:text-[#0066FF] transition-colors">IMPACT</span>
          </div>
        </div>

      </div>

      {/* Dedicated Interactive Landing Modal Drawer */}
      <AnimatePresence>
        {selectedDoor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedDoor(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-black text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full">
                  DOOR {selectedDoor.number}
                </span>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Dedicated Ecosystem Page
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D]">
                {selectedDoor.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600 mt-1">
                {selectedDoor.description}
              </p>

              <div className="my-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Overview & Key Highlights
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {selectedDoor.details.overview}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {selectedDoor.details.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-500">
                  Target Outcome: <span className="text-[#09101D]">{selectedDoor.details.outcomes}</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedDoor(null);
                    onOpenEnquireModal();
                  }}
                  className="bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Enquire for {selectedDoor.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
