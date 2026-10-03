import React, { useState } from 'react';
import {
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BuildingOffice2Icon,
  SquaresPlusIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const plans = [
  {
    id: '01',
    name: 'Starter',
    tagline: 'Small Clinics & Startups',
    icon: RocketLaunchIcon,
    headerGradient: 'from-blue-600 to-blue-500',
    accentColor: 'text-blue-600',
    monthlyPrice: 20000,
    items: [
      { name: 'SEO (On-page, Off-page, Local SEO)', desc: 'Basic' },
      { name: 'Google Ads (Search, Display, Local)', desc: '1 Campaign' },
      { name: 'Meta Ads (Facebook & Instagram)', desc: '1 Campaign' },
      { name: 'Social Media Management', desc: '4 Posts / Month' },
      { name: 'Creative Designs (Images, Banners, Videos)', desc: '8 Creatives / Month' },
      { name: 'Reels & Short Videos', desc: '2 AI Reels / Month' },
      { name: 'Blogs / Content Writing', desc: '2 / Month' },
      { name: 'Lead Generation', desc: 'Basic' },
      { name: 'Website / Landing Page', desc: 'Basic' },
      { name: 'Analytics & Reporting', desc: 'Monthly' },
      { name: 'Strategy Meetings', desc: '1 / Month' },
      { name: 'Support', desc: 'Standard' },
    ],
  },
  {
    id: '02',
    name: 'Growth',
    tagline: 'Growing Healthcare Businesses',
    icon: SparklesIcon,
    headerGradient: 'from-emerald-600 to-green-500',
    accentColor: 'text-emerald-600',
    monthlyPrice: 25000,
    items: [
      { name: 'SEO (On-page, Off-page, Local SEO)', desc: 'Advanced' },
      { name: 'Google Ads (Search, Display, Local)', desc: '2 - 3 Campaigns' },
      { name: 'Meta Ads (Facebook & Instagram)', desc: '2 - 3 Campaigns' },
      { name: 'Social Media Management', desc: '8 Posts / Month' },
      { name: 'Creative Designs (Images, Banners, Videos)', desc: '15 - 20 Creatives / Month' },
      { name: 'Reels & Short Videos', desc: '4 - 6 AI Reels / Month' },
      { name: 'Blogs / Content Writing', desc: '4 / Month' },
      { name: 'Lead Generation', desc: 'Standard' },
      { name: 'Website / Landing Page', desc: 'Optimized' },
      { name: 'Analytics & Reporting', desc: 'Performance Reports' },
      { name: 'Strategy Meetings', desc: '2 / Month' },
      { name: 'Support', desc: 'Priority' },
      { name: 'WhatsApp Lead Generation', desc: '20+ Qualified Enquiries / Month' },
      { name: 'Lead-Focused Campaigns', desc: 'Targeted Lead Generation' },
      { name: 'Conversion Optimization', desc: 'Improved Lead Conversions' },
    ],
  },
  {
    id: '03',
    name: 'Transform',
    tagline: 'Hospitals & Established Brands',
    icon: BuildingOffice2Icon,
    headerGradient: 'from-purple-700 to-indigo-800',
    accentColor: 'text-purple-600',
    monthlyPrice: 30000,
    items: [
      { name: 'SEO (On-page, Off-page, Local SEO)', desc: 'Advanced + Technical' },
      { name: 'Google Ads (Search, Display, Local)', desc: '4 - 6 Campaigns' },
      { name: 'Meta Ads (Facebook & Instagram)', desc: '4 - 6 Campaigns + Retargeting' },
      { name: 'Social Media Management', desc: '12 - 16 Posts / Month' },
      { name: 'Creative Designs (Images, Banners, Videos)', desc: '25 - 30 Creatives / Month' },
      { name: 'Reels & Short Videos', desc: '8 - 12 AI Reels / Month' },
      { name: 'Blogs / Content Writing', desc: '6 - 8 / Month' },
      { name: 'Lead Generation', desc: 'Advanced' },
      { name: 'Website / Landing Page', desc: 'Advanced + CRO' },
      { name: 'Analytics & Reporting', desc: 'Advanced + ROI Reports' },
      { name: 'Strategy Meetings', desc: '2 - 4 / Month' },
      { name: 'Support', desc: 'Dedicated Account Manager' },
      { name: 'Scale Your Enquiries', desc: 'Generate more qualified leads' },
      { name: 'WhatsApp + Multi-Channel Lead Generation', desc: 'Reach customers across multiple channels' },
      { name: 'Advanced Targeting', desc: 'Connect with the right audience' },
      { name: 'Conversion Rate Optimization', desc: 'Turn leads into enquiries' },
      { name: 'Performance & ROI Tracking', desc: 'Measure results and improve performance' },
    ],
  },
];

// ✅ Flat list — no rows, no dividers — just clean aligned grid
const addOnServices = [
  { id: '01', name: 'Landing Page', desc: 'High-converting single-page site' },
  { id: '02', name: 'Business Website', desc: 'Professional multi-page presence' },
  { id: '03', name: 'Professional Website', desc: 'Custom design with advanced features' },
  { id: '04', name: 'E-commerce Website', desc: 'Full online store with payments' },
  { id: '05', name: 'Custom Web Application', desc: 'Tailored web software solutions' },
  { id: '06', name: 'Mobile Application', desc: 'iOS & Android app development' },
  { id: '07', name: 'Web + Mobile Application', desc: 'Complete cross-platform suite' },
  { id: '08', name: 'SEO Setup', desc: 'Foundation technical SEO package' },
  { id: '09', name: 'Branding Package', desc: 'Logo, identity & brand guidelines' },
  { id: '10', name: 'Professional Video Shoots', desc: 'On-location brand & clinic videos' },
  { id: '11', name: 'AI Reel Production', desc: 'AI-generated engaging short reels' },
  { id: '12', name: 'Professional Photography', desc: 'Clinic, team & product shoots' },
  { id: '13', name: 'Video Editing', desc: 'Professional post-production editing' },
  { id: '14', name: 'Google Business Profile', desc: 'Setup, optimization & management' },
  { id: '15', name: 'Reputation Management', desc: 'Reviews, ratings & online reputation' },
  { id: '16', name: 'WhatsApp Marketing Setup', desc: 'Business API & broadcast setup' },
  { id: '17', name: 'Lead Management', desc: 'CRM pipeline & lead tracking' },
  { id: '18', name: 'Marketing Automation', desc: 'Automated journeys & follow-ups' },
  { id: '19', name: 'Influencer / Doctor Collaborations', desc: 'Partnerships & campaigns' },
];

const billingCycles = [
  { key: 'quarterly', label: 'Quarterly', months: 3, discount: 0, periodLabel: 'Quarterly · 90 days' },
  { key: 'halfYearly', label: 'Half-Yearly', months: 6, discount: 0.10, periodLabel: 'Half-Yearly · 180 days' },
  { key: 'yearly', label: 'Yearly', months: 12, discount: 0.25, periodLabel: 'Yearly · 365 days' },
];

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [billingCycle, setBillingCycle] = useState(billingCycles[0]);
  const [activeTab, setActiveTab] = useState('plan'); // 'plan' | 'addon'

  const calculatePrice = () => {
    const monthly = selectedPlan.monthlyPrice;
    const months = billingCycle.months;
    const discount = billingCycle.discount;

    const baseTotal = monthly * months;
    const discountAmount = baseTotal * discount;
    const finalTotal = baseTotal - discountAmount;
    const perMonth = finalTotal / months;

    return {
      perMonth: Math.round(perMonth),
      total: Math.round(finalTotal),
    };
  };

  const pricing = calculatePrice();

  return (
    <section id="plans" className="py-4 sm:py-6 bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 10</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">OUR PLANS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Digital Growth Packages
            </h2>
            <p className="text-sm text-gray-500 mt-2 font-medium">
              Grow Your Healthcare Practice with Strategic Digital Marketing
            </p>
          </div>

          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            Transparent pricing with no hidden fees. Choose the package that fits your practice's stage, or combine services for a custom solution.
          </p>
        </div>

        {/* ✅ Highlighted Advertising Budget Note */}
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
          <ExclamationTriangleIcon className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
          <p className="text-sm font-semibold text-amber-800 leading-relaxed">
            All paid advertising budgets are separate from the service fee and are to be funded by the client.
          </p>
        </div>

        {/* ✅ Plan Selector Tabs + Add-On Tab */}
        <div className="flex flex-wrap gap-3 mb-8 p-3 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-slate-100 border border-slate-200 shadow-sm">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isActive = activeTab === 'plan' && selectedPlan.id === plan.id;

            const activeStyles = {
              '01': 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 scale-105',
              '02': 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200 scale-105',
              '03': 'bg-purple-700 text-white border-purple-700 shadow-lg shadow-purple-200 scale-105',
            };

            return (
              <button
                key={plan.id}
                onClick={() => {
                  setSelectedPlan(plan);
                  setActiveTab('plan');
                }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-2 ${
                  isActive
                    ? activeStyles[plan.id]
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:scale-105'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : plan.accentColor}`} />
                <span>{plan.name}</span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  ₹{plan.monthlyPrice.toLocaleString('en-IN')}/mo
                </span>
              </button>
            );
          })}

          <button
            onClick={() => setActiveTab('addon')}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-2 ${
              activeTab === 'addon'
                ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-transparent shadow-lg shadow-blue-200 scale-105'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:scale-105'
            }`}
          >
            <SquaresPlusIcon className={`w-5 h-5 ${activeTab === 'addon' ? 'text-white' : 'text-secondary'}`} />
            <span>Add-On</span>
          </button>
        </div>

        {/* Plan View */}
        {activeTab === 'plan' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedPlan.headerGradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <selectedPlan.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                      {selectedPlan.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 font-medium">
                      {selectedPlan.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Everything in the {selectedPlan.name} plan
                </h4>
                <p className="text-sm text-gray-500 mb-6">
                  Comprehensive digital marketing suite for your practice
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {selectedPlan.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3 text-primary" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 leading-tight">
                          {item.name}
                        </h5>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-2 bg-slate-100 m-4 rounded-xl">
                  <div className="flex gap-1">
                    {billingCycles.map((cycle) => {
                      const isActive = billingCycle.key === cycle.key;
                      return (
                        <button
                          key={cycle.key}
                          onClick={() => setBillingCycle(cycle)}
                          className={`flex-1 py-2.5 px-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                            isActive
                              ? 'bg-primary text-white shadow-md'
                              : 'text-gray-500 hover:text-gray-700 hover:bg-white/60'
                          }`}
                        >
                          {cycle.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-3">
                    {billingCycle.periodLabel}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                      ₹{pricing.perMonth.toLocaleString('en-IN')}
                    </span>
                    <span className="text-base font-semibold text-gray-500">/month</span>
                  </div>

                  <div className="space-y-1 mb-5">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold text-gray-700">
                        ₹{pricing.total.toLocaleString('en-IN')}
                      </span>{' '}
                      for the plan
                    </p>
                    {billingCycle.discount > 0 && (
                      <p className="text-xs font-bold text-emerald-600">
                        You save {Math.round(billingCycle.discount * 100)}% with {billingCycle.label.toLowerCase()} billing
                      </p>
                    )}
                  </div>

                  <a
                    href="#cta"
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <span>Book Demo</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>

                  <div className="border-t border-gray-100 my-5" />

                  <div className="mb-5">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                      What's Included
                    </h5>
                    <ul className="space-y-2.5">
                      <li className="flex items-start gap-2.5">
                        <CheckIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600 leading-snug">
                          Full access to all <span className="font-semibold text-gray-900">{selectedPlan.name}</span> plan features
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600 leading-snug">
                          Monthly performance reports & analytics
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600 leading-snug">
                          Dedicated strategy sessions with experts
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-600 leading-snug">
                          No hidden fees · Cancel anytime
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 my-5" />

                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheckIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-gray-600">Secure & transparent billing</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ClockIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-gray-600">Quick onboarding within 48 hours</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <PhoneIcon className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs text-gray-600">Priority support available</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 font-medium mb-3">
                  Not sure which package fits?
                </p>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold text-sm transition-colors"
                >
                  <span>Book a free strategy call</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* ✅ Add-On View — clean 3-column grid, no dividers, no extra spacing */
          <div className="space-y-6">
            {/* Add-On Header Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-md">
                  <SquaresPlusIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                    Add-On Services
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 font-medium">
                    Development & Setup Services
                  </p>
                </div>
              </div>
            </div>

            {/* All Add-On Services in ONE card — clean 3-column grid */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                Everything in Add-On Services
              </h4>
              <p className="text-sm text-gray-500 mb-6">
                One-time builds, priced separately from monthly plans
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {addOnServices.map((addon) => (
                  <div key={addon.id} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-3 h-3 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold text-gray-900 leading-tight">
                        {addon.name}
                      </h5>
                      <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                        {addon.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}