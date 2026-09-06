"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, PhoneCall, ChevronDown, GradCap, Briefcase, Users, Phone } from "lucide-react";

interface NavbarProps {
  onOpenEnquireModal: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
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
    <header className="sticky top-0 z-50 w-full pt-2 sm:pt-3 px-3 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_-10px_rgba(9,31,56,0.12)] py-2 sm:py-2.5 px-4 sm:px-6"
            : "bg-white/75 backdrop-blur-md border border-white/60 shadow-[0_4px_20px_-5px_rgba(9,31,56,0.06)] py-2.5 sm:py-3 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Logo & Asset Name */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative overflow-hidden rounded-xl p-1 bg-gradient-to-br from-blue-50 to-amber-50 border border-blue-100/60 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="NexZen Asset"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-center gap-1">
                <span className="text-base sm:text-lg lg:text-xl font-black tracking-wider text-[#091F38] uppercase">
                  NEXZEN
                </span>
                <span className="text-base sm:text-lg lg:text-xl font-black tracking-wider text-[#C69214] uppercase">
                  ASSET
                </span>
              </div>
              <span className="text-[9px] font-bold text-slate-500 tracking-widest uppercase hidden sm:block">
                Education to Strategy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/60 p-1 rounded-full border border-slate-200/50">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs xl:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-[#0066FF] font-extrabold bg-white shadow-xs"
                      : "text-slate-600 hover:text-[#0066FF] hover:bg-white/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-xs border border-blue-100"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Group: Quick Phone Contact & Enquire Button */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
           

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenEnquireModal}
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white text-xs sm:text-sm font-extrabold tracking-wide shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 animate-pulse" />
              <span>Enquire Now</span>
            </motion.button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-800 hover:text-[#0066FF] focus:outline-none rounded-full hover:bg-slate-100/80 transition-colors"
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
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-4 space-y-3 shadow-2xl"
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
                        ? "text-[#0066FF] bg-blue-50 border border-blue-100 shadow-xs"
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
                <span>Enquire Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

