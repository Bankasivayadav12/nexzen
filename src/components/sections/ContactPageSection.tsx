"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from "lucide-react";

export default function ContactPageSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    city: "",
    qualification: "",
    interestedIn: "CA - Chartered Accountancy",
    mode: "Offline",
    contactTime: "Morning (09:00 AM - 12:00 PM)",
    message: "",
    consent: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-page" className="py-14 sm:py-16 bg-[#F4F7FB] w-full min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-[10.5px] font-extrabold bg-[#EBF3FF] text-[#0066FF] tracking-wider uppercase border border-blue-200/50 shadow-xs mb-3">
            CONTACT + INQUIRY
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#09101D] tracking-tight">
            Clear contact details, map placeholder and enquiry form
          </h1>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Dark Navy Contact & Map Box */}
          <div className="lg:col-span-5 bg-[#091427] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
                NexZen Asset Private Limited
              </h2>

              {/* Info List */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00C6FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Office Address:</span> Hyderabad Offline Center & Headquarters
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#00C6FF] shrink-0" />
                  <div>
                    <span className="font-bold text-white">Phone:</span> +91 98765 43210 / 080-23456789
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#00C6FF] shrink-0" />
                  <div>
                    <span className="font-bold text-white">Email:</span> admissions@nexzenasset.com
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#00C6FF] shrink-0" />
                  <div>
                    <span className="font-bold text-white">Office Timings:</span> Mon – Sat: 09:00 AM – 06:30 PM
                  </div>
                </div>
              </div>

              {/* Action Buttons Row (3 Pill Buttons) */}
              <div className="flex flex-wrap items-center gap-2.5 pt-6">
                <a
                  href="tel:+919876543210"
                  className="btn-gradient text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md shadow-blue-500/20"
                >
                  Call Us
                </a>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-slate-100 text-[#09101D] text-xs font-bold px-4 py-2.5 rounded-full transition-colors"
                >
                  Get Directions
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white hover:bg-slate-100 text-[#09101D] text-xs font-bold px-4 py-2.5 rounded-full transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Bottom Map Placeholder Box */}
            <div className="bg-gradient-to-br from-[#A6F3E6]/30 via-[#B2EBF2]/20 to-[#DDEBFC]/30 rounded-2xl p-6 border border-white/10 flex items-center justify-center min-h-[160px] text-center">
              <div className="text-xs sm:text-sm font-bold text-slate-300 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00C6FF]" />
                <span>Google Maps Area — Placeholder</span>
              </div>
            </div>

          </div>

          {/* Right Column: Submit Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 my-auto">
                <div className="w-16 h-16 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#09101D]">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting NexZen Asset. Our senior career counsellor will call you back during your preferred time window.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gradient text-white text-xs font-bold px-8 py-3 rounded-full mt-4"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-black text-[#09101D] mb-4">
                  Submit Enquiry
                </h2>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D]"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D]"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter city (e.g. Hyderabad)"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D]"
                    />
                  </div>

                  {/* Current Qualification */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Current Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. B.Com Final Year / M.Com"
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D]"
                    />
                  </div>

                  {/* Interested In */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Interested In *
                    </label>
                    <select
                      value={formData.interestedIn}
                      onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white"
                    >
                      <option>CA - Chartered Accountancy</option>
                      <option>CMA - Cost & Management Accounting</option>
                      <option>ACCA Global Qualification</option>
                      <option>Diploma in IFRS</option>
                      <option>Job-Ready Finance Training</option>
                      <option>B.Com / M.Com Academic Coaching</option>
                      <option>Strategic Corporate Solutions</option>
                    </select>
                  </div>

                  {/* Preferred Mode */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Preferred Mode: Offline / Online Coming Soon
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white"
                    >
                      <option value="Offline">Offline Training Center (Hyderabad)</option>
                      <option value="Online">Online Batches (Coming Soon)</option>
                    </select>
                  </div>

                  {/* Preferred Contact Time */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 mb-1">
                      Preferred Contact Time
                    </label>
                    <select
                      value={formData.contactTime}
                      onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D] bg-white"
                    >
                      <option>Morning (09:00 AM - 12:00 PM)</option>
                      <option>Afternoon (12:00 PM - 04:00 PM)</option>
                      <option>Evening (04:00 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter your specific question or query regarding batch timings, fee structures, or curriculum..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#0066FF] text-[#09101D]"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="consentCheck"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded text-[#0066FF] focus:ring-blue-500"
                  />
                  <label htmlFor="consentCheck" className="text-[11px] text-slate-500 font-medium leading-tight">
                    Consent Checkbox: I agree to be contacted by NexZen Asset counsellors via call, email, or WhatsApp.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-gradient text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 mt-2"
                  >
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
