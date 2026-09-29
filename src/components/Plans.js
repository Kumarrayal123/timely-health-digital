import React from 'react';
import {
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BuildingOffice2Icon,
  StarIcon,
} from '@heroicons/react/24/outline';

const plans = [
  {
    id: '01',
    name: 'Starter Plan',
    // price: '₹9,999',
    // period: '/month',
    tagline: 'For small businesses starting their digital presence',
    icon: RocketLaunchIcon,
    headerGradient: 'from-blue-600 to-blue-500',
    accentColor: 'text-primary',
    items: [
      { name: '8 Social Media Posts / month', desc: 'Consistent brand presence across platforms' },
      { name: '4 Reels / month', desc: 'Short-form video content that drives reach' },
      { name: '8 Stories / month', desc: 'Daily engagement with your audience' },
      { name: 'Social Media Management', desc: 'End-to-end scheduling, posting & moderation' },
      { name: 'Basic SEO', desc: 'Foundational on-page optimization' },
      { name: 'Google Business Profile Management', desc: 'Local map visibility & review handling' },
      { name: '1 Promotional Creative / month', desc: 'Custom graphic for campaigns' },
      { name: 'Monthly Performance Report', desc: 'Clear metrics on growth & reach' },
      { name: 'Content Calendar', desc: 'Planned posting schedule' },
      { name: 'Hashtag & Keyword Research', desc: 'Data-backed discovery strategy' },
    ],
  },
  {
    id: '02',
    name: 'Growth Plan',
    // price: '₹19,999',
    // period: '/month',
    tagline: 'For businesses looking to grow their online presence',
    icon: SparklesIcon,
    headerGradient: 'from-emerald-600 to-green-500',
    accentColor: 'text-secondary',
    items: [
      { name: '12 Social Media Posts / month', desc: 'Higher frequency for steady growth' },
      { name: '4 Reels / month', desc: 'More video volume for algorithm reach' },
      { name: '12 Stories / month', desc: 'Consistent daily touchpoints' },
      { name: 'Social Media Management', desc: 'Full-service handling & engagement' },
      { name: 'On-Page SEO', desc: 'Content and meta optimization' },
      { name: 'Local SEO', desc: 'City and neighborhood search visibility' },
      { name: 'Google Business Profile Management', desc: 'Rankings, posts & review responses' },
      { name: '2 Promotional Creatives / month', desc: 'Campaign-ready graphics' },
      { name: 'Basic Meta Ads Management', desc: 'Facebook & Instagram ad setup' },
      { name: 'Competitor Analysis', desc: 'Benchmark against your market' },
      { name: 'Monthly Performance Report', desc: 'Detailed growth & engagement data' },
      { name: 'Content Strategy', desc: 'Quarterly roadmap for content' },
      { name: 'Hashtag & Keyword Research', desc: 'Ongoing discovery optimization' },
    ],
  },
  {
    id: '03',
    name: 'Professional Plan',
    // price: '₹34,999',
    // period: '/month',
    tagline: 'For businesses focused on leads, branding & conversions',
    icon: BuildingOffice2Icon,
    headerGradient: 'from-slate-900 to-blue-900',
    accentColor: 'text-primary',
    items: [
      { name: '16 Social Media Posts / month', desc: 'High-volume presence across channels' },
      { name: '4 Reels / month', desc: 'Aggressive short-form video strategy' },
      { name: '20 Stories / month', desc: 'Daily storytelling & engagement' },
      { name: 'Social Media Management', desc: 'Complete platform ownership' },
      { name: 'Advanced SEO', desc: 'Deep technical and content optimization' },
      { name: 'Local + Technical SEO', desc: 'Full-stack search visibility' },
      { name: 'Meta Ads Management', desc: 'Paid social campaigns with ROI tracking' },
      { name: 'Google Ads Management', desc: 'Search, display & YouTube campaigns' },
      { name: '4 Promotional Creatives / month', desc: 'Ad-ready design assets' },
      { name: 'Lead Generation Campaigns', desc: 'Funnels built to convert' },
      { name: 'Competitor Analysis', desc: 'Ongoing market intelligence' },
      { name: 'Website SEO Optimization', desc: 'Site-wide technical improvements' },
      { name: 'Monthly Strategy Meeting', desc: 'Direct access to your strategist' },
      { name: 'Detailed Analytics & Reports', desc: 'Full attribution and insights' },
      { name: 'Content & Campaign Strategy', desc: 'Integrated growth roadmap' },
    ],
  },
  {
    id: '04',
    name: 'Premium 360° Plan',
    // price: '₹59,999',
    // period: '/month',
    tagline: 'Complete digital growth & marketing solution',
    icon: StarIcon,
    headerGradient: 'from-blue-600 via-teal-600 to-emerald-600',
    accentColor: 'text-secondary',
    items: [
      { name: '20 Social Media Posts / month', desc: 'Maximum daily brand presence' },
      { name: '4 Reels / month', desc: 'Highest video output for reach' },
      { name: '30 Stories / month', desc: 'Daily engagement at scale' },
      { name: 'Complete Social Media Management', desc: 'Full team handling all platforms' },
      { name: 'Advanced SEO', desc: 'Enterprise-level search strategy' },
      { name: 'Technical + Local SEO', desc: 'Complete visibility stack' },
      { name: 'Meta Ads Management', desc: 'Full-funnel paid social' },
      { name: 'Google Ads Management', desc: 'All campaign types managed' },
      { name: 'Lead Generation', desc: 'Qualified appointment pipelines' },
      { name: 'Conversion Optimization', desc: 'CRO for landing pages & funnels' },
      { name: '6 Promotional Creatives / month', desc: 'Premium design volume' },
      { name: 'Website Landing Page Updates', desc: 'Ongoing site refresh & optimization' },
      { name: 'Blog Content – 4/month', desc: 'SEO-driven long-form content' },
      { name: 'Competitor & Market Research', desc: 'Deep market intelligence' },
      { name: 'Monthly Campaign Strategy', desc: 'Hands-on strategic planning' },
      { name: 'Weekly Performance Monitoring', desc: 'Real-time campaign oversight' },
      { name: 'Detailed Monthly Reports', desc: 'Executive-level reporting' },
      { name: 'Dedicated Account Manager', desc: 'Single point of contact' },
    ],
  },
];

const addOnServices = [
  { id: '01', name: 'Landing Page',  desc: 'High-converting single-page site' },
  { id: '02', name: 'Business Website',desc: 'Professional multi-page presence' },
  { id: '03', name: 'Professional Website', desc: 'Custom design with advanced features' },
  { id: '04', name: 'E-commerce Website', desc: 'Full online store with payments' },
  { id: '05', name: 'Custom Web Application', desc: 'Tailored web software solutions' },
  { id: '06', name: 'Mobile Application',  desc: 'iOS & Android app development' },
  { id: '07', name: 'Web + Mobile Application',  desc: 'Complete cross-platform suite' },
  { id: '08', name: 'SEO Setup', desc: 'Foundation technical SEO package' },
  { id: '09', name: 'Branding Package', desc: 'Logo, identity & brand guidelines' },
];

export default function Plans() {
  return (
    <section id="plans" className="py-4 sm:py-6 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Top Header — matching Services layout */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">
                — 10
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                OUR PLANS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Marketing Plans Built For Every Stage Of Growth
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            Transparent monthly pricing with no hidden fees. Pick the plan that fits your goals, or combine plans for a custom solution tailored to your business.
          </p>
        </div>

        {/* 4 Plan Cards Grid — same structure as Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* Card Top Colored Header */}
                <div
                  className={`bg-gradient-to-br ${plan.headerGradient} p-6 sm:p-7 text-white relative overflow-hidden`}
                >
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"></div>

                  <div className="flex items-center justify-between relative z-10 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-inner">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <span className="text-3xl font-black text-white/40 tracking-wider">
                      {plan.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight relative z-10">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-white/90 mt-1.5 leading-relaxed relative z-10">
                    {plan.tagline}
                  </p>

                  {/* Price inline in header */}
                  <div className="mt-4 relative z-10">
                    <span className="text-3xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-sm text-white/80 font-medium ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Card Body — feature items styled exactly like Services items */}
                <div className="p-6 sm:p-7 bg-white flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {plan.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="border-b border-gray-100 pb-3.5 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start gap-2">
                          <CheckIcon
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.accentColor}`}
                          />
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-on Development Services — compact, understated section */}
        <div className="mt-10 sm:mt-12">
          {/* Small minimal header instead of big section header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1.5">
              {/* <span className="text-secondary font-bold text-xs tracking-wider">
                — 06
              </span> */}
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                ADD-ON SERVICES
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              Development & Setup Services
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              One-time builds, priced separately from monthly plans.
            </p>
          </div>

          {/* Compact list layout — not full cards */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-gray-100">
              {addOnServices.map((addon, idx) => (
                <div
                  key={addon.id}
                  className={`flex items-center gap-3 px-5 py-4 hover:bg-slate-50/70 transition-colors group ${
                    idx % 3 !== 2 ? 'lg:border-r border-gray-100' : ''
                  } ${idx < addOnServices.length - 3 ? 'sm:border-b lg:border-b border-gray-100' : ''}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                      {addon.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 truncate">
                      {addon.desc}
                    </p>
                  </div>
                  <span className="text-xs font-extrabold text-gray-900 whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner Strip — matching Services footer */}
        <div className="mt-8 sm:mt-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <p className="text-sm sm:text-base text-gray-700 font-medium">
            Not sure which plan fits? A free 15-minute strategy call will map the right plan to your revenue goals.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-green-600/20 transition-all duration-200 flex-shrink-0 cursor-pointer"
          >
            <span>Book a free strategy call</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}