"use client";

import React from "react";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

interface HeroSectionProps {
  onOpenEnquireModal: () => void;
}

export default function HeroSection({ onOpenEnquireModal }: HeroSectionProps) {
  return (
    <section className="relative py-6 lg:py-10 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Headline, Buttons & Stat Cards */}
          <div className="lg:col-span-6 flex">
            <HeroContent onOpenEnquireModal={onOpenEnquireModal} />
          </div>

          {/* Right Column: Interactive Professional Learning Space */}
          <div className="lg:col-span-6 flex">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
