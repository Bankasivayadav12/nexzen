"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <header className="w-full bg-white/95 backdrop-blur-xl border-b border-slate-200/80 sticky top-0 z-50 shadow-[0_4px_20px_-4px_rgba(9,31,56,0.05)]">
      {/* Top Luxury Gradient Accent Bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#091F38] via-[#0066FF] to-[#C69214]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Asset Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 py-0.5">
          <img
            src="/logo.png"
            alt="NexZen Asset"
            className="h-9 sm:h-10 lg:h-12 w-auto object-contain mix-blend-multiply transition-all duration-300 group-hover:scale-105"
          />
          <div className="flex items-center gap-1.5 sm:gap-2 leading-none whitespace-nowrap">
            <span className="text-lg sm:text-xl lg:text-2xl xl:text-[26px] font-black tracking-wider text-[#091F38] uppercase leading-none">
              NEXZEN
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl xl:text-[26px] font-black tracking-wider text-[#C69214] uppercase leading-none">
              ASSET
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-3 text-sm font-bold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[#0066FF] font-extrabold bg-blue-50/90 border border-blue-100 shadow-[0_2px_10px_-3px_rgba(0,102,255,0.25)]"
                    : "text-slate-700 hover:text-[#0066FF] hover:bg-slate-100/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Enquire Now CTA & Mobile Hamburger */}
        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={onOpenEnquireModal}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#091F38] via-[#0066FF] to-[#C69214] text-white text-xs sm:text-sm font-extrabold tracking-wide shadow-md shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group cursor-pointer"
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Enquire Now</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#0066FF] focus:outline-none shrink-0 rounded-xl hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 px-4 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive ? "text-[#0066FF] bg-blue-50 border border-blue-100" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquireModal();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#091F38] via-[#0066FF] to-[#C69214] text-white text-sm font-extrabold shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Enquire Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
