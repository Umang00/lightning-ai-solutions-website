'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-purple text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary-blue/50"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-slate text-text-primary font-semibold rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-text-tertiary text-sm mb-4">
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services" className="text-primary-blue hover:underline">Services</Link>
            <Link href="/projects" className="text-primary-blue hover:underline">Projects</Link>
            <Link href="/about" className="text-primary-blue hover:underline">About</Link>
            <Link href="/contact" className="text-primary-blue hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
