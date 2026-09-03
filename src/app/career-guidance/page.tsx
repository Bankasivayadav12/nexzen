"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import CareerGuidanceSection from "@/components/sections/CareerGuidanceSection";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";

export default function CareerGuidancePage() {
  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#0066FF] selection:text-white">
      <Navbar onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      <main className="flex-grow">
        <CareerGuidanceSection onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      </main>
      <Footer onOpenEnquireModal={() => setIsEnquireModalOpen(true)} />
      <EnquireModal isOpen={isEnquireModalOpen} onClose={() => setIsEnquireModalOpen(false)} />
    </div>
  );
}
