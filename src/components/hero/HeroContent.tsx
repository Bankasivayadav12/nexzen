"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Briefcase, Users, ArrowRight, Calendar, Headphones } from "lucide-react";

interface HeroContentProps {
  onOpenEnquireModal: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 26 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function HeroContent({ onOpenEnquireModal }: HeroContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center space-y-3 sm:space-y-3.5 lg:space-y-4 py-1 w-full"
    >
      {/* Top Pill Tag Badge matching screenshot */}
      <motion.div variants={itemVariants}>
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#0066FF] font-black text-[10px] sm:text-xs tracking-[0.16em] uppercase shadow-2xs cursor-default"
        >
          <span>LEARN</span>
          <span className="text-blue-300 font-normal">|</span>
          <span>UPSKILL</span>
          <span className="text-blue-300 font-normal">|</span>
          <span>GROW</span>
        </motion.div>
      </motion.div>

      {/* Main Headline & Paragraph matching screenshot */}
      <div className="space-y-1.5 sm:space-y-2">
        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-black text-[#091F38] leading-[1.14] tracking-tight"
        >
          From Education to <br className="hidden sm:inline" />
          Employment. <br className="hidden sm:inline" />
          From Skills to{" "}
          <motion.span
            initial={{ opacity: 0, color: "#091F38" }}
            animate={{ opacity: 1, color: "#C69214" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-block text-[#C69214]"
          >
            Strategy.
          </motion.span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-slate-600 text-xs sm:text-sm lg:text-[15px] font-medium max-w-xl leading-relaxed"
        >
          A unified ecosystem for academic learning, professional qualifications,
          industry certifications, finance job training and strategic solutions.
        </motion.p>
      </div>

      {/* Main Action Buttons matching screenshot */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1"
      >
        {/* Explore Programs Button with Blue-to-Gold Gradient */}
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: "0 10px 22px -5px rgba(0, 82, 255, 0.4)" }}
          whileTap={{ scale: 0.96 }}
          onClick={() => {
            const el = document.getElementById("verticals") || document.getElementById("five-doors");
            if (el) el.scrollIntoView({ behavior: "smooth" });
            else window.location.href = "/academics";
          }}
          className="relative overflow-hidden bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white font-extrabold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md shadow-blue-500/20 transition-all duration-300 flex items-center gap-2 text-center cursor-pointer group"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          <span>Explore Programs</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>

        {/* Secondary Button 1: Upcoming Batches */}
        <motion.button
          whileHover={{ scale: 1.03, backgroundColor: "#F8FAFC" }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenEnquireModal}
          className="bg-white text-[#09101D] font-bold text-xs sm:text-sm px-4 sm:px-4.5 py-2.5 sm:py-3 rounded-full border border-slate-200/90 shadow-2xs transition-all duration-200 flex items-center gap-1.5 text-center cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#0066FF]" />
          <span>Upcoming Batches</span>
        </motion.button>

        {/* Secondary Button 2: Talk to a Counselor */}
        <motion.button
          whileHover={{ scale: 1.03, backgroundColor: "#F8FAFC" }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenEnquireModal}
          className="bg-white text-[#09101D] font-bold text-xs sm:text-sm px-4 sm:px-4.5 py-2.5 sm:py-3 rounded-full border border-slate-200/90 shadow-2xs transition-all duration-200 flex items-center gap-1.5 text-center cursor-pointer"
        >
          <Headphones className="w-3.5 h-3.5 text-[#0066FF]" />
          <span>Talk to a Counselor</span>
        </motion.button>
      </motion.div>

      {/* 3 Bottom Stat Cards matching screenshot */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1"
      >
        {/* Card 1: 25+ Years */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -3, scale: 1.01, boxShadow: "0 10px 20px -6px rgba(0, 102, 255, 0.14)" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-100 shadow-2xs transition-all duration-200 text-left flex flex-col justify-between relative overflow-hidden group cursor-default"
        >
          <div>
            <div className="w-7.5 h-7.5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
              <Award className="w-3.5 h-3.5 text-[#0066FF]" />
            </div>
            <div className="text-sm sm:text-base font-black text-[#09101D] tracking-tight">
              25+ Years
            </div>
            <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
              Industry Legacy & Expertise
            </div>
          </div>
          <div className="w-5 h-0.5 bg-[#0066FF] rounded-full mt-2.5 group-hover:w-8 transition-all duration-300"></div>
        </motion.div>

        {/* Card 2: Industry-Ready */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -3, scale: 1.01, boxShadow: "0 10px 20px -6px rgba(198, 146, 20, 0.14)" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-100 shadow-2xs transition-all duration-200 text-left flex flex-col justify-between relative overflow-hidden group cursor-default"
        >
          <div>
            <div className="w-7.5 h-7.5 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
              <Briefcase className="w-3.5 h-3.5 text-[#C69214]" />
            </div>
            <div className="text-sm sm:text-base font-black text-[#09101D] tracking-tight">
              Industry-Ready
            </div>
            <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
              Practical, Role-Based Learning
            </div>
          </div>
          <div className="w-5 h-0.5 bg-[#C69214] rounded-full mt-2.5 group-hover:w-8 transition-all duration-300"></div>
        </motion.div>

        {/* Card 3: Career Support */}
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -3, scale: 1.01, boxShadow: "0 10px 20px -6px rgba(147, 51, 234, 0.14)" }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          className="bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-100 shadow-2xs transition-all duration-200 text-left flex flex-col justify-between relative overflow-hidden group cursor-default"
        >
          <div>
            <div className="w-7.5 h-7.5 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
              <Users className="w-3.5 h-3.5 text-[#9333EA]" />
            </div>
            <div className="text-sm sm:text-base font-black text-[#09101D] tracking-tight">
              Career Support
            </div>
            <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
              Training to Employment Journey
            </div>
          </div>
          <div className="w-5 h-0.5 bg-[#9333EA] rounded-full mt-2.5 group-hover:w-8 transition-all duration-300"></div>
        </motion.div>
      </motion.div>

      {/* Slogan Bar at Left Bottom matching screenshot */}
      <motion.div variants={itemVariants} className="pt-1">
        <div className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-[#C69214] uppercase flex items-center gap-2">
          <span className="w-4 h-0.5 bg-[#C69214] inline-block rounded-full"></span>
          <span>SKILLS TODAY. A BRIGHTER TOMORROW.</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
