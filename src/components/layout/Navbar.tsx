"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenEnquireModal: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Professional Courses", href: "/courses" },
  { label: "Certifications", href: "/certifications" },
  { label: "Job-Ready Training", href: "/training" },
  { label: "Strategic Solutions", href: "/solutions" },
  { label: "Jobs", href: "/jobs" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ onOpenEnquireModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Subtitle */}
        <Link href="/" className="flex flex-col group shrink-0">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#09101D] group-hover:text-[#0066FF] transition-colors">
            NEXZEN ASSET
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 -mt-0.5 tracking-tight">
            An evolution of Asset Integrated Info Systems · 25+ Years Legacy
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-3 lg:space-x-5 xl:space-x-6 text-[12.5px] lg:text-[13px] font-bold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-[#0066FF] font-extrabold"
                    : "text-[#2D3748] hover:text-[#0066FF]"
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
            className="btn-gradient text-white text-[12.5px] font-bold px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 transform active:scale-95 whitespace-nowrap"
          >
            Enquire Now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 text-slate-700 hover:text-[#0066FF]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-xs font-bold ${
                pathname === link.href ? "text-[#0066FF] bg-blue-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
