"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, Calendar, CheckCircle2, ChevronRight, X, ShieldAlert, Filter } from "lucide-react";

interface JobsPageSectionProps {
  onOpenEnquireModal: () => void;
}

interface JobOpportunity {
  ref: string;
  title: string;
  location: string;
  experience: string;
  qualification: string;
  jobType: string;
  domain: string;
  datePosted: string;
  skills: string[];
  description: string;
}

const jobsList: JobOpportunity[] = [
  {
    ref: "NXZ-101",
    title: "Accounts Payable Analyst",
    location: "Hyderabad",
    experience: "0–2 Years",
    qualification: "B.Com / M.Com / MBA Finance",
    jobType: "Full Time",
    domain: "Accounting",
    datePosted: "Posted 2 days ago",
    skills: ["ERP Tally / SAP", "Vendor Ledger Matching", "GST TDS Deduction"],
    description: "Managed by NexZen placement desk: Verify invoice batches, perform 3-way ledger matching, process vendor payments, and prepare monthly AP aging reports.",
  },
  {
    ref: "NXZ-102",
    title: "GST Analyst",
    location: "Hyderabad",
    experience: "0–2 Years",
    qualification: "B.Com / M.Com / MBA Finance",
    jobType: "Full Time",
    domain: "Taxation",
    datePosted: "Posted 1 day ago",
    skills: ["GSTR-1 & 3B Filing", "ITC Reconciliation", "E-Way Bills"],
    description: "Managed by NexZen placement desk: Handle monthly GST return filings, input tax credit reconciliation, e-invoicing portal management, and statutory tax audits.",
  },
  {
    ref: "NXZ-103",
    title: "Fund Accountant",
    location: "Hyderabad",
    experience: "0–2 Years",
    qualification: "B.Com / M.Com / MBA Finance",
    jobType: "Full Time",
    domain: "Capital Markets",
    datePosted: "Posted 3 days ago",
    skills: ["NAV Calculation", "Portfolio Pricing", "Fund Ledger Accounting"],
    description: "Managed by NexZen placement desk: Calculate Net Asset Value (NAV), perform mutual fund portfolio accounting, pricing reconciliations, and regulatory reports.",
  },
  {
    ref: "NXZ-104",
    title: "KYC Analyst",
    location: "Hyderabad",
    experience: "0–2 Years",
    qualification: "B.Com / M.Com / MBA Finance",
    jobType: "Full Time",
    domain: "Banking & Insurance",
    datePosted: "Posted 4 days ago",
    skills: ["AML Screening", "Customer Due Diligence", "Compliance Checks"],
    description: "Managed by NexZen placement desk: Review institutional & retail customer due diligence documents, conduct Anti-Money Laundering (AML) checks, and compliance reporting.",
  },
];

export default function JobsPageSection({ onOpenEnquireModal }: JobsPageSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedJob, setSelectedJob] = useState<JobOpportunity | null>(null);

  const filteredJobs = jobsList.filter((j) => {
    const matchesSearch = j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          j.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          j.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDomain = selectedDomain === "All" || j.domain === selectedDomain;
    const matchesLocation = selectedLocation === "All" || j.location === selectedLocation;
    const matchesExp = selectedExperience === "All" || j.experience === selectedExperience;
    return matchesSearch && matchesDomain && matchesLocation && matchesExp;
  });

  return (
    <section id="jobs-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            NEXZEN CAREERS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09101D] tracking-tight">
            A controlled job-opportunity portal managed by NexZen
          </h1>
        </div>

        {/* Main Grid: Left Filters Sidebar + Right 2x2 Opportunity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          
          {/* Left Column: Filters Sidebar Container */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
            <h2 className="text-xl font-black text-[#09101D] border-b border-slate-100 pb-3">
              Filters
            </h2>

            {/* Filter 1: Search Jobs */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Search Jobs...
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search by title or ref code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D]"
                />
              </div>
            </div>

            {/* Filter 2: Domain */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Domain
              </label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white"
              >
                <option value="All">All Domains</option>
                <option value="Accounting">Accounting</option>
                <option value="Taxation">Taxation</option>
                <option value="Capital Markets">Capital Markets</option>
                <option value="Banking & Insurance">Banking & Insurance</option>
              </select>
            </div>

            {/* Filter 3: Location */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white"
              >
                <option value="All">All Locations</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>

            {/* Filter 4: Experience */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Experience
              </label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white"
              >
                <option value="All">All Experience</option>
                <option value="0–2 Years">0–2 Years (Freshers & Junior)</option>
                <option value="2–5 Years">2–5 Years (Intermediate)</option>
              </select>
            </div>

            {/* Filter 5: Qualification */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Qualification
              </label>
              <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white">
                <option>B.Com / M.Com / MBA Finance</option>
                <option>CA / CMA Pursuing</option>
                <option>ACCA Qualified</option>
              </select>
            </div>

            {/* Filter 6: Job Type */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Job Type
              </label>
              <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white">
                <option>Full Time</option>
                <option>Contract / Internship</option>
              </select>
            </div>

            {/* Filter 7: Sort By */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">
                Sort By
              </label>
              <select className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white">
                <option>Most Recent</option>
                <option>Job Ref Code</option>
              </select>
            </div>

          </div>

          {/* Right Column: 2x2 Grid of Job Opportunity Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.ref}
                whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 102, 255, 0.12)" }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-blue-300 transition-colors group cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div>
                  {/* Job Ref Badge */}
                  <div className="mb-3">
                    <span className="inline-block text-[10.5px] font-extrabold text-[#0066FF] bg-[#EBF3FF] px-3 py-1 rounded-full border border-blue-200/40 uppercase tracking-wider">
                      JOB REF: {job.ref}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl font-extrabold text-[#09101D] group-hover:text-[#0066FF] transition-colors leading-tight">
                    {job.title}
                  </h3>

                  {/* Subtitle Meta */}
                  <p className="text-slate-500 text-xs font-medium mt-1">
                    {job.location} · {job.experience} · {job.qualification} · {job.jobType}
                  </p>

                  {/* Skill Pill Badges */}
                  <div className="flex flex-wrap gap-1.5 my-5 pt-3 border-t border-slate-100">
                    <span className="bg-[#EBF3FF] text-[#0066FF] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full">
                      Skills
                    </span>
                    <span className="bg-[#EBF3FF] text-[#0066FF] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full">
                      Qualification
                    </span>
                    <span className="bg-[#EBF3FF] text-[#0066FF] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full">
                      Date Posted
                    </span>
                    <span className="bg-[#EBF3FF] text-[#0066FF] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full">
                      Employment Type
                    </span>
                  </div>
                </div>

                {/* View Opportunity Button */}
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                    }}
                    className="btn-gradient text-white text-[12.5px] font-bold py-2.5 px-5 rounded-full shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200"
                  >
                    View Opportunity
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Caution Note Banner */}
        <div className="bg-[#FDF3C4]/90 border border-[#F6E05E] rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 animate-ping" />
          <p className="text-xs sm:text-sm text-[#744210] font-medium leading-normal">
            <strong className="font-extrabold text-[#522E08]">Do not display:</strong>{" "}
            recruiter mobile number, recruiter personal email or HR direct contact details.
          </p>
        </div>

      </div>

      {/* Job Opportunity Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block text-xs font-extrabold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full mb-3">
                JOB REF: {selectedJob.ref}
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-[#09101D]">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                {selectedJob.location} · {selectedJob.experience} · {selectedJob.jobType}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2 text-xs">
                <p className="text-slate-700 leading-relaxed font-medium">
                  {selectedJob.description}
                </p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {selectedJob.skills.map((s, idx) => (
                    <span key={idx} className="bg-white text-[#0066FF] border border-blue-200 font-bold px-2.5 py-0.5 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    onOpenEnquireModal();
                  }}
                  className="btn-gradient text-white text-xs font-bold px-6 py-2.5 rounded-full flex items-center gap-1.5"
                >
                  <span>Apply via NexZen Desk</span>
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
