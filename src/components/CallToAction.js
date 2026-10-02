import React from 'react';
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  BeakerIcon,
  UserCircleIcon,
  RocketLaunchIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';

const healthcareTypes = [
  { label: 'Hospitals', icon: BuildingOffice2Icon },
  { label: 'Clinics', icon: BuildingStorefrontIcon },
  { label: 'Diagnostic Labs', icon: BeakerIcon },
  { label: 'Doctors', icon: UserCircleIcon },
  { label: 'Healthcare Startups', icon: RocketLaunchIcon },
];

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative py-8 sm:py-10 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden"
    >
      {/* Decorative glow orbs */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Eyebrow tag */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 shadow-inner mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="text-xs font-semibold text-blue-200 tracking-wide uppercase">
            Final CTA
          </span>
        </div> */}

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          Ready to Grow Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
            Healthcare Business Online?
          </span>
        </h2>

        {/* Body */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-3 leading-relaxed">
          Let's build a digital marketing strategy around your healthcare business goals.
        </p>
        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          Whether you're a hospital, clinic, diagnostic lab, doctor or healthcare startup, our team can help you build visibility, reach the right audience and generate more enquiries.
        </p>

        {/* Healthcare type pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {healthcareTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.label}
                className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/60 px-4 py-2 rounded-full text-xs font-semibold text-gray-300"
              >
                <Icon className="w-4 h-4 text-secondary flex-shrink-0" />
                {type.label}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-green-600/30 transition-all duration-200 cursor-pointer group"
          >
            <span>Book a Free Consultation</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-gray-200 border border-slate-600 font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200 cursor-pointer group"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span>Talk to Our Team</span>
          </a>
        </div>

        {/* Bottom trust note */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-secondary" />
            HIPAA &amp; Ethics Compliant
          </span>
          <span>•</span>
          <span>No Commitment Required</span>
          <span>•</span>
          <span>Healthcare-Focused Team</span>
        </div>

      </div>
    </section>
  );
}
