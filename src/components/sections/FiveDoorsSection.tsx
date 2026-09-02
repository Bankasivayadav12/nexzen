"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, X, Sparkles } from "lucide-react";

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
    buttonText: "View All",
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
  const [activeJobDomain, setActiveJobDomain] = useState<string | null>(null);

  return (
    <section id="five-doors" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Section Header */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            FIVE-VERTICAL INTERACTIVE SECTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#09101D] tracking-tight">
            Five clear doors into the NexZen ecosystem
          </h2>
        </div>

        {/* 5 Column Door Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {doorsData.map((door) => (
            <motion.div
              key={door.number}
              whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(0, 102, 255, 0.12)" }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between h-full hover:border-blue-300 transition-colors group cursor-pointer"
              onClick={() => setSelectedDoor(door)}
            >
              <div>
                {/* Large Background Faint Letter */}
                <div className="text-3xl font-light text-slate-400/70 mb-1">
                  {door.letter}
                </div>

                {/* Number & Title */}
                <h3 className="text-xl sm:text-[22px] font-black text-[#09101D] leading-snug group-hover:text-[#0066FF] transition-colors">
                  <span className="text-[#09101D] font-extrabold mr-1.5">{door.number}</span>
                  {door.title}
                </h3>

                {/* Subtitle Description */}
                <p className="text-slate-500 text-xs font-medium mt-2 leading-relaxed min-h-[36px]">
                  {door.description}
                </p>

                {/* Pill Tags Container */}
                <div className="flex flex-wrap gap-1.5 my-6">
                  {door.tags.map((tag) => (
                    <span
                      key={tag}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (door.number === "04") {
                          setActiveJobDomain(tag);
                        } else {
                          setSelectedDoor(door);
                        }
                      }}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-colors ${
                        activeJobDomain === tag
                          ? "bg-[#0066FF] text-white"
                          : "bg-[#EBF3FF] text-[#0066FF] hover:bg-blue-100"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDoor(door);
                }}
                className="w-full btn-gradient text-white text-[12px] font-bold py-2.5 px-4 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-1 mt-2"
              >
                <span>{door.buttonText}</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Developer Behaviour Banner Note */}
        <div className="mt-8 bg-[#FDF3C4]/90 border border-[#F6E05E] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-ping" />
          <p className="text-xs sm:text-sm text-[#744210] font-medium leading-normal">
            <strong className="font-extrabold text-[#522E08]">Developer behaviour:</strong>{" "}
            each card can open a dedicated landing page; Job-Ready Training should also expand into domain choices on click.
          </p>
        </div>

      </div>

      {/* Dedicated Interactive Landing Page / Modal Drawer */}
      <AnimatePresence>
        {selectedDoor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
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
                  className="btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2"
                >
                  <span>Enquire for {selectedDoor.title}</span>
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
