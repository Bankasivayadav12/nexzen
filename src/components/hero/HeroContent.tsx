"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, Square, Home } from "lucide-react";

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

export default function HeroContent({ onOpenEnquireModal }: HeroContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-between space-y-6 xl:space-y-7 py-2"
    >
      {/* Top Tag Badge */}
      <motion.div variants={itemVariants}>
        <span className="inline-block px-3 py-1 rounded-full text-[10.5px] font-bold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs">
          HERO SECTION
        </span>
      </motion.div>

      {/* Main Headline */}
      <div className="space-y-3">
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-[#09101D] leading-[1.15] tracking-tight"
        >
          From Education to Employment.
          <br />
          From Skills to Strategy.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-slate-600 text-xs sm:text-sm font-medium max-w-xl lg:max-w-2xl leading-relaxed pt-1"
        >
          A unified ecosystem for academic learning, professional qualifications, industry certifications, finance job training and strategic solutions.
        </motion.p>
      </div>

      {/* 3 Action Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 pt-1">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            const el = document.getElementById("verticals");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn-gradient text-white font-bold text-[12.5px] px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
        >
          Explore Programs
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenEnquireModal}
          className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-[12.5px] px-5 py-2.5 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
        >
          Upcoming Batches
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenEnquireModal}
          className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-[12.5px] px-5 py-2.5 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
        >
          Talk to a Counsellor
        </motion.button>
      </motion.div>

      {/* 3 Bottom Stat Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
        {/* Card 1: 25+ Legacy */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 102, 255, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs transition-all duration-200 cursor-pointer"
        >
          <div className="text-[#09101D] mb-2">
            <Sparkles className="w-4 h-4 text-[#09101D]" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-[#09101D] tracking-tight">
            25+
          </div>
          <div className="text-[11px] font-medium text-slate-500 mt-0.5">
            Legacy & experience
          </div>
        </motion.div>

        {/* Card 2: 5 Major Verticals */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 102, 255, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs transition-all duration-200 cursor-pointer"
        >
          <div className="text-[#09101D] mb-2">
            <Square className="w-4 h-4 text-[#09101D] fill-[#09101D]/10" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-[#09101D] tracking-tight">
            5
          </div>
          <div className="text-[11px] font-medium text-slate-500 mt-0.5">
            Major verticals
          </div>
        </motion.div>

        {/* Card 3: Offline Training now */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 102, 255, 0.15)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs transition-all duration-200 cursor-pointer"
        >
          <div className="text-[#09101D] mb-2">
            <Home className="w-4 h-4 text-[#09101D]" />
          </div>
          <div className="text-xl sm:text-2xl font-extrabold text-[#09101D] tracking-tight">
            Offline
          </div>
          <div className="text-[11px] font-medium text-slate-500 mt-0.5">
            Training now
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
