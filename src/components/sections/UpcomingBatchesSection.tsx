"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Clock, X, ChevronRight, CheckCircle2 } from "lucide-react";

interface UpcomingBatchesSectionProps {
  onOpenEnquireModal: () => void;
}

interface BatchItem {
  id: string;
  title: string;
  location: string;
  mode: "Offline" | "Online";
  startDate: string;
  seats: string;
  timing: string;
  duration: string;
  modules: string[];
  description: string;
}

const batchesData: BatchItem[] = [
  {
    id: "ap-analyst",
    title: "Accounts Payable Analyst",
    location: "Hyderabad",
    mode: "Offline",
    startDate: "15th September 2026",
    seats: "Limited (4 Seats Left)",
    timing: "09:30 AM - 01:00 PM",
    duration: "6 Weeks Intensive",
    description: "Hands-on training in invoice processing, vendor reconciliation, ERP journal entries, and 3-way matching.",
    modules: [
      "ERP Vendor Ledger Setup & Verification",
      "Invoice Scanning, Matching & Batch Approval",
      "GST TDS Deduction & Payment Workflow",
      "Monthly Accounts Payable Aging Analysis",
    ],
  },
  {
    id: "tally-gst",
    title: "Tally + GST Practical Training",
    location: "Hyderabad",
    mode: "Offline",
    startDate: "20th September 2026",
    seats: "Limited (6 Seats Left)",
    timing: "02:00 PM - 05:30 PM",
    duration: "8 Weeks Practical",
    description: "Complete practical mastery of Tally Prime, GSTR-1, GSTR-3B return filing, e-Way bills, and e-Invoicing.",
    modules: [
      "Tally Prime Advanced Voucher Entry",
      "GSTR-1, GSTR-3B & GSTR-2B Reconciliation",
      "E-Invoicing Portal Integration & e-Way Bills",
      "Payroll Management & TDS Return Filing",
    ],
  },
  {
    id: "financial-modelling",
    title: "Financial Modelling",
    location: "Hyderabad",
    mode: "Offline",
    startDate: "28th September 2026",
    seats: "Limited (3 Seats Left)",
    timing: "10:00 AM - 02:00 PM (Weekends)",
    duration: "10 Weeks Masterclass",
    description: "Build 3-statement financial models, DCF valuation, scenario planning, and M&A pitch deck dashboards.",
    modules: [
      "Integrated 3-Statement Model Construction",
      "DCF Valuation & Sensitivity Analysis Tables",
      "Power BI Financial KPI Dashboards",
      "Corporate M&A & LBO Model Case Studies",
    ],
  },
];

export default function UpcomingBatchesSection({ onOpenEnquireModal }: UpcomingBatchesSectionProps) {
  const [activeTab, setActiveTab] = useState<"All" | "Offline" | "Online">("All");
  const [selectedBatch, setSelectedBatch] = useState<BatchItem | null>(null);

  const filteredBatches = batchesData.filter((b) => {
    if (activeTab === "All") return true;
    return b.mode === activeTab;
  });

  return (
    <section id="upcoming-batches" className="py-14 sm:py-16 bg-white w-full border-t border-slate-200/60">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-6">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            UPCOMING BATCHES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#09101D] tracking-tight">
            Offline-only now. Online-ready later.
          </h2>
        </div>

        {/* Filter Tabs Row */}
        <div className="flex items-center gap-2.5 mb-8">
          <button
            onClick={() => setActiveTab("All")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              activeTab === "All"
                ? "bg-[#09101D] text-white shadow-xs"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("Offline")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
              activeTab === "Offline"
                ? "bg-[#09101D] text-white shadow-xs"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            Offline
          </button>

          <button
            onClick={() => setActiveTab("Online")}
            className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition-all duration-200 ${
              activeTab === "Online"
                ? "bg-[#09101D] text-white shadow-xs"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300"
            }`}
          >
            <span>Online</span>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E]">
              Coming Soon
            </span>
          </button>
        </div>

        {/* Batch Cards Grid / Coming Soon State */}
        {activeTab === "Online" ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50/60 rounded-3xl p-8 text-center border border-blue-100/80 max-w-2xl mx-auto my-6"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center mx-auto mb-3 font-bold text-lg">
              🚀
            </div>
            <h3 className="text-xl font-extrabold text-[#09101D]">
              Online Batches Launching Soon
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
              We are finalizing our high-interactivity online learning LMS platform. Register your email now to get early access notifications and early-bird discounts.
            </p>
            <button
              onClick={onOpenEnquireModal}
              className="btn-gradient text-white text-xs font-bold px-6 py-3 rounded-full mt-4"
            >
              Notify Me for Online Launch
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredBatches.map((batch) => (
              <motion.div
                key={batch.id}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 102, 255, 0.1)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors group"
              >
                <div>
                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold text-[#0066FF] bg-[#EBF3FF] px-3 py-1 rounded-full border border-blue-200/40">
                      {batch.mode} · {batch.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#09101D] group-hover:text-[#0066FF] transition-colors leading-tight">
                    {batch.title}
                  </h3>

                  {/* Info List */}
                  <div className="space-y-1.5 my-5 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Batch Starts:</span>
                      <span className="font-bold text-[#09101D]">{batch.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Seats:</span>
                      <span className="font-bold text-[#09101D]">{batch.seats}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-400">Mode:</span>
                      <span className="font-bold text-[#09101D]">{batch.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedBatch(batch)}
                    className="btn-gradient text-white text-[12px] font-bold py-2.5 px-4 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
                  >
                    View Details
                  </button>

                  <button
                    onClick={onOpenEnquireModal}
                    className="bg-white hover:bg-slate-50 text-[#09101D] text-[12px] font-bold py-2.5 px-4 rounded-full border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200"
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Important Architecture Note Banner */}
        <div className="mt-8 bg-[#FDF3C4]/90 border border-[#F6E05E] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-ping" />
          <p className="text-xs sm:text-sm text-[#744210] font-medium leading-normal">
            <strong className="font-extrabold text-[#522E08]">Important:</strong>{" "}
            Website architecture should allow Online batches later, but currently show Online as Coming Soon only.
          </p>
        </div>

      </div>

      {/* Batch Details Modal */}
      <AnimatePresence>
        {selectedBatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedBatch(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                {selectedBatch.mode} Batch · {selectedBatch.location}
              </span>

              <h3 className="text-2xl font-black text-[#09101D]">
                {selectedBatch.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {selectedBatch.description}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Batch Schedule:</span>
                  <span className="font-bold text-[#09101D]">{selectedBatch.timing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Program Duration:</span>
                  <span className="font-bold text-[#09101D]">{selectedBatch.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Seat Availability:</span>
                  <span className="font-bold text-blue-600">{selectedBatch.seats}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Core Curriculum Modules
                </h4>
                {selectedBatch.modules.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedBatch(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedBatch(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Reserve Seat Now</span>
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
