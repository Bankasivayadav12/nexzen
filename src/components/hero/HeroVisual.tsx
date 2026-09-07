"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[620px] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-white group flex items-center justify-center border-4 border-white/90 shadow-xl my-auto"
    >
      {/* High-Resolution Seamless Hero Visual Graphic matching reference image */}
      <img
        src="/hero_exact_bg.png"
        alt="From Education to Employment - Nexzen Asset"
        className="w-full h-auto block object-contain select-none transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* Floating Bottom Gold/Blue Badge matching reference image with gentle floating animation */}
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: [0, -6, 0], opacity: 1 }}
        transition={{
          y: {
            duration: 3.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          },
          opacity: { duration: 0.6, delay: 0.3 },
        }}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 20px 35px -5px rgba(9, 31, 56, 0.4)" }}
          whileTap={{ scale: 0.96 }}
          className="bg-[#091F38]/95 backdrop-blur-md border border-amber-400/40 px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3 text-white text-xs sm:text-sm font-extrabold group/btn cursor-pointer transition-all hover:border-amber-300"
        >
          <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center group-hover/btn:rotate-12 transition-transform">
            <TrendingUp className="w-4 h-4 text-amber-300" />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-white text-xs sm:text-sm font-extrabold tracking-wide">Turning Potential</span>
            <span className="text-amber-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase">INTO PROSPERITY</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#0066FF] flex items-center justify-center ml-1 group-hover/btn:bg-blue-600 group-hover/btn:translate-x-0.5 transition-all">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
