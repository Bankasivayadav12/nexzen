"use client";

import React from "react";
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

interface CompanyBrandData {
  name: string;
  short: string;
  bg: string;
  textColor: string;
  brandText?: string;
}

// Authentic corporate brand mapping for 100% reliable rendering without broken image links
const brandMap: Record<string, CompanyBrandData> = {
  // CA Firms
  "Deloitte": { name: "Deloitte", short: "D.", bg: "bg-[#86BC25]", textColor: "text-white font-black", brandText: "Deloitte" },
  "EY": { name: "EY", short: "EY", bg: "bg-[#FFE600]", textColor: "text-black font-black", brandText: "EY" },
  "PwC": { name: "PwC", short: "pwc", bg: "bg-[#D04A02]", textColor: "text-white font-black", brandText: "PwC" },
  "KPMG": { name: "KPMG", short: "KPMG", bg: "bg-[#00338D]", textColor: "text-white font-black", brandText: "KPMG" },
  "BDO": { name: "BDO", short: "BDO", bg: "bg-[#E31837]", textColor: "text-white font-black", brandText: "BDO" },
  "SRBC & CO": { name: "SRBC & CO", short: "SR", bg: "bg-[#FFE600]", textColor: "text-black font-bold", brandText: "SRBC & CO" },

  // Consulting Firms
  "McKinsey": { name: "McKinsey", short: "McK", bg: "bg-[#051C2C]", textColor: "text-white font-bold", brandText: "McKinsey" },
  "BCG": { name: "BCG", short: "BCG", bg: "bg-[#008000]", textColor: "text-white font-black", brandText: "BCG" },
  "Bain": { name: "Bain", short: "BAIN", bg: "bg-[#CC0000]", textColor: "text-white font-bold", brandText: "Bain & Co" },
  "Accenture": { name: "Accenture", short: ">", bg: "bg-[#A100FF]", textColor: "text-white font-black", brandText: "accenture" },
  "IBM": { name: "IBM", short: "IBM", bg: "bg-[#054ADA]", textColor: "text-white font-black", brandText: "IBM" },
  "Capgemini": { name: "Capgemini", short: "CG", bg: "bg-[#0070AD]", textColor: "text-white font-bold", brandText: "Capgemini" },

  // CPA Firms
  "Grant Thornton": { name: "Grant Thornton", short: "GT", bg: "bg-[#4F2683]", textColor: "text-white font-bold", brandText: "Grant Thornton" },
  "RSM": { name: "RSM", short: "RSM", bg: "bg-[#009933]", textColor: "text-white font-black", brandText: "RSM" },
  "Crowe": { name: "Crowe", short: "CR", bg: "bg-[#002F6C]", textColor: "text-white font-bold", brandText: "Crowe" },
  "Baker Tilly": { name: "Baker Tilly", short: "BT", bg: "bg-[#E31837]", textColor: "text-white font-bold", brandText: "Baker Tilly" },
  "Forvis": { name: "Forvis", short: "FM", bg: "bg-[#002D62]", textColor: "text-white font-bold", brandText: "Forvis Mazars" },

  // Legal Firms
  "AZB & Partners": { name: "AZB & Partners", short: "AZ", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "Trilegal": { name: "Trilegal", short: "TR", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "Khaitan & Co": { name: "Khaitan & Co", short: "KH", bg: "bg-[#800000]", textColor: "text-white font-bold" },
  "Shardul Amarchand": { name: "Shardul Amarchand", short: "SA", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "Luthra and Luthra": { name: "Luthra and Luthra", short: "LL", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },

  // MNCs
  "Google": { name: "Google", short: "G", bg: "bg-[#4285F4]", textColor: "text-white font-black", brandText: "Google" },
  "Microsoft": { name: "Microsoft", short: "MS", bg: "bg-[#0078D4]", textColor: "text-white font-black", brandText: "Microsoft" },
  "Amazon": { name: "Amazon", short: "amzn", bg: "bg-[#FF9900]", textColor: "text-black font-black", brandText: "amazon" },
  "Intel": { name: "Intel", short: "intel", bg: "bg-[#0071C5]", textColor: "text-white font-bold", brandText: "intel" },

  // Large & Medium Companies
  "TATA": { name: "TATA", short: "TATA", bg: "bg-[#00529C]", textColor: "text-white font-black", brandText: "TATA" },
  "Reliance": { name: "Reliance", short: "RIL", bg: "bg-[#003399]", textColor: "text-white font-bold", brandText: "Reliance" },
  "HDFC Bank": { name: "HDFC Bank", short: "HDFC", bg: "bg-[#004B8D]", textColor: "text-white font-bold", brandText: "HDFC Bank" },
  "Infosys": { name: "Infosys", short: "INFY", bg: "bg-[#007CC3]", textColor: "text-white font-bold", brandText: "Infosys" },
  "Wipro": { name: "Wipro", short: "WIPRO", bg: "bg-[#121A63]", textColor: "text-white font-bold", brandText: "Wipro" },
  "Tech Mahindra": { name: "Tech Mahindra", short: "TM", bg: "bg-[#E31837]", textColor: "text-white font-bold", brandText: "Tech M" },

  // Government Sector
  "SBI": { name: "SBI", short: "SBI", bg: "bg-[#0082C6]", textColor: "text-white font-black", brandText: "SBI" },
  "SEBI": { name: "SEBI", short: "SEBI", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "UPSC": { name: "UPSC", short: "UPSC", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "RBI": { name: "RBI", short: "RBI", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "NITI Aayog": { name: "NITI Aayog", short: "NITI", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },

  // Startups
  "Razorpay": { name: "Razorpay", short: "RZP", bg: "bg-[#0C2340]", textColor: "text-[#0066FF] font-black", brandText: "Razorpay" },
  "Zomato": { name: "Zomato", short: "zomato", bg: "bg-[#E23744]", textColor: "text-white font-black", brandText: "zomato" },
  "Zerodha": { name: "Zerodha", short: "Z", bg: "bg-[#387ED1]", textColor: "text-white font-bold", brandText: "Zerodha" },
  "CRED": { name: "CRED", short: "CRED", bg: "bg-black", textColor: "text-white font-black", brandText: "CRED" },
  "Meesho": { name: "Meesho", short: "m", bg: "bg-[#F43397]", textColor: "text-white font-black", brandText: "meesho" },
  "Swiggy": { name: "Swiggy", short: "S", bg: "bg-[#FC8019]", textColor: "text-white font-black", brandText: "Swiggy" },

  // International Opportunities
  "ACCA": { name: "ACCA", short: "ACCA", bg: "bg-[#000000]", textColor: "text-[#E31837] font-black" },
  "CFA Institute": { name: "CFA Institute", short: "CFA", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "CMA": { name: "CMA", short: "CMA", bg: "bg-[#091F38]", textColor: "text-[#C69214] font-bold" },
  "Dubai Careers": { name: "Dubai Careers", short: "DXB", bg: "bg-[#007A3D]", textColor: "text-white font-bold" },

  // Non-Profit
  "World Bank": { name: "World Bank", short: "WB", bg: "bg-[#002244]", textColor: "text-white font-bold", brandText: "World Bank" },
  "United Nations": { name: "United Nations", short: "UN", bg: "bg-[#009EDB]", textColor: "text-white font-bold", brandText: "United Nations" },
  "UNICEF": { name: "UNICEF", short: "unicef", bg: "bg-[#1C9AD6]", textColor: "text-white font-bold", brandText: "unicef" },
  "WHO": { name: "WHO", short: "WHO", bg: "bg-[#008DC9]", textColor: "text-white font-bold", brandText: "WHO" },
  "GIZ": { name: "GIZ", short: "giz", bg: "bg-[#E31837]", textColor: "text-white font-bold", brandText: "giz" },

  // BFSI
  "ICICI Bank": { name: "ICICI Bank", short: "ICICI", bg: "bg-[#F37021]", textColor: "text-white font-bold", brandText: "ICICI Bank" },
  "Axis Bank": { name: "Axis Bank", short: "AXIS", bg: "bg-[#97144D]", textColor: "text-white font-bold", brandText: "Axis Bank" },
  "Kotak": { name: "Kotak", short: "KOTAK", bg: "bg-[#EE1C25]", textColor: "text-white font-bold", brandText: "Kotak" },
  "J.P. Morgan": { name: "J.P. Morgan", short: "JPM", bg: "bg-[#111111]", textColor: "text-white font-bold", brandText: "J.P. Morgan" },
  "Goldman Sachs": { name: "Goldman Sachs", short: "GS", bg: "bg-[#7399C6]", textColor: "text-white font-bold", brandText: "Goldman Sachs" }
};

const categoriesData: CategoryCard[] = [
  {
    title: "CA Firms",
    subtitle: "Chartered Accountancy Firms",
    icon: <Building2 className="w-4 h-4" />,
    headerBg: "bg-blue-50/80 border-blue-100",
    iconBg: "bg-blue-500",
    iconColor: "text-white",
    companies: [
      { name: "Deloitte" },
      { name: "EY" },
      { name: "PwC" },
      { name: "KPMG" },
      { name: "BDO" },
      { name: "SRBC & CO" },
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
      { name: "McKinsey" },
      { name: "BCG" },
      { name: "Bain" },
      { name: "Accenture" },
      { name: "IBM" },
      { name: "Capgemini" },
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
      { name: "Grant Thornton" },
      { name: "RSM" },
      { name: "Crowe" },
      { name: "Baker Tilly" },
      { name: "Forvis" },
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
      { name: "Google" },
      { name: "Microsoft" },
      { name: "Amazon" },
      { name: "IBM" },
      { name: "Intel" },
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
      { name: "TATA" },
      { name: "Reliance" },
      { name: "HDFC Bank" },
      { name: "Infosys" },
      { name: "Wipro" },
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
      { name: "SBI" },
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
      { name: "Razorpay" },
      { name: "Zomato" },
      { name: "Zerodha" },
      { name: "CRED" },
      { name: "Meesho" },
      { name: "Swiggy" },
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
      { name: "PwC" },
      { name: "EY" },
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
      { name: "World Bank" },
      { name: "United Nations" },
      { name: "UNICEF" },
      { name: "NGO", style: "font-black text-emerald-700 text-xs" },
      { name: "WHO" },
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
      { name: "HDFC Bank" },
      { name: "ICICI Bank" },
      { name: "Axis Bank" },
      { name: "Kotak" },
      { name: "J.P. Morgan" },
      { name: "Goldman Sachs" },
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
  const info = brandMap[comp.name] || {
    name: comp.name,
    short: comp.name.replace(/[^a-zA-Z]/g, '').slice(0, 2).toUpperCase(),
    bg: "bg-[#091F38]",
    textColor: "text-[#C69214] font-bold",
    brandText: comp.name
  };

  return (
    <div className="w-full py-2 px-2 rounded-xl bg-slate-50/90 hover:bg-white border border-slate-200/80 hover:border-blue-300 flex items-center justify-center text-center transition-all hover:shadow-xs min-h-[44px] group overflow-hidden">
      <div className="flex items-center justify-center gap-1.5 w-full">
        {/* Authentic Brand Emblem Badge (100% local, 0ms load, zero broken icons) */}
        <div className={`w-5 h-5 rounded-md ${info.bg} ${info.textColor} font-black text-[9px] flex items-center justify-center shrink-0 tracking-tighter shadow-2xs`}>
          {info.short}
        </div>
        {/* Brand Name Typography */}
        <span className={comp.style || "font-extrabold text-[11px] text-[#091F38] tracking-tight truncate max-w-[82px]"}>
          {info.brandText || info.name}
        </span>
      </div>
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
