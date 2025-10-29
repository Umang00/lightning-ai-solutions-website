"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-slate-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-lg bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Lightning AI Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a href="https://calendly.com/umangthakkar005/30min" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-opacity">
                Start Your Project
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 space-y-3 border-t border-slate-700/50">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-text-secondary hover:text-text-primary transition-colors text-sm font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="https://calendly.com/umangthakkar005/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full bg-gradient-to-r from-primary-blue to-primary-purple hover:opacity-90 transition-opacity">
                Start Your Project
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
