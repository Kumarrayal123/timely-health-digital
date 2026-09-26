import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import {
  ArrowTrendingDownIcon,
  EyeSlashIcon,
  MegaphoneIcon,
  BanknotesIcon,
  FunnelIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const painPoints = [
  {
    title: 'Low Website Traffic',
    desc: 'Your website isn\'t attracting enough relevant visitors.',
    icon: ArrowTrendingDownIcon,
  },
  {
    title: 'Poor Google Visibility',
    desc: 'Your business isn\'t appearing where your audience is searching.',
    icon: EyeSlashIcon,
  },
  {
    title: 'Inconsistent Social Media',
    desc: 'Your brand lacks a consistent and strategic online presence.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Expensive Advertising',
    desc: 'Your campaigns generate clicks but not enough meaningful enquiries.',
    icon: BanknotesIcon,
  },
  {
    title: 'Low-Quality Leads',
    desc: 'You\'re getting enquiries that don\'t match your target audience.',
    icon: FunnelIcon,
  },
  {
    title: 'No Clear Strategy',
    desc: 'Different marketing channels are running without one connected growth plan.',
    icon: ExclamationTriangleIcon,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Pain() {
  return (
    <section className="relative py-4 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden">
      {/* Subtle ambient lighting — matches About.js */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Headline & Growth Blockers */}
          <div className="flex flex-col justify-center">

            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 05</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                SOUND FAMILIAR?
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Is Your Healthcare Business{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Being Found Online?
              </span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-lg">
              Your potential customers are already searching online. The question is whether they can find you when they're ready to take action.
            </p>

            {/* Common Growth Blockers Pill */}
            <div className="flex items-center gap-3.5 bg-slate-50/90 border border-gray-200/70 rounded-2xl p-3.5 max-w-md shadow-sm mb-5">
              <div className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
                <span className="text-lg font-black leading-none">6</span>
                <span className="text-[8px] uppercase tracking-wider font-extrabold text-primary/70 mt-0.5">Issues</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-gray-900 leading-tight">
                  Common Growth Blockers
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">
                  Do any of these sound like challenges your business faces?
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#cta"
                className="inline-flex items-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-green-600/25 transition-all duration-200 cursor-pointer group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT — Pain point cards */}
          <motion.div
            className="flex flex-col gap-3.5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {painPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative flex items-center justify-between gap-4 bg-white hover:bg-slate-50/80 border border-gray-100 hover:border-primary/20 rounded-2xl p-4 sm:p-4.5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default overflow-hidden"
                >
                  {/* Subtle hover gradient accent on left border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l" />

                  <div className="flex items-center gap-3.5 min-w-0">
                    {/* Icon container */}
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-primary/20 group-hover:bg-primary/5 flex items-center justify-center text-slate-500 group-hover:text-primary transition-all duration-300 flex-shrink-0 shadow-xs">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Text content */}
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                        {point.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                        {point.desc}
                      </p>
                    </div>
                  </div>

                  {/* Number pill */}
                  <span className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 group-hover:text-primary group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-200 tabular-nums">
                    0{idx + 1}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}