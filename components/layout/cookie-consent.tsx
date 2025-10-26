"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary-slate/95 backdrop-blur-md border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-text-secondary">
              We use cookies to enhance your browsing experience and analyze our traffic.{" "}
              <Link href="/cookies" className="text-primary-blue hover:underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-slate-600 hover:bg-slate-700"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-gradient-to-r from-primary-blue to-primary-purple"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
