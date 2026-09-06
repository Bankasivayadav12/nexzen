"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[520px] rounded-[36px] sm:rounded-[48px] overflow-hidden border-0 shadow-[0_20px_60px_-15px_rgba(9,31,56,0.08)] bg-transparent group flex items-center justify-center"
    >
      {/* High-Resolution Seamless Hero Visual Graphic */}
      <img
        src="/hero_exact_bg.png"
        alt="From Education to Employment - Nexzen Asset"
        className="w-full h-full object-cover object-center select-none transition-transform duration-500 group-hover:scale-[1.01]"
      />
    </motion.div>
  );
}




