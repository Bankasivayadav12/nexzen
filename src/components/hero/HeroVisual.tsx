"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

function TiltCard({ children, className = "" }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`transition-all duration-200 ease-out cursor-pointer ${className}`}
    >
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const bars = [
    { height: 40, targetHeight: "40px", color: "#0052FF", title: "Q1: 85%" },
    { height: 48, targetHeight: "48px", color: "#00C6FF", title: "Q2: 95%" },
    { height: 32, targetHeight: "32px", color: "#0052FF", title: "Q3: 70%" },
    { height: 44, targetHeight: "44px", color: "#00C6FF", title: "Q4: 98%" },
    { height: 48, targetHeight: "48px", color: "#0052FF", title: "Annual: 90%" },
    { height: 44, targetHeight: "44px", color: "#00C6FF", title: "Placement: 96%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-full min-h-[440px] lg:min-h-[480px] bg-gradient-to-br from-[#DDEBFC] via-[#E4F4FA] to-[#E2F7F6] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-blue-100/60 shadow-inner perspective-1000"
    >
      
      {/* Background Animated Gradient Sphere */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Top Floating Tilt Card: Professional Learning Space */}
      <div className="w-full max-w-[350px] ml-auto z-10">
        <TiltCard className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-blue-900/10 border border-white/90 hover:shadow-2xl hover:shadow-blue-500/20">
          <h3 className="text-xl sm:text-[22px] font-black text-[#09101D] tracking-tight leading-tight">
            Professional Learning Space
          </h3>
          <p className="text-slate-500 text-xs font-medium mt-2 leading-relaxed">
            Students, mentors, laptop learning, finance screens and career progression.
          </p>
        </TiltCard>
      </div>

      {/* Middle Spacing Area */}
      <div className="flex-1 min-h-[50px]" />

      {/* Bottom Floating Tilt Cards Grid (Accounting Dashboard + Certification Path) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
        
        {/* Bottom Left Tilt Card: Accounting Dashboard */}
        <TiltCard className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg shadow-blue-900/10 border border-white/90 hover:shadow-2xl hover:shadow-blue-500/20">
          <h4 className="text-[12.5px] font-bold text-[#09101D] mb-3">
            Accounting dashboard
          </h4>

          {/* Interactive Animated Pill Bar Chart */}
          <div className="bg-blue-50/70 p-3 rounded-xl flex items-end justify-between gap-1.5 h-[64px] border border-blue-100/60">
            {bars.map((bar, idx) => (
              <motion.div
                key={idx}
                initial={{ height: 0 }}
                animate={{ height: bar.targetHeight }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.08 }}
                whileHover={{ scaleY: 1.15 }}
                className="w-3 rounded-full cursor-pointer transition-colors"
                style={{ backgroundColor: bar.color }}
                title={bar.title}
              />
            ))}
          </div>
        </TiltCard>

        {/* Bottom Right Tilt Card: Certification Path */}
        <TiltCard className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg shadow-blue-900/10 border border-white/90 hover:shadow-2xl hover:shadow-blue-500/20">
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <span className="text-[12.5px] font-bold text-[#09101D] mr-1">
              Certification path
            </span>
            {["CA", "CMA"].map((cert) => (
              <motion.span
                key={cert}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCert(activeCert === cert ? null : cert)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full cursor-pointer transition-all duration-200 ${
                  activeCert === cert
                    ? "bg-[#0066FF] text-white shadow-xs"
                    : "bg-[#EBF3FF] text-[#0066FF] hover:bg-blue-100"
                }`}
              >
                {cert}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {["ACCA", "IFRS"].map((cert) => (
              <motion.span
                key={cert}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCert(activeCert === cert ? null : cert)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full cursor-pointer transition-all duration-200 ${
                  activeCert === cert
                    ? "bg-[#0066FF] text-white shadow-xs"
                    : "bg-[#EBF3FF] text-[#0066FF] hover:bg-blue-100"
                }`}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </TiltCard>

      </div>

    </motion.div>
  );
}
