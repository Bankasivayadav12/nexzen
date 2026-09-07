"use client";

import React from "react";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

interface HeroSectionProps {
  onOpenEnquireModal: () => void;
}

export default function HeroSection({ onOpenEnquireModal }: HeroSectionProps) {
  return (
    <section className="relative w-full py-3 sm:py-5 lg:py-6 overflow-hidden bg-gradient-to-b from-[#F2F7FE] via-[#F8FAFD] to-[#EDF3FA]">
      
      {/* Multi-Color Ambient Glow Orbs */}
      <div className="absolute top-6 left-10 w-96 h-96 bg-blue-400/15 blur-[110px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-amber-400/15 blur-[100px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute bottom-6 right-10 w-96 h-96 bg-purple-400/10 blur-[120px] rounded-full pointer-events-none -z-0"></div>

      {/* SVG Wave Layer 1: Top-Left Soft Blue & Gold Fluid Wave */}
      <div className="absolute top-0 left-0 w-[540px] h-[300px] pointer-events-none -z-0 opacity-85">
        <svg viewBox="0 0 540 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 0 H540 C410 60 340 200 220 240 C120 270 40 180 0 200 V0 Z"
            fill="url(#top_multi_wave)"
          />
          <defs>
            <linearGradient id="top_multi_wave" x1="0" y1="0" x2="540" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D2E4FF" stopOpacity="0.85" />
              <stop offset="0.5" stopColor="#EBF3FF" stopOpacity="0.5" />
              <stop offset="0.85" stopColor="#FEF9E7" stopOpacity="0.4" />
              <stop offset="1" stopColor="#F2F7FE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Pattern 1: Blue Dotted Grid on Top Left */}
      <div className="absolute top-6 left-8 w-24 h-24 pointer-events-none opacity-20 hidden md:grid grid-cols-6 gap-2">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></div>
        ))}
      </div>

      {/* Decorative Pattern 2: Gold Dotted Grid on Right Background */}
      <div className="absolute top-1/4 right-12 w-28 h-28 pointer-events-none opacity-25 hidden lg:grid grid-cols-6 gap-2">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C69214]"></div>
        ))}
      </div>

      {/* SVG Wave Layer 2: Center Organic Golden Wave Sweeping Down */}
      <div className="absolute top-0 right-[38%] w-[320px] h-[680px] pointer-events-none z-10 hidden lg:block opacity-90">
        <svg viewBox="0 0 320 680" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M160 0 C260 95 300 210 260 340 C200 470 110 530 180 680 H320 V0 Z"
            fill="url(#gold_center_wave_rich)"
          />
          <defs>
            <linearGradient id="gold_center_wave_rich" x1="160" y1="0" x2="320" y2="680" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F5B82E" stopOpacity="0.8" />
              <stop offset="0.45" stopColor="#E59E15" stopOpacity="0.6" />
              <stop offset="0.8" stopColor="#3B82F6" stopOpacity="0.15" />
              <stop offset="1" stopColor="#F8FAFD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* SVG Wave Layer 3: Bottom Blue & Purple Fluid Wave */}
      <div className="absolute bottom-0 right-0 w-[740px] h-[280px] pointer-events-none z-10 hidden sm:block opacity-90">
        <svg viewBox="0 0 740 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            d="M0 280 C170 215 320 255 470 160 C580 85 660 20 740 0 V280 Z"
            fill="url(#bottom_blue_purple_wave)"
          />
          <defs>
            <linearGradient id="bottom_blue_purple_wave" x1="0" y1="280" x2="740" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9333EA" stopOpacity="0.35" />
              <stop offset="0.4" stopColor="#0066FF" stopOpacity="0.75" />
              <stop offset="0.8" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="1" stopColor="#60A5FA" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20 w-full flex flex-col space-y-4 sm:space-y-5 lg:space-y-6">
        {/* Main Content Grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center py-1">
          {/* Left Column: Headline, Buttons & Stat Cards */}
          <div className="lg:col-span-6 flex items-center">
            <HeroContent onOpenEnquireModal={onOpenEnquireModal} />
          </div>

          {/* Right Column: Hero Visual Image Card */}
          <div className="flex lg:col-span-6 items-center justify-center h-full">
            <HeroVisual />
          </div>
        </div>

        {/* Bottom Right Tagline Bar matching reference image */}
        <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] font-black text-slate-500 tracking-[0.16em] uppercase gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] inline-block animate-pulse shadow-xs"></span>
            <span className="text-[#091F38]">NEXZEN ASSET ECOSYSTEM</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 text-slate-600 font-bold">
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
    </section>
  );
}
