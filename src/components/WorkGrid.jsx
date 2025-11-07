import React from 'react';
import { Figma, Layout, PenTool } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    role: 'UX Research • Design System • Prototyping',
    vector: (
      <svg viewBox="0 0 200 140" className="h-28 w-40">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
        <rect x="10" y="20" width="180" height="100" rx="12" fill="#0f172a" stroke="#1e293b" />
        <rect x="20" y="30" width="60" height="10" rx="3" fill="url(#g1)" />
        <rect x="20" y="46" width="40" height="8" rx="3" fill="#334155" />
        <rect x="20" y="60" width="160" height="50" rx="8" fill="#111827" stroke="#1f2937" />
        <circle cx="120" cy="85" r="16" fill="#22d3ee" opacity="0.8" />
        <circle cx="150" cy="85" r="10" fill="#818cf8" opacity="0.8" />
        <polyline points="25,100 70,80 110,90 150,70 175,85" fill="none" stroke="#34d399" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'E‑commerce App',
    role: 'Information Architecture • UI Kit • Motion',
    vector: (
      <svg viewBox="0 0 200 140" className="h-28 w-40">
        <rect x="20" y="20" width="160" height="100" rx="12" fill="#0f172a" stroke="#1e293b" />
        <rect x="30" y="30" width="80" height="10" rx="3" fill="#f59e0b" />
        <rect x="30" y="46" width="60" height="8" rx="3" fill="#334155" />
        <rect x="30" y="60" width="60" height="40" rx="8" fill="#111827" stroke="#1f2937" />
        <rect x="100" y="60" width="70" height="40" rx="8" fill="#111827" stroke="#1f2937" />
        <circle cx="135" cy="80" r="14" fill="#f59e0b" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: 'Healthcare Portal',
    role: 'Journey Mapping • Accessibility • Prototyping',
    vector: (
      <svg viewBox="0 0 200 140" className="h-28 w-40">
        <rect x="16" y="18" width="168" height="104" rx="12" fill="#0f172a" stroke="#1e293b" />
        <rect x="26" y="28" width="40" height="20" rx="6" fill="#10b981" />
        <rect x="72" y="28" width="40" height="20" rx="6" fill="#06b6d4" />
        <rect x="118" y="28" width="40" height="20" rx="6" fill="#6366f1" />
        <rect x="26" y="56" width="132" height="50" rx="8" fill="#0b1220" stroke="#1f2937" />
        <path d="M40 80 h20 l5-10 8 20 6-12 h20" fill="none" stroke="#10b981" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Selected work</h2>
          <p className="mt-2 text-white/70">Case studies that showcase research, flows, systems, and polished UI.</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
            <Figma className="h-3.5 w-3.5" /> Figma
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
            <PenTool className="h-3.5 w-3.5" /> Prototyping
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
            <Layout className="h-3.5 w-3.5" /> Systems
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition hover:bg-slate-900/70">
            <div className="mb-4 flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/60 p-4">
              {p.vector}
            </div>
            <h3 className="font-medium text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-white/70">{p.role}</p>
            <button className="mt-4 inline-flex items-center text-sm font-medium text-amber-300 opacity-0 transition group-hover:opacity-100">
              View case study →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
