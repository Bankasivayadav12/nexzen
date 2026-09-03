"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import JobsPageSection from "@/components/sections/JobsPageSection";
import JobApplyFlowSection from "@/components/sections/JobApplyFlowSection";
import HiringPartnersSection from "@/components/sections/HiringPartnersSection";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";

export default function JobsPage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

      {/* Main Jobs Content */}
      <main className="flex-grow">
        <JobsPageSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
        <JobApplyFlowSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
        <HiringPartnersSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

      {/* Interactive Enquiry Modal */}
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
}
