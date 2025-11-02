"use client";

import { COMPANY, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SoundLink } from "@/components/animations";

export function Footer() {
  return (
    <footer className="bg-primary-slate border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SoundLink
                    href={link.href}
                    className="text-text-secondary hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </SoundLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.services.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SoundLink
                    href={link.href}
                    className="text-text-secondary hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </SoundLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <SoundLink
                    href={link.href}
                    className="text-text-secondary hover:text-primary-blue transition-colors text-sm"
                  >
                    {link.label}
                  </SoundLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Connect</h3>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
              >
                <SoundLink
                  href={SOCIAL_LINKS.email}
                  external
                  className="text-text-secondary hover:text-primary-blue transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  {COMPANY.email}
                </SoundLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                <SoundLink
                  href={SOCIAL_LINKS.phone}
                  external
                  className="text-text-secondary hover:text-primary-blue transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY.phone}
                </SoundLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-text-secondary text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {COMPANY.location}
                </p>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-tertiary text-sm">
              © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-xs text-text-tertiary">
                {COMPANY.tagline}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
