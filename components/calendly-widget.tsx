"use client";

import { useEffect } from "react";
import Script from "next/script";

export function CalendlyWidget() {
  useEffect(() => {
    // Add Calendly CSS dynamically
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);

  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/umangthakkar005/30min",
            text: "Schedule a call",
            color: "#3b82f6",
            textColor: "#ffffff",
            branding: true,
          });
        }
      }}
    />
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: any;
  }
}
