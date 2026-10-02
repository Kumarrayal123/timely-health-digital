import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/outline';
import logo from '../logo-th.png';

const quickLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Industries', href: '#who-we-serve' },
  { label: 'Process',    href: '#approach' },
  { label: 'Contact',    href: '#contact' },
];

const services = [
  { label: 'SEO & Local SEO',                   href: '#services' },
  { label: 'Social Media Marketing',            href: '#services' },
  { label: 'Google & Meta Ads',                 href: '#services' },
  { label: 'Content Marketing',                 href: '#services' },
  { label: 'Lead Generation',                   href: '#services' },
  { label: 'Analytics & Performance Marketing', href: '#services' },
];

// Social icon path data
const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/timelyhealth/',
    d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/timelyhealth1?stkn=MTZ3bHQ4ejJnczE1NQ==',
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    d: 'M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.5 0 9 1.582 9 4.615V8z',
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com',
    d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-slate-950 text-gray-300 font-sans overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Main Footer Grid ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Col 1 — Brand (spans 4 of 12) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            {/* Logo */}
            <a href="#home" className="flex items-center mb-4">
              <img
                src={logo}
                alt="Timely Health Digital Marketing"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Healthcare-focused digital marketing solutions designed to help businesses build visibility, reach the right audience and generate meaningful growth.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900/70 border border-gray-800 text-xs text-gray-300">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                HIPAA &amp; Ethics Compliant
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900/70 border border-gray-800 text-xs text-gray-300">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                Healthcare Focused
              </div>
            </div>

            {/* Social icons */}
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Follow Us</p>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links (spans 2 of 12) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-l-2 border-secondary pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-secondary transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRightIcon className="w-3 h-3 text-gray-600 group-hover:text-secondary transition-colors flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services (spans 3 of 12) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-l-2 border-primary pl-2.5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {services.map((svc) => (
                <li key={svc.label}>
                  <a
                    href={svc.href}
                    className="hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRightIcon className="w-3 h-3 text-gray-600 group-hover:text-primary transition-colors flex-shrink-0" />
                    {svc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact (spans 3 of 12) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-l-2 border-primary pl-2.5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">
                  Sri Sai Balaji Avenue, Madhapur,<br />
                  Arunodaya Colony,<br />
                  Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919010481048" className="hover:text-white transition-colors text-xs">
                  +91 9010481048
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:hello@timelyhealth.in" className="hover:text-white transition-colors text-xs truncate">
                  hello@timelyhealth.in
                </a>
              </li>
            </ul>

            {/* Mini CTA */}
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow transition-all duration-200 cursor-pointer group"
            >
              Book a Free Consultation
              <ChevronRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────── */}
      <div className="border-t border-gray-900 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 relative flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">

          <span className="text-center">© {new Date().getFullYear()} Timely Health Digital Marketing. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="sm:absolute sm:right-6 lg:right-8 inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-800 transition text-xs cursor-pointer"
            title="Back to top"
          >
            Back to Top
            <ArrowUpIcon className="w-3.5 h-3.5 text-primary" />
          </button>

        </div>
      </div>
    </footer>
  );
}