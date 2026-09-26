import React, { useState } from 'react';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How quickly can our medical clinic expect to see new patient inquiries?',
    answer:
      'With high-intent Google Search ads and localized appointment funnels, clinics typically receive qualified patient inquiries within 7 to 14 days of launch. For organic medical SEO, Google AI citations (AEO), and local map pack rankings, significant compound growth typically accelerates within 60 to 90 days.',
  },
  {
    question: 'How do you ensure all marketing campaigns comply with HIPAA regulations?',
    answer:
      'We treat patient privacy with paramount importance. We never track or transmit Protected Health Information (PHI) through unverified ad pixels. Our funnels implement server-side tracking, anonymized lead routing, and encrypted integrations compatible with healthcare BAAs.',
  },
  {
    question: 'Do you integrate with our existing EHR or appointment scheduling software?',
    answer:
      'Yes. We seamlessly connect patient acquisition funnels with popular healthcare management software including AthenaHealth, Kareo, Epic, Cerner, NextGen, Dentrix, Nextech, as well as CRM platforms like HubSpot, Zoho, and Salesforce.',
  },
  {
    question: 'What makes Timely Health Digital different from generic marketing agencies?',
    answer:
      'Generic agencies apply standard e-commerce tactics that often violate medical advertising guidelines and yield low-intent leads. We specialize exclusively in healthcare provider growth—focusing on patient search psychology, high-ticket clinical procedures, and doctor reputation.',
  },
  {
    question: 'Are there any locked-in long-term contracts?',
    answer:
      'No. We believe in earning our clients’ business every month through transparent reporting and measurable ROI. While patient acquisition compounds over 3 to 6 months, our partnerships operate on flexible, transparent terms with zero lock-ins.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-secondary font-bold text-sm tracking-wider">
              — 07
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Clear answers on our healthcare marketing processes, compliance standards, and patient acquisition timeline.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-100'
                    : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-gray-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-primary text-white rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Have a specific clinical question not covered here?{' '}
            <a href="#contact" className="font-bold text-primary hover:underline">
              Speak with a healthcare marketing strategist →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
