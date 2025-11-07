import React from 'react';
import { Search, Workflow, Palette, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Research, interviews, analytics, and problem framing to align on goals.'
  },
  {
    icon: Workflow,
    title: 'Structure',
    description: 'Information architecture, user flows, and wireframes to define pathways.'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Design systems, components, and high‑fidelity UI with accessibility baked in.'
  },
  {
    icon: Rocket,
    title: 'Deliver',
    description: 'Interactive prototypes, specs, and collaboration for smooth handoff.'
  }
];

export default function Process() {
  return (
    <section className="bg-slate-950/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Process</h2>
        <p className="mt-2 max-w-2xl text-white/70">A pragmatic approach that balances user needs with business goals—validated through research and iteration.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-5">
              <div className="mb-3 inline-flex rounded-lg bg-slate-800/60 p-2.5"><Icon className="h-5 w-5 text-amber-300" /></div>
              <h3 className="font-medium text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
