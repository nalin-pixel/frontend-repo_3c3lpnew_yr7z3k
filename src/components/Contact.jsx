import React from 'react';
import { Mail, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 bg-slate-950/60 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">Let’s collaborate</h3>
            <p className="mt-1 text-white/70">Available for product design, audits, and design system work.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 transition hover:bg-amber-200">
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white transition hover:border-white/40 hover:bg-white/5">
              <Download className="h-4 w-4" /> Download resume
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Your Name — UX/UI Designer</p>
      </div>
    </section>
  );
}
