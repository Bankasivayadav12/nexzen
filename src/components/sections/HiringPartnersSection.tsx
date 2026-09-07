"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Calculator, 
  Scale, 
  Building, 
  Landmark, 
  Rocket, 
  Globe, 
  HeartHandshake, 
  CreditCard, 
  TrendingUp, 
  Plane, 
  ShoppingCart, 
  Activity, 
  Factory, 
  Home, 
  Laptop, 
  Zap, 
  MoreHorizontal,
  ArrowRight
} from "lucide-react";

interface HiringPartnersSectionProps {
  onOpenEnquireModal: () => void;
}

interface CompanyItem {
  name: string;
  domain?: string;
  logoUrl?: string;
  style?: string;
}

interface CategoryCard {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  headerBg: string;
  iconBg: string;
  iconColor: string;
  companies: CompanyItem[];
  isManyMore?: boolean;
}

const categoriesData: CategoryCard[] = [
  {
    title: "CA Firms",
    subtitle: "Chartered Accountancy Firms",
    icon: <Building2 className="w-4 h-4" />,
    headerBg: "bg-blue-50/80 border-blue-100",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    companies: [
      { name: "Deloitte", logoUrl: "https://cdn.simpleicons.org/deloitte/86BC25" },
      { name: "EY", logoUrl: "https://cdn.simpleicons.org/ey/FFE600" },
      { name: "PwC", logoUrl: "https://cdn.simpleicons.org/pwc/D04A02" },
      { name: "KPMG", logoUrl: "https://cdn.simpleicons.org/kpmg/00338D" },
      { name: "BDO", logoUrl: "https://cdn.simpleicons.org/bdo/E31837" },
      { name: "SRBC & CO", logoUrl: "https://cdn.simpleicons.org/ey/FFE600" },
    ],
  },
  {
    title: "Consulting Firms",
    subtitle: "Business & Management Consulting",
    icon: <Users className="w-4 h-4" />,
    headerBg: "bg-amber-50/80 border-amber-100",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    companies: [
      { name: "McKinsey", logoUrl: "https://cdn.simpleicons.org/mckinsey/000000" },
      { name: "BCG", logoUrl: "https://cdn.simpleicons.org/bcg/008000" },
      { name: "Bain", logoUrl: "https://cdn.simpleicons.org/bainandcompany/CC0000" },
      { name: "Accenture", logoUrl: "https://cdn.simpleicons.org/accenture/A100FF" },
      { name: "IBM", logoUrl: "https://cdn.simpleicons.org/ibm/054ADA" },
      { name: "Capgemini", logoUrl: "https://cdn.simpleicons.org/capgemini/0070AD" },
    ],
  },
  {
    title: "CPA Firms",
    subtitle: "Global Accounting & Advisory",
    icon: <Calculator className="w-4 h-4" />,
    headerBg: "bg-emerald-50/80 border-emerald-100",
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
    companies: [
      { name: "Grant Thornton", logoUrl: "https://cdn.simpleicons.org/grantthornton/4F2683" },
      { name: "RSM", logoUrl: "https://cdn.simpleicons.org/rsm/009933" },
      { name: "Crowe", logoUrl: "https://cdn.simpleicons.org/crowe/002F6C" },
      { name: "Baker Tilly", logoUrl: "https://cdn.simpleicons.org/bakertilly/E31837" },
      { name: "Forvis", logoUrl: "https://cdn.simpleicons.org/mazars/002D62" },
    ],
  },
  {
    title: "Legal Firms",
    subtitle: "Law & Regulatory Advisory",
    icon: <Scale className="w-4 h-4" />,
    headerBg: "bg-rose-50/80 border-rose-100",
    iconBg: "bg-rose-500",
    iconColor: "text-white",
    companies: [
      { name: "AZB & Partners" },
      { name: "Trilegal" },
      { name: "Khaitan & Co" },
      { name: "Shardul Amarchand" },
      { name: "Luthra and Luthra" },
    ],
  },
  {
    title: "MNCs",
    subtitle: "Global Career Opportunities",
    icon: <Building className="w-4 h-4" />,
    headerBg: "bg-cyan-50/80 border-cyan-100",
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
    companies: [
      { name: "Google", logoUrl: "https://cdn.simpleicons.org/google/4285F4" },
      { name: "Microsoft", logoUrl: "https://cdn.simpleicons.org/microsoft/5E5E5E" },
      { name: "Amazon", logoUrl: "https://cdn.simpleicons.org/amazon/FF9900" },
      { name: "IBM", logoUrl: "https://cdn.simpleicons.org/ibm/054ADA" },
      { name: "Intel", logoUrl: "https://cdn.simpleicons.org/intel/0071C5" },
    ],
  },
  {
    title: "Large & Medium Companies",
    subtitle: "Growing Businesses, Greater Opportunities",
    icon: <Building2 className="w-4 h-4" />,
    headerBg: "bg-purple-50/80 border-purple-100",
    iconBg: "bg-purple-500",
    iconColor: "text-white",
    companies: [
      { name: "TATA", logoUrl: "https://cdn.simpleicons.org/tata/00529C" },
      { name: "Reliance", logoUrl: "https://cdn.simpleicons.org/relianceindustrieslimited/003399" },
      { name: "HDFC Bank", logoUrl: "https://cdn.simpleicons.org/hdfcbank/004B8D" },
      { name: "Infosys", logoUrl: "https://cdn.simpleicons.org/infosys/007CC3" },
      { name: "Wipro", logoUrl: "https://cdn.simpleicons.org/wipro/121A63" },
      { name: "Tech Mahindra" },
    ],
  },
  {
    title: "Government Sector",
    subtitle: "Serve the Nation",
    icon: <Landmark className="w-4 h-4" />,
    headerBg: "bg-[#EBF3FF] border-blue-200/60",
    iconBg: "bg-[#0066FF]",
    iconColor: "text-white",
    companies: [
      { name: "SBI", logoUrl: "https://cdn.simpleicons.org/statebankofindia/0082C6" },
      { name: "SEBI" },
      { name: "UPSC" },
      { name: "RBI" },
      { name: "NITI Aayog" },
    ],
  },
  {
    title: "Startups",
    subtitle: "Be Part of the Next Big Thing",
    icon: <Rocket className="w-4 h-4" />,
    headerBg: "bg-amber-50/80 border-amber-100",
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    companies: [
      { name: "Razorpay", logoUrl: "https://cdn.simpleicons.org/razorpay/0C2340" },
      { name: "Zomato", logoUrl: "https://cdn.simpleicons.org/zomato/E23744" },
      { name: "Zerodha" },
      { name: "CRED", logoUrl: "https://cdn.simpleicons.org/cred/000000" },
      { name: "Meesho" },
      { name: "Swiggy", logoUrl: "https://cdn.simpleicons.org/swiggy/FC8019" },
    ],
  },
  {
    title: "International Opportunities",
    subtitle: "Work Across Borders",
    icon: <Globe className="w-4 h-4" />,
    headerBg: "bg-indigo-50/80 border-indigo-100",
    iconBg: "bg-indigo-500",
    iconColor: "text-white",
    companies: [
      { name: "ACCA" },
      { name: "CFA Institute" },
      { name: "CMA" },
      { name: "Dubai Careers" },
      { name: "PwC", logoUrl: "https://cdn.simpleicons.org/pwc/D04A02" },
      { name: "EY", logoUrl: "https://cdn.simpleicons.org/ey/FFE600" },
    ],
  },
  {
    title: "Non-Profit & Development",
    subtitle: "Create Social Impact",
    icon: <HeartHandshake className="w-4 h-4" />,
    headerBg: "bg-blue-50/70 border-blue-100",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
    companies: [
      { name: "World Bank", logoUrl: "https://cdn.simpleicons.org/worldbank/002244" },
      { name: "United Nations", logoUrl: "https://cdn.simpleicons.org/unitednations/009EDB" },
      { name: "UNICEF", logoUrl: "https://cdn.simpleicons.org/unicef/1C9AD6" },
      { name: "NGO", style: "font-black text-emerald-700 text-xs" },
      { name: "WHO", logoUrl: "https://cdn.simpleicons.org/worldhealthorganization/008DC9" },
      { name: "GIZ" },
    ],
  },
  {
    title: "BFSI & Financial Services",
    subtitle: "Banking, Investment & Financial Markets",
    icon: <CreditCard className="w-4 h-4" />,
    headerBg: "bg-emerald-50/80 border-emerald-100",
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
    companies: [
      { name: "HDFC Bank", logoUrl: "https://cdn.simpleicons.org/hdfcbank/004B8D" },
      { name: "ICICI Bank", logoUrl: "https://cdn.simpleicons.org/icicibank/004B8D" },
      { name: "Axis Bank", logoUrl: "https://cdn.simpleicons.org/axisbank/97144D" },
      { name: "Kotak" },
      { name: "J.P. Morgan", logoUrl: "https://cdn.simpleicons.org/jpmorgan/000000" },
      { name: "Goldman Sachs", logoUrl: "https://cdn.simpleicons.org/goldmansachs/7399C6" },
    ],
  },
  {
    title: "And Many More",
    subtitle: "Across Sectors & Industries",
    icon: <TrendingUp className="w-4 h-4" />,
    headerBg: "bg-teal-50/80 border-teal-100",
    iconBg: "bg-teal-600",
    iconColor: "text-white",
    isManyMore: true,
    companies: [],
  },
];

const manyMoreSectors = [
  { label: "Aviation", icon: <Plane className="w-3.5 h-3.5 text-[#0066FF]" /> },
  { label: "Retail", icon: <ShoppingCart className="w-3.5 h-3.5 text-[#C69214]" /> },
  { label: "Healthcare", icon: <Activity className="w-3.5 h-3.5 text-rose-500" /> },
  { label: "Manufacturing", icon: <Factory className="w-3.5 h-3.5 text-slate-700" /> },
  { label: "Real Estate", icon: <Home className="w-3.5 h-3.5 text-purple-600" /> },
  { label: "Technology", icon: <Laptop className="w-3.5 h-3.5 text-cyan-600" /> },
  { label: "Energy & Infra", icon: <Zap className="w-3.5 h-3.5 text-emerald-600" /> },
  { label: "and more...", icon: <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" /> },
];

function CompanyLogoItem({ comp }: { comp: CompanyItem }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-full py-2 px-1.5 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-100 hover:border-blue-200 flex items-center justify-center text-center transition-all hover:shadow-xs min-h-[44px] group overflow-hidden">
      {!hasError && comp.logoUrl ? (
        <img
          src={comp.logoUrl}
          alt={comp.name}
          onError={() => setHasError(true)}
          className="max-h-6 max-w-[85%] object-contain filter group-hover:scale-105 transition-transform"
        />
      ) : (
        <div className="flex items-center justify-center gap-1.5 w-full">
          <div className="w-5 h-5 rounded-md bg-[#091F38] text-[#C69214] font-black text-[9px] flex items-center justify-center shrink-0 uppercase tracking-tighter shadow-2xs">
            {comp.name.replace(/[^a-zA-Z]/g, '').slice(0, 2)}
          </div>
          <span className={comp.style || "font-extrabold text-[11px] text-[#091F38] tracking-tight truncate max-w-[80px]"}>
            {comp.name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function HiringPartnersSection({ onOpenEnquireModal }: HiringPartnersSectionProps) {
  return (
    <section id="hiring-partners" className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 bg-gradient-to-b from-[#EDF3FA] via-[#F4F8FF] to-[#EDF3FA] w-full overflow-hidden">
      
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Header Badge & Main Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black bg-[#EBF3FF] text-[#0066FF] tracking-[0.18em] uppercase border border-blue-200/60 shadow-xs">
            YOUR CAREER. OUR PURPOSE.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#091F38] tracking-tight leading-tight">
            You can work with leading{" "}
            <span className="relative inline-block text-[#0066FF]">
              employers
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C69214]" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none">
                <path d="M2 9 C 30 2, 70 2, 98 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl mx-auto pt-1">
            Once you complete our courses, you can build the skills to get placed with top firms, companies and organizations across industries.
          </p>
        </div>

        {/* 12 Categorized Employer Cards Grid (4 cols x 3 rows on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10">
          {categoriesData.map((cat) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(9, 31, 56, 0.08)" }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-[24px] border border-slate-200/80 shadow-xs overflow-hidden flex flex-col justify-between hover:border-blue-300 transition-all"
            >
              {/* Card Category Header */}
              <div className={`px-4 py-3 border-b ${cat.headerBg} flex items-center gap-3`}>
                <div className={`w-7 h-7 rounded-full ${cat.iconBg} ${cat.iconColor} flex items-center justify-center shrink-0 shadow-xs`}>
                  {cat.icon}
                </div>
                <div className="flex flex-col leading-tight">
                  <h3 className="text-sm font-black text-[#091F38]">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 line-clamp-1">
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body: Logos or Sectors Grid */}
              <div className="p-4 flex-grow flex items-center justify-center">
                {cat.isManyMore ? (
                  <div className="grid grid-cols-4 gap-2 w-full text-center">
                    {manyMoreSectors.map((sector) => (
                      <div key={sector.label} className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 transition-colors">
                        <div className="mb-1">{sector.icon}</div>
                        <span className="text-[9px] font-bold text-slate-600 leading-tight">
                          {sector.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2.5 w-full items-center justify-items-center py-1">
                    {cat.companies.map((comp) => (
                      <CompanyLogoItem key={comp.name} comp={comp} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#091F38] text-white rounded-[28px] p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 mb-10">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Interested in hiring NexZen-trained talent?
            </h3>
            <p className="text-xs text-[#C69214] font-bold tracking-wide">
              Connect with our corporate placement cell for campus drives & direct role recruitment.
            </p>
          </div>

          <button
            onClick={onOpenEnquireModal}
            className="bg-gradient-to-r from-[#0052FF] via-[#0066FF] to-[#D98E04] text-white text-xs sm:text-sm font-extrabold px-7 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 shrink-0 w-full sm:w-auto text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Partner With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Slogan Bar */}
        <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-[11px] font-black uppercase tracking-[0.16em] text-slate-600">
          <div className="flex items-center gap-2 text-[#0066FF]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066FF] inline-block animate-pulse"></span>
            <span>SKILLS FOR TODAY</span>
          </div>
          <div className="hidden sm:block h-3 w-px bg-slate-300"></div>
          <div className="flex items-center gap-2 text-[#C69214]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C69214] inline-block animate-pulse"></span>
            <span>OPPORTUNITIES FOR TOMORROW</span>
          </div>
          <div className="hidden sm:block h-3 w-px bg-slate-300"></div>
          <div className="flex items-center gap-2 text-purple-600">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block animate-pulse"></span>
            <span>SUCCESS FOR A LIFETIME</span>
          </div>
        </div>

      </div>
    </section>
  );
}
