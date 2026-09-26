import React from 'react';
import {
  EyeIcon,
  UsersIcon,
  EnvelopeOpenIcon,
  PresentationChartLineIcon,
  ArrowRightIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const outcomes = [
  {
    id: '01',
    label: 'More Visibility',
    description: 'Improve your presence across search and social channels.',
    icon: EyeIcon,
    theme: 'primary',
    visual: 'visibility',
  },
  {
    id: '02',
    label: 'More Relevant Traffic',
    description: 'Attract people actively interested in your healthcare services.',
    icon: UsersIcon,
    theme: 'secondary',
    visual: 'traffic',
  },
  {
    id: '03',
    label: 'More Enquiries',
    description: 'Build campaigns designed to generate meaningful leads.',
    icon: EnvelopeOpenIcon,
    theme: 'primary',
    visual: 'enquiries',
  },
  {
    id: '04',
    label: 'Better Performance',
    description: 'Continuously optimize campaigns using real performance data.',
    icon: PresentationChartLineIcon,
    theme: 'secondary',
    visual: 'performance',
  },
];

/* ── Inline mini-visuals ──────────────────────────────── */

function VisibilityVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Radar/spread effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-2 border-dashed border-blue-200/40 animate-pulse" />
        <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-blue-300/50" />
        <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-primary/60" />
      </div>
      {/* Center globe icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center">
        <EyeIcon className="w-8 h-8 text-white" />
      </div>
      {/* Stats indicators */}
      <div className="absolute top-4 left-4 px-2 py-1 rounded-md bg-blue-100 text-[9px] font-bold text-primary">+240%</div>
      <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-blue-100 text-[9px] font-bold text-primary">Rank #1</div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-blue-100 text-[9px] font-bold text-primary">Top 10</div>
    </div>
  );
}

function TrafficVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Flowing traffic lines */}
      <div className="absolute inset-0 flex items-center justify-center gap-1">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-16 rounded-full bg-gradient-to-b from-transparent via-secondary/40 to-transparent"
            style={{
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3 + (i * 0.1)
            }}
          />
        ))}
      </div>
      {/* Center users icon */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg flex items-center justify-center">
        <UsersIcon className="w-8 h-8 text-white" />
      </div>
      {/* Traffic stats */}
      <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-emerald-100 text-[9px] font-bold text-secondary">12.5K</div>
      <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-emerald-100 text-[9px] font-bold text-secondary">+89%</div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-emerald-100 text-[9px] font-bold text-secondary">Daily</div>
    </div>
  );
}

function EnquiriesVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Notification stack */}
      <div className="absolute bottom-4 left-4 right-4 h-24 bg-gradient-to-t from-blue-100 to-transparent rounded-xl flex items-end justify-center p-2 gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-12 rounded-lg bg-white border border-blue-200 shadow-sm flex items-center justify-center"
            style={{
              marginBottom: `${i * 2}px`,
              opacity: 0.6 + (i * 0.1)
            }}
          >
            <EnvelopeOpenIcon className="w-4 h-4 text-primary" />
          </div>
        ))}
      </div>
      {/* Main lead count */}
      <div className="relative z-10 absolute top-4 left-1/2 -translate-x-1/2">
        <div className="w-20 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">847</span>
        </div>
        <div className="text-center mt-1">
          <span className="text-[9px] font-bold text-primary">New Leads</span>
        </div>
      </div>
    </div>
  );
}

function PerformanceVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Dashboard cards */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 p-4">
        <div className="w-16 h-20 rounded-xl bg-white border border-emerald-200 shadow-sm flex flex-col items-center justify-center p-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mb-1">
            <span className="text-[10px] font-bold text-secondary">ROI</span>
          </div>
          <span className="text-xs font-bold text-gray-800">3.8x</span>
        </div>
        <div className="w-16 h-20 rounded-xl bg-white border border-blue-200 shadow-sm flex flex-col items-center justify-center p-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-1">
            <span className="text-[10px] font-bold text-primary">CTR</span>
          </div>
          <span className="text-xs font-bold text-gray-800">4.2%</span>
        </div>
        <div className="w-16 h-20 rounded-xl bg-white border border-violet-200 shadow-sm flex flex-col items-center justify-center p-2">
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center mb-1">
            <span className="text-[10px] font-bold text-violet-600">CVR</span>
          </div>
          <span className="text-xs font-bold text-gray-800">12%</span>
        </div>
      </div>
      {/* Trend indicator */}
      <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-emerald-100 text-[9px] font-bold text-secondary flex items-center gap-1">
        <span>↑</span>
        <span>+67%</span>
      </div>
    </div>
  );
}

const visualMap = {
  visibility: VisibilityVisual,
  traffic: TrafficVisual,
  enquiries: EnquiriesVisual,
  performance: PerformanceVisual,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Results() {
  return (
    <section
      id="results"
      className="relative py-4 sm:py-6 bg-gradient-to-b from-white via-slate-50/40 to-white overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 09</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">RESULTS / METRICS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Marketing That Is Built{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                to Be Measured
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            We focus on meaningful marketing metrics that help you understand visibility, traffic, leads and campaign performance.
          </p>
        </div>

        {/* 4 Outcome Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {outcomes.map((item) => {
            const Icon = item.icon;
            const isPrimary = item.theme === 'primary';
            const Visual = visualMap[item.visual];

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className={`group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden ${
                  isPrimary ? 'hover:border-blue-200' : 'hover:border-emerald-200'
                }`}
              >
                {/* Top gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isPrimary
                      ? 'bg-gradient-to-r from-primary via-blue-400 to-primary'
                      : 'bg-gradient-to-r from-secondary via-emerald-400 to-secondary'
                  }`}
                />

                {/* Soft corner glow on hover */}
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    isPrimary ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}
                />

                {/* Icon + number row */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isPrimary
                        ? 'bg-blue-50 text-primary border-blue-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-blue-500/25'
                        : 'bg-emerald-50 text-secondary border-emerald-100 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary group-hover:shadow-lg group-hover:shadow-green-600/25'
                    }`}
                  >
                    <Icon className="w-5 h-5 transition-colors duration-300" />
                  </div>
                  <span className="text-2xl font-black text-gray-200 group-hover:text-gray-300 transition-colors tabular-nums">
                    {item.id}
                  </span>
                </div>

                {/* Label */}
                <h3
                  className={`text-base font-bold text-gray-900 mb-2 tracking-tight transition-colors duration-200 ${
                    isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary'
                  }`}
                >
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 relative z-10">
                  {item.description}
                </p>

                {/* Inline visual */}
                <div className="mt-auto">
                  <Visual />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-6 flex items-start gap-2.5 bg-slate-50 border border-gray-100 rounded-xl px-5 py-3"
        >
          <InformationCircleIcon className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-400 leading-relaxed">
            <span className="font-semibold text-gray-500">Disclaimer:</span>{' '}
            Results vary based on industry, location, budget, competition and campaign strategy.
          </p>
        </motion.div>

        {/* Bottom CTA strip — matches Solutions / WhyChooseUs pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/15 px-6 py-5"
        >
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-xl text-center sm:text-left">
            <span className="font-bold text-gray-900">Ready to see results?</span>{' '}
            Let's build a strategy focused on the metrics that matter to your business.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-green-600/20 transition-all duration-200 flex-shrink-0 cursor-pointer group"
          >
            <span>Get a Free Consultation</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
