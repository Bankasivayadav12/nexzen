"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, Shield } from "lucide-react";

interface FooterProps {
  onOpenEnquireModal: () => void;
}

export default function Footer({ onOpenEnquireModal }: FooterProps) {
  return (
    <footer className="bg-[#09101D] text-white pt-16 pb-12 border-t border-slate-800 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-xl ring-1 ring-white/10 shrink-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="NexZen Asset Private Limited"
                  className="h-11 sm:h-13 lg:h-15 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 leading-none">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-wider uppercase">
                    NEXZEN
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#C69214] tracking-wider uppercase">
                    ASSET
                  </span>
                </div>
                <span className="text-xs text-[#C69214] font-bold tracking-wide mt-1.5">
                  An evolution of Asset Integrated Info Systems · 25+ Years Legacy
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering students and professionals with top-tier academic coaching, accounting certifications, practical job training, and strategic workforce solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenEnquireModal}
                className="btn-gradient text-white text-xs font-bold px-5 py-2.5 rounded-full flex items-center gap-1.5"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#academics" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="#courses" className="hover:text-white transition-colors">Professional Courses</Link></li>
              <li><Link href="#certifications" className="hover:text-white transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Certifications
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={onOpenEnquireModal} className="hover:text-white transition-colors text-left">CA Coaching (ICAI)</button></li>
              <li><button onClick={onOpenEnquireModal} className="hover:text-white transition-colors text-left">CMA Foundation & Final</button></li>
              <li><button onClick={onOpenEnquireModal} className="hover:text-white transition-colors text-left">ACCA Global Qualification</button></li>
              <li><button onClick={onOpenEnquireModal} className="hover:text-white transition-colors text-left">Diploma in IFRS</button></li>
              <li><button onClick={onOpenEnquireModal} className="hover:text-white transition-colors text-left">Job-Ready Finance Training</button></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Contact & Centers
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>Offline Learning Centers & Corporate Headquarters</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span>+91 9849033736</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span>admissions@nexzenasset.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} NEXZEN ASSET (Asset Integrated Info Systems). All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
