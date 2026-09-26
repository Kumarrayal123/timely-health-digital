import React, { useRef } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Beacon Spine & Orthopedic Institute',
    specialty: 'Orthopedics & Spine Care',
    metric: '+310% Patient Leads',
    timeline: '90-Day Campaign',
    description: 'Executed high-intent local SEO, Google Search campaigns, and medical landing pages that dominated regional surgical search rankings.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    tags: ['Local SEO', 'Google Ads', 'Medical UX'],
  },
  {
    title: 'Apex Smiles Full-Arch Dental Funnel',
    specialty: 'Cosmetic & Implant Dentistry',
    metric: '$520K Tracked Revenue',
    timeline: '6-Month Campaign',
    description: 'Built a high-converting full-arch dental implant funnel backed by Meta video ads, automated SMS lead nurturing, and CRM integration.',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    tags: ['Paid Media', 'Lead Funnels', 'CRM Automation'],
  },
  {
    title: 'NovaCare Virtual Health & Telemedicine',
    specialty: 'Telehealth & Digital Health',
    metric: '4.8x Return on Ad Spend',
    timeline: 'Annual Retainer',
    description: 'Engineered multi-state paid acquisition campaigns, App Store Optimization, and Google SGE citations driving 12,000+ app registrations.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Performance Ads', 'ASO', 'Telehealth Growth'],
  },
  {
    title: 'MetroHealth 6-Location Urgent Care',
    specialty: 'Urgent Care & Family Medicine',
    metric: '18,500+ Online Check-Ins',
    timeline: 'Multi-Location Expansion',
    description: 'Captured dominant local map pack visibility across 6 regional clinics with automated patient review engines and local keyword rankings.',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    tags: ['Google Maps SEO', 'Reputation Engine', 'Multi-Location'],
  },
];

export default function Portfolio() {
  const containerRef = useRef(null);

  const scroll = (dir) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8;
      containerRef.current.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-white via-slate-50/80 to-white overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Carousel Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">
                — 07
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                PORTFOLIO &amp; SHOWCASE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Featured Healthcare Campaigns
            </h2>
            <p className="text-base text-gray-600 mt-2 max-w-xl">
              Explore how we help medical clinics, surgical institutes, and healthtech platforms achieve sustainable patient volume and search dominance.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary/50 hover:shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary/50 hover:shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-7 pb-6 hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[410px] bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Image Container with Overlay */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-900">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Top Specialty Badge */}
                  <span className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20">
                    {p.specialty}
                  </span>

                  {/* Bottom Metric Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-white bg-secondary/90 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
                      <ArrowTrendingUpIcon className="w-3.5 h-3.5" />
                      {p.metric}
                    </span>
                    <span className="text-[11px] text-gray-300 font-medium bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      {p.timeline}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    {p.description}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold text-gray-600 bg-slate-100 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400">HIPAA Compliant</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Request Full Case Study</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
