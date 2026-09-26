import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import img1 from '../img1.jpg';
import img2 from "../img2.jpg";
import img3 from "../img3.jpg";
import img4 from "../img4.jpg";

const segments = [
  {
    title: 'Hospitals',
    desc: 'Build online visibility and reach relevant audiences looking for trusted hospital care.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Clinics',
    desc: 'Connect with people searching for healthcare services in your target locations.',
    // image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    image:img4,
  },
  {
    title: 'Diagnostic Labs',
    desc: 'Promote diagnostic services, health packages and convenient testing solutions.',
    image: img1,
  },
  {
    title: 'Doctors & Specialists',
    desc: 'Build a professional online presence and reach relevant audiences in your specialty.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Healthcare Startups',
    desc: 'Establish your digital presence, build awareness and grow your early audience fast.',
    image: img2,
  },
  {
    title: 'Home Healthcare',
    desc: 'Reach people looking for convenient healthcare services delivered at home.',
    image: img3,
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-4 sm:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 04</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">WHO WE SERVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight max-w-2xl">
              Healthcare Businesses{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                We Help Grow
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg leading-relaxed">
            Whether you're an established healthcare organization or a growing healthcare brand, we build digital strategies around your goals.
          </p>
        </div>

        {/* 3×2 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((seg, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 h-72 sm:h-80"
            >
              {/* Background Image */}
              <img
                src={seg.image}
                alt={seg.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-slate-800/20 transition-opacity duration-500" />

              {/* Hover deeper overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                {/* Title always visible */}
                <h3 className="text-xl font-extrabold text-white tracking-tight mb-2 drop-shadow-lg">
                  {seg.title}
                </h3>

                {/* Description — slides up on hover */}
                <p className="text-sm text-white/90 leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  {seg.desc}
                </p>

                {/* Arrow indicator */}
                <div className="mt-3 flex items-center gap-1.5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
                  <span className="text-xs font-bold text-white/90">Learn More</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-white/90" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}