"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production this would send to an API endpoint or email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F0FDFA] mb-6">
            <span className="text-3xl text-[#0D9488]">✓</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Message Sent!
          </h1>
          <p className="text-lg text-[#64748B] max-w-lg mx-auto mb-8">
            Thank you for reaching out, <strong>{name}</strong>. We typically respond within
            24–48 hours. In the meantime, feel free to browse our calculators.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0D9488] text-white font-semibold px-6 py-3 shadow-md shadow-[#0D9488]/20 hover:bg-[#0F766E] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          Contact Us
        </h1>
        <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
          Have a question, suggestion, or found a bug? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-4">
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@wisefinancecalc.com"
                  className="text-sm text-[#0D9488] hover:text-[#0F766E] transition-colors"
                >
                  hello@wisefinancecalc.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-1">
                  Response Time
                </p>
                <p className="text-sm text-[#64748B]">Typically within 24–48 hours</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F0FDFA] p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
              Before You Write
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Our calculators are for estimation purposes only. We are not financial
              advisors, CPAs, or tax attorneys. For personalized financial advice,
              please consult a qualified professional.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#0F172A]"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] hover:border-[#94A3B8] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#0F172A]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] hover:border-[#94A3B8] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#0F172A]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell us what's on your mind..."
                className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#0F172A] placeholder:text-[#94A3B8] hover:border-[#94A3B8] focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/10 transition-all resize-y"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-[#94A3B8]">
                We&apos;ll never share your email with third parties.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0D9488] text-white font-semibold px-6 py-3 shadow-md shadow-[#0D9488]/20 hover:bg-[#0F766E] hover:-translate-y-0.5 transition-all"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
