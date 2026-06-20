"use client";

import { useState } from "react";
import { siteUrl } from "@/lib/siteConfig";

/**
 * Shows a copy-paste embed snippet for a calculator. The snippet pairs the
 * chrome-less /embed/[slug] iframe with a visible attribution anchor, so any
 * site that embeds the widget links back to the canonical calculator page with
 * keyword-rich anchor text (the calculator name). That anchor — not the iframe
 * src — is what earns the backlink.
 */
export default function EmbedThisCalculator({ slug, title }) {
  const [copied, setCopied] = useState(false);

  const embedUrl = `${siteUrl}/embed/${slug}`;
  const calcUrl = `${siteUrl}/calculators/${slug}`;

  const snippet =
    `<iframe src="${embedUrl}" title="${title}" loading="lazy" ` +
    `style="width:100%;max-width:680px;height:720px;border:1px solid #E8E3DA;border-radius:18px;"></iframe>\n` +
    `<p style="font-size:13px;font-family:sans-serif;color:#8A7F72;margin-top:8px;">` +
    `Powered by <a href="${calcUrl}" target="_blank" rel="noopener">${title}</a> at TheMetricApp</p>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — user can still select the text manually */
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
      <h2
        className="text-xl font-bold text-[var(--color-text-primary)] mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Embed This Calculator on Your Site
      </h2>
      <p
        className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Free to use on your blog or website. Copy the snippet below — it adds the
        live {title} plus a small credit link. No sign-up required.
      </p>
      <div className="relative">
        <textarea
          readOnly
          value={snippet}
          onFocus={(e) => e.target.select()}
          rows={4}
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-main)] p-3.5 pr-24 text-xs text-[var(--color-text-secondary)] font-mono resize-none focus:outline-none focus:border-[var(--color-gold)]"
          aria-label={`Embed code for ${title}`}
        />
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-3 right-3 rounded-lg bg-[var(--color-accent)] px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90 transition-opacity"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
