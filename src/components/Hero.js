import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/20/solid';
import d1 from "../d1.jpg";
import d2 from "../d2.jpg";
import d3 from "../d3.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle grid pattern background overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Calls to Action */}
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Top Pill Badge */}
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 shadow-inner mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-semibold text-blue-200 tracking-wide">
                Healthcare Digital Growth &amp; Patient Acquisition Agency
              </span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
              Healthcare Digital Marketing That Drives{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                Visibility, Leads & Growth
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              We help hospitals, clinics, diagnostic labs, doctors and healthcare businesses build a stronger digital presence, reach the right audience and generate more enquiries through strategic digital marketing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <a
                href="#cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-lg hover:shadow-green-600/25 transition-all duration-200 cursor-pointer group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-gray-200 border border-gray-700 font-semibold text-base px-6 py-4 rounded-xl transition duration-200 cursor-pointer"
              >
                <ChartBarIcon className="w-5 h-5 text-primary" />
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Supporting Service Tags */}
            <p className="text-sm text-gray-400 text-center lg:text-left mb-10 tracking-wide">
              SEO&nbsp;•&nbsp;Social Media&nbsp;•&nbsp;Paid Advertising&nbsp;•&nbsp;Content&nbsp;•&nbsp;Lead Generation
            </p>

            {/* Proof Badges & Star Rating */}
            <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-left">
              {/* Stars & Rating */}
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white">4.9 / 5.0</span>
                  <span className="text-gray-400 block">from 150+ Healthcare Providers</span>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-gray-800"></div>

              {/* Verified Trust Highlight */}
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheckIcon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>
                  <strong className="text-white block font-medium">HIPAA Compliant</strong>
                  Full Patient Privacy Guaranteed
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Dashboard & Floating Stats */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Main Visual Container */}
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-gray-700/60 shadow-2xl bg-slate-800/40 backdrop-blur-sm group">
              <img
                src={d3}
                alt="Healthcare digital marketing specialist analyzing patient growth data"
                className="w-full h-80 sm:h-96 object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Bottom tag inside image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-secondary">
                    Live Performance
                  </span>
                  <p className="text-sm font-bold text-white">
                    Orthopedic &amp; Dental Campaign
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-secondary flex items-center gap-1">
                    <ArrowTrendingUpIcon className="w-3.5 h-3.5" /> +312%
                  </span>
                  <span className="text-[10px] text-gray-400">Monthly Inquiries</span>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Top Right Appointment Growth */}
            <motion.div
              className="absolute -top-5 -right-4 sm:-right-6 bg-slate-900/90 backdrop-blur-md border border-blue-900/60 p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <SparklesIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-medium">New Patient Leads</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-black text-white">1,420+</span>
                  <span className="text-[10px] font-bold text-secondary bg-secondary/15 px-1.5 py-0.5 rounded">
                    +42% MoM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Bottom Left Quality Score */}
            {/* <motion.div
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 z-20"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
            > */}
              {/* <div className="w-9 h-9 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary">
                <CheckCircleIcon className="w-5 h-5 text-secondary" />
              </div> */}
              {/* <div>
                <span className="text-xs font-bold text-white block">Google Premier Partner</span>
                <span className="text-[10px] text-gray-400">Top 3% Marketing Agency</span>
              </div> */}
            </motion.div>

        

        </div>

        {/* Bottom Social Proof Marquee / Partner Ribbon */}
        {/* <div className="mt-16 pt-8 border-t border-gray-800/80">
          <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Empowering Growth For Leading Medical Practices &amp; Healthcare Networks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70">
            <span className="text-sm font-bold tracking-tight text-gray-400 hover:text-white transition">
              ✚ METRO HEALTH NETWORK
            </span>
            <span className="text-sm font-bold tracking-tight text-gray-400 hover:text-white transition">
              ✚ APEX CARDIOLOGY CLINICS
            </span>
            <span className="text-sm font-bold tracking-tight text-gray-400 hover:text-white transition">
              ✚ NOVIS DENTAL GROUP
            </span>
            <span className="text-sm font-bold tracking-tight text-gray-400 hover:text-white transition">
              ✚ SUMMIT PEDIATRICS
            </span>
            <span className="text-sm font-bold tracking-tight text-gray-400 hover:text-white transition">
              ✚ BEACON ORTHOPEDICS
            </span>
          </div>
        </div> */}

      </div>
    </section>
  );
}
