"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, X } from "lucide-react";

interface AccountingRolesSectionProps {
  onOpenEnquireModal: () => void;
}

interface RoleItem {
  id: string;
  domain: string;
  title: string;
  meta: string;
  description: string;
}

const accountingRoles: RoleItem[] = [
  {
    id: "accountant",
    domain: "Accounting",
    title: "Accountant",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "Core bookkeeping, journal entries, ledger posting, and monthly trial balance closure.",
  },
  {
    id: "ap-analyst",
    domain: "Accounting",
    title: "Accounts Payable Analyst",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "3-way invoice matching, vendor reconciliation, PO processing, and SAP/Tally payment runs.",
  },
  {
    id: "ar-analyst",
    domain: "Accounting",
    title: "Accounts Receivable Analyst",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "Customer billing, collection follow-ups, credit limit assessment, and aging analysis.",
  },
  {
    id: "gl-accountant",
    domain: "Accounting",
    title: "GL Accountant",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "General ledger scrutiny, accruals, prepayments, and financial statement preparation.",
  },
  {
    id: "r2r-analyst",
    domain: "Accounting",
    title: "R2R Analyst",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "Record-to-Report end-to-end accounting, intercompany eliminations, and GAAP compliance.",
  },
  {
    id: "payroll-accountant",
    domain: "Accounting",
    title: "Payroll Accountant",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "Salary computation, PF/ESI/TDS statutory deductions, and payroll journal entries.",
  },
  {
    id: "fixed-asset-accountant",
    domain: "Accounting",
    title: "Fixed Asset Accountant",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "Asset capitalization, depreciation schedules, physical verification, and impairment testing.",
  },
  {
    id: "intercompany-accountant",
    domain: "Accounting",
    title: "Intercompany Accountant",
    meta: "Concepts · Process · Tools · Projects · Interview Preparation",
    description: "Cross-border group subsidiary reconciliations, transfer pricing postings, and netting.",
  },
];

export default function AccountingRolesSection({ onOpenEnquireModal }: AccountingRolesSectionProps) {
  const [selectedRoleTitle, setSelectedRoleTitle] = useState<string>("Accounts Payable Analyst");
  const [modalRole, setModalRole] = useState<RoleItem | null>(null);

  const selectedRole = accountingRoles.find((r) => r.title === selectedRoleTitle) || accountingRoles[1];

  return (
    <section id="accounting-roles" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            ACCOUNTING ROLES PAGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#09101D] tracking-tight">
            Train for the role — not just the interview
          </h2>
        </div>

        {/* 8-Card Role Grid (2 rows x 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {accountingRoles.map((role) => {
            const isHighlighted = selectedRoleTitle === role.title;
            return (
              <motion.div
                key={role.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  setSelectedRoleTitle(role.title);
                  setModalRole(role);
                }}
                className={`rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 min-h-[220px] ${
                  isHighlighted
                    ? "bg-[#091F38] text-white border border-[#C69214]/50 shadow-xl"
                    : "bg-white text-[#091F38] border border-slate-200/80 shadow-xs hover:border-[#C69214]/50"
                }`}
              >
                <div>
                  {/* Domain Tag Pill */}
                  <div className="mb-3">
                    <span
                      className={`inline-block text-[10.5px] font-extrabold px-3 py-1 rounded-full border ${
                        isHighlighted
                          ? "bg-[#C69214]/20 text-[#D4A017] border-[#C69214]/40"
                          : "bg-blue-50 text-[#0066FF] border-blue-100"
                      }`}
                    >
                      {role.domain}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3
                    className={`text-2xl font-black leading-tight tracking-tight mb-2 ${
                      isHighlighted ? "text-white" : "text-[#09101D]"
                    }`}
                  >
                    {role.title}
                  </h3>

                  {/* Subtitle Meta */}
                  <p
                    className={`text-xs font-medium leading-relaxed mb-4 ${
                      isHighlighted ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {role.meta}
                  </p>
                </div>

                {/* View Role CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRoleTitle(role.title);
                      setModalRole(role);
                    }}
                    className="btn-gradient text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
                  >
                    View Role
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Process Path Navigation Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex items-center gap-3 flex-wrap">
          <span className="bg-slate-100 border border-slate-200/80 px-4 py-2 rounded-full text-xs font-extrabold text-[#09101D]">
            Accounting
          </span>

          <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

          <span className="bg-slate-100 border border-slate-200/80 px-4 py-2 rounded-full text-xs font-extrabold text-[#09101D]">
            {selectedRole.title}
          </span>

          <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

          <span className="bg-slate-100 border border-slate-200/80 px-4 py-2 rounded-full text-xs font-extrabold text-[#09101D]">
            Role Detail Preview
          </span>

          <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

          <button
            onClick={onOpenEnquireModal}
            className="bg-slate-100 border border-slate-200/80 hover:bg-blue-50 hover:text-[#0066FF] hover:border-blue-300 px-4 py-2 rounded-full text-xs font-extrabold text-[#09101D] transition-colors"
          >
            Enquire
          </button>
        </div>

      </div>

      {/* Interactive Role Detail Modal */}
      <AnimatePresence>
        {modalRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalRole(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {modalRole.domain} Role Detail
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D]">
                {modalRole.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                {modalRole.description}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Training Curriculum:</span>
                  <span className="font-extrabold text-[#0066FF]">Concepts · Process · Tools · Projects</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Software Tools:</span>
                  <span className="font-bold text-[#09101D]">Tally Prime, SAP FICO, Advanced Excel</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Placement Assistance:</span>
                  <span className="font-bold text-[#09101D]">100% Interview Preparation & Referral</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setModalRole(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setModalRole(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Enquire for {modalRole.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
