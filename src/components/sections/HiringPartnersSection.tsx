"use client";

import React from "react";
import { motion } from "framer-motion";

interface HiringPartnersSectionProps {
  onOpenEnquireModal: () => void;
}

export default function HiringPartnersSection({ onOpenEnquireModal }: HiringPartnersSectionProps) {
  const partners = Array.from({ length: 15 }, (_, i) => `PARTNER ${String(i + 1).padStart(2, "0")}`);

  return (
    <section id="hiring-partners" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            HIRING PARTNERS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#091F38] tracking-tight">
            Clean corporate logo wall with placeholders only
          </h2>
        </div>

        {/* 15 Partner Logo Placeholder Grid (3 rows x 5 cols on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 mb-8">
          {partners.map((partner) => (
            <motion.div
              key={partner}
              whileHover={{ y: -3, borderColor: "#C69214" }}
              transition={{ duration: 0.2 }}
              className="bg-white/90 border border-slate-200/90 rounded-2xl py-4 px-3 flex items-center justify-center shadow-2xs hover:shadow-xs transition-all cursor-pointer"
            >
              <span className="text-xs font-black text-[#091F38] tracking-wider">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Dark Navy Banner */}
        <div className="bg-[#091F38] text-white rounded-[24px] p-6 sm:p-7 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
              Interested in hiring NexZen-trained talent?
            </h3>
            <p className="text-xs text-[#D4A017] font-semibold">
              Actual partner logos can be inserted later after approval.
            </p>
          </div>

          <button
            onClick={onOpenEnquireModal}
            className="btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 shrink-0 w-full sm:w-auto text-center"
          >
            Partner With Us
          </button>
        </div>

      </div>
    </section>
  );
}
