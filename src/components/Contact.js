// import React, { useState } from 'react';
// import {
//   PhoneIcon,
//   EnvelopeIcon,
//   MapPinIcon,
//   ShieldCheckIcon,
//   CheckCircleIcon,
//   ArrowRightIcon,
//   UserIcon,
//   BuildingOffice2Icon,
// } from '@heroicons/react/24/outline';

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     businessName: '',
//     phone: '',
//     email: '',
//     businessType: '',
//     lookingFor: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(true);
//     }, 800);
//   };

//   const inputClass =
//     'w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-slate-50/50 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition';

//   const labelClass =
//     'block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5';

//   return (
//     <section id="contact" className="relative py-12 bg-slate-50/60 overflow-hidden">
//       {/* Ambient glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-10 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

//           {/* ── Left Column ───────────────────────────────── */}
//           <div className="lg:col-span-5">

//             {/* Section tag */}
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-secondary font-bold text-sm tracking-wider">— 10</span>
//               <span className="text-xs font-bold uppercase tracking-widest text-primary">CONTACT</span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
//               Let's Talk About{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
//                 Your Growth
//               </span>
//             </h2>

//             <p className="text-base text-gray-600 leading-relaxed mb-8">
//               Tell us about your healthcare business and what you're looking to achieve.
//             </p>

//             {/* Contact detail cards */}
//             <div className="space-y-4 mb-8">
//               <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
//                 <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
//                   <PhoneIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
//                     Call Us
//                   </span>
//                   <a
//                     href="tel:+919010481048"
//                     className="text-base font-bold text-gray-900 hover:text-primary transition-colors"
//                   >
//                     +91 9010481048
//                   </a>
//                   <p className="text-xs text-gray-500 mt-0.5">Speak directly with our team</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
//                 <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
//                   <EnvelopeIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
//                     Email Us
//                   </span>
//                   <a
//                     href="mailto:hello@timelyhealth.in"
//                     className="text-base font-bold text-gray-900 hover:text-primary transition-colors"
//                   >
//                     hello@timelyhealth.in
//                   </a>
//                   <p className="text-xs text-gray-500 mt-0.5">We respond within 24 business hours</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
//                 <div className="w-11 h-11 rounded-xl bg-emerald-50 text-secondary flex items-center justify-center flex-shrink-0">
//                   <MapPinIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
//                     Location
//                   </span>
//                   <p className="text-sm font-bold text-gray-900">Hyderabad, India</p>
//                   <p className="text-xs text-gray-500">Serving healthcare businesses worldwide</p>
//                 </div>
//               </div>
//             </div>

//             {/* Assurance box */}
//             <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
//               <div className="flex items-center gap-2 mb-2">
//                 <ShieldCheckIcon className="w-5 h-5 text-secondary" />
//                 <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
//                   Our Commitment
//                 </span>
//               </div>
//               <ul className="space-y-1.5 text-xs text-emerald-800">
//                 <li className="flex items-center gap-2">
//                   <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
//                   <span>HIPAA &amp; medical ethics compliant</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
//                   <span>No obligation, no spam, no pressure</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
//                   <span>Your information is completely secure</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* ── Right Column — Lead Form ───────────────────── */}
//           <div className="lg:col-span-7">
//             <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl relative">

//               {submitted ? (
//                 /* ── Success state ── */
//                 <div className="py-12 text-center">
//                   <div className="w-16 h-16 rounded-full bg-emerald-100 text-secondary flex items-center justify-center mx-auto mb-4">
//                     <CheckCircleIcon className="w-10 h-10" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
//                   <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
//                     We've received your enquiry,{' '}
//                     <strong className="text-gray-900">{formData.name || 'there'}</strong>. Our team will
//                     get back to you within 24 business hours.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSubmitted(false);
//                       setFormData({
//                         name: '',
//                         businessName: '',
//                         phone: '',
//                         email: '',
//                         businessType: '',
//                         lookingFor: '',
//                       });
//                     }}
//                     className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition"
//                   >
//                     Submit Another Enquiry
//                   </button>
//                 </div>
//               ) : (
//                 /* ── Form ── */
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">Get My Free Consultation</h3>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-1">
//                       Fill in the details below and we'll be in touch shortly.
//                     </p>
//                   </div>

//                   {/* Row 1 — Name + Business Name */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className={labelClass}>Name *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <UserIcon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Your full name"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="businessName" className={labelClass}>Business Name *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <BuildingOffice2Icon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="text"
//                           id="businessName"
//                           name="businessName"
//                           value={formData.businessName}
//                           onChange={handleChange}
//                           placeholder="Your clinic or business name"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Row 2 — Phone + Email */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="phone" className={labelClass}>Phone Number *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <PhoneIcon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="+91 9000000000"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="email" className={labelClass}>Email Address *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <EnvelopeIcon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="you@yourbusiness.com"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Row 3 — Business Type + What are you looking for */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="businessType" className={labelClass}>Business Type *</label>
//                       <select
//                         id="businessType"
//                         name="businessType"
//                         value={formData.businessType}
//                         onChange={handleChange}
//                         required
//                         className={inputClass}
//                       >
//                         <option value="" disabled>Select business type</option>
//                         <option value="Hospital">Hospital</option>
//                         <option value="Clinic">Clinic</option>
//                         <option value="Diagnostic Lab">Diagnostic Lab</option>
//                         <option value="Doctor / Specialist">Doctor / Specialist</option>
//                         <option value="Home Healthcare">Home Healthcare</option>
//                         <option value="Healthcare Startup">Healthcare Startup</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="lookingFor" className={labelClass}>What Are You Looking For? *</label>
//                       <select
//                         id="lookingFor"
//                         name="lookingFor"
//                         value={formData.lookingFor}
//                         onChange={handleChange}
//                         required
//                         className={inputClass}
//                       >
//                         <option value="" disabled>Select a service</option>
//                         <option value="SEO">SEO</option>
//                         <option value="Social Media Marketing">Social Media Marketing</option>
//                         <option value="Google Ads">Google Ads</option>
//                         <option value="Meta Ads">Meta Ads</option>
//                         <option value="Lead Generation">Lead Generation</option>
//                         <option value="Content Marketing">Content Marketing</option>
//                         <option value="Full Digital Marketing">Full Digital Marketing</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Submit button */}
//                   <div>
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-4 rounded-xl shadow-lg hover:shadow-green-600/25 transition-all duration-200 cursor-pointer disabled:opacity-75"
//                     >
//                       {loading ? (
//                         <span>Submitting...</span>
//                       ) : (
//                         <>
//                           <span>Get My Free Consultation</span>
//                           <ArrowRightIcon className="w-4 h-4" />
//                         </>
//                       )}
//                     </button>
//                     <p className="text-center text-[11px] text-gray-400 mt-2.5">
//                       🔒 Your information is secure and will never be shared.
//                     </p>
//                   </div>
//                 </form>
//               )}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }



// import React, { useState } from 'react';
// import {
//   PhoneIcon,
//   EnvelopeIcon,
//   MapPinIcon,
//   ShieldCheckIcon,
//   CheckCircleIcon,
//   ArrowRightIcon,
//   UserIcon,
//   BuildingOffice2Icon,
// } from '@heroicons/react/24/outline';
// // import { API_BASE_URL } from '../config';

// export default function Contact() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
//   const [errorMsg, setErrorMsg] = useState('');
//   const [formData, setFormData] = useState({
//     name: '',
//     businessName: '',
//     phone: '',
//     email: '',
//     businessType: '',
//     lookingFor: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     // Clear any old status when user starts typing again
//     if (submitStatus) setSubmitStatus(null);
//     if (errorMsg) setErrorMsg('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSubmitStatus(null);
//     setErrorMsg('');

//     try {
//       const res = await fetch(`https://api.timelyhealth.in/api/consultation-leads`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         setSubmitStatus('success');
//         setSubmitted(true);
//         // Reset form
//         setFormData({
//           name: '',
//           businessName: '',
//           phone: '',
//           email: '',
//           businessType: '',
//           lookingFor: '',
//         });
//       } else {
//         setSubmitStatus('error');
//         setErrorMsg(data.message || 'Something went wrong. Please try again.');
//       }
//     } catch (err) {
//       console.error('Consultation submit error:', err);
//       setSubmitStatus('error');
//       setErrorMsg('Network error. Please check your connection and try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass =
//     'w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-slate-50/50 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition';

//   const labelClass =
//     'block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5';

//   return (
//     <section id="contact" className="relative py-12 bg-slate-50/60 overflow-hidden">
//       {/* Ambient glows */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-10 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

//           {/* ── Left Column ───────────────────────────────── */}
//           <div className="lg:col-span-5">

//             {/* Section tag */}
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-secondary font-bold text-sm tracking-wider">— 10</span>
//               <span className="text-xs font-bold uppercase tracking-widest text-primary">CONTACT</span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
//               Let's Talk About{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
//                 Your Growth
//               </span>
//             </h2>

//             <p className="text-base text-gray-600 leading-relaxed mb-8">
//               Tell us about your healthcare business and what you're looking to achieve.
//             </p>

//             {/* Contact detail cards */}
//             <div className="space-y-4 mb-8">
//               <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
//                 <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
//                   <PhoneIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
//                     Call Us
//                   </span>
//                   <a
//                     href="tel:+919010481048"
//                     className="text-base font-bold text-gray-900 hover:text-primary transition-colors"
//                   >
//                     +91 9010481048
//                   </a>
//                   <p className="text-xs text-gray-500 mt-0.5">Speak directly with our team</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
//                 <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
//                   <EnvelopeIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
//                     Email Us
//                   </span>
//                   <a
//                     href="mailto:hello@timelyhealth.in"
//                     className="text-base font-bold text-gray-900 hover:text-primary transition-colors"
//                   >
//                     hello@timelyhealth.in
//                   </a>
//                   <p className="text-xs text-gray-500 mt-0.5">We respond within 24 business hours</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
//                 <div className="w-11 h-11 rounded-xl bg-emerald-50 text-secondary flex items-center justify-center flex-shrink-0">
//                   <MapPinIcon className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
//                     Location
//                   </span>
//                   <p className="text-sm font-bold text-gray-900">Hyderabad, India</p>
//                   <p className="text-xs text-gray-500">Serving healthcare businesses worldwide</p>
//                 </div>
//               </div>
//             </div>

//             {/* Assurance box */}
//             <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
//               <div className="flex items-center gap-2 mb-2">
//                 <ShieldCheckIcon className="w-5 h-5 text-secondary" />
//                 <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
//                   Our Commitment
//                 </span>
//               </div>
//               <ul className="space-y-1.5 text-xs text-emerald-800">
//                 <li className="flex items-center gap-2">
//                   <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
//                   <span>HIPAA &amp; medical ethics compliant</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
//                   <span>No obligation, no spam, no pressure</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
//                   <span>Your information is completely secure</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* ── Right Column — Lead Form ───────────────────── */}
//           <div className="lg:col-span-7">
//             <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl relative">

//               {submitted && submitStatus === 'success' ? (
//                 /* ── Success state ── */
//                 <div className="py-12 text-center">
//                   <div className="w-16 h-16 rounded-full bg-emerald-100 text-secondary flex items-center justify-center mx-auto mb-4">
//                     <CheckCircleIcon className="w-10 h-10" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
//                   <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
//                     We've received your enquiry. Our team will get back to you within 24 business hours.
//                     Check your inbox for a confirmation email.
//                   </p>
//                   <button
//                     onClick={() => {
//                       setSubmitted(false);
//                       setSubmitStatus(null);
//                       setFormData({
//                         name: '',
//                         businessName: '',
//                         phone: '',
//                         email: '',
//                         businessType: '',
//                         lookingFor: '',
//                       });
//                     }}
//                     className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition"
//                   >
//                     Submit Another Enquiry
//                   </button>
//                 </div>
//               ) : (
//                 /* ── Form ── */
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900">Get My Free Consultation</h3>
//                     <p className="text-xs sm:text-sm text-gray-500 mt-1">
//                       Fill in the details below and we'll be in touch shortly.
//                     </p>
//                   </div>

//                   {/* ── Error Banner ── */}
//                   {submitStatus === 'error' && (
//                     <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
//                       <span className="text-red-500 text-xl">❌</span>
//                       <div>
//                         <p className="font-semibold text-red-800 text-sm">Submission failed</p>
//                         <p className="text-red-700 text-xs mt-0.5">{errorMsg}</p>
//                       </div>
//                     </div>
//                   )}

//                   {/* Row 1 — Name + Business Name */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="name" className={labelClass}>Name *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <UserIcon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Your full name"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="businessName" className={labelClass}>Business Name *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <BuildingOffice2Icon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="text"
//                           id="businessName"
//                           name="businessName"
//                           value={formData.businessName}
//                           onChange={handleChange}
//                           placeholder="Your clinic or business name"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Row 2 — Phone + Email */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="phone" className={labelClass}>Phone Number *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <PhoneIcon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           placeholder="+91 9000000000"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="email" className={labelClass}>Email Address *</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
//                           <EnvelopeIcon className="w-4 h-4" />
//                         </div>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="you@yourbusiness.com"
//                           required
//                           className={`${inputClass} pl-9`}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Row 3 — Business Type + What are you looking for */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="businessType" className={labelClass}>Business Type *</label>
//                       <select
//                         id="businessType"
//                         name="businessType"
//                         value={formData.businessType}
//                         onChange={handleChange}
//                         required
//                         className={inputClass}
//                       >
//                         <option value="" disabled>Select business type</option>
//                         <option value="Hospital">Hospital</option>
//                         <option value="Clinic">Clinic</option>
//                         <option value="Diagnostic Lab">Diagnostic Lab</option>
//                         <option value="Doctor / Specialist">Doctor / Specialist</option>
//                         <option value="Home Healthcare">Home Healthcare</option>
//                         <option value="Healthcare Startup">Healthcare Startup</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="lookingFor" className={labelClass}>What Are You Looking For? *</label>
//                       <select
//                         id="lookingFor"
//                         name="lookingFor"
//                         value={formData.lookingFor}
//                         onChange={handleChange}
//                         required
//                         className={inputClass}
//                       >
//                         <option value="" disabled>Select a service</option>
//                         <option value="SEO">SEO</option>
//                         <option value="Social Media Marketing">Social Media Marketing</option>
//                         <option value="Google Ads">Google Ads</option>
//                         <option value="Meta Ads">Meta Ads</option>
//                         <option value="Lead Generation">Lead Generation</option>
//                         <option value="Content Marketing">Content Marketing</option>
//                         <option value="Full Digital Marketing">Full Digital Marketing</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   {/* Submit button */}
//                   <div>
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="w-full inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-4 rounded-xl shadow-lg hover:shadow-green-600/25 transition-all duration-200 cursor-pointer disabled:opacity-75"
//                     >
//                       {loading ? (
//                         <>
//                           <svg
//                             className="animate-spin w-4 h-4 text-white"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <circle
//                               className="opacity-25"
//                               cx="12"
//                               cy="12"
//                               r="10"
//                               stroke="currentColor"
//                               strokeWidth="4"
//                             />
//                             <path
//                               className="opacity-75"
//                               fill="currentColor"
//                               d="M4 12a8 8 0 018-8v8H4z"
//                             />
//                           </svg>
//                           <span>Submitting...</span>
//                         </>
//                       ) : (
//                         <>
//                           <span>Get My Free Consultation</span>
//                           <ArrowRightIcon className="w-4 h-4" />
//                         </>
//                       )}
//                     </button>
//                     <p className="text-center text-[11px] text-gray-400 mt-2.5">
//                       🔒 Your information is secure and will never be shared.
//                     </p>
//                   </div>
//                 </form>
//               )}

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







import React, { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

// ─────────────────────────────────────────────────────────────
// API config (inlined so no import path issues)
// ─────────────────────────────────────────────────────────────
const hostname = window.location.hostname;
const isLocalhost =
  hostname === 'localhost' ||
  hostname === '127.0.0.1' ||
  hostname.startsWith('192.168') ||
  hostname.startsWith('10.');

const API_BASE_URL = isLocalhost
  ? 'http://localhost:5001/api'
  : 'https://api.timelyhealth.in/api';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    lookingFor: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    setErrorMsg('');

    const url = `${API_BASE_URL}/consultation-leads`;
    console.log('🔍 POST →', url);
    console.log('🔍 Payload:', formData);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('🔍 Status:', res.status, '| OK:', res.ok);

      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        const text = await res.text();
        console.error('❌ Non-JSON response:', text.slice(0, 300));
        throw new Error(
          `Server returned ${res.status}. Endpoint may not exist: ${url}`
        );
      }

      const data = await res.json();
      console.log('🔍 Response:', data);

      if (res.ok && (data.success === true || data.success === undefined)) {
        setSubmitStatus('success');
        setSubmitted(true);
        setFormData({
          name: '',
          businessName: '',
          phone: '',
          email: '',
          businessType: '',
          lookingFor: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMsg(
          data.message || data.error || 'Something went wrong. Please try again.'
        );
      }
    } catch (err) {
      console.error('❌ Consultation submit error:', err);
      setSubmitStatus('error');
      setErrorMsg(
        err.message ||
          'Network error. Please check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-3.5 py-3 rounded-xl border border-gray-200 bg-slate-50/50 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition';

  const labelClass =
    'block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5';

  return (
    <section id="contact" className="relative py-12 bg-slate-50/60 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

          {/* ── Left Column ── */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-secondary font-bold text-sm tracking-wider">— 10</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">CONTACT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Let's Talk About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Your Growth
              </span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Tell us about your healthcare business and what you're looking to achieve.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Call Us</span>
                  <a href="tel:+919010481048" className="text-base font-bold text-gray-900 hover:text-primary transition-colors">
                    +91 9010481048
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Speak directly with our team</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email Us</span>
                  <a href="mailto:hello@timelyhealth.in" className="text-base font-bold text-gray-900 hover:text-primary transition-colors">
                    hello@timelyhealth.in
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">We respond within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-secondary flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                  <p className="text-sm font-bold text-gray-900">Hyderabad, India</p>
                  <p className="text-xs text-gray-500">Serving healthcare businesses worldwide</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">Our Commitment</span>
              </div>
              <ul className="space-y-1.5 text-xs text-emerald-800">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                  <span>HIPAA &amp; medical ethics compliant</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                  <span>No obligation, no spam, no pressure</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                  <span>Your information is completely secure</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ── Right Column ── */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl relative">

              {submitted && submitStatus === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-secondary flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                    We've received your enquiry. Our team will get back to you within 24 business hours.
                    Check your inbox for a confirmation email.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setSubmitStatus(null);
                      setFormData({
                        name: '', businessName: '', phone: '', email: '',
                        businessType: '', lookingFor: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 bg-primary text-white text-xs font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Get My Free Consultation</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Fill in the details below and we'll be in touch shortly.
                    </p>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
                      <span className="text-red-500 text-xl">❌</span>
                      <div>
                        <p className="font-semibold text-red-800 text-sm">Submission failed</p>
                        <p className="text-red-700 text-xs mt-0.5">{errorMsg}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <UserIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="text" id="name" name="name"
                          value={formData.name} onChange={handleChange}
                          placeholder="Your full name" required
                          className={`${inputClass} pl-9`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="businessName" className={labelClass}>Business Name *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <BuildingOffice2Icon className="w-4 h-4" />
                        </div>
                        <input
                          type="text" id="businessName" name="businessName"
                          value={formData.businessName} onChange={handleChange}
                          placeholder="Your clinic or business name" required
                          className={`${inputClass} pl-9`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <PhoneIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="tel" id="phone" name="phone"
                          value={formData.phone} onChange={handleChange}
                          placeholder="+91 9000000000" required
                          className={`${inputClass} pl-9`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <EnvelopeIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="email" id="email" name="email"
                          value={formData.email} onChange={handleChange}
                          placeholder="you@yourbusiness.com" required
                          className={`${inputClass} pl-9`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="businessType" className={labelClass}>Business Type *</label>
                      <select
                        id="businessType" name="businessType"
                        value={formData.businessType} onChange={handleChange}
                        required className={inputClass}
                      >
                        <option value="" disabled>Select business type</option>
                        <option value="Hospital">Hospital</option>
                        <option value="Clinic">Clinic</option>
                        <option value="Diagnostic Lab">Diagnostic Lab</option>
                        <option value="Doctor / Specialist">Doctor / Specialist</option>
                        <option value="Home Healthcare">Home Healthcare</option>
                        <option value="Healthcare Startup">Healthcare Startup</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="lookingFor" className={labelClass}>What Are You Looking For? *</label>
                      <select
                        id="lookingFor" name="lookingFor"
                        value={formData.lookingFor} onChange={handleChange}
                        required className={inputClass}
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="SEO">SEO</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Meta Ads">Meta Ads</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Content Marketing">Content Marketing</option>
                        <option value="Full Digital Marketing">Full Digital Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit" disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-secondary hover:bg-secondary/90 text-white font-semibold text-base py-4 rounded-xl shadow-lg hover:shadow-green-600/25 transition-all duration-200 cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get My Free Consultation</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-gray-400 mt-2.5">
                      🔒 Your information is secure and will never be shared.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}