import React from 'react';
import {
  ClipboardDocumentListIcon,
  MapIcon,
  SwatchIcon,
  RocketLaunchIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    phase: 'DISCOVER',
    title: 'Discover',
    description:
      'We understand your business, services, target audience, market and goals.',
    icon: ClipboardDocumentListIcon,
    theme: 'primary',
    visual: 'discover',
  },
  {
    step: '02',
    phase: 'STRATEGIZE',
    title: 'Strategize',
    description:
      'We develop a customized digital marketing strategy based on your objectives.',
    icon: MapIcon,
    theme: 'secondary',
    visual: 'strategize',
  },
  {
    step: '03',
    phase: 'CREATE',
    title: 'Create',
    description:
      'We develop content, creatives, campaigns and conversion-focused assets.',
    icon: SwatchIcon,
    theme: 'primary',
    visual: 'create',
  },
  {
    step: '04',
    phase: 'LAUNCH',
    title: 'Launch',
    description:
      'We launch and manage SEO, social media and paid marketing campaigns.',
    icon: RocketLaunchIcon,
    theme: 'secondary',
    visual: 'launch',
  },
  {
    step: '05',
    phase: 'OPTIMIZE',
    title: 'Optimize',
    description:
      'We monitor performance, identify opportunities and continuously improve campaigns.',
    icon: AdjustmentsHorizontalIcon,
    theme: 'primary',
    visual: 'optimize',
  },
];

/* ── Inline visuals ─────────────────────────────────────── */

function DiscoverVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Document analysis */}
      <div className="absolute top-4 left-4 w-10 h-12 bg-white border border-blue-200 rounded-lg shadow-sm flex items-center justify-center">
        <ClipboardDocumentListIcon className="w-5 h-5 text-primary" />
      </div>
      <div className="absolute top-6 right-6 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
        <MagnifyingGlassIcon className="w-4 h-4 text-primary" />
      </div>
      {/* Search lines */}
      <div className="absolute bottom-4 left-4 right-4 h-8 flex items-center gap-2">
        <div className="flex-1 h-2 bg-blue-100 rounded-full" />
        <div className="flex-1 h-2 bg-blue-200 rounded-full" />
        <div className="flex-1 h-2 bg-primary/30 rounded-full" />
      </div>
      {/* Connection dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-dashed border-blue-300" />
    </div>
  );
}

function StrategizeVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Map/grid pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }} />
      {/* Strategy nodes */}
      <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-emerald-100 border-2 border-secondary flex items-center justify-center">
        <MapIcon className="w-4 h-4 text-secondary" />
      </div>
      <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-emerald-100 border-2 border-secondary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-secondary" />
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-100 border-2 border-secondary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-secondary" />
      </div>
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <line x1="30%" y1="25%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="1" opacity="0.4" />
        <line x1="70%" y1="25%" x2="50%" y2="50%" stroke="#10b981" strokeWidth="1" opacity="0.4" />
      </svg>
      {/* Center target */}
      <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-md flex items-center justify-center">
        <span className="text-white font-bold text-xs">TARGET</span>
      </div>
    </div>
  );
}

function CreateVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Creative tools */}
      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center">
        <SwatchIcon className="w-5 h-5 text-violet-600" />
      </div>
      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center">
        <div className="w-4 h-4 rounded bg-blue-500" />
      </div>
      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center">
        <div className="w-4 h-4 rounded bg-amber-500" />
      </div>
      {/* Center creative composition */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-md flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-4 h-4 rounded bg-primary/60" />
          <div className="w-4 h-4 rounded bg-secondary/60" />
          <div className="w-4 h-4 rounded bg-violet-400" />
          <div className="w-4 h-4 rounded bg-amber-400" />
        </div>
      </div>
      {/* Floating elements */}
      <div className="absolute bottom-4 right-4 px-2 py-1 rounded-lg bg-violet-100 text-[9px] font-bold text-violet-600">
        Design
      </div>
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Launch platform */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-gradient-to-t from-gray-200 to-gray-100 rounded-t-lg" />
      {/* Rocket trajectory */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <path d="M 50 120 Q 100 80 120 40" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5" />
      </svg>
      {/* Rocket icon */}
      <div className="relative z-10 absolute top-8 left-1/2 -translate-x-1/2">
        <div className="w-12 h-16 rounded-t-2xl rounded-b-lg bg-gradient-to-b from-emerald-500 to-emerald-600 shadow-lg flex items-center justify-center">
          <RocketLaunchIcon className="w-6 h-6 text-white" />
        </div>
        {/* Rocket flames */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-full blur-sm" />
      </div>
      {/* Launch indicators */}
      <div className="absolute top-4 left-4 px-2 py-1 rounded-md bg-emerald-100 text-[9px] font-bold text-secondary">LIVE</div>
      <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-emerald-100 text-[9px] font-bold text-secondary">GO</div>
    </div>
  );
}

function OptimizeVisual() {
  return (
    <div className="relative w-full h-40 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
      {/* Gear/cycle animation hint */}
      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-blue-100 border-2 border-primary flex items-center justify-center">
        <AdjustmentsHorizontalIcon className="w-5 h-5 text-primary" />
      </div>
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-100 border-2 border-primary flex items-center justify-center">
        <ArrowPathIcon className="w-5 h-5 text-primary" />
      </div>
      {/* Optimization cycle */}
      <div className="relative z-10 w-16 h-16 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-xs">A/B</span>
        </div>
      </div>
      {/* Performance indicators */}
      <div className="absolute bottom-4 left-4 px-2 py-1 rounded-md bg-blue-100 text-[9px] font-bold text-primary">Test</div>
      <div className="absolute bottom-4 right-4 px-2 py-1 rounded-md bg-blue-100 text-[9px] font-bold text-primary">Refine</div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-blue-100 text-[9px] font-bold text-primary">Scale</div>
    </div>
  );
}

const visualMap = {
  discover: DiscoverVisual,
  strategize: StrategizeVisual,
  create: CreateVisual,
  launch: LaunchVisual,
  optimize: OptimizeVisual,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative py-4 sm:py-6 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 08</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Our Simple{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                5-Step Process
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            A clear, structured approach that takes your healthcare business from insight to measurable growth.
          </p>
        </div>

        {/* 5 Step Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            const isPrimary = step.theme === 'primary';
            const Visual = visualMap[step.visual];

            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
              >
                {/* Soft top glow on hover */}
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    isPrimary ? 'bg-primary/10' : 'bg-secondary/10'
                  }`}
                />

                {/* Phase chip + step number */}
                <div className="flex items-center justify-between mb-5 relative z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md ${
                      isPrimary
                        ? 'bg-blue-50 text-primary border border-blue-100'
                        : 'bg-emerald-50 text-secondary border border-emerald-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {step.phase}
                  </span>
                  <span className="text-2xl font-black text-gray-200 group-hover:text-gray-300 transition-colors tabular-nums">
                    {step.step}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold text-gray-900 mb-2 transition-colors tracking-tight ${
                    isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary'
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6 relative z-10">
                  {step.description}
                </p>

                {/* Inline visual */}
                <div className="mt-auto">
                  <Visual />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Callout Bar */}
        <div className="relative mt-8 sm:mt-10 p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-emerald-950 border border-blue-800/40 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden">
          {/* Decorative glows */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left max-w-2xl">
            <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
              <span className="text-secondary font-bold text-xs tracking-wider">— 08.1</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Next Step</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
              Want a customized strategy for your healthcare business?
            </h4>
            <p className="text-sm text-gray-300 mt-2.5 leading-relaxed">
              Schedule a free consultation to see how this 5-step process applies to your goals.
            </p>
          </div>

          <a
            href="#cta"
            className="relative z-10 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all duration-200 flex-shrink-0 cursor-pointer group"
          >
            <span>Get a Free Consultation</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}