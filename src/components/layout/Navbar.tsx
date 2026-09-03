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
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 overflow-x-clip">
      <div className="w-full px-3 sm:px-8 lg:px-12 xl:px-16 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Subtitle */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 py-0.5">
          <img
            src="/logo.jpg"
            alt="NexZen Asset Private Limited"
            className="h-12 sm:h-16 lg:h-20 w-auto object-contain mix-blend-multiply"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-black tracking-tight text-[#091F38] group-hover:text-[#C69214] transition-colors leading-tight whitespace-nowrap">
              NEXZEN
            </span>
            <span className="hidden sm:block text-[10px] sm:text-[11.5px] font-extrabold text-[#C69214] tracking-wider uppercase">
              ASSET PRIVATE LIMITED
            </span>
          </div>
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
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <button
            onClick={onOpenEnquireModal}
            className="hidden sm:flex btn-gradient text-white text-xs sm:text-[12.5px] font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 transform active:scale-95 whitespace-nowrap"
          >
            Enquire Now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1 text-[#09101D] hover:text-[#0066FF] focus:outline-none shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 stroke-[2.5]" /> : <Menu className="w-7 h-7 stroke-[2.5]" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                pathname === link.href ? "text-[#0066FF] bg-blue-50" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquireModal();
              }}
              className="w-full btn-gradient text-white text-xs font-bold py-3 rounded-xl shadow-md shadow-blue-500/20 text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
