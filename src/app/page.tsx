"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import FiveDoorsSection from "@/components/sections/FiveDoorsSection";
import UpcomingBatchesSection from "@/components/sections/UpcomingBatchesSection";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";

export default function Home() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

      {/* Home Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

        {/* 2. Five Doors Interactive Section */}
        <FiveDoorsSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

        {/* 3. Upcoming Batches Section */}
        <UpcomingBatchesSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />

      {/* Interactive Counselling / Enquiry Modal */}
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
}
