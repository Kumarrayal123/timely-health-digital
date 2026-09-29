import React from 'react';
import {
  MagnifyingGlassIcon,
  MegaphoneIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    id: '01',
    title: 'SEO & Local SEO',
    tagline: 'Improve your visibility on Google and help potential patients find your healthcare business.',
    icon: MagnifyingGlassIcon,
    headerGradient: 'from-blue-600 to-blue-500',
    tags: ['Website SEO', 'Local SEO', 'Google Business Profile', 'Technical SEO', 'Keyword Research', 'On-Page SEO'],
  },
  {
    id: '02',
    title: 'Social Media Marketing',
    tagline: 'Build a stronger healthcare brand with strategic, informative and engaging content.',
    icon: MegaphoneIcon,
    headerGradient: 'from-pink-600 to-rose-500',
    tags: ['Content Strategy', 'Social Media Management', 'Creative Posts', 'Reels', 'Instagram', 'Facebook', 'LinkedIn'],
  },
  {
    id: '03',
    title: 'Google & Meta Ads',
    tagline: 'Reach the right audience with targeted advertising campaigns.',
    icon: CursorArrowRaysIcon,
    headerGradient: 'from-emerald-600 to-green-500',
    tags: ['Google Ads', 'Meta Ads', 'Lead Generation', 'Awareness Campaigns', 'Remarketing', 'Campaign Optimization'],
  },
  {
    id: '04',
    title: 'Healthcare Content Marketing',
    tagline: 'Create valuable content that educates your audience and strengthens your brand.',
    icon: DocumentTextIcon,
    headerGradient: 'from-violet-600 to-purple-500',
    tags: ['Blogs', 'Website Content', 'Social Media Content', 'Landing Pages', 'Video Scripts', 'Campaign Content'],
  },
  {
    id: '05',
    title: 'Lead Generation',
    tagline: 'Turn your digital presence into a source of relevant enquiries.',
    icon: UserGroupIcon,
    headerGradient: 'from-orange-500 to-amber-500',
    tags: ['Lead Campaigns', 'Landing Pages', 'WhatsApp Enquiries', 'Conversion Optimization', 'Retargeting'],
  },
  {
    id: '06',
    title: 'Analytics & Performance Marketing',
    tagline: 'Track what matters and continuously optimise your marketing investment.',
    icon: ChartBarIcon,
    headerGradient: 'from-slate-700 to-slate-600',
    tags: ['GA4', 'Google Search Console', 'Campaign Analytics', 'Lead Tracking', 'Performance Reporting', 'Optimization'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-4 sm:py-6 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 03</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Grow Your Healthcare Business Online
              </span>
            </h2>
          </div>
          {/* <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            From building your online presence to generating qualified enquiries, we provide end-to-end digital marketing solutions designed for healthcare businesses.
          </p> */}
        </div>

        {/* 3×2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* Coloured Card Header */}
                <div className={`bg-gradient-to-br ${svc.headerGradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center justify-between relative z-10 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-inner">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-3xl font-black text-white/30 tracking-wider">{svc.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight relative z-10">{svc.title}</h3>
                  <p className="text-xs text-white/85 mt-1.5 leading-relaxed relative z-10">{svc.tagline}</p>
                </div>

                {/* Card Body — service tags */}
                <div className="p-6 bg-white flex-1">
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs font-semibold text-gray-700 bg-slate-100 hover:bg-primary/10 hover:text-primary border border-gray-200 px-3 py-1.5 rounded-full transition-colors duration-150 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-8 sm:mt-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <p className="text-sm sm:text-base text-gray-700 font-medium">
            Not sure where to start? Let's find the right strategy for your healthcare business.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-green-600/20 transition-all duration-200 flex-shrink-0 cursor-pointer"
          >
            <span>Get a Free Consultation</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
