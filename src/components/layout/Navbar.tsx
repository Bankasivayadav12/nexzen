"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenEnquireModal: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Jobs", href: "/jobs" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ onOpenEnquireModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-2 sm:pt-4 pb-2 px-3 sm:px-6 lg:px-10 transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-[#EBF3FF] via-[#F4F8FF] to-[#3B82F6]/90">
      
      {/* Decorative Top Left Blue Fluid Curve */}
      <div className="absolute top-0 left-0 w-[280px] h-full pointer-events-none opacity-60">
        <svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0 0 H280 C200 20 160 60 80 80 H0 V0 Z" fill="#D0E2FF" />
        </svg>
      </div>

      {/* Decorative Top Right Dotted Grid Pattern */}
      <div className="absolute top-1 right-2 w-16 h-12 pointer-events-none opacity-40 hidden sm:grid grid-cols-4 gap-1.5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
        ))}
      </div>

      {/* White Rounded Pill Capsule Floating Bar */}
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 relative z-10 ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl border border-blue-100 shadow-[0_10px_35px_-10px_rgba(9,31,56,0.12)] py-2 px-4 sm:px-8"
            : "bg-white border border-blue-100/80 shadow-[0_6px_25px_-5px_rgba(9,31,56,0.06)] py-2 sm:py-2.5 px-4 sm:px-8"
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Asset Name */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="relative overflow-hidden rounded-xl p-1 bg-gradient-to-br from-blue-50 to-amber-50 border border-blue-100/60 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="NexZen Asset"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1">
                <span className="text-sm sm:text-base lg:text-xl font-black tracking-wider text-[#091F38] uppercase">
                  NEXZEN
                </span>
                <span className="text-sm sm:text-base lg:text-xl font-black tracking-wider text-[#C69214] uppercase">
                  ASSET
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-500 tracking-[0.18em] uppercase hidden sm:block">
                EDUCATION TO STRATEGY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs xl:text-sm transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-[#0066FF] font-black bg-[#EBF3FF] shadow-xs"
                      : "text-slate-600 font-bold hover:text-[#0066FF] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group: Enquire Button (Desktop/Tablet) & Mobile Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Desktop / Tablet Enquire Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenEnquireModal}
              className="hidden sm:flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white text-xs sm:text-sm font-extrabold tracking-wide shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
              <span>Enquire Now</span>
              <span className="text-white font-bold ml-0.5">→</span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:text-[#0066FF] focus:outline-none rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2.5]" /> : <Menu className="w-5 h-5 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/98 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-4 space-y-3 shadow-2xl relative z-20"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all text-center ${
                      isActive
                        ? "text-[#0066FF] bg-[#EBF3FF] border border-blue-100 shadow-xs"
                        : "text-slate-700 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquireModal();
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white text-xs font-extrabold shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Enquire Now →</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

