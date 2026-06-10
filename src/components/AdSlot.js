"use client";

import { useEffect, useRef, useState } from "react";

const AD_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX"; // Replace with your AdSense publisher ID

const adFormats = {
  top: { slot: "TOP_AD_SLOT_ID", format: "auto", responsive: true },
  bottom: { slot: "BOTTOM_AD_SLOT_ID", format: "auto", responsive: true },
  sidebar: { slot: "SIDEBAR_AD_SLOT_ID", format: "rectangle", responsive: false },
  "in-article": { slot: "IN_ARTICLE_AD_SLOT_ID", format: "fluid", responsive: true },
};

export default function AdSlot({ position = "top" }) {
  const adRef = useRef(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const config = adFormats[position] || adFormats.top;

  useEffect(() => {
    if (adLoaded) return;

    const consent = localStorage.getItem("themetricapp-cookie-consent");
    if (consent !== "accepted") return;

    if (AD_CLIENT.includes("XXXX")) return;

    try {
      if (adRef.current && adRef.current.childNodes.length === 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setAdLoaded(true);
      }
    } catch {
      // AdSense not loaded yet
    }
  }, [adLoaded]);

  if (AD_CLIENT.includes("XXXX")) {
    return (
      <div
        className="adsense-slot my-6 dark:bg-[#23201C] dark:border-[#3A3530] dark:text-[#8A7F72]"
        aria-hidden="true"
        id={`adsense-slot-${position}`}
      >
        <span className="select-none opacity-60 text-xs tracking-widest uppercase">
          Ad Space — Sponsored
        </span>
      </div>
    );
  }

  return (
    <div className="my-6" id={`adsense-slot-${position}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={config.slot}
        data-ad-format={config.format}
        data-full-width-responsive={config.responsive ? "true" : "false"}
      />
    </div>
  );
}
