"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Sparkles, Square, Home, ArrowRight } from "lucide-react";

interface HeroContentProps {
  onOpenEnquireModal: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const mobileNavItems = [
  { label: "Academics", href: "/academics" },
  { label: "Professional Courses", href: "/courses" },
  { label: "Certifications", href: "/certifications" },
  { label: "Job-Ready Training", href: "/training" },
  { label: "Strategic Solutions", href: "/solutions" },
  { label: "Upcoming Batches", href: "/upcoming-batches" },
  { label: "Career Guidance", href: "#career-guidance" },
];

export default function HeroContent({ onOpenEnquireModal }: HeroContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-between space-y-5 sm:space-y-6 xl:space-y-7 py-2 w-full"
    >
      {/* Top Tag Badge */}
      <motion.div variants={itemVariants}>
        <span className="sm:hidden inline-block px-3.5 py-1 rounded-full text-[11px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs">
          MOBILE HOMEPAGE
        </span>
        <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10.5px] font-bold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs">
          HERO SECTION
        </span>
      </motion.div>

      {/* Main Headline */}
      <div className="space-y-3">
        <motion.h1
          variants={itemVariants}
          className="text-[32px] sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#091F38] leading-[1.12] tracking-tight"
        >
          <span className="sm:hidden">
            Education to<br />
            Employment.<br />
            Skills to<br />
            Strategy.
          </span>
          <span className="hidden sm:inline">
            From Education to Employment.
            <br />
            From Skills to <span className="text-[#C69214]">Strategy.</span>
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="hidden sm:block text-slate-600 text-xs sm:text-sm font-medium max-w-xl lg:max-w-2xl leading-relaxed pt-1"
        >
          A unified ecosystem for academic learning, professional qualifications, industry certifications, finance job training and strategic solutions.
        </motion.p>
      </div>

      {/* Main Action Button */}
      <motion.div variants={itemVariants} className="pt-1">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            const el = document.getElementById("verticals") || document.getElementById("five-doors");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/academics";
            }
          }}
          className="btn-gradient text-white font-extrabold text-sm sm:text-[12.5px] px-7 sm:px-6 py-3 sm:py-2.5 rounded-full shadow-lg shadow-blue-500/25 transition-all duration-200 text-center"
        >
          Explore Programs
        </motion.button>

        {/* Desktop additional buttons */}
        <div className="hidden sm:inline-flex flex-wrap items-center gap-2.5 ml-2.5">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenEnquireModal}
            className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-[12px] sm:text-[12.5px] px-4 sm:px-5 py-2.5 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 text-center"
          >
            Upcoming Batches
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenEnquireModal}
            className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-[12px] sm:text-[12.5px] px-4 sm:px-5 py-2.5 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 text-center"
          >
            Talk to a Counsellor
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Vertical Navigation Card Stack (Matching User Screenshot) */}
      <motion.div variants={itemVariants} className="sm:hidden space-y-3 pt-3">
        {mobileNavItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="w-full bg-white hover:bg-slate-50 border border-slate-200/90 rounded-3xl px-5 py-4 flex items-center justify-between shadow-xs transition-all cursor-pointer group active:scale-[0.99]"
          >
            <span className="text-base font-extrabold text-[#09101D] group-hover:text-[#0066FF] transition-colors tracking-tight">
              {item.label}
            </span>
            <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-[#0066FF] transition-colors shrink-0" />
          </Link>
        ))}
      </motion.div>

      {/* 3 Desktop Bottom Stat Cards */}
      <motion.div variants={itemVariants} className="hidden sm:grid grid-cols-3 gap-2 sm:gap-4 pt-2">
        {/* Card 1: 25+ Legacy */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 102, 255, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-2.5 sm:p-4 rounded-2xl border border-slate-100 shadow-xs transition-all duration-200 cursor-pointer text-center sm:text-left"
        >
          <div className="text-[#09101D] mb-1.5 flex justify-center sm:justify-start">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#09101D]" />
          </div>
          <div className="text-lg sm:text-2xl font-extrabold text-[#09101D] tracking-tight">
            25+
          </div>
          <div className="text-[9.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
            Legacy & experience
          </div>
        </motion.div>

        {/* Card 2: 5 Major Verticals */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 102, 255, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-2.5 sm:p-4 rounded-2xl border border-slate-100 shadow-xs transition-all duration-200 cursor-pointer text-center sm:text-left"
        >
          <div className="text-[#09101D] mb-1.5 flex justify-center sm:justify-start">
            <Square className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#09101D] fill-[#09101D]/10" />
          </div>
          <div className="text-lg sm:text-2xl font-extrabold text-[#09101D] tracking-tight">
            5
          </div>
          <div className="text-[9.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
            Major verticals
          </div>
        </motion.div>

        {/* Card 3: Offline Training now */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 102, 255, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-2.5 sm:p-4 rounded-2xl border border-slate-100 shadow-xs transition-all duration-200 cursor-pointer text-center sm:text-left"
        >
          <div className="text-[#09101D] mb-1.5 flex justify-center sm:justify-start">
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#09101D]" />
          </div>
          <div className="text-lg sm:text-2xl font-extrabold text-[#09101D] tracking-tight">
            Offline
          </div>
          <div className="text-[9.5px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">
            Training now
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
