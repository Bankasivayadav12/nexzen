"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Award, CheckCircle2, ChevronRight, X, Sparkles, Filter } from "lucide-react";

interface CertificationsPageSectionProps {
  onOpenEnquireModal: () => void;
}

interface CertificationItem {
  title: string;
  category: string;
  duration: string;
  skills: string[];
  description: string;
}

const certificationsList: CertificationItem[] = [
  { title: "NISM Certifications", category: "Capital Markets", duration: "4 Weeks", skills: ["Mutual Funds", "Equity Derivatives", "Research Analyst"], description: "Official SEBI-mandated certifications for Indian capital markets and wealth management." },
  { title: "NCFM Certifications", category: "Capital Markets", duration: "4 Weeks", skills: ["NSE Modules", "Financial Markets", "Trading Strategies"], description: "NSE Academy certification covering financial markets, currency derivatives, and risk management." },
  { title: "Financial Modelling", category: "Corporate Finance", duration: "8 Weeks", skills: ["DCF", "3-Statement Models", "Valuation"], description: "Build wall-street standard financial models, corporate valuation, and sensitivity analysis." },
  { title: "CFE", category: "Forensic", duration: "12 Weeks", skills: ["Fraud Investigation", "Anti-Money Laundering", "Forensic Audit"], description: "Certified Fraud Examiner designation specializing in corporate fraud prevention and detection." },
  
  { title: "IFRS Certification", category: "Global Accounting", duration: "12 Weeks", skills: ["IAS Standards", "Financial Reporting", "ACCA UK Diploma"], description: "Comprehensive training on International Financial Reporting Standards for MNC accountants." },
  { title: "Tally", category: "Software", duration: "6 Weeks", skills: ["Tally Prime", "Voucher Entry", "Inventory Management"], description: "Practical Tally Prime ledger posting, payroll, inventory, and automated GST voucher processing." },
  { title: "Advanced Excel", category: "Analytics", duration: "4 Weeks", skills: ["VLOOKUP", "Pivot Tables", "VBA Macros"], description: "Master financial functions, complex formulas, dashboard automation, and macro scripting." },
  { title: "Power BI", category: "Analytics", duration: "6 Weeks", skills: ["DAX", "Data Visualization", "CFO Dashboards"], description: "Transform raw accounting data into interactive executive dashboards and BI reporting." },

  { title: "SAP Finance", category: "ERP", duration: "10 Weeks", skills: ["SAP FICO", "General Ledger", "AP / AR Modules"], description: "Enterprise SAP FICO module training for corporate financial accounting and controlling." },
  { title: "GST Certification", category: "Taxation", duration: "6 Weeks", skills: ["GSTR-1", "GSTR-3B", "Input Tax Credit"], description: "Practical GSTR filing, reconciliation, e-way bill generation, and assessment procedure." },
  { title: "Income Tax Practical", category: "Taxation", duration: "6 Weeks", skills: ["ITR Filing", "TDS Computation", "Tax Audits"], description: "Hands-on individual and corporate income tax computation, TDS returns, and portal filing." },
  { title: "Payroll", category: "HR & Finance", duration: "4 Weeks", skills: ["PF & ESI", "Salary Structure", "Form 16"], description: "Corporate salary processing, Provident Fund, ESI compliance, and automated payroll software." },

  { title: "Investment Analysis", category: "Finance", duration: "8 Weeks", skills: ["Portfolio Theory", "Asset Allocation", "Risk Metrics"], description: "Analyze equity, fixed income, and alternative assets for wealth advisory roles." },
  { title: "Equity Research", category: "Finance", duration: "8 Weeks", skills: ["Company Valuation", "Financial Statements", "Report Writing"], description: "Perform buy-side and sell-side equity research, financial statement analysis, and pitch decks." },
  { title: "Business Valuation", category: "Corporate Finance", duration: "6 Weeks", skills: ["Discounted Cash Flow", "M&A Multiples", "LBO"], description: "Determine business value using DCF, market comparable multiples, and transaction precedents." },
  { title: "Credit Analysis", category: "Banking", duration: "6 Weeks", skills: ["Underwriting", "Ratio Analysis", "Debt Covenants"], description: "Assess corporate creditworthiness, debt capacity, ratio analysis, and bank loan proposals." },

  { title: "Financial Analytics", category: "Analytics", duration: "8 Weeks", skills: ["Python for Finance", "Predictive Models", "Time Series"], description: "Apply statistical modeling and quantitative techniques to financial datasets." },
  { title: "AI Tools for Finance", category: "Tech", duration: "4 Weeks", skills: ["ChatGPT for Excel", "Automation", "AI Auditing"], description: "Leverage generative AI tools and prompt engineering to automate financial workflows." },
];

export default function CertificationsPageSection({ onOpenEnquireModal }: CertificationsPageSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const filteredCerts = certificationsList.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="certifications-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            CERTIFICATION COURSES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09101D] tracking-tight">
            Build specialised skills. Add industry credentials.
          </h1>
        </div>

        {/* Top Row Grid (Left Dark Navy Featured Card + Right Certifications Grid Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          
          {/* Left Dark Navy Featured Card */}
          <div className="lg:col-span-4 bg-[#091427] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Featured certifications
              </h3>
              <p className="text-xs text-slate-300 font-medium mt-2 leading-relaxed">
                Homepage should show 6–8 only; full page can show all.
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenEnquireModal}
                className="btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
              >
                View All Certifications
              </button>
            </div>
          </div>

          {/* Right White Box Container with Search & Skill Pills */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
            
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search certifications by skill (e.g. Excel, Tally, GST, Power BI, NISM)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20 text-[#09101D] bg-[#F8FAFC]"
              />
            </div>

            {/* 4 Columns Grid of Certification Skill Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 pt-1">
              {filteredCerts.map((cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-white hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-300 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-2xl text-xs font-bold text-[#09101D] hover:text-[#0066FF] transition-all cursor-pointer shadow-2xs text-center truncate"
                  title={cert.title}
                >
                  {cert.title}
                </motion.div>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Row Grid (Left Visual Ice Box + Right UX Treatment Box) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Visual Ice Glass Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#DDEBFC] via-[#E4F4FA] to-[#E2F7F6] rounded-3xl p-6 sm:p-8 border border-blue-100/70 shadow-xs flex flex-col justify-between relative overflow-hidden min-h-[180px] sm:min-h-[200px]">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="my-auto z-10 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-white/80 backdrop-blur-sm text-[#0066FF]">
                Skill Credential Ecosystem
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#09101D]">
                Industry-Recognized Financial Tools & Analytics Badges
              </h3>
            </div>
          </div>

          {/* Right UX Treatment Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-2xl font-black text-[#09101D]">
                UX treatment
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2 leading-relaxed">
                Use searchable certification cards with skill tags, duration, target learner and enquiry CTA. Do not overcrowd the homepage.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenEnquireModal}
                className="btn-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-1.5 w-full sm:w-auto justify-center"
              >
                <span>Enquire for Certifications</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Certification Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {selectedCert.category} · {selectedCert.duration}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D]">
                {selectedCert.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
                <h4 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  Target Skills Covered
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedCert.skills.map((s, idx) => (
                    <span key={idx} className="bg-white px-2.5 py-1 rounded-full text-xs font-bold text-[#0066FF] border border-blue-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Enquire Now</span>
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
