import React from 'react';
import {
  LightBulbIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowPathIcon,
  ArrowRightIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    label: 'Strategy',
    desc: 'Audience & goals',
    icon: LightBulbIcon,
    theme: 'primary',
    bg: 'bg-blue-50/80 text-primary border-blue-100',
    ring: 'group-hover:border-primary',
  },
  {
    step: '02',
    label: 'Content',
    desc: 'Medical messaging',
    icon: PencilSquareIcon,
    theme: 'violet',
    bg: 'bg-violet-50/80 text-violet-600 border-violet-100',
    ring: 'group-hover:border-violet-500',
  },
  {
    step: '03',
    label: 'SEO',
    desc: 'Rankings & Maps',
    icon: MagnifyingGlassIcon,
    theme: 'secondary',
    bg: 'bg-emerald-50/80 text-secondary border-emerald-100',
    ring: 'group-hover:border-secondary',
  },
  {
    step: '04',
    label: 'Paid Advertising',
    desc: 'Targeted reach',
    icon: CursorArrowRaysIcon,
    theme: 'amber',
    bg: 'bg-amber-50/80 text-amber-600 border-amber-100',
    ring: 'group-hover:border-amber-500',
  },
  {
    step: '05',
    label: 'Lead Generation',
    desc: 'High-intent leads',
    icon: UserGroupIcon,
    theme: 'rose',
    bg: 'bg-rose-50/80 text-rose-600 border-rose-100',
    ring: 'group-hover:border-rose-500',
  },
  {
    step: '06',
    label: 'Analytics',
    desc: 'Tracked metrics',
    icon: ChartBarIcon,
    theme: 'slate',
    bg: 'bg-slate-100 text-slate-700 border-slate-200',
    ring: 'group-hover:border-slate-500',
  },
  {
    step: '07',
    label: 'Optimization',
    desc: 'Compounding ROI',
    icon: ArrowPathIcon,
    theme: 'primary',
    bg: 'bg-primary/10 text-primary border-primary/20',
    ring: 'group-hover:border-primary',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Solution() {
  return (
    <section id="solution" className="relative py-4 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            {/* Section tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 06</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">OUR SOLUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              One Strategy.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Multiple Digital Channels.
              </span>
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
              We connect your digital marketing efforts into one focused growth strategy.
            </p>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-primary">
              <LinkIcon className="w-3.5 h-3.5" />
              <span>Fully Connected Growth Chain</span>
            </div> */}
          </div>
        </div>

        {/* ── DESKTOP CHAIN PIPELINE (lg & above) ──────────────── */}
        <div className="hidden lg:block relative mb-8 sm:mb-10">

          {/* Continuous Glowing Chain Track behind cards */}
          <div className="absolute top-1/2 left-4 right-4 h-1.5 -translate-y-1/2 z-0 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-secondary opacity-30" />
          <div
            className="absolute top-1/2 left-4 right-4 h-1 -translate-y-1/2 z-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(to right, #2563EB 0, #2563EB 8px, transparent 8px, transparent 16px)',
              opacity: 0.35,
            }}
          />

          <motion.div
            className="grid grid-cols-7 gap-3 items-stretch relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative group flex flex-col"
                >
                  {/* Left Chain Docking Node */}
                  {idx > 0 && (
                    <div className="absolute -left-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border-2 border-primary/40 shadow-sm flex items-center justify-center pointer-events-none group-hover:scale-110 group-hover:border-primary transition-all duration-200">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                  )}

                  {/* Right Chain Link Connector (connecting to next node) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border-2 border-secondary/40 shadow-sm flex items-center justify-center pointer-events-none group-hover:scale-110 group-hover:border-secondary transition-all duration-200">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                  )}

                  {/* Main Node Card */}
                  <div
                    className={`h-full flex flex-col items-center text-center p-4 pt-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 ${step.ring} overflow-hidden`}
                  >
                    {/* Node Icon */}
                    <div className={`w-12 h-12 rounded-xl ${step.bg} border flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xs font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors leading-tight">
                      {step.label}
                    </h3>

                    {/* Micro Description */}
                    <p className="text-[11px] text-gray-500 mt-auto leading-tight">
                      {step.desc}
                    </p>

                    {/* Bottom connector hint */}
                    <div className="mt-3 w-8 h-1 rounded-full bg-slate-100 group-hover:bg-primary/30 transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* ── MOBILE & TABLET VERTICAL CHAIN (hidden on lg+) ───── */}
        <div className="lg:hidden relative mb-8 sm:mb-10 pl-6 sm:pl-10">

          {/* Vertical Chain Track */}
          <div className="absolute left-6 sm:left-10 top-6 bottom-6 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary via-emerald-400 to-secondary" />

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="relative flex items-center gap-4 group"
                >
                  {/* Chain Node Ring on the Vertical Track */}
                  <div className="absolute -left-6 sm:-left-10 w-6 h-6 -translate-x-1/2 rounded-full bg-white border-2 border-primary shadow-md flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-200">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>

                  {/* Node Card */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl ${step.bg} border flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-bold text-gray-900 truncate">
                        {step.label}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {step.desc}
                      </p>
                    </div>

                    {idx < steps.length - 1 && (
                      <span className="text-xs text-gray-300 font-bold hidden sm:block">
                        ↓
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Supporting copy strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/15 px-8 py-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white border border-primary/20 shadow-sm flex items-center justify-center text-primary flex-shrink-0">
              <LinkIcon className="w-4 h-4" />
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left">
              <span className="font-bold text-gray-900">Every campaign is built around</span>{' '}
              your business objectives, target audience, location and growth goals.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-green-600/20 transition-all duration-200 flex-shrink-0 cursor-pointer"
          >
            <span>Get a Free Consultation</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}