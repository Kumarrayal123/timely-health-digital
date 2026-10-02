import React from 'react';


export default function FloatingContact() {
  return (
    <aside aria-label="Floating direct call and inquiry" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">


      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/919010481048"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 32 32" fill="currentColor">
          <path d="M19.11 12.61c-.31-.15-1.84-.91-2.13-.99-.29-.08-.5-.15-.71.15-.21.31-.82.99-.99 1.2-.17.21-.34.24-.65.09-.31-.15-1.31-.46-2.5-1.47-.92-.82-1.54-1.84-1.73-2.15-.19-.31-.02-.48.14-.63.15-.15.31-.38.46-.57.15-.19.21-.31.31-.52.1-.21.05-.38-.02-.53-.08-.15-.71-1.71-.97-2.34-.25-.6-.51-.53-.71-.54-.19 0-.38-.02-.58-.02-.2 0-.52.07-.8.38-.28.31-1.07 1.05-1.07 2.55s1.09 2.96 1.24 3.17c.15.21 2.15 3.3 5.21 4.62.73.31 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.29-.2-.61-.34zM16 .4C7.46 .4 .4 7.46 .4 16c0 2.84 .78 5.5 2.13 7.82L0 32l8.4-2.09c2.18 1.2 4.66 1.89 7.3 1.89 8.54 0 15.6-7.06 15.6-15.6S24.54 .4 16 .4z"/>
        </svg>
        
      </a>
    </aside>
  );
}
