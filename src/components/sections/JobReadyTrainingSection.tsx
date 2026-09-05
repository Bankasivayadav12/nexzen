"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";

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

const nonDomainsData: DomainData[] = [
  {
    id: "digital-marketing",
    name: "Digital Marketing & Growth",
    description: "SEO optimization, performance marketing, social media campaigns, content strategy, and brand growth analytics.",
    roles: [
      "Digital Marketing Executive",
      "SEO & Content Specialist",
      "Performance Marketing Analyst",
      "Social Media Manager",
      "Growth Marketing Trainee",
      "Email Campaign Specialist",
    ],
  },
  {
    id: "hr-recruitment",
    name: "HR & Talent Acquisition",
    description: "End-to-end recruitment, employee onboarding, talent sourcing, HR generalist operations, and payroll processing.",
    roles: [
      "HR Executive",
      "Talent Acquisition Specialist",
      "Technical Recruiter",
      "HR Generalist Associate",
      "Payroll & Benefits Coordinator",
      "People Operations Specialist",
    ],
  },
  {
    id: "sales-bizdev",
    name: "Sales & Business Development",
    description: "B2B client acquisition, lead generation, enterprise pitch management, sales operations, and account management.",
    roles: [
      "Business Development Executive",
      "Inside Sales Analyst",
      "Client Relationship Manager",
      "Enterprise Sales Trainee",
      "Key Account Specialist",
      "Sales Operations Associate",
    ],
  },
  {
    id: "operations-logistics",
    name: "Operations & Supply Chain",
    description: "Process management, vendor coordination, inventory logistics, quality assurance, and operational workflows.",
    roles: [
      "Operations Associate",
      "Supply Chain Analyst",
      "Logistics Coordinator",
      "Inventory Controller",
      "Process Excellence Trainee",
      "Procurement Specialist",
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics & IT Support",
    description: "Business analytics, SQL database queries, Power BI / Tableau reporting, IT helpdesk, and web development.",
    roles: [
      "Data Analyst Trainee",
      "Business Intelligence Analyst",
      "SQL & Python Data Specialist",
      "IT Support Analyst",
      "Web Development Associate",
      "System Administrator Trainee",
    ],
  },
  {
    id: "management-admin",
    name: "Management & Admin Roles",
    description: "Executive assistance, office management, administrative compliance, corporate facility operations, and front office management.",
    roles: [
      "Executive Assistant",
      "Office Operations Manager",
      "Facilities Coordinator",
      "Corporate Admin Executive",
      "Front Office & CX Specialist",
    ],
  },
];

export default function JobReadyTrainingSection({ onOpenEnquireModal }: JobReadyTrainingSectionProps) {
  const [activeSelection, setActiveSelection] = useState<{ category: "domain" | "nonDomain"; id: string }>({
    category: "domain",
    id: "accounting",
  });
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const activeItem =
    activeSelection.category === "domain"
      ? domainsData.find((d) => d.id === activeSelection.id) || domainsData[0]
      : nonDomainsData.find((d) => d.id === activeSelection.id) || nonDomainsData[0];

  return (
    <section id="job-ready-training-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full border-b border-slate-200/60">
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

        {/* Main Grid Container: 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Dark Navy Domains (Core Finance) Selector */}
          <div className="lg:col-span-3 bg-[#091F38] text-white rounded-3xl p-5 flex flex-col justify-between shadow-xl space-y-4 border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-black text-white tracking-tight">
                  Domains
                </h2>
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/20">
                  Core Finance
                </span>
              </div>
              
              {/* Domain Vertical Buttons */}
              <div className="flex flex-row lg:flex-col overflow-x-auto pb-2 lg:pb-0 gap-2 scrollbar-none">
                {domainsData.map((domain) => {
                  const isActive = activeSelection.category === "domain" && activeSelection.id === domain.id;
                  return (
                    <motion.button
                      key={domain.id}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveSelection({ category: "domain", id: domain.id })}
                      className={`whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink text-left px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 ${
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

            <div className="pt-3 border-t border-white/10 text-[10.5px] text-slate-400 font-medium">
              Select a domain for finance & accounting role previews.
            </div>
          </div>

          {/* Middle Column: Selected Domain / Non-Domain Roles Preview */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-5">
            
            <div>
              {/* Title & Category Description */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                    activeSelection.category === "domain" 
                      ? "bg-blue-50 text-[#0066FF] border border-blue-100" 
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}>
                    {activeSelection.category === "domain" ? "Core Finance Domain" : "Non-Domain Category"}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#09101D] tracking-tight">
                  {activeItem.name} roles preview
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Grid of Role Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {activeItem.roles.map((role) => (
                  <motion.div
                    key={role}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedRole(role)}
                    className="bg-white hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-300 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#09101D] hover:text-[#0066FF] transition-all cursor-pointer shadow-2xs truncate"
                    title={role}
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-slate-100">
              <button
                onClick={onOpenEnquireModal}
                className="btn-gradient text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
              >
                Explore Roles
              </button>

              <button
                onClick={onOpenEnquireModal}
                className="bg-white hover:bg-slate-50 text-[#09101D] font-bold text-xs px-5 py-2.5 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
              >
                Talk to Counsellor
              </button>
            </div>

          </div>

          {/* Right Column: Dark Navy Non-Domain Roles Selector */}
          <div className="lg:col-span-3 bg-[#091F38] text-white rounded-3xl p-5 flex flex-col justify-between shadow-xl space-y-4 border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-black text-white tracking-tight">
                  Non-Domain Roles
                </h2>
                <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/20">
                  Allied Careers
                </span>
              </div>
              
              {/* Non-Domain Vertical Buttons */}
              <div className="flex flex-row lg:flex-col overflow-x-auto pb-2 lg:pb-0 gap-2 scrollbar-none">
                {nonDomainsData.map((nonDomain) => {
                  const isActive = activeSelection.category === "nonDomain" && activeSelection.id === nonDomain.id;
                  return (
                    <motion.button
                      key={nonDomain.id}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveSelection({ category: "nonDomain", id: nonDomain.id })}
                      className={`whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink text-left px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-white text-[#09101D] shadow-md font-extrabold"
                          : "bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10"
                      }`}
                    >
                      {nonDomain.name}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[10.5px] text-slate-400 font-medium">
              Select a non-domain category for corporate & tech role previews.
            </div>
          </div>

        </div>

      </div>

      {/* Role Details Interactive Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {activeItem.name} Category Role
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
