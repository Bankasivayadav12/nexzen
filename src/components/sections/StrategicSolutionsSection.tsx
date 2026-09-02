"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, X, Building2, ShieldCheck, Users, Briefcase, PhoneCall } from "lucide-react";

interface StrategicSolutionsSectionProps {
  onOpenEnquireModal: () => void;
}

interface SolutionItem {
  title: string;
  category: "Advisory" | "Corporate" | "Institutional" | "Compliance";
  description: string;
  deliverables: string[];
}

const strategicSolutionsList: SolutionItem[] = [
  {
    title: "Business Advisory",
    category: "Advisory",
    description: "CFO strategic advisory, financial restructuring, working capital management, and growth capital planning for SMEs and enterprises.",
    deliverables: ["Strategic Financial Planning", "Capital Allocation & Cash Flow Management", "Business Valuation & M&A Advisory"],
  },
  {
    title: "Accounting Advisory",
    category: "Advisory",
    description: "Expert guidance on complex accounting treatments, GAAP & IFRS transitions, and ledger system architecture.",
    deliverables: ["IFRS / Ind AS Conversion", "Complex Accounting Policy Formulation", "Chart of Accounts Standardization"],
  },
  {
    title: "Finance Advisory",
    category: "Advisory",
    description: "Corporate finance strategy, debt syndication proposals, investor pitch deck preparation, and financial health audits.",
    deliverables: ["Debt & Equity Syndication Support", "Investor Financial Models & Pitch Decks", "Corporate Risk Assessment"],
  },
  {
    title: "Taxation Support",
    category: "Compliance",
    description: "End-to-end GST, Income Tax, TDS, and international tax compliance advisory for domestic and overseas businesses.",
    deliverables: ["GST & Tax Audit Compliance", "Transfer Pricing Documentation", "Tax Optimization & Representation"],
  },
  {
    title: "Compliance Support",
    category: "Compliance",
    description: "Corporate legal compliance, ROC filings, secretarial audits, and statutory regulatory alignment.",
    deliverables: ["ROC Annual Filings & Board Resolutions", "SEBI & Stock Exchange Compliance", "Statutory Register Maintenance"],
  },
  {
    title: "Process Improvement",
    category: "Corporate",
    description: "Re-engineering finance workflows, automated ERP journal approvals, and internal control gap remediation.",
    deliverables: ["Standard Operating Procedures (SOPs)", "Automated Financial Controls", "ERP Workflow Optimization"],
  },
  {
    title: "Financial Reporting",
    category: "Corporate",
    description: "Monthly board reporting packages, multi-currency consolidation, and automated financial statement generation.",
    deliverables: ["Monthly Executive Board Decks", "Multi-Entity Financial Consolidation", "Management Cash Flow Analytics"],
  },
  {
    title: "Internal Controls",
    category: "Compliance",
    description: "Designing, evaluating, and testing internal financial controls (IFCoFR / SOX 404) to prevent corporate leakage.",
    deliverables: ["Internal Control Testing & Matrix", "Risk Control Matrix (RCM) Design", "Fraud Risk Assessment"],
  },
  {
    title: "MIS Reporting",
    category: "Corporate",
    description: "Customized CFO dashboards, Power BI financial analytics, and real-time operational metric tracking.",
    deliverables: ["Power BI Executive Dashboards", "Variance & Budget vs Actual Analysis", "Segmental Profitability Reports"],
  },
  {
    title: "Corporate Training",
    category: "Institutional",
    description: "Tailored upskilling programs for corporate finance teams in SAP FICO, IFRS, GST, and Advanced Financial Analytics.",
    deliverables: ["On-Site Corporate Masterclasses", "Customized Enterprise Upskilling Modules", "Faculty Mentorship & Hands-on Labs"],
  },
  {
    title: "College Partnerships",
    category: "Institutional",
    description: "MOU tie-ups with commerce colleges & universities to embed industry certifications into academic curriculum.",
    deliverables: ["University Curriculum Co-Creation", "Campus Placement Drive Enablement", "Guest Faculty & Industrial Workshops"],
  },
  {
    title: "Recruitment Support",
    category: "Institutional",
    description: "End-to-end hiring assistance for corporate CFOs, hiring qualified accounting, audit, tax, and analytics professionals.",
    deliverables: ["Pre-Screened Finance Talent Pipeline", "Technical Skill Assessments", "Direct Campus & Lateral Hiring"],
  },
];

export default function StrategicSolutionsSection({ onOpenEnquireModal }: StrategicSolutionsSectionProps) {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  return (
    <section id="strategic-solutions-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            STRATEGIC SOLUTIONS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09101D] tracking-tight">
            Expertise beyond training
          </h1>
        </div>

        {/* Top Grid Row (Left Dark Navy B2B Box + Right 3-Column Solutions Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          
          {/* Left Dark Navy B2B Box */}
          <div className="lg:col-span-5 bg-[#091427] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                For businesses, colleges, institutions and professionals
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-3 leading-relaxed">
                This vertical must feel more advisory and B2B-oriented than student training.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenEnquireModal}
                className="btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
              >
                Talk to Our Team
              </button>

              <span className="bg-[#FEF3C7] text-[#92400E] font-extrabold text-xs px-3.5 py-2 rounded-full border border-amber-300 shadow-2xs">
                No online payment
              </span>
            </div>
          </div>

          {/* Right White Box: 3 Columns of Strategic Solutions Pills */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {strategicSolutionsList.map((sol) => (
                <motion.div
                  key={sol.title}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedSolution(sol)}
                  className="bg-white hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-300 px-4 py-3 rounded-2xl text-xs font-bold text-[#09101D] hover:text-[#0066FF] transition-all cursor-pointer shadow-2xs truncate"
                  title={sol.title}
                >
                  {sol.title}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Process Container (3-Step Consultation Flow) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-wrap items-center gap-3 sm:gap-4">
          
          {/* Step 1 */}
          <div className="bg-[#F8FAFC] px-5 py-3 rounded-full border border-slate-200 text-xs sm:text-sm font-extrabold text-[#09101D] shadow-2xs">
            Select requirement
          </div>

          <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

          {/* Step 2 */}
          <div className="bg-[#F8FAFC] px-5 py-3 rounded-full border border-slate-200 text-xs sm:text-sm font-extrabold text-[#09101D] shadow-2xs">
            Submit consultation request
          </div>

          <ArrowRight className="w-4 h-4 text-[#0066FF] shrink-0" />

          {/* Step 3 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-5 py-3 rounded-full border border-blue-200 text-xs sm:text-sm font-black text-[#0066FF] shadow-2xs">
            NexZen team contacts prospect
          </div>

        </div>

      </div>

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {selectedSolution.category} Solution
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D]">
                {selectedSolution.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                {selectedSolution.description}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Key B2B Deliverables
                </h4>
                <div className="space-y-1.5 pt-1">
                  {selectedSolution.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedSolution(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Request Consultation</span>
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
