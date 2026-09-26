import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

export default function FloatingContact() {
  return (
    <aside aria-label="Floating direct call and inquiry" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      <a
        href="tel:+919010481048"
        className="group relative flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
        aria-label="Call +91 9010481048"
      >
        {/* Pulsing beacon */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
        </span>

        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <PhoneIcon className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="hidden sm:inline-block pr-1 font-bold tracking-wide">
          +91 9010481048
        </span>
      </a>
    </aside>
  );
}
