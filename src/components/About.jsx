import React from 'react';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">About</h2>
          <p className="mt-3 text-white/80">
            I’m a UX/UI designer focused on crafting clear, accessible experiences that scale. My work spans research, systems thinking, and refined visual design—delivered through interactive prototypes and developer‑ready specs.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70 sm:grid-cols-3">
            <li className="rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2">Design Systems</li>
            <li className="rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2">Prototyping</li>
            <li className="rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2">User Research</li>
            <li className="rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2">Accessibility</li>
            <li className="rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2">Interaction</li>
            <li className="rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2">Handoff</li>
          </ul>
        </div>
        <div className="mx-auto w-full max-w-xs">
          {/* Vector-only avatar/graphic */}
          <svg viewBox="0 0 200 220" className="w-full">
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="200" rx="16" fill="#0f172a" stroke="#1e293b" />
            <circle cx="100" cy="80" r="34" fill="url(#grad)" opacity="0.9" />
            <rect x="40" y="130" width="120" height="18" rx="6" fill="#111827" stroke="#1f2937" />
            <rect x="55" y="158" width="90" height="10" rx="4" fill="#334155" />
            <rect x="55" y="174" width="90" height="10" rx="4" fill="#334155" />
          </svg>
        </div>
      </div>
    </section>
  );
}
