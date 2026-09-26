import React from 'react';
import {
  HeartIcon,
  LightBulbIcon,
  ChartBarSquareIcon,
  ArrowsPointingOutIcon,
  SparklesIcon,
  DocumentChartBarIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const points = [
  {
    id: '01',
    title: 'Healthcare-Focused Expertise',
    description:
      'We understand the unique digital marketing requirements of healthcare businesses.',
    icon: HeartIcon,
    theme: 'primary',
  },
  {
    id: '02',
    title: 'Strategy First',
    description:
      'We understand your business, audience, competition and goals before building campaigns.',
    icon: LightBulbIcon,
    theme: 'secondary',
  },
  {
    id: '03',
    title: 'Data-Driven',
    description:
      'We use marketing and website data to understand performance and identify opportunities.',
    icon: ChartBarSquareIcon,
    theme: 'primary',
  },
  {
    id: '04',
    title: 'Full-Funnel Marketing',
    description:
      'From awareness and discovery to enquiries and conversions, we connect the digital journey.',
    icon: ArrowsPointingOutIcon,
    theme: 'secondary',
  },
  {
    id: '05',
    title: 'Creative + Performance',
    description:
      'We combine compelling creative content with measurable marketing campaigns.',
    icon: SparklesIcon,
    theme: 'primary',
  },
  {
    id: '06',
    title: 'Transparent Reporting',
    description:
      'Clear reporting helps you understand campaigns, leads and overall digital performance.',
    icon: DocumentChartBarIcon,
    theme: 'secondary',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative py-4 sm:py-6 bg-white overflow-hidden"
    >
      {/* Ambient glows — same as About / Pain */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            {/* Section tag — matches Services / WhoWeServe / Pain / Solution */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 07</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">WHY TIMELY HEALTH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Timely Health Digital Marketing?
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            Six principles that guide every campaign we build — from day one to long-term growth.
          </p>
        </div>

        {/* 3×2 Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {points.map((p) => {
            const Icon = p.icon;
            const isPrimary = p.theme === 'primary';

            return (
              <motion.div
                key={p.id}
                variants={cardVariants}
                className={`group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${
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
                  className={`absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    isPrimary ? 'bg-primary/8' : 'bg-secondary/8'
                  }`}
                />

                {/* Icon + Number row */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div
                    className={`w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isPrimary
                        ? 'bg-blue-50 text-primary border-blue-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-blue-500/25'
                        : 'bg-emerald-50 text-secondary border-emerald-100 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary group-hover:shadow-lg group-hover:shadow-green-600/25'
                    }`}
                  >
                    <Icon className="w-6 h-6 transition-colors duration-300" />
                  </div>
                  <span
                    className={`text-2xl font-black tracking-wider transition-colors duration-300 ${
                      isPrimary
                        ? 'text-gray-200 group-hover:text-primary/25'
                        : 'text-gray-200 group-hover:text-secondary/25'
                    }`}
                  >
                    {p.id}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h3
                    className={`text-base font-bold text-gray-900 mb-2.5 transition-colors duration-200 ${
                      isPrimary ? 'group-hover:text-primary' : 'group-hover:text-secondary'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA strip — matches Services / Solution pattern */}
        <div className="mt-8 sm:mt-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckBadgeIcon className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Healthcare-only focus</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckBadgeIcon className="w-4 h-4 text-secondary flex-shrink-0" />
              <span>HIPAA &amp; ethics compliant</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
              <CheckBadgeIcon className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Transparent reporting</span>
            </div>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 flex-shrink-0 cursor-pointer ml-0 sm:ml-6"
          >
            <span>Work With Us</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}