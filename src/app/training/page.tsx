"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import JobReadyTrainingSection from "@/components/sections/JobReadyTrainingSection";
import UpcomingBatchesSection from "@/components/sections/UpcomingBatchesSection";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";

export default function TrainingPage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

      {/* Main Job-Ready Training Content */}
      <main className="flex-grow">
        <JobReadyTrainingSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
        
      </main>

      {/* Footer */}
      <Footer onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

      {/* Interactive Enquiry Modal */}
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
}
