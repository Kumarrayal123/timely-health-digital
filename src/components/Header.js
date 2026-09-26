import React, { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChevronRightIcon,
  SparklesIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import logo from '../logo-th.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home',        href: '#home' },
    { name: 'About',       href: '#about' },
    { name: 'Services',    href: '#services' },
    { name: 'Industries',  href: '#who-we-serve' },
    { name: 'Our Process', href: '#approach' },
    { name: 'Contact',     href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ── Top Utility Bar (Desktop) ────────────────────────── */}
      <div className="hidden lg:block bg-slate-950 text-gray-300 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href="tel:+919010481048"
              className="inline-flex items-center gap-2 hover:text-white transition-colors duration-150"
            >
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <PhoneIcon className="w-3 h-3" />
              </div>
              <span className="font-medium">+91 9010481048</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:hello@timelyhealth.in"
              className="inline-flex items-center gap-2 hover:text-white transition-colors duration-150"
            >
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <EnvelopeIcon className="w-3 h-3" />
              </div>
              <span className="font-medium">hello@timelyhealth.in</span>
            </a>
          </div>

          <div className="flex items-center space-x-5 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-gray-300 font-medium">
              <SparklesIcon className="w-3.5 h-3.5 text-secondary" />
              <span>Trusted by 150+ Healthcare Providers</span>
            </span>
            <span className="text-slate-700">•</span>
            <span className="inline-flex items-center gap-1.5 text-secondary font-semibold">
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              <span>HIPAA &amp; Ethics Compliant</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ─────────────────────────────── */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] py-3 border-b border-gray-200/80'
            : 'bg-white/90 backdrop-blur-sm shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.01]"
          >
            <img
              src={logo}
              alt="Timely Health Digital Marketing"
              className="h-10 sm:h-11 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
            />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-all duration-150"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919010481048"
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-primary px-3 py-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-gray-200 transition-all duration-150"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-primary flex items-center justify-center">
                <PhoneIcon className="w-3.5 h-3.5" />
              </div>
              <span>+91 9010481048</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 active:scale-[0.98] text-white text-xs lg:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-green-600/20 transition-all duration-200 group cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRightIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Actions: Compact CTA + Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#contact"
              className="bg-secondary hover:bg-secondary/90 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-sm transition-colors duration-150"
            >
              Free Consultation
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-xl text-gray-700 hover:text-primary hover:bg-slate-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6 text-gray-900" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile Menu Overlay & Drawer ─────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`md:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 60 }}
      />

      {/* Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 70 }}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="Timely Health Digital"
              className="h-9 w-auto object-contain"
            />
          </a>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-slate-100 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
            Navigation
          </p>
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 text-base font-semibold text-gray-800 hover:text-primary hover:bg-slate-50 rounded-xl transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </a>
              </li>
            ))}
          </ul>

          {/* Quick Contact & Details */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
              Direct Inquiries
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:+919010481048"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-gray-100 text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100/70 text-primary flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 font-medium block">Phone Support</span>
                  <span>+91 9010481048</span>
                </div>
              </a>

              <a
                href="mailto:hello@timelyhealth.in"
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50/60 border border-gray-100 text-sm font-semibold text-gray-800 hover:text-primary transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100/70 text-primary flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 font-medium block">Email Us</span>
                  <span className="text-xs truncate">hello@timelyhealth.in</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-5 border-t border-gray-100 bg-slate-50/60">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold py-3.5 rounded-xl shadow-md transition-colors"
          >
            <span>Get a Free Consultation</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
          <p className="text-center text-[11px] text-gray-400 mt-2.5 flex items-center justify-center gap-1">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-secondary" />
            <span>100% HIPAA &amp; Medical Ethics Compliant</span>
          </p>
        </div>
      </div>
    </header>
  );
}