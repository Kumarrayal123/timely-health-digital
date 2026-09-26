import React from 'react';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function About() {
  const stats = [
    { value: '150+', label: 'Healthcare Projects Delivered', color: 'text-primary' },
    { value: '45+', label: 'Medical Clinics Scaled', color: 'text-secondary' },
    { value: '3.8x', label: 'Average Practice ROI', color: 'text-primary' },
    { value: '100%', label: 'HIPAA & Ethics Commitment', color: 'text-secondary' },
  ];

  const highlights = [
    { title: 'Strategy, Creativity & Performance Marketing' },
    { title: 'Build Trust & Increase Online Visibility' },
    { title: 'Generate Meaningful Enquiries' },
  ];

  return (
    <section id="about" className="relative py-8 bg-white overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Overlay Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
                alt="Timely Health digital marketing team collaborating"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              {/* Bottom Image Tag */}
              {/* <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary flex-shrink-0">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Certified Healthcare Growth Partners
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Adhering to strict medical marketing ethics &amp; patient trust
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Floating Top Badge */}
            {/* <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900 text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <SparklesIcon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block font-medium">Industry Recognition</span>
                <span className="text-sm font-bold text-white">Top Healthcare Agency 2026</span>
              </div>
            </div> */}

            {/* Floating Bottom Left Stat Pill */}
            {/* <div className="hidden sm:flex absolute -bottom-4 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                <ArrowTrendingUpIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-900 block">98.4% Retention</span>
                <span className="text-[10px] text-gray-500">Long-term Client Partnerships</span>
              </div>
            </div> */}
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">
                — 02
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                ABOUT OUR AGENCY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Building Brands That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Move Forward
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
              Healthcare marketing requires more than simply posting on social media or running advertisements.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Timely Health Digital Marketing combines strategy, creativity, performance marketing and analytics to help healthcare businesses build trust, increase online visibility and generate meaningful enquiries.
            </p>

            {/* Highlights List */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-secondary border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              {stats.map((st, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/80 rounded-2xl p-4 border border-gray-100 text-center hover:bg-white hover:shadow-md transition-all duration-200"
                >
                  <p className={`text-2xl sm:text-3xl font-extrabold ${st.color} mb-1`}>
                    {st.value}
                  </p>
                  <p className="text-xs text-gray-600 font-medium leading-tight">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
