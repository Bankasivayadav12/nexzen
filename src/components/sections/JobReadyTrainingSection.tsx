"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, X, Briefcase, Sparkles, Building2 } from "lucide-react";

interface JobReadyTrainingSectionProps {
  onOpenEnquireModal: () => void;
}

interface DomainData {
  id: string;
  name: string;
  roles: string[];
  description: string;
}

const domainsData: DomainData[] = [
  {
    id: "accounting",
    name: "Accounting",
    description: "Core financial accounting, bookkeeping, ledger reconciliation, and enterprise ERP record-to-report workflows.",
    roles: [
      "Accountant",
      "Accounts Executive",
      "Accounts Payable Analyst",
      "Accounts Receivable Analyst",
      "General Ledger Accountant",
      "Record-to-Report Analyst",
      "Financial Reporting Analyst",
      "Payroll Accountant",
      "Fixed Asset Accountant",
      "Intercompany Accountant",
      "Reconciliation Analyst",
    ],
  },
  {
    id: "auditing",
    name: "Auditing",
    description: "Internal audit controls, statutory compliance, forensic ledger testing, and risk assessment methodologies.",
    roles: [
      "Internal Auditor",
      "Statutory Audit Associate",
      "Process Audit Analyst",
      "SOX Compliance Analyst",
      "Forensic Audit Specialist",
      "Risk & Assurance Consultant",
    ],
  },
  {
    id: "taxation",
    name: "Taxation",
    description: "Direct income tax computation, corporate return filing, GST input credit reconciliation, and international tax compliance.",
    roles: [
      "GST Specialist",
      "Direct Tax Executive",
      "Corporate Tax Analyst",
      "Transfer Pricing Associate",
      "US Tax Analyst (EA / CPA track)",
      "TDS & Statutory Compliance Analyst",
    ],
  },
  {
    id: "capital-markets",
    name: "Capital Markets",
    description: "Equity research, portfolio modeling, investment banking pitch decks, and financial market analytics.",
    roles: [
      "Equity Research Analyst",
      "Investment Banking Analyst",
      "Financial Modeler",
      "Valuation Associate",
      "Capital Markets Trainee",
      "Mutual Fund Operations Executive",
    ],
  },
  {
    id: "banking",
    name: "Banking & Insurance",
    description: "Retail & corporate credit underwriting, loan appraisal analysis, risk management, and financial insurance products.",
    roles: [
      "Credit Risk Analyst",
      "Commercial Loan Officer",
      "Underwriting Associate",
      "Treasury Operations Analyst",
      "Insurance Claims Analyst",
    ],
  },
  {
    id: "corporate",
    name: "Other Finance / Corporate Roles",
    description: "Cross-functional financial planning & analysis (FP&A), management consulting, corporate finance, and BI analytics.",
    roles: [
      "FP&A Analyst",
      "Management Trainee - Finance",
      "Business Intelligence Analyst",
      "Financial Controller Trainee",
      "Corporate Strategy Analyst",
    ],
  },
];

export default function JobReadyTrainingSection({ onOpenEnquireModal }: JobReadyTrainingSectionProps) {
  const [activeDomainId, setActiveDomainId] = useState("accounting");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const activeDomain = domainsData.find((d) => d.id === activeDomainId) || domainsData[0];

  return (
    <section id="job-ready-training-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            ROLE EXPLORER
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-[#09101D] tracking-tight">
            Choose Domain ➔ Choose Role ➔ Learn Skills ➔ Build Projects ➔ Get Job Support
          </h1>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Dark Navy Domains Selector */}
          <div className="lg:col-span-4 bg-[#091427] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl space-y-4">
            <div>
              <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
                Domains
              </h2>
              
              {/* Domain Vertical Buttons */}
              <div className="space-y-2.5">
                {domainsData.map((domain) => {
                  const isActive = activeDomainId === domain.id;
                  return (
                    <motion.button
                      key={domain.id}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveDomainId(domain.id)}
                      className={`w-full text-left px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-white text-[#09101D] shadow-md font-extrabold"
                          : "bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10"
                      }`}
                    >
                      {domain.name}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400 font-medium">
              Select a domain to preview industry job roles, skill paths & hiring requirements.
            </div>
          </div>

          {/* Right Column: Selected Domain Roles Preview */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
            
            <div>
              {/* Title & Domain Description */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-[#09101D] tracking-tight">
                  {activeDomain.name} roles preview
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
                  {activeDomain.description}
                </p>
              </div>

              {/* Grid of Role Pills (3 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {activeDomain.roles.map((role) => (
                  <motion.div
                    key={role}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedRole(role)}
                    className="bg-white hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-300 px-4 py-3 rounded-2xl text-xs font-bold text-[#09101D] hover:text-[#0066FF] transition-all cursor-pointer shadow-2xs truncate"
                    title={role}
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenEnquireModal}
                className="btn-gradient text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
              >
                Explore Roles
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("upcoming-batches");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/upcoming-batches";
                  }
                }}
                className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                Upcoming Batches
              </button>

              <button
                onClick={onOpenEnquireModal}
                className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-xs sm:text-sm px-6 py-3 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                Talk to Counsellor
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Role Details Interactive Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {activeDomain.name} Domain Role
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D]">
                {selectedRole}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                Job-ready practical training program designed specifically for the position of {selectedRole}.
              </p>

              <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Placement Support:</span>
                  <span className="font-extrabold text-[#0066FF]">100% Placement Guidance</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Software Tools Taught:</span>
                  <span className="font-bold text-[#09101D]">Tally Prime, SAP FICO, Excel, Power BI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Mode & Location:</span>
                  <span className="font-bold text-[#09101D]">Offline Training Center · Hyderabad</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedRole(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedRole(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Enquire for {selectedRole}</span>
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
