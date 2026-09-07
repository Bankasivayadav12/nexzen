"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenEnquireModal: () => void;
}

export default function Footer({ onOpenEnquireModal }: FooterProps) {
  return (
    <footer className="relative bg-[#040E1B] text-white pt-12 pb-6 border-t border-slate-800/80 w-full overflow-hidden">
      
      {/* Decorative Luminous Gold & Blue Wave Swooshes in Background */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] pointer-events-none opacity-40">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full preserve-3d">
          <path
            d="M0 180 C360 110 720 150 1080 80 C1260 45 1380 15 1440 0 V180 H0 Z"
            fill="url(#footer_gold_blue_wave)"
          />
          <path
            d="M0 180 C400 130 800 160 1200 95 C1320 65 1400 30 1440 10 V180 H0 Z"
            fill="url(#footer_accent_wave)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="footer_gold_blue_wave" x1="0" y1="180" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C69214" stopOpacity="0.4" />
              <stop offset="0.45" stopColor="#0066FF" stopOpacity="0.5" />
              <stop offset="1" stopColor="#60A5FA" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="footer_accent_wave" x1="0" y1="180" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0052FF" stopOpacity="0.3" />
              <stop offset="0.7" stopColor="#E5B22E" stopOpacity="0.4" />
              <stop offset="1" stopColor="#1E40AF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info Box & Callouts (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* White Brand Card matching reference image */}
            <div className="bg-white rounded-xl p-2.5 px-3.5 shadow-2xl border border-slate-100 flex items-center gap-3.5 max-w-fit">
              {/* NZ Emblem */}
              <div className="shrink-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="NexZen Asset Emblem"
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </div>

              {/* Text block right next to emblem */}
              <div className="flex flex-col leading-tight">
                <div className="flex items-center text-xl sm:text-2xl font-black tracking-tight">
                  <span className="text-[#091F38]">NEXZEN </span>
                  <span className="text-[#C69214] ml-1.5">ASSET</span>
                </div>
                <span className="text-[11px] font-bold text-[#C69214] leading-tight mt-0.5">
                  An evolution of Asset Intigrated Info Systems
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#C69214] tracking-wider mt-0.5">
                  <span className="w-5 h-[1.5px] bg-[#C69214] inline-block"></span>
                  <span>25+ Years Legacy</span>
                  <span className="w-5 h-[1.5px] bg-[#C69214] inline-block"></span>
                </div>
              </div>
            </div>

            {/* Sub-tagline Pill Line */}
            <div className="text-[11px] sm:text-[12px] font-black tracking-[0.22em] text-[#5598FE] uppercase flex items-center gap-2 pt-1">
              <span>LEARN</span>
              <span className="text-slate-600 font-normal">|</span>
              <span>UPSKILL</span>
              <span className="text-slate-600 font-normal">|</span>
              <span>GROW</span>
              <span className="text-slate-600 font-normal">|</span>
              <span>SUCCEED</span>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-sm pt-0.5">
              Empowering students and professionals with industry-relevant learning, practical skills and strategic solutions for a brighter future.
            </p>

            {/* CTA Button & Handwriting Script */}
            <div className="flex items-center gap-5 pt-2">
              {/* Enquire Now Pill Button */}
              <button
                onClick={onOpenEnquireModal}
                className="bg-gradient-to-r from-[#E5B22E] via-[#C69214] to-[#0052FF] text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all flex items-center gap-3 cursor-pointer group"
              >
                <span>Enquire Now</span>
                <div className="w-5 h-5 rounded-full bg-[#091F38] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </button>

              {/* Cursive Handwriting Script matching screenshot */}
              <div className="flex flex-col relative">
                <span className="font-handwriting italic text-2xl sm:text-3xl text-[#E5B22E] font-bold leading-none select-none drop-shadow-sm">
                  Build a Better You
                </span>
                <svg className="w-28 h-2 text-[#C69214] mt-0.5" viewBox="0 0 100 8" fill="none">
                  <path d="M2 6 C 30 2, 70 2, 98 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: COMPANY (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">
                COMPANY
              </h4>
              <div className="w-6 h-[2px] bg-[#C69214] mt-1 rounded-full"></div>
            </div>
            <ul className="space-y-3 text-xs font-semibold text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Home Solid Gold Icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* About Us Solid Gold Icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Terms & Conditions Solid Gold Icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Refund Policy Solid Gold Shield Icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                  <span>Refund Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/job-assistance-policy" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Job Assistance Policy Handshake Icon */}
                  <svg className="w-4 h-4 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M21.5 8h-4.3l-2.27-2.27a.996.996 0 0 0-1.41 0L11.75 7.5 9.17 4.92a.996.996 0 0 0-1.41 0L2.5 10.17V19c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V9.5c0-.83-.67-1.5-1.5-1.5z"/>
                  </svg>
                  <span>Job Assistance Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: OUR PROGRAMS (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">
                OUR PROGRAMS
              </h4>
              <div className="w-6 h-[2px] bg-[#C69214] mt-1 rounded-full"></div>
            </div>
            <ul className="space-y-3.5 text-xs font-semibold text-slate-300">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Professional Courses - Exact Mortarboard Graduation Cap */}
                  <svg className="w-5 h-5 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                  <span>Professional Courses</span>
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Certifications - Exact Medal Badge with Ribbons */}
                  <svg className="w-5 h-5 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.69 2 6 4.69 6 8c0 2.22 1.21 4.15 3 5.19V22l3-2 3 2v-8.81c1.79-1.04 3-2.97 3-5.19 0-3.31-2.69-6-6-6zm0 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                  </svg>
                  <span>Certifications</span>
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Job Ready Training - Exact Bar Chart + Upward Trend Arrow */}
                  <svg className="w-5 h-5 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M3.5 18h3v-6h-3v6zm5 0h3v-9h-3v9zm5 0h3v-13h-3v13zm5 0h3v-17h-3v17z"/>
                    <path d="M16 4l2.29 2.29-4.88 4.88-4-4L2 14.59 3.41 16l6-6 4 4 6.3-6.29L22 10V4h-6z"/>
                  </svg>
                  <span>Job Ready Training</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors flex items-center gap-3">
                  {/* Strategic Solutions - Exact Briefcase */}
                  <svg className="w-5 h-5 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                  <span>Strategic Solutions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US & FOLLOW US (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5 border-l border-slate-800/80 pl-6 lg:pl-8">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.2em]">
                CONTACT US
              </h4>
              <div className="w-6 h-[2px] bg-[#C69214] mt-1 rounded-full"></div>
            </div>
            
            <ul className="space-y-3.5 text-xs font-semibold text-slate-300">
              <li className="flex items-start gap-3">
                {/* Location Pin - Exact Solid Gold Teardrop Marker */}
                <svg className="w-5 h-5 shrink-0 text-[#E5B22E] fill-current mt-0.5" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="leading-tight">
                  6-6-114/2, Kavadiguda Main Road, Hyderabad, TG - 500 080
                </span>
              </li>
              <li className="flex items-center gap-3">
                {/* Phone Handset - Exact Solid Gold Handset with Wave Signal Arcs */}
                <svg className="w-5 h-5 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1.01A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                  <path d="M14 4h2a5 5 0 0 1 5 5v2" fill="none" stroke="#E5B22E" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <span>9849033736</span>
              </li>
              <li className="flex items-center gap-3">
                {/* Envelope - Exact Solid Gold Envelope */}
                <svg className="w-5 h-5 shrink-0 text-[#E5B22E] fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@assettally.com" className="hover:text-white transition-colors">
                  info@assettally.com
                </a>
              </li>
            </ul>

            {/* Social Icons Section */}
            <div className="pt-2">
              <div className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider mb-2">
                FOLLOW US
              </div>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a 
                  href="#" 
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-[#0A66C2] hover:scale-105 transition-transform flex items-center justify-center shrink-0 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.49 1.49 0 1 0 0 2.98 1.49 1.49 0 0 0 0-2.98Z" />
                  </svg>
                </a>
                
                {/* YouTube */}
                <a 
                  href="#" 
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-[#FF0000] hover:scale-105 transition-transform flex items-center justify-center shrink-0 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-105 transition-transform flex items-center justify-center shrink-0 shadow-md"
                >
                  <svg className="w-4 h-4 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href="#" 
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-[#25D366] hover:scale-105 transition-transform flex items-center justify-center shrink-0 shadow-md"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.555 4.197 1.608 6.014L0 24l6.147-1.61A11.97 11.97 0 0 0 12.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.029c-1.848 0-3.655-.494-5.239-1.431l-.375-.223-3.645.956.973-3.554-.245-.39A9.972 9.972 0 0 1 2.032 12.03c0-5.513 4.486-9.999 9.999-9.999 5.514 0 9.999 4.486 9.999 9.999 0 5.514-4.485 9.999-9.999 9.999zm5.485-7.494c-.301-.15-1.782-.88-2.057-.98-.276-.099-.477-.15-.677.15-.2.301-.777.98-.953 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.675-2.086-.176-.301-.019-.464.131-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.232-.244-.585-.492-.506-.677-.516-.175-.009-.376-.009-.576-.009-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.228 3.11.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.896.12.579-.086 1.782-.727 2.033-1.429.251-.702.251-1.303.175-1.429-.075-.126-.276-.201-.577-.351z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Cursive Script matching reference screenshot */}
            <div className="pt-2 flex flex-col items-start">
              <span className="font-handwriting italic text-xl sm:text-2xl text-[#E5B22E] font-bold leading-tight select-none drop-shadow-sm">
                Knowledge Creates Opportunities
              </span>
              <svg className="w-36 h-2.5 text-[#C69214] mt-0.5" viewBox="0 0 100 8" fill="none">
                <path d="M2 6 C 30 2, 70 2, 98 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar matching screenshot */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            © 2026 <span className="font-bold text-white">NEXZEN ASSET</span> | An evolution of Asset Intigrated Info Systems. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center space-x-3 sm:space-x-4 text-[11px] font-semibold text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-600 font-normal">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span className="text-slate-600 font-normal">|</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <span className="text-slate-600 font-normal">|</span>
            <Link href="/job-assistance-policy" className="hover:text-white transition-colors">Job Assistance Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
