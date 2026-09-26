import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { ShieldCheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    name: 'Dr. Marcus Vance, MD',
    role: 'Medical Director, Tri-State Orthopedics',
    clinic: 'Orthopedics & Sports Medicine',
    quote:
      'Timely Health transformed our patient pipeline. Within 90 days of launching their search & Google Ads strategy, our surgical consult inquiries skyrocketed by 310%. They understand medical marketing ethics better than any agency we’ve partnered with.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
    verified: true,
  },
  {
    name: 'Dr. Sarah Lin, DDS',
    role: 'Founder & Lead Surgeon, Apex Smiles',
    clinic: 'Cosmetic & Implant Dentistry',
    quote:
      'Their full-arch implant acquisition funnel generated over $520,000 in tracked surgical revenue in 6 months. Our cost-per-lead dropped by more than 60%, and their automated appointment reminders keep our show-up rate above 92%.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1594824813571-638f02614d3f?auto=format&fit=crop&w=200&q=80',
    verified: true,
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Operating Officer, MetroHealth Clinics',
    clinic: 'Multi-Location Urgent Care Network',
    quote:
      'Scaling across 6 new clinics seemed daunting until Timely Health built our unified local SEO and automated patient review engine. Today we maintain a 4.9-star average across 1,200+ patient reviews and dominate every local map pack.',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-secondary font-bold text-sm tracking-wider">
              — 08
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              DOCTOR &amp; CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Trusted by Leaders in Modern Healthcare
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Read how our specialized digital marketing systems empower doctors, surgical practices, and healthcare networks to achieve unprecedented growth.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* 5-Star Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <CheckBadgeIcon className="w-3.5 h-3.5" /> Verified Client
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-700 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-200/60 flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-13 h-13 rounded-2xl object-cover border-2 border-white shadow-md flex-shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs font-semibold text-gray-500">
                    {t.role}
                  </p>
                  <p className="text-[11px] text-primary font-medium mt-0.5">
                    {t.clinic}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-sm font-bold block">150+ Healthcare Providers Rely on Timely Health</span>
              <span className="text-xs text-gray-400">Average 4.9/5.0 Client Satisfaction Score</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-secondary hover:bg-secondary/90 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition"
          >
            <span>Read More Reviews</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
