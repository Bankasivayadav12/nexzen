"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import JobReadyTrainingSection from "@/components/sections/JobReadyTrainingSection";
import UpcomingBatchesSection from "@/components/sections/UpcomingBatchesSection";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";

export default function UpcomingBatchesPage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      <main className="flex-grow">
        <JobReadyTrainingSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
        <UpcomingBatchesSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      </main>
      <Footer onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
}
