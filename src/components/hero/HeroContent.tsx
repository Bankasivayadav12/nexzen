"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Briefcase, Users, ArrowRight } from "lucide-react";

interface HeroContentProps {
  onOpenEnquireModal: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
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
      className="flex flex-col justify-between space-y-6 lg:space-y-7 py-2 w-full"
    >
      {/* Top Pill Tag Badge */}
      <motion.div variants={itemVariants}>
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0066FF] font-bold text-xs tracking-[0.16em] uppercase shadow-xs">
          <span>LEARN</span>
          <span className="text-blue-300 font-normal">|</span>
          <span>UPSKILL</span>
          <span className="text-blue-300 font-normal">|</span>
          <span>GROW</span>
        </div>
      </motion.div>

      {/* Main Headline & Paragraph */}
      <div className="space-y-3.5">
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#091F38] leading-[1.14] tracking-tight"
        >
          From Education to <br />
          Employment. <br />
          From Skills to <span className="text-[#C69214]">Strategy.</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-slate-600 text-xs sm:text-sm lg:text-base font-normal max-w-xl leading-relaxed pt-1"
        >
          A unified ecosystem for academic learning, professional qualifications,
          industry certifications, finance job training and strategic solutions.
        </motion.p>
      </div>

      {/* Main Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-3 pt-1"
      >
        {/* Explore Programs Button with Blue-to-Gold Gradient */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            const el =
              document.getElementById("verticals") ||
              document.getElementById("five-doors");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.href = "/academics";
            }
          }}
          className="bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 flex items-center gap-2 text-center"
        >
          <span>Explore Programs</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>

        {/* Secondary Buttons */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenEnquireModal}
          className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-slate-200 shadow-xs transition-all duration-200 text-center"
        >
          Upcoming Batches
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpenEnquireModal}
          className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-xs sm:text-sm px-5 py-3 rounded-full border border-slate-200 shadow-xs transition-all duration-200 text-center"
        >
          Talk to a Counselor
        </motion.button>
      </motion.div>

      {/* 3 Bottom Stat Cards matching exact user specs */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4"
      >
        {/* Card 1: 25+ Years */}
        <motion.div
          whileHover={{ y: -3, boxShadow: "0 10px 20px -5px rgba(0, 102, 255, 0.1)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm transition-all duration-200 text-left"
        >
          <div className="text-[#09101D] mb-2">
            <Award className="w-5 h-5 text-[#09101D]" />
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#09101D] tracking-tight">
            25+ Years
          </div>
          <div className="text-xs font-normal italic text-slate-600 mt-1 leading-snug">
            Industry Legacy & Expertise
          </div>
        </motion.div>

        {/* Card 2: Industry-Ready */}
        <motion.div
          whileHover={{ y: -3, boxShadow: "0 10px 20px -5px rgba(0, 102, 255, 0.1)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm transition-all duration-200 text-left"
        >
          <div className="text-[#09101D] mb-2">
            <Briefcase className="w-5 h-5 text-[#09101D]" />
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#09101D] tracking-tight">
            Industry-Ready
          </div>
          <div className="text-xs font-normal italic text-slate-600 mt-1 leading-snug">
            Practical, Role-Based Learning
          </div>
        </motion.div>

        {/* Card 3: Career Support */}
        <motion.div
          whileHover={{ y: -3, boxShadow: "0 10px 20px -5px rgba(0, 102, 255, 0.1)" }}
          transition={{ duration: 0.2 }}
          className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm transition-all duration-200 text-left"
        >
          <div className="text-[#09101D] mb-2">
            <Users className="w-5 h-5 text-[#09101D]" />
          </div>
          <div className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#09101D] tracking-tight">
            Career Support
          </div>
          <div className="text-xs font-normal italic text-slate-600 mt-1 leading-snug">
            Training to Employment Journey
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


