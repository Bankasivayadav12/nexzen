"use client";

import React, { useState } from "react";
import { X, CheckCircle, Send, Phone, Mail, User, BookOpen } from "lucide-react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "CA - Chartered Accountancy",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Counselling Enquiry Modal",
          ...formData,
        }),
      });
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#09101D]">
              Enquiry Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-xs mx-auto">
              Thank you for reaching out to NEXZEN ASSET. Our senior academic counselor will call you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="btn-gradient text-white text-sm font-bold px-8 py-3 rounded-full mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-block text-xs font-bold text-[#0066FF] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Fast Response Guaranteed
              </span>
              <h3 className="text-2xl font-extrabold text-[#09101D]">
                Talk to a Career Counsellor
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details below to receive program guides, fee structures & batch schedules.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20 text-[#09101D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20 text-[#09101D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20 text-[#09101D]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Program of Interest
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20 text-[#09101D] bg-white appearance-none"
                  >
                    <option>CA - Chartered Accountancy</option>
                    <option>CMA - Cost & Management Accounting</option>
                    <option>ACCA - Global Accounting</option>
                    <option>IFRS Certification</option>
                    <option>Job-Ready Finance Training</option>
                    <option>Academic Verticals & Degree</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Query (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ask about batch timings, fees, or offline training center locations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-500/20 text-[#09101D]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gradient text-white font-bold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 mt-2 disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Submitting..." : "Submit Enquiry"}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
