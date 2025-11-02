"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { AnimatedButtonLink } from "@/components/animations";
import { useSound } from "@/lib/sounds/soundManager";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const { play } = useSound();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    play("success");
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    play("click");
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary-slate/95 backdrop-blur-md border-t border-slate-700/50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1"
              >
                <p className="text-sm text-text-secondary">
                  We use cookies to enhance your browsing experience and analyze our traffic.{" "}
                  <Link href="/cookies" className="text-primary-blue hover:underline">
                    Learn more
                  </Link>
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <AnimatedButtonLink onClick={declineCookies}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-600 hover:bg-slate-700"
                  >
                    Decline
                  </Button>
                </AnimatedButtonLink>
                <AnimatedButtonLink onClick={acceptCookies}>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary-blue to-primary-purple"
                  >
                    Accept
                  </Button>
                </AnimatedButtonLink>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
