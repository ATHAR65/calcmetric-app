"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (honeypot) return;
    setSending(true);

    const subject = encodeURIComponent(`Contact from ${name} via TheMetricApp`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:hello@themetricapp.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-bg-main)] border border-[var(--color-border)] mb-6">
            <span className="text-3xl text-[var(--color-green)]">✓</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
            Opening Your Email Client
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-lg mx-auto mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Your default email app should open with the message pre-filled. If it didn&apos;t,
            you can email us directly at{" "}
            <a href="mailto:hello@themetricapp.com" className="text-[var(--color-accent)] underline">
              hello@themetricapp.com
            </a>.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto mb-8" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Thank you for reaching out, <strong className="text-[var(--color-text-primary)]">{name}</strong>. We typically respond within 24–48 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-[100px] bg-[var(--color-dark)] text-white font-semibold px-6 py-3 hover:bg-[var(--color-accent)] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(232,82,26,0.3)] transition-all"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
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
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-3" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
          Contact Us
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Have a question, suggestion, or found a bug? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)]">
            <h2 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
              Get in Touch
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Email
                </p>
                <a
                  href="mailto:hello@themetricapp.com"
                  className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
                >
                  hello@themetricapp.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Response Time
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>Typically within 24–48 hours</p>
              </div>
            </div>
          </div>
          <div className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-main)] p-6 shadow-[0_1px_4px_rgba(26,20,16,0.04)]">
            <h2 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-2" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
              Before You Write
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
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
            className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 sm:p-8 shadow-[0_1px_4px_rgba(26,20,16,0.04)] space-y-6"
          >
            {/* Honeypot field — hidden from users, catches bots */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-sm text-[var(--color-text-secondary)]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
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
                  className="w-full rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-main)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)] transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm text-[var(--color-text-secondary)]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
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
                  className="w-full rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-main)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)] transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-sm text-[var(--color-text-secondary)]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
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
                className="w-full rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-main)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-text-primary)] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)] transition-all resize-y"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-[var(--color-text-muted)]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                We&apos;ll never share your email with third parties.
              </p>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-[100px] bg-[var(--color-dark)] text-white font-semibold px-6 py-3 hover:bg-[var(--color-accent)] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(232,82,26,0.3)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700 }}
              >
                {sending ? "Opening Email..." : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
