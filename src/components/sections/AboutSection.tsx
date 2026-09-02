"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles, Target, CheckCircle2 } from "lucide-react";

interface AboutSectionProps {
  onOpenEnquireModal: () => void;
}

export default function AboutSection({ onOpenEnquireModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Tag Badge & Headline */}
        <div className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            BRAND STORY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#09101D] tracking-tight">
            A legacy of knowledge. A new era of careers.
          </h2>
        </div>

        {/* Main Grid: Left Timeline + 3 Cards & Right Navy Positioning Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column Container (Timeline Flow + 3 Cards) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            
            {/* Top Flow Timeline Row (4 Box Flow with Arrows) */}
            <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-2xl border border-slate-100 flex flex-wrap items-center justify-between gap-3">
              
              {/* Step 1 */}
              <div className="bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 text-xs font-extrabold text-[#09101D] shadow-2xs text-center">
                Asset Integrated
                <br />
                Info Systems
              </div>

              <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

              {/* Step 2 */}
              <div className="bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 text-xs font-extrabold text-[#09101D] shadow-2xs text-center">
                25+ Years
                <br />
                Experience
              </div>

              <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

              {/* Step 3 */}
              <div className="bg-white px-3.5 py-2.5 rounded-xl border border-slate-200/80 text-xs font-extrabold text-[#09101D] shadow-2xs text-center">
                Modern
                <br />
                Learning
              </div>

              <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

              {/* Step 4 */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-3 rounded-xl border border-blue-200 text-xs font-black text-[#0066FF] shadow-2xs text-center">
                NexZen
                <br />
                Asset
              </div>

            </div>

            {/* Bottom Row: 3 White Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Card 1: Established */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-[#09101D] mb-3">
                  <span className="text-xs font-black">❖</span>
                </div>
                <h3 className="text-lg font-black text-[#09101D]">
                  Established
                </h3>
                <p className="text-[11.5px] text-slate-500 font-medium mt-1 leading-relaxed">
                  Built on an existing professional foundation
                </p>
              </motion.div>

              {/* Card 2: Modern */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-[#09101D] mb-3">
                  <span className="text-xs font-black">◆</span>
                </div>
                <h3 className="text-lg font-black text-[#09101D]">
                  Modern
                </h3>
                <p className="text-[11.5px] text-slate-500 font-medium mt-1 leading-relaxed">
                  Scalable digital-first education and careers platform
                </p>
              </motion.div>

              {/* Card 3: Practical */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-[#09101D] mb-3">
                  <span className="text-xs font-black">●</span>
                </div>
                <h3 className="text-lg font-black text-[#09101D]">
                  Practical
                </h3>
                <p className="text-[11.5px] text-slate-500 font-medium mt-1 leading-relaxed">
                  Training connected to real finance roles
                </p>
              </motion.div>

            </div>

          </div>

          {/* Right Column Container (Dark Navy Glass Box on Ice Gradient) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#DDEBFC] via-[#E4F4FA] to-[#E2F7F6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-blue-100/60 shadow-xs">
            <div className="bg-[#091427] text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 my-auto">
              <div className="text-4xl sm:text-5xl font-black text-[#00C6FF] tracking-tight">
                25+
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Years legacy must be shown carefully
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                <strong className="text-white">Correct positioning:</strong> NexZen Asset builds on the 25+ years of experience and legacy of Asset Integrated Info Systems.
              </p>
              
              {/* Caution Pill Tag */}
              <div className="pt-2">
                <span className="inline-block bg-[#0066FF]/20 text-[#60A5FA] border border-[#0066FF]/40 text-[11px] font-bold px-3 py-1.5 rounded-full">
                  Do not imply NexZen itself existed for 25+ years
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
