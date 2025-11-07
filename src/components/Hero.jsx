import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient to improve text readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Star className="h-3.5 w-3.5 text-amber-300" />
          <span className="tracking-wide text-amber-100">UX/UI Portfolio</span>
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Designing intuitive, delightful interfaces
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          I craft end‑to‑end product experiences—from discovery and user flows to polished, production‑ready UI. Explore selected case studies below.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 transition hover:bg-amber-200"
          >
            View case studies <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white transition hover:border-white/40 hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
